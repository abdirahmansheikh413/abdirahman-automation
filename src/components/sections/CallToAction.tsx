import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function CallToAction() {
  return (
    <section aria-labelledby="cta-title" className="py-12 sm:py-20">
      <Container>
        <Reveal className="relative isolate overflow-hidden rounded-[2rem] border border-white/[0.08] bg-linear-to-b from-navy-900/90 to-ink-900 px-6 py-16 text-center sm:px-12 sm:py-24">
          <div
            aria-hidden="true"
            className="bg-grid absolute inset-0 -z-10 opacity-70 [mask-image:radial-gradient(ellipse_at_center,#000_10%,transparent_70%)]"
          />
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 -z-10 h-80 w-[44rem] max-w-[140%] -translate-x-1/2 -translate-y-1/3 bg-[radial-gradient(closest-side,rgb(63_108_224/0.4),transparent)]"
          />

          <h2
            id="cta-title"
            className="mx-auto max-w-3xl text-balance text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl sm:leading-[1.08]"
          >
            Have a process that feels more complicated than it should?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            Tell me what happens when a new customer reaches out. I’ll help you identify where the process could
            be improved.
          </p>
          <ButtonLink href="#contact" className="mt-10">
            Start a Conversation
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
