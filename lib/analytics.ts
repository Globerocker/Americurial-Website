/**
 * Client-side Meta Pixel helper for americurial.com.
 *
 * Mirrors dashboard's `src/lib/analytics.ts`. Returns the event_id so
 * callers can dual-fire matching server-side CAPI via `/api/meta/capi-track`
 * for client+server dedup.
 */

type FbqWindow = Window & {
    fbq?: (...args: unknown[]) => void;
};

export type ConversionEvent =
    | "lead"
    | "schedule"
    | "contact"
    | "complete_registration"
    | "submit_application";

const META_MAP: Record<ConversionEvent, string> = {
    lead: "Lead",
    schedule: "Schedule",
    contact: "Contact",
    complete_registration: "CompleteRegistration",
    submit_application: "SubmitApplication",
};

function newId(): string {
    if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
        return crypto.randomUUID();
    }
    return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

/**
 * Fire a Meta Pixel Standard Event. Returns the event_id so the same
 * id can be passed to a server-side CAPI fire for dedup.
 */
export function track(event: ConversionEvent, params: Record<string, unknown> = {}): string {
    const eventId = (params.eventId as string | undefined) || newId();
    if (typeof window === "undefined") return eventId;
    const w = window as FbqWindow;
    if (w.fbq) {
        const { eventId: _drop, ...rest } = { eventId, ...params };
        void _drop;
        w.fbq("track", META_MAP[event], rest, { eventID: eventId });
    }
    return eventId;
}
