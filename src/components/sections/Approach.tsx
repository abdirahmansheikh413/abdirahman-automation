import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const chain = [
  { title: "Problem", caption: "What’s actually going wrong?" },
  { title: "Process", caption: "How does the work flow today?" },
  { title: "Data", caption: "Which information matters?" },
  { title: "System", caption: "Where should it all live?" },
  { title: "Automation", caption: "Which steps can run on their own?" },
  { title: "Improvement", caption: "Did it help? Adjust from there." },
];

const expectations = [
  {
    title: "A conversation first",
    description: "We talk through how new customers reach you today before anything gets built.",
  },
  {
    title: "Clear scope",
    description: "You’ll know what I’d build, what it won’t do, and what it costs before work starts.",
  },
  {
    title: "Tools that fit",
    description: "Where it makes sense, I build around tools you already use instead of adding new ones.",
  },
  {
    title: "Remote by default",
    description: "Calls, screen shares, and written updates you can re-read — no site visits required.",
  },
];

export function Approach() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-400">Why work with me</p>
          <h2 id="approach-title" className="sr-only">
            Why work with me
          </h2>
          <blockquote className="mt-6 text-balance text-2xl font-medium leading-snug tracking-[-0.02em] text-white sm:text-3xl lg:text-[2.35rem] lg:leading-[1.25]">
            “I’m not trying to sell businesses technology they don’t need. I start by understanding the process,
            finding the bottleneck, and building the smallest useful system that solves it.”
          </blockquote>
        </Reveal>

        <ol aria-label="How I approach a project" className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {chain.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 70}>
              <div className="surface h-full rounded-2xl p-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-dim">{String(index + 1).padStart(2, "0")}</span>
                  {index < chain.length - 1 && (
                    <ArrowRight aria-hidden="true" className="size-3.5 text-accent-500/70" strokeWidth={2} />
                  )}
                </div>
                <h3
                  className={
                    index === chain.length - 1
                      ? "mt-4 font-semibold tracking-tight text-trust-300"
                      : "mt-4 font-semibold tracking-tight text-white"
                  }
                >
                  {step.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-snug text-muted">{step.caption}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <ul className="mt-12 grid gap-8 border-t border-white/[0.06] pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {expectations.map((item, index) => (
            <Reveal as="li" key={item.title} delay={index * 80}>
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
