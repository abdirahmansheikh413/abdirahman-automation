import { Fragment, type CSSProperties } from "react";
import {
  Download,
  Layers,
  MessageSquareText,
  PenLine,
  ShieldCheck,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

const industries = [
  "HVAC",
  "Landscaping",
  "Cleaning",
  "Home repair",
  "Contractors",
  "Painting",
  "Moving",
  "Auto detailing",
  "Salons & spas",
  "Tutoring",
];

const pipeline: { label: string; icon: LucideIcon; human?: boolean }[] = [
  { label: "Message", icon: MessageSquareText },
  { label: "Capture", icon: Download },
  { label: "Organize", icon: Layers },
  { label: "Draft", icon: PenLine },
  { label: "Approve", icon: UserCheck, human: true },
];

/** The whole offer in one line: a lead arrives, gets handled, and stops at the owner. */
function HeroPipeline() {
  return (
    <div className="hero-pipeline surface mx-auto mt-16 max-w-3xl animate-fade-up rounded-2xl px-5 py-6 [animation-delay:400ms] sm:mt-20 sm:px-8 sm:py-7">
      <div className="flex items-baseline justify-between gap-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">Every lead, the same path</p>
        <p className="hidden text-xs text-dim sm:block">You approve before anything is sent</p>
      </div>

      <ol className="mt-6 flex items-start justify-between">
        {pipeline.map((step, index) => {
          const Icon = step.icon;
          return (
            <Fragment key={step.label}>
              <li
                style={{ "--i": index } as CSSProperties}
                className="flex shrink-0 flex-col items-center gap-2.5 sm:w-20"
              >
                <span
                  data-human={step.human ? "true" : undefined}
                  className={cn(
                    "hero-node grid size-11 place-items-center rounded-xl border bg-ink-900",
                    step.human ? "border-trust-400/40 text-trust-300" : "border-white/10 text-accent-300",
                  )}
                >
                  <Icon aria-hidden="true" className="size-5" strokeWidth={1.6} />
                </span>
                <span
                  className={cn(
                    "hidden text-xs sm:block",
                    step.human ? "font-medium text-trust-300" : "text-muted",
                  )}
                >
                  {step.label}
                </span>
              </li>
              {index < pipeline.length - 1 && (
                <span
                  aria-hidden="true"
                  style={{ "--i": index } as CSSProperties}
                  className="hero-pipe mt-[1.375rem] h-px min-w-3 flex-1 bg-linear-to-r from-accent-500/45 to-accent-500/20"
                />
              )}
            </Fragment>
          );
        })}
      </ol>

      <p className="mt-5 text-center text-xs leading-relaxed text-dim sm:hidden">
        Message in, captured, organized, drafted — then it waits for you.
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_15%,transparent_75%)]" />
        <div className="absolute left-1/2 top-0 h-[36rem] w-[64rem] -translate-x-1/2 -translate-y-1/4 bg-[radial-gradient(closest-side,rgb(63_108_224/0.26),transparent)]" />
      </div>

      <Container className="pb-16 pt-32 text-center sm:pb-24 sm:pt-44">
        <p className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-muted">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-trust-400" />
          {site.audience}
        </p>

        <h1
          id="hero-title"
          className="mx-auto mt-7 max-w-4xl animate-fade-up text-balance text-[2.5rem] font-semibold leading-[1.06] tracking-[-0.04em] text-white [animation-delay:80ms] sm:text-6xl lg:text-[4.75rem] lg:leading-[1.04]"
        >
          Customers get lost between the first message and the{" "}
          <span className="text-gradient">follow-up.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl animate-fade-up text-pretty text-lg leading-relaxed text-muted [animation-delay:160ms] sm:text-xl">
          Someone fills out a form or sends a message, and it gets seen late, forgotten, or never followed up
          on. I build simple systems that capture the lead, organize the details, and draft a reply for you to
          approve — so the repetitive part stops depending on your memory.
        </p>

        <div className="mt-10 flex animate-fade-up flex-col items-center justify-center gap-3 [animation-delay:240ms] sm:flex-row">
          <ButtonLink href="#contact" className="w-full sm:w-auto">
            Let’s Talk About Your Workflow
          </ButtonLink>
          <ButtonLink href="#demo" variant="secondary" className="w-full sm:w-auto">
            Try the Interactive Demo
          </ButtonLink>
        </div>

        <p className="mt-8 flex animate-fade-up items-center justify-center gap-2 text-sm text-dim [animation-delay:320ms]">
          <ShieldCheck aria-hidden="true" className="size-4 text-trust-400" strokeWidth={1.75} />
          No hype, no invented results, no promises I can’t keep.
        </p>

        <HeroPipeline />

        <div className="mx-auto mt-14 max-w-3xl animate-fade-up border-t border-white/[0.06] pt-8 [animation-delay:480ms]">
          <p className="text-xs uppercase tracking-[0.16em] text-dim">Made for local service businesses like</p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {industries.map((industry) => (
              <li
                key={industry}
                className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-sm text-muted"
              >
                {industry}
              </li>
            ))}
            <li className="px-2 py-1 text-sm text-dim">and more</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
