"use client";

import { useState } from "react";
import { ArrowUpRight } from "./icons";
import { btnPrimary } from "./ui";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "mt-2 w-full rounded-none border-0 border-b border-line bg-transparent px-0 py-3 font-sans text-base normal-case tracking-normal text-fg placeholder:text-dim transition focus:border-pink focus:outline-none focus:ring-0";
const label = "block font-mono text-[11px] uppercase tracking-[0.16em] text-dim";

export function ContactForm({ action }: { action: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form action={action} method="POST" onSubmit={onSubmit} className="space-y-8">
      <input type="hidden" name="_subject" value="New message from your portfolio" />
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="grid gap-8 sm:grid-cols-2">
        <label className={label}>
          Name
          <input name="name" required autoComplete="name" placeholder="Your name" className={field} />
        </label>
        <label className={label}>
          Email
          <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={field} />
        </label>
      </div>
      <label className={label}>
        Message
        <textarea name="message" required rows={4} placeholder="What are you working on?" className={`${field} resize-y`} />
      </label>

      <div className="flex flex-wrap items-center gap-5">
        <button type="submit" disabled={status === "sending"} className={`${btnPrimary} disabled:opacity-60`}>
          {status === "sending" ? "Sending…" : "Send message"} <ArrowUpRight />
        </button>
        <p role="status" aria-live="polite" className="text-sm">
          {status === "sent" && <span className="text-fg">Thanks — I&rsquo;ll get back to you soon.</span>}
          {status === "error" && <span className="text-pink">That didn&rsquo;t go through. Please email me directly.</span>}
        </p>
      </div>
    </form>
  );
}
