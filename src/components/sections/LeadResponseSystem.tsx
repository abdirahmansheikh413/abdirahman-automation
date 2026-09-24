import { Bell, Download, Layers, PenLine, UserCheck, X, type LucideIcon } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const does: { title: string; description: string; icon: LucideIcon; human?: boolean }[] = [
  {
    title: "Captures every new lead",
    description: "A form, email, text, or social message lands in one place instead of four different inboxes.",
    icon: Download,
  },
  {
    title: "Organizes the details",
    description:
      "Name, contact info, what they asked for, timing, and how urgent it is — pulled out and put in order.",
    icon: Layers,
  },
  {
    title: "Drafts a personal reply",
    description:
      "A specific response to what they actually wrote, not a generic auto-reply that tells them nothing.",
    icon: PenLine,
  },
  {
    title: "Waits for your approval",
    description: "You read it, edit it, send it, or decline it. Nothing reaches a customer before you say so.",
    icon: UserCheck,
    human: true,
  },
  {
    title: "Reminds you to follow up",
    description: "The lead stays open until it’s answered, booked, or closed out on purpose.",
    icon: Bell,
  },
];

const doesNot = [
  "It doesn’t message your customers on its own.",
  "It doesn’t replace your judgment or your relationships.",
  "It doesn’t invent details about a job it doesn’t know.",
  "It doesn’t force you to abandon the tools you already use.",
];

export function LeadResponseSystem() {
  return (
    <section id="lead-response" aria-labelledby="lead-response-title" className="relative isolate py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[34rem] w-[60rem] max-w-[100vw] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(40_76_170/0.18),transparent)]"
      />

      <Container>
        <Reveal>
          <SectionHeading
            id="lead-response-title"
            eyebrow="The core system"
            title="The Lead Response System"
            intro="This is the system most service businesses need first. It covers the gap between a customer’s first message and your follow-up — the place where good leads quietly disappear."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-[1.35fr_1fr] lg:gap-6">
          <Reveal>
            <ol className="surface h-full rounded-3xl p-6 sm:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-400">What it does</p>
              {does.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.title}
                    className="flex gap-4 border-b border-white/[0.06] py-5 last:border-b-0 last:pb-0 first-of-type:pt-6"
                  >
                    <span
                      className={
                        item.human
                          ? "grid size-10 shrink-0 place-items-center rounded-xl border border-trust-400/35 bg-trust-500/[0.08] text-trust-300"
                          : "grid size-10 shrink-0 place-items-center rounded-xl border border-white/[0.08] bg-ink-900 text-accent-300"
                      }
                    >
                      <Icon aria-hidden="true" className="size-5" strokeWidth={1.6} />
                    </span>
                    <div>
                      <h3
                        className={
                          item.human
                            ? "text-base font-semibold tracking-tight text-trust-300"
                            : "text-base font-semibold tracking-tight text-white"
                        }
                      >
                        <span className="mr-2 font-mono text-xs font-normal text-dim">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.description}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-4">
            <div className="surface rounded-3xl p-6 sm:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
                What it doesn’t do
              </p>
              <ul className="mt-6 space-y-4">
                {doesNot.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <X aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-dim" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="surface rounded-3xl p-6 sm:p-8">
              <h3 className="text-base font-semibold tracking-tight text-white">How a build starts</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                We start with a conversation about how new customers reach you today. If a system would
                genuinely help, you’ll get the scope, the timeline, and the price in writing before any work
                begins. If it wouldn’t, I’ll tell you that instead.
              </p>
              <ButtonLink href="#contact" variant="secondary" className="mt-6 w-full">
                Start a Conversation
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
