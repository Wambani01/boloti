"use server";

import { rooms } from "@/lib/content";
import { whatsappLink } from "@/lib/site";

export type ReservationState = {
  status: "idle" | "ok" | "error";
  message?: string;
  errors?: Partial<Record<string, string>>;
  whatsapp?: string;
  /** Echoed back so fields keep their values after React resets the form. */
  values?: Record<string, string>;
};

const STAYS = new Set([...rooms.map((r) => r.slug), "any"]);
const echo = (d: Record<string, string | number>) =>
  Object.fromEntries(Object.entries(d).map(([k, v]) => [k, String(v)]));

const isDate = (s: string) => /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(Date.parse(s));

/**
 * Receives a direct reservation request. Set BOOKING_WEBHOOK_URL to forward it
 * as JSON to your CRM, inbox automation or booking engine.
 */
export async function requestReservation(_prev: ReservationState, formData: FormData): Promise<ReservationState> {
  const get = (k: string) => String(formData.get(k) ?? "").trim();

  // Honeypot: real guests never see this field.
  if (get("company")) return { status: "ok", message: "Thank you." };

  const data = {
    name: get("name").slice(0, 120),
    email: get("email").slice(0, 160),
    phone: get("phone").slice(0, 40),
    stay: get("stay") || "any",
    checkin: get("checkin"),
    checkout: get("checkout"),
    guests: Number(get("guests") || 2),
    message: get("message").slice(0, 2000),
  };

  const errors: ReservationState["errors"] = {};
  if (data.name.length < 2) errors.name = "Please tell us your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Please enter a valid email address.";
  if (!STAYS.has(data.stay)) errors.stay = "Please choose a stay.";
  if (!isDate(data.checkin)) errors.checkin = "Please choose an arrival date.";
  if (!isDate(data.checkout)) errors.checkout = "Please choose a departure date.";
  else if (isDate(data.checkin) && data.checkout <= data.checkin) errors.checkout = "Departure must be after arrival.";
  if (isDate(data.checkin) && data.checkin < new Date().toISOString().slice(0, 10)) errors.checkin = "Arrival can't be in the past.";
  if (!Number.isInteger(data.guests) || data.guests < 1 || data.guests > 12) errors.guests = "Please choose 1 to 12 guests.";

  if (Object.keys(errors).length) {
    return { status: "error", message: "A few details need your attention.", errors, values: echo(data) };
  }

  const stayName = rooms.find((r) => r.slug === data.stay)?.name ?? "any available stay";
  const whatsapp = whatsappLink(
    `Hello Boloti, I've just sent a reservation request: ${stayName}, ${data.checkin} to ${data.checkout}, ${data.guests} guest(s). Name: ${data.name}.`,
  );

  const webhook = process.env.BOOKING_WEBHOOK_URL;
  try {
    if (webhook) {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ type: "reservation_request", source: "website", receivedAt: new Date().toISOString(), ...data, stayName }),
        signal: AbortSignal.timeout(8000),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } else {
      console.info("[reservation] BOOKING_WEBHOOK_URL not set; request logged only:", { ...data, stayName });
    }
  } catch (err) {
    console.error("[reservation] delivery failed", err);
    return {
      status: "error",
      message: "We couldn't send your request just now. Please message us on WhatsApp and we'll reply personally.",
      whatsapp,
      values: echo(data),
    };
  }

  return {
    status: "ok",
    message: `Thank you, ${data.name.split(" ")[0]}. Your request for the ${stayName} is with our reservations team, and we'll confirm availability personally by email.`,
    whatsapp,
  };
}
