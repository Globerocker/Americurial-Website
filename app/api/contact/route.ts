import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/contact
 * Handles contact form submissions from americurial.com
 *
 * - Sends to Resend (existing behavior)
 * - Syncs contact + deal to HubSpot Agency Pipeline
 */

const HUBSPOT_TOKEN =
  process.env.HUBSPOT_ACCESS_TOKEN ||
  process.env.HUBSPOT_PRIVATE_APP_TOKEN ||
  '';

const HUBSPOT_AGENCY_PIPELINE_ID = process.env.HUBSPOT_AGENCY_PIPELINE_ID || '';
const HUBSPOT_AGENCY_STAGE_INQUIRY = process.env.HUBSPOT_AGENCY_STAGE_INQUIRY || '';

async function hubspotUpsertContact(params: {
  email: string;
  firstname: string;
  lastname: string;
  company?: string;
}) {
  if (!HUBSPOT_TOKEN) return null;

  // Create or update contact
  try {
    const res = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${HUBSPOT_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        properties: {
          email: params.email,
          firstname: params.firstname,
          lastname: params.lastname,
          company: params.company || '',
          lead_source_cp: 'americurial_form',
        },
      }),
    });

    if (res.status === 409) {
      // Contact exists — PATCH by email
      const patchRes = await fetch(
        `https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(params.email)}?idProperty=email`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${HUBSPOT_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            properties: {
              firstname: params.firstname,
              lastname: params.lastname,
              company: params.company || '',
              lead_source_cp: 'americurial_form',
            },
          }),
        }
      );
      const data = await patchRes.json();
      return data.id || null;
    }

    const data = await res.json();
    return data.id || null;
  } catch (err) {
    console.error('[HubSpot] Contact upsert failed:', err);
    return null;
  }
}

async function hubspotCreateDeal(contactId: string, dealName: string) {
  if (!HUBSPOT_TOKEN || !HUBSPOT_AGENCY_PIPELINE_ID || !HUBSPOT_AGENCY_STAGE_INQUIRY) return;

  try {
    // Create deal
    const res = await fetch('https://api.hubapi.com/crm/v3/objects/deals', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${HUBSPOT_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        properties: {
          dealname: dealName,
          pipeline: HUBSPOT_AGENCY_PIPELINE_ID,
          dealstage: HUBSPOT_AGENCY_STAGE_INQUIRY,
        },
      }),
    });
    const deal = await res.json();
    if (!deal.id) return;

    // Associate with contact
    await fetch(
      `https://api.hubapi.com/crm/v3/objects/deals/${deal.id}/associations/contacts/${contactId}/deal_to_contact`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${HUBSPOT_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      }
    );
  } catch (err) {
    console.error('[HubSpot] Deal creation failed:', err);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, message, phone } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const nameParts = name.trim().split(' ');
    const firstname = nameParts[0];
    const lastname = nameParts.slice(1).join(' ') || '';

    // 1. Sync to HubSpot (fire-and-forget style — don't block the user response)
    const hubspotSync = (async () => {
      const contactId = await hubspotUpsertContact({ email, firstname, lastname, company });
      if (contactId) {
        await hubspotCreateDeal(
          contactId,
          `${company || name} — Agency Inquiry`,
        );
      }
    })();

    // 2. Send notification email via Resend (if configured)
    const resendSync = (async () => {
      const RESEND_API_KEY = process.env.RESEND_API_KEY;
      if (!RESEND_API_KEY) return;

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Americurial Contact Form <noreply@americurial.com>',
          to: ['andre@americurial.com'],
          subject: `New Contact Form: ${company || name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${message ? `<p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>` : ''}
          `,
        }),
      });
    })();

    // Wait for both (parallel)
    await Promise.allSettled([hubspotSync, resendSync]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Contact API] Error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
