import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [
  {
    title: "Honest communication",
    description: "I’ll tell you plainly what automation can and can’t do for your business.",
  },
  {
    title: "No fabricated results",
    description: "No inflated numbers, invented reviews, or promises I can’t keep.",
  },
  {
    title: "Human approval where it matters",
    description: "AI supports your judgment. It doesn’t replace it.",
  },
  {
    title: "Respect for customer data",
    description: "Collect only what’s needed, and handle your customers’ information with care.",
  },
  {
    title: "Clear scope and expectations",
    description: "You’ll know what’s being built and what’s included before any work begins.",
  },
  {
    title: "Technology that solves real problems",
    description: "If a simple fix works better than new software, I’ll recommend the simple fix.",
  },
];

export function Values() {
  return (
    <section id="values" aria-labelledby="values-title" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            id="values-title"
            eyebrow="Values"
            title="Build Useful Things. Do Business the Right Way."
            intro="I believe business should be built around honesty, useful work, transparency, privacy, and keeping people in control. That shapes how I work with every business."
          />
        </Reveal>

        <Reveal delay={100} className="mt-14">
          <ul className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <li key={value.title} className="bg-ink-900 p-7">
                <span className="grid size-7 place-items-center rounded-full border border-trust-400/30 bg-trust-500/10 text-trust-300">
                  <Check aria-hidden="true" className="size-3.5" strokeWidth={2.5} />
                </span>
                <h3 className="mt-5 font-semibold tracking-tight text-white">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-10 flex items-center justify-center gap-4 text-center text-sm text-dim">
            <span aria-hidden="true" className="hidden h-px w-12 bg-linear-to-r from-transparent to-trust-400/40 sm:block" />
            Built around honest work, useful technology, and responsible automation.
            <span aria-hidden="true" className="hidden h-px w-12 bg-linear-to-l from-transparent to-trust-400/40 sm:block" />
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
