import { ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

const industries = [
  "HVAC",
  "Landscaping",
  "Cleaning",
  "Tutoring",
  "Home repair",
  "Painting",
  "Moving",
  "Auto detailing",
  "Web design",
];

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
          {site.tagline}
        </p>

        <h1
          id="hero-title"
          className="mx-auto mt-7 max-w-4xl animate-fade-up text-balance text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.04em] text-white [animation-delay:80ms] sm:text-6xl lg:text-[5.25rem]"
        >
          Stop Letting Good Leads Get <span className="text-gradient">Forgotten.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl animate-fade-up text-pretty text-lg leading-relaxed text-muted [animation-delay:160ms] sm:text-xl">
          I build simple AI-powered systems that help local businesses capture, organize, respond to, and
          follow up with new leads.
        </p>

        <div className="mt-10 flex animate-fade-up flex-col items-center justify-center gap-3 [animation-delay:240ms] sm:flex-row">
          <ButtonLink href="#contact" className="w-full sm:w-auto">
            Let’s Talk About Your Workflow
          </ButtonLink>
          <ButtonLink href="#how-it-works" variant="secondary" className="w-full sm:w-auto">
            See How It Works
          </ButtonLink>
        </div>

        <p className="mt-8 flex animate-fade-up items-center justify-center gap-2 text-sm text-dim [animation-delay:320ms]">
          <ShieldCheck aria-hidden="true" className="size-4 text-trust-400" strokeWidth={1.75} />
          No hype. No fake promises. Just better systems.
        </p>

        <div className="mx-auto mt-16 max-w-3xl animate-fade-up border-t border-white/[0.06] pt-8 [animation-delay:420ms] sm:mt-24">
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
