import { createHash, randomUUID } from "node:crypto";

/**
 * Meta Conversions API (CAPI) for americurial.com. Server-side conversion
 * events that survive AdBlockers and let us hash PII before it leaves
 * our stack.
 *
 * Mirrors the dashboard's `dashboard/src/lib/meta-capi.ts` so the same
 * shape works on both sites. We deliberately duplicate rather than share
 * via a workspace package — americurial has its own Vercel project and
 * Next.js version, so independent files keep the deploy footprint small.
 *
 * Env:
 *   NEXT_PUBLIC_META_PIXEL_ID  — Americurial pixel: 973809792061593
 *   META_CAPI_TOKEN            — System User token, business-wide
 *   META_TEST_EVENT_CODE       — optional, for Events Manager Test tab
 */

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const TOKEN = process.env.META_CAPI_TOKEN;
const TEST_EVENT_CODE = process.env.META_TEST_EVENT_CODE;
const API_VERSION = "v22.0";

export type CAPIEventName =
    | "Lead"
    | "CompleteRegistration"
    | "Purchase"
    | "Search"
    | "Schedule"
    | "Contact"
    | "SubmitApplication";

export interface CAPIUserData {
    email?: string | null;
    phone?: string | null;
    externalId?: string | null;
    clientIpAddress?: string | null;
    clientUserAgent?: string | null;
    fbp?: string | null;
    fbc?: string | null;
}

export interface SendCAPIArgs {
    eventName: CAPIEventName;
    eventId: string;
    eventTime?: number;
    eventSourceUrl?: string;
    userData?: CAPIUserData;
    customData?: Record<string, unknown>;
}

function hash(v: string | null | undefined): string | undefined {
    if (!v) return undefined;
    const cleaned = v.toString().trim().toLowerCase();
    if (!cleaned) return undefined;
    return createHash("sha256").update(cleaned).digest("hex");
}

function hashPhone(v: string | null | undefined): string | undefined {
    if (!v) return undefined;
    const digits = v.toString().replace(/\D/g, "");
    if (!digits) return undefined;
    return createHash("sha256").update(digits).digest("hex");
}

export function newEventId(): string {
    return randomUUID();
}

export async function sendCAPIEvent(args: SendCAPIArgs): Promise<{
    success: boolean;
    events_received?: number;
    fbtrace_id?: string;
    error?: string;
}> {
    if (!PIXEL_ID || !TOKEN) {
        return { success: false, error: "META_CAPI_TOKEN or NEXT_PUBLIC_META_PIXEL_ID not set" };
    }
    const ud = args.userData || {};
    const userData: Record<string, string | string[]> = {};
    const em = hash(ud.email);          if (em) userData.em = em;
    const ph = hashPhone(ud.phone);     if (ph) userData.ph = ph;
    const xid = hash(ud.externalId);    if (xid) userData.external_id = xid;
    if (ud.clientIpAddress) userData.client_ip_address = ud.clientIpAddress;
    if (ud.clientUserAgent) userData.client_user_agent = ud.clientUserAgent;
    if (ud.fbp) userData.fbp = ud.fbp;
    if (ud.fbc) userData.fbc = ud.fbc;

    const payload = {
        data: [{
            event_name: args.eventName,
            event_time: args.eventTime ?? Math.floor(Date.now() / 1000),
            event_id: args.eventId,
            action_source: "website",
            event_source_url: args.eventSourceUrl,
            user_data: userData,
            custom_data: args.customData || {},
        }],
        ...(TEST_EVENT_CODE ? { test_event_code: TEST_EVENT_CODE } : {}),
    };
    const url = `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${TOKEN}`;
    try {
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
            signal: AbortSignal.timeout(5_000),
        });
        const body = await res.json().catch(() => ({}));
        if (!res.ok) {
            return {
                success: false,
                error: body?.error?.message || `HTTP ${res.status}`,
                fbtrace_id: body?.error?.fbtrace_id,
            };
        }
        return {
            success: true,
            events_received: body.events_received,
            fbtrace_id: body.fbtrace_id,
        };
    } catch (e) {
        return { success: false, error: (e as Error).message };
    }
}

export function userDataFromRequest(req: Request, opts?: { email?: string | null; phone?: string | null; externalId?: string | null }): CAPIUserData {
    const headers = req.headers;
    const cookieHeader = headers.get("cookie") || "";
    const cookies = Object.fromEntries(
        cookieHeader.split(";").map(c => {
            const i = c.indexOf("=");
            return [c.slice(0, i).trim(), decodeURIComponent(c.slice(i + 1).trim())];
        }).filter(([k]) => k),
    );
    return {
        email: opts?.email ?? null,
        phone: opts?.phone ?? null,
        externalId: opts?.externalId ?? null,
        clientIpAddress: (headers.get("x-forwarded-for") || "").split(",")[0]?.trim() || null,
        clientUserAgent: headers.get("user-agent") || null,
        fbp: cookies._fbp || null,
        fbc: cookies._fbc || null,
    };
}
