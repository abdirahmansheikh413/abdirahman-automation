import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

const facts = [
  { label: "Studying", value: "Computer Information Systems" },
  { label: "School", value: "Georgia State University" },
  { label: "Focus", value: "AI automation & business systems" },
  { label: "Works", value: "Remote, with businesses anywhere" },
];

const interests = ["AI automation", "Business systems", "APIs", "Digital transformation"];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal className="mx-auto w-full max-w-md lg:mx-0">
          <div className="surface rounded-3xl p-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.06] bg-linear-to-br from-navy-800 via-navy-900 to-ink-900">
              {site.photo ? (
                <Image
                  src={site.photo}
                  alt={`Portrait of ${site.owner}`}
                  fill
                  sizes="(min-width: 1024px) 28rem, 90vw"
                  className="object-cover"
                />
              ) : (
                <>
                  <div
                    aria-hidden="true"
                    className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,#000_10%,transparent_70%)]"
                  />
                  <span
                    aria-hidden="true"
                    className="text-gradient absolute inset-0 grid place-items-center text-8xl font-semibold tracking-tighter"
                  >
                    A
                  </span>
                </>
              )}
            </div>
            <dl className="px-2 pb-1 pt-4 text-sm">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex justify-between gap-4 border-b border-white/[0.06] py-3 last:border-b-0"
                >
                  <dt className="text-dim">{fact.label}</dt>
                  <dd className="text-right text-soft">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-400">About</p>
          <h2
            id="about-title"
            className="mt-4 text-balance text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
          >
            Hi, I’m {site.owner}.
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-soft/90">
            I’m a Computer Information Systems student at Georgia State University, focused on AI automation and
            business systems. I work remotely with service businesses anywhere, and I start by understanding how
            the business actually runs before building anything.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted">
            I keep projects focused, explain things in plain language, and only take on work I’m confident I can
            deliver well. If a system wouldn’t genuinely help you, I’d rather say so than sell it.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {interests.map((interest) => (
              <li
                key={interest}
                className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-sm text-muted"
              >
                {interest}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
