"use client";

import { useRef } from "react";
import { enquiryTypes } from "@/lib/content";
import { site } from "@/lib/site";

// Builds a ready-to-send WhatsApp message from the form; nothing is stored on a server.
export function TradeForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const v = (key: string) => String(data.get(key) ?? "").trim();

    if (!v("name")) return nameRef.current?.focus();
    if (!v("phone")) return phoneRef.current?.focus();

    const message = [
      "New enquiry from the KPU FOOD website",
      "",
      `Name: ${v("name")}`,
      `Phone: ${v("phone")}`,
      `City/Area: ${v("city") || "-"}`,
      `Enquiry: ${v("type")}`,
      `Requirement: ${v("message") || "-"}`,
    ].join("\n");
    window.open(`https://wa.me/${site.whatsapp.enquiryNumber}?text=${encodeURIComponent(message)}`, "_blank");
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="row2">
        <div className="field">
          <label htmlFor="f-name">Name</label>
          <input ref={nameRef} id="f-name" name="name" required autoComplete="name" placeholder="Your name" />
        </div>
        <div className="field">
          <label htmlFor="f-phone">Phone</label>
          <input
            ref={phoneRef}
            id="f-phone"
            name="phone"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="10-digit mobile"
          />
        </div>
      </div>
      <div className="row2">
        <div className="field">
          <label htmlFor="f-city">City or area</label>
          <input id="f-city" name="city" placeholder="e.g. Palampur" />
        </div>
        <div className="field">
          <label htmlFor="f-type">Enquiry</label>
          <select id="f-type" name="type">
            {enquiryTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="f-msg">Requirement</label>
        <textarea id="f-msg" name="message" placeholder="Products, approximate monthly quantity, pack sizes…" />
      </div>
      <button className="btn btn--fill" type="submit" style={{ width: "100%", justifyContent: "center" }}>
        Send on WhatsApp
      </button>
    </form>
  );
}
