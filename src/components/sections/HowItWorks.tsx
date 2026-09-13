import type { CSSProperties } from "react";
import {
  ClipboardList,
  Download,
  Inbox,
  Layers,
  PenLine,
  Repeat,
  ScanText,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

const steps: { title: string; caption: string; icon: LucideIcon; human?: boolean }[] = [
  { title: "Lead Comes In", caption: "A form, email, or message arrives", icon: Inbox },
  { title: "Capture", caption: "Saved right away, so nothing slips", icon: Download },
  { title: "Organize", caption: "Details sorted into one clear place", icon: Layers },
  { title: "AI Understands", caption: "Service, timing, and key details", icon: ScanText },
  { title: "Response Draft", caption: "A clear reply, ready to review", icon: PenLine },
  { title: "Human Approval", caption: "You approve, edit, or decline", icon: UserCheck, human: true },
  { title: "Follow-Up", caption: "Reminders until it’s resolved", icon: Repeat },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="relative isolate py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[40rem] w-[70rem] max-w-[100vw] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgb(40_76_170/0.2),transparent)]"
      />

      <Container>
        <Reveal>
          <SectionHeading
            id="how-title"
            align="center"
            eyebrow="How it works"
            title="A simple path from new lead to clear next step."
            intro="Every lead follows the same reliable steps. AI handles the busywork of sorting and drafting. You stay in charge of what actually gets said to your customers."
          />
        </Reveal>

        <div className="surface mt-14 rounded-3xl px-6 py-10 sm:px-10 lg:px-8 lg:py-12">
          <Reveal as="ol" plain className="workflow grid lg:grid-cols-7 lg:gap-x-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.title}
                  style={{ "--i": index } as CSSProperties}
                  className="workflow-step relative flex gap-5 pb-9 last:pb-0 lg:flex-col lg:items-center lg:gap-0 lg:pb-0 lg:text-center"
                >
                  {index < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="workflow-line absolute bottom-2 left-7 top-[4.25rem] w-px bg-linear-to-b from-accent-500/55 to-accent-500/15 lg:bottom-auto lg:left-[calc(50%+2.25rem)] lg:right-[calc(-50%+1.25rem)] lg:top-7 lg:h-px lg:w-auto lg:bg-linear-to-r"
                    />
                  )}
                  <span
                    data-human={step.human ? "true" : undefined}
                    className={cn(
                      "workflow-node relative grid size-14 shrink-0 place-items-center rounded-2xl border bg-ink-900 shadow-[inset_0_1px_0_rgb(255_255_255/0.06)]",
                      step.human ? "border-trust-400/40 text-trust-300" : "border-white/10 text-accent-300",
                    )}
                  >
                    <Icon aria-hidden="true" className="size-6" strokeWidth={1.6} />
                  </span>
                  <div className="pt-1 lg:pt-5">
                    <p className="font-mono text-[11px] tracking-[0.16em] text-dim">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3
                      className={cn(
                        "mt-1 text-base font-semibold tracking-tight",
                        step.human ? "text-trust-300" : "text-white",
                      )}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-snug text-muted lg:text-[13px]">{step.caption}</p>
                  </div>
                </li>
              );
            })}
          </Reveal>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Reveal className="surface flex gap-4 rounded-2xl p-6">
            <UserCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-trust-400" strokeWidth={1.75} />
            <div>
              <h3 className="text-base font-semibold text-white">You stay in control</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                AI supports your judgment. It doesn’t replace it. By default, nothing is sent to a customer until
                you’ve reviewed it.
              </p>
            </div>
          </Reveal>
          <Reveal className="surface flex gap-4 rounded-2xl p-6" delay={100}>
            <ClipboardList aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent-400" strokeWidth={1.75} />
            <div>
              <h3 className="text-base font-semibold text-white">A clear record, every time</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                Each lead ends with a simple history: who reached out, what they needed, what was sent, and
                what happens next.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
