"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  CircleCheck,
  Download,
  FlaskConical,
  Layers,
  LoaderCircle,
  PenLine,
  Play,
  RotateCcw,
  Send,
  UserCheck,
  X,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type Scenario = {
  id: string;
  label: string;
  business: string;
  channel: string;
  from: string;
  message: string;
  record: { label: string; value: string }[];
  urgency: { value: string; high?: boolean };
  draft: string;
};

/** Fictional examples. No real customers, no real businesses, no messages sent anywhere. */
const scenarios: Scenario[] = [
  {
    id: "landscaping",
    label: "Landscaping",
    business: "Quote request",
    channel: "website form",
    from: "Dana W.",
    message:
      "Hi — we just moved into a house and the yard is out of control. Looking for regular lawn maintenance and someone to trim the hedges along the driveway. The lot is about a quarter acre. Hoping to get started in the next couple of weeks. Email is easiest for me.",
    record: [
      { label: "Service requested", value: "Lawn maintenance + hedge trimming" },
      { label: "Property", value: "Residential, about ¼ acre" },
      { label: "Timing", value: "Wants to start within 2 weeks" },
      { label: "Prefers", value: "Email" },
    ],
    urgency: { value: "Normal" },
    draft:
      "Hi Dana,\n\nThanks for reaching out about the yard. Regular lawn maintenance plus hedge trimming along the driveway is work we do often, and a quarter-acre lot fits our standard visit well.\n\nI can send pricing for both weekly and every-other-week service so you can compare, and we do have openings to start in the next two weeks. If it would help, I can stop by first to look at the hedges before quoting them.\n\nI'll follow up by email as you asked.",
  },
  {
    id: "hvac",
    label: "HVAC (urgent)",
    business: "Service call",
    channel: "text message",
    from: "Marcus B.",
    message:
      "AC stopped blowing cold sometime last night and it's 88 degrees in the house. Two kids at home. Can someone come out today? Please call me, don't text.",
    record: [
      { label: "Service requested", value: "AC not cooling — diagnostic visit" },
      { label: "Conditions", value: "88°F indoors, children at home" },
      { label: "Timing", value: "Same-day visit requested" },
      { label: "Prefers", value: "Phone call" },
    ],
    urgency: { value: "High — flagged for you first", high: true },
    draft:
      "Hi Marcus,\n\nI got your message about the AC not cooling. With 88 degrees inside and kids at home, I've moved this to the top of today's list.\n\nI have a technician who can get out to you today — I'm calling now to confirm a time window. If you miss me, call this number back and we'll lock it in.\n\nUntil we're there, keeping blinds closed and fans running will help a little.",
  },
  {
    id: "cleaning",
    label: "Office cleaning",
    business: "New inquiry",
    channel: "Instagram message",
    from: "Priya R.",
    message:
      "Hey! Do you do recurring cleanings for small offices? We have an 1,800 sq ft space downtown, 6 people, and we'd want every other week, probably in the evenings. Also — are you insured?",
    record: [
      { label: "Service requested", value: "Recurring office cleaning" },
      { label: "Space", value: "1,800 sq ft office, 6 staff" },
      { label: "Timing", value: "Every other week, evenings" },
      { label: "Question to answer", value: "Proof of insurance" },
    ],
    urgency: { value: "Normal" },
    draft:
      "Hi Priya,\n\nYes — recurring office cleaning is most of what we do, and an 1,800 square foot space with six people is a good fit for an every-other-week evening visit.\n\nWe are fully insured, and I'm happy to send our certificate of insurance along with the quote so you have both on file.\n\nWould a short walkthrough this week work? Evenings are usually easiest for offices, so we can look at the space once your team heads out.",
  },
];

const steps: { title: string; icon: LucideIcon; human?: boolean }[] = [
  { title: "Captured", icon: Download },
  { title: "Organized", icon: Layers },
  { title: "Drafted", icon: PenLine },
  { title: "Your approval", icon: UserCheck, human: true },
];

const statusOptions = ["New", "Replied", "Follow-up scheduled", "Booked", "Not a fit"];

type Phase = "idle" | "running" | "review" | "approved" | "declined";
type LogEntry = { id: number; time: string; text: string; byOwner?: boolean };

const inputClass =
  "block w-full rounded-xl border border-white/10 bg-ink-950/70 px-4 py-3 text-sm leading-relaxed text-soft transition duration-200 focus:border-accent-500/70 focus:outline-none focus:ring-4 focus:ring-accent-500/15";

export function LiveDemo() {
  const [scenario, setScenario] = useState(scenarios[0]);
  const [phase, setPhase] = useState<Phase>("idle");
  const [done, setDone] = useState(0);
  const [draft, setDraft] = useState(scenarios[0].draft);
  const [status, setStatus] = useState(statusOptions[0]);
  const [log, setLog] = useState<LogEntry[]>([]);

  const timers = useRef<number[]>([]);
  const logId = useRef(0);

  const clearTimers = useCallback(() => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  }, []);

  useEffect(() => clearTimers, [clearTimers]);

  const entry = useCallback((text: string, byOwner = false): LogEntry => {
    logId.current += 1;
    return {
      id: logId.current,
      time: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
      text,
      byOwner,
    };
  }, []);

  const reset = useCallback(
    (next: Scenario) => {
      clearTimers();
      setScenario(next);
      setPhase("idle");
      setDone(0);
      setDraft(next.draft);
      setStatus(statusOptions[0]);
      setLog([]);
    },
    [clearTimers],
  );

  function run() {
    clearTimers();
    setPhase("running");
    setDone(0);
    setDraft(scenario.draft);
    setStatus(statusOptions[0]);
    setLog([entry(`Message received from ${scenario.from} via ${scenario.channel}.`)]);

    const notes = [
      "Lead captured and saved to the tracker.",
      "Details organized: service, timing, and contact preference.",
      "Reply drafted, matched to what they actually asked about.",
      "Waiting on you. Nothing has been sent to the customer.",
    ];

    notes.forEach((text, index) => {
      const id = window.setTimeout(() => {
        setDone(index + 1);
        setLog((entries) => [...entries, entry(text)]);
        if (index === notes.length - 1) setPhase("review");
      }, 800 * (index + 1));
      timers.current.push(id);
    });
  }

  function approve() {
    setPhase("approved");
    setStatus("Follow-up scheduled");
    setLog((entries) => [
      ...entries,
      entry("Draft approved by the owner and sent to the customer.", true),
      entry("Follow-up reminder set for 3 days from now."),
    ]);
  }

  function decline() {
    setPhase("declined");
    setStatus("Not a fit");
    setLog((entries) => [
      ...entries,
      entry("Owner declined the draft. Nothing was sent.", true),
      entry("Lead closed out as not a fit."),
    ]);
  }

  function changeStatus(value: string) {
    setStatus(value);
    setLog((entries) => [...entries, entry(`Status changed to “${value}”.`, true)]);
  }

  const started = phase !== "idle";
  const settled = phase === "approved" || phase === "declined";

  return (
    <section id="demo" aria-labelledby="demo-title" className="py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-accent-300">
            <FlaskConical aria-hidden="true" className="size-3.5" strokeWidth={2} />
            Interactive demo
          </p>
          <h2
            id="demo-title"
            className="mt-5 text-balance text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
          >
            Watch a message become a lead you can act on.
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted sm:text-lg">
            Pick a situation, run it, and see what the system does with it. Everything here is fictional and
            runs in your browser — no messages are sent, and no data leaves this page.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6">
          {/* ---- Incoming message ---- */}
          <Reveal className="flex flex-col gap-4 lg:sticky lg:top-24 lg:self-start">
            <div className="surface rounded-3xl p-6 sm:p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">Pick a situation</p>
              <div role="group" aria-label="Choose an example" className="mt-4 flex flex-wrap gap-2">
                {scenarios.map((option) => {
                  const active = option.id === scenario.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => reset(option)}
                      className={cn(
                        "rounded-full border px-3.5 py-1.5 text-sm transition duration-200",
                        active
                          ? "border-accent-500/50 bg-accent-500/15 text-accent-300"
                          : "border-white/[0.08] bg-white/[0.02] text-muted hover:border-white/20 hover:text-soft",
                      )}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="surface rounded-3xl p-6 sm:p-7">
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
                  {scenario.business}
                </p>
                <p className="text-xs text-dim">via {scenario.channel}</p>
              </div>

              <div className="mt-5 rounded-2xl border border-white/[0.07] bg-ink-950/60 p-5">
                <p className="text-sm font-medium text-soft">{scenario.from}</p>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">{scenario.message}</p>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={run}
                  disabled={phase === "running"}
                  className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-accent-600 px-5 text-sm font-medium text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.18),0_10px_30px_-14px_rgb(63_108_224/0.8)] transition duration-300 hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-60"
                >
                  {phase === "running" ? (
                    <>
                      <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />
                      Running…
                    </>
                  ) : (
                    <>
                      <Play aria-hidden="true" className="size-4" strokeWidth={2} />
                      {started ? "Run it again" : "Run the system"}
                    </>
                  )}
                </button>
                {started && (
                  <button
                    type="button"
                    onClick={() => reset(scenario)}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 text-sm font-medium text-soft transition duration-300 hover:border-white/25"
                  >
                    <RotateCcw aria-hidden="true" className="size-4" strokeWidth={1.75} />
                    Reset
                  </button>
                )}
              </div>
            </div>
          </Reveal>

          {/* ---- The system ---- */}
          <Reveal delay={120} className="flex flex-col gap-4">
            <div className="surface rounded-3xl p-6 sm:p-7">
              <ol className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isDone = done > index;
                  const isActive = phase === "running" && done === index;
                  return (
                    <li key={step.title} className="flex items-center gap-3 sm:flex-col sm:text-center">
                      <span
                        className={cn(
                          "grid size-9 shrink-0 place-items-center rounded-xl border transition duration-500",
                          isDone && step.human && "border-trust-400/45 bg-trust-500/[0.12] text-trust-300",
                          isDone && !step.human && "border-accent-500/45 bg-accent-500/[0.12] text-accent-300",
                          !isDone && isActive && "border-accent-500/30 bg-ink-900 text-accent-400",
                          !isDone && !isActive && "border-white/[0.07] bg-ink-900 text-dim",
                        )}
                      >
                        {isActive ? (
                          <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />
                        ) : (
                          <Icon aria-hidden="true" className="size-4" strokeWidth={1.75} />
                        )}
                      </span>
                      <span
                        className={cn(
                          "text-xs transition-colors duration-500 sm:mt-1",
                          isDone ? (step.human ? "text-trust-300" : "text-soft") : "text-dim",
                        )}
                      >
                        {step.title}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>

            {/* Lead record */}
            <div className="surface rounded-3xl p-6 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">Lead record</p>
                <div className="flex items-center gap-2">
                  <label htmlFor="demo-status" className="text-xs text-dim">
                    Status
                  </label>
                  <span className="relative">
                    <select
                      id="demo-status"
                      value={status}
                      disabled={!started}
                      onChange={(event) => changeStatus(event.target.value)}
                      className="appearance-none rounded-full border border-white/10 bg-ink-950/70 py-1.5 pl-3 pr-8 text-xs text-soft transition focus:border-accent-500/70 focus:outline-none focus:ring-4 focus:ring-accent-500/15 disabled:opacity-50"
                    >
                      {statusOptions.map((option) => (
                        <option key={option} value={option} className="bg-ink-900 text-soft">
                          {option}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      aria-hidden="true"
                      className="pointer-events-none absolute right-2.5 top-1/2 size-3.5 -translate-y-1/2 text-dim"
                      strokeWidth={2}
                    />
                  </span>
                </div>
              </div>

              <dl className="mt-5 text-sm">
                {scenario.record.map((field) => (
                  <div
                    key={field.label}
                    className="flex flex-col gap-1 border-b border-white/[0.06] py-3 first:pt-0 last:border-b-0 last:pb-0 sm:flex-row sm:justify-between sm:gap-6"
                  >
                    <dt className="text-dim">{field.label}</dt>
                    <dd className={cn("sm:text-right", done >= 2 ? "text-soft" : "text-dim/50")}>
                      {done >= 2 ? field.value : "—"}
                    </dd>
                  </div>
                ))}
                <div className="flex items-center justify-between gap-6 pt-4">
                  <dt className="text-dim">Urgency</dt>
                  <dd>
                    {done >= 2 ? (
                      <span
                        className={cn(
                          "rounded-full border px-2.5 py-1 text-xs",
                          scenario.urgency.high
                            ? "border-amber-400/35 bg-amber-400/10 text-amber-200"
                            : "border-white/[0.08] bg-white/[0.02] text-muted",
                        )}
                      >
                        {scenario.urgency.value}
                      </span>
                    ) : (
                      <span className="text-dim/50">—</span>
                    )}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Draft + approval */}
            <div className="surface rounded-3xl p-6 sm:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <label htmlFor="demo-draft" className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
                  Drafted reply
                </label>
                <p className="text-xs text-dim">
                  {done >= 3 ? "Edit it however you like" : "Appears once the draft is written"}
                </p>
              </div>

              {done >= 3 ? (
                <textarea
                  id="demo-draft"
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  rows={12}
                  className={cn(inputClass, "mt-4 resize-y")}
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="mt-4 space-y-3 rounded-xl border border-dashed border-white/[0.08] p-5"
                >
                  {[5, 6, 4].map((width, index) => (
                    <div key={index} className="space-y-2">
                      <div className="h-2 rounded-full bg-white/[0.05]" style={{ width: `${width * 14}%` }} />
                      <div className="h-2 w-[80%] rounded-full bg-white/[0.04]" />
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6">
                {phase === "review" && (
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={approve}
                      className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-trust-500 px-5 text-sm font-medium text-ink-950 shadow-[inset_0_1px_0_rgb(255_255_255/0.25),0_10px_30px_-14px_rgb(47_168_120/0.9)] transition duration-300 hover:-translate-y-0.5"
                    >
                      <Send aria-hidden="true" className="size-4" strokeWidth={2} />
                      Approve &amp; send
                    </button>
                    <button
                      type="button"
                      onClick={decline}
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 text-sm font-medium text-muted transition duration-300 hover:border-white/25 hover:text-soft"
                    >
                      <X aria-hidden="true" className="size-4" strokeWidth={2} />
                      Decline
                    </button>
                  </div>
                )}

                {phase === "approved" && (
                  <p className="flex gap-3 rounded-xl border border-trust-400/25 bg-trust-500/[0.08] p-4 text-sm leading-relaxed text-trust-300">
                    <CircleCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                    Approved and sent. In a real build, the follow-up reminder would sit on your calendar until
                    this lead is booked or closed.
                  </p>
                )}

                {phase === "declined" && (
                  <p className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-relaxed text-muted">
                    <X aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-dim" />
                    Declined, and nothing was sent. The system drafts and waits — it never decides on its own
                    that a message should go out.
                  </p>
                )}

                {!started && (
                  <p className="text-sm leading-relaxed text-dim">
                    Run the system on the left to see this fill in step by step.
                  </p>
                )}

                {phase === "running" && (
                  <p className="text-sm leading-relaxed text-dim">Working through the steps…</p>
                )}
              </div>
            </div>

            {/* Status log */}
            <div className="surface rounded-3xl p-6 sm:p-7">
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">Status log</p>
                {settled && <p className="text-xs text-dim">Change the status above to add to it</p>}
              </div>

              <ol aria-live="polite" className="mt-5 space-y-3">
                {log.length === 0 && (
                  <li className="text-sm text-dim">
                    Empty. Every lead ends up with a plain-language history like this one.
                  </li>
                )}
                {log.map((item) => (
                  <li key={item.id} className="flex gap-3 text-sm">
                    <span className="mt-1.5 shrink-0 whitespace-nowrap font-mono text-[11px] tabular-nums text-dim">
                      {item.time}
                    </span>
                    <span className="flex gap-2">
                      <span
                        aria-hidden="true"
                        className={cn(
                          "mt-[0.4rem] size-1.5 shrink-0 rounded-full",
                          item.byOwner ? "bg-trust-400" : "bg-accent-500",
                        )}
                      />
                      <span className={cn("leading-relaxed", item.byOwner ? "text-trust-300" : "text-muted")}>
                        {item.text}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>

              {log.length > 0 && (
                <p className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/[0.06] pt-4 text-xs text-dim">
                  <span className="flex items-center gap-2">
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-accent-500" />
                    Done by the system
                  </span>
                  <span className="flex items-center gap-2">
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-trust-400" />
                    Done by you
                  </span>
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
