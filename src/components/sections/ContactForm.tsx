"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, CircleCheck, LoaderCircle } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

const inputClass =
  "block w-full rounded-xl border border-white/10 bg-ink-950/70 px-4 py-3 text-base text-soft placeholder:text-dim/70 transition duration-200 focus:border-accent-500/70 focus:outline-none focus:ring-4 focus:ring-accent-500/15";

function Field({
  id,
  label,
  optional,
  className,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between gap-3 text-sm font-medium text-soft">
        {label}
        {optional && <span className="text-xs font-normal text-dim">Optional</span>}
      </label>
      {children}
    </div>
  );
}

function buildEmailBody(data: FormData) {
  const value = (key: string) => String(data.get(key) ?? "").trim();
  return [
    `Name: ${value("name")}`,
    `Business: ${value("business")}`,
    `Email: ${value("email")}`,
    `Phone: ${value("phone") || "Not provided"}`,
    "",
    "What happens when a new lead contacts your business?",
    value("leadProcess"),
    "",
    "What part of the process is frustrating?",
    value("frustration"),
  ].join("\n");
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: real visitors never see or fill this field.
    if (data.get("_gotcha")) return;

    if (site.formEndpoint) {
      setStatus("sending");
      try {
        const response = await fetch(site.formEndpoint, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });
        if (!response.ok) throw new Error(`Form endpoint responded with ${response.status}`);
        form.reset();
        setStatus("sent");
      } catch {
        setStatus("error");
      }
      return;
    }

    // No form service configured yet: hand the message to the visitor's email app.
    const subject = `Workflow question from ${String(data.get("business") || data.get("name"))}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildEmailBody(data))}`;
    setStatus("mailto");
  }

  return (
    <form onSubmit={handleSubmit} className="surface rounded-3xl p-6 sm:p-8" aria-describedby="form-privacy">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name">
          <input id="name" name="name" type="text" autoComplete="name" required className={inputClass} />
        </Field>
        <Field id="business" label="Business">
          <input
            id="business"
            name="business"
            type="text"
            autoComplete="organization"
            required
            className={inputClass}
          />
        </Field>
        <Field id="email" label="Email">
          <input id="email" name="email" type="email" autoComplete="email" required className={inputClass} />
        </Field>
        <Field id="phone" label="Phone" optional>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </Field>
        <Field id="leadProcess" label="What happens when a new lead contacts your business?" className="sm:col-span-2">
          <textarea
            id="leadProcess"
            name="leadProcess"
            rows={4}
            required
            placeholder="e.g. Quote requests come through our website form and I reply from my phone when I get a chance."
            className={cn(inputClass, "resize-y")}
          />
        </Field>
        <Field id="frustration" label="What part of the process is frustrating?" className="sm:col-span-2">
          <textarea
            id="frustration"
            name="frustration"
            rows={4}
            required
            placeholder="e.g. Some requests sit for days, and I lose track of who I’ve already followed up with."
            className={cn(inputClass, "resize-y")}
          />
        </Field>
      </div>

      <div aria-hidden="true" className="hidden">
        <label htmlFor="_gotcha">Leave this field empty</label>
        <input id="_gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p id="form-privacy" className="text-xs leading-relaxed text-dim sm:max-w-xs">
          Your information is only used to reply to your message. It’s never sold or shared.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-accent-600 px-7 text-[15px] font-medium text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.18),0_10px_30px_-12px_rgb(63_108_224/0.8)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.22),0_16px_40px_-12px_rgb(95_137_242/0.9)] disabled:translate-y-0 disabled:opacity-70 sm:w-auto"
        >
          {status === "sending" ? (
            <>
              <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send Message
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </>
          )}
        </button>
      </div>

      <div aria-live="polite" className="empty:hidden">
        {status === "sent" && (
          <p className="mt-6 flex gap-3 rounded-xl border border-trust-400/25 bg-trust-500/[0.08] p-4 text-sm text-trust-300">
            <CircleCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
            Thanks — your message was sent. I’ll reply by email soon.
          </p>
        )}
        {status === "mailto" && (
          <p className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-muted">
            Your email app should open with your message ready to send. If it didn’t, you can email me directly at{" "}
            <a href={`mailto:${site.email}`} className="text-soft underline underline-offset-4">
              {site.email}
            </a>
            .
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="mt-6 rounded-xl border border-red-400/25 bg-red-500/[0.08] p-4 text-sm text-red-200">
            Something went wrong sending your message. Please try again, or email me directly at{" "}
            <a href={`mailto:${site.email}`} className="underline underline-offset-4">
              {site.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
