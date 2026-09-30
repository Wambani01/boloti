"use client";

import { useActionState, useState } from "react";
import { requestReservation, type ReservationState } from "@/app/contact/actions";
import { rooms } from "@/lib/content";

type Defaults = { checkin?: string; checkout?: string; guests?: string; stay?: string };

const initial: ReservationState = { status: "idle" };

function FieldError({ errors, name }: { errors: ReservationState["errors"] & object; name: string }) {
  return errors[name] ? <p id={`${name}-error`} className="mt-2 text-sm text-terracotta-600">{errors[name]}</p> : null;
}

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-terracotta-500">
      {children}
    </label>
  );
}

export function ReservationForm({ defaults }: { defaults: Defaults }) {
  const [state, action, pending] = useActionState(requestReservation, initial);
  const v = { ...defaults, ...state.values } as Record<string, string | undefined>;
  const [checkin, setCheckin] = useState(defaults.checkin ?? "");
  const today = new Date().toISOString().slice(0, 10);
  const err = state.errors ?? {};

  if (state.status === "ok") {
    return (
      <div role="status" className="border border-sand-200 bg-sand-100 p-10">
        <p className="eyebrow">Request received</p>
        <p className="mt-4 font-serif text-3xl leading-snug text-forest-900">{state.message}</p>
        {state.whatsapp && (
          <a href={state.whatsapp} className="btn-ghost mt-8 text-forest-900">Need a faster reply? WhatsApp us</a>
        )}
      </div>
    );
  }

  const field = (name: string) => ({
    name,
    id: name,
    "aria-invalid": err[name] ? true : undefined,
    "aria-describedby": err[name] ? `${name}-error` : undefined,
  });
  return (
    <form action={action} noValidate className="grid gap-8 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <Label htmlFor="stay">Your sanctuary</Label>
        <select {...field("stay")} defaultValue={v.stay || "any"} className="field">
          <option value="any">Any available stay</option>
          {rooms.map((r) => <option key={r.slug} value={r.slug}>{r.name}</option>)}
        </select>
        <FieldError errors={err} name="stay" />
      </div>
      <div>
        <Label htmlFor="checkin">Arrive</Label>
        <input type="date" {...field("checkin")} min={today} value={checkin} onChange={(e) => setCheckin(e.target.value)} required className="field" />
        <FieldError errors={err} name="checkin" />
      </div>
      <div>
        <Label htmlFor="checkout">Depart</Label>
        <input type="date" {...field("checkout")} min={checkin || today} defaultValue={v.checkout} required className="field" />
        <FieldError errors={err} name="checkout" />
      </div>
      <div>
        <Label htmlFor="guests">Guests</Label>
        <select {...field("guests")} defaultValue={v.guests || "2"} className="field">
          {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n}</option>)}
        </select>
        <FieldError errors={err} name="guests" />
      </div>
      <div>
        <Label htmlFor="name">Full name</Label>
        <input type="text" {...field("name")} defaultValue={v.name} autoComplete="name" required className="field" />
        <FieldError errors={err} name="name" />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <input type="email" {...field("email")} defaultValue={v.email} autoComplete="email" required className="field" />
        <FieldError errors={err} name="email" />
      </div>
      <div>
        <Label htmlFor="phone">Phone / WhatsApp (optional)</Label>
        <input type="tel" {...field("phone")} defaultValue={v.phone} autoComplete="tel" className="field" />
      </div>
      <div className="sm:col-span-2">
        <Label htmlFor="message">Anything we should know?</Label>
        <textarea {...field("message")} defaultValue={v.message} rows={4} placeholder="Climbing Kilimanjaro, celebrating an anniversary, arriving on a late flight…" className="field resize-y" />
      </div>
      {/* Honeypot */}
      <div aria-hidden className="absolute -left-[9999px]">
        <label>Company <input type="text" name="company" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center">
        <button type="submit" disabled={pending} className="btn-primary disabled:opacity-60">
          {pending ? "Sending…" : "Request reservation"}
        </button>
        <p className="text-sm text-charcoal-500">No payment now. We confirm availability personally.</p>
      </div>

      {state.status === "error" && (
        <div role="alert" className="text-terracotta-600 sm:col-span-2">
          <p>{state.message}</p>
          {state.whatsapp && <a href={state.whatsapp} className="mt-2 inline-block underline">Message us on WhatsApp</a>}
        </div>
      )}
    </form>
  );
}
