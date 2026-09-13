import { Handshake, Mail } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

const nextSteps = [
  "I read your message personally.",
  "If it looks like a fit, we set up a short call.",
  "You get honest feedback on where your process could improve.",
];

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-400">Contact</p>
          <h2
            id="contact-title"
            className="mt-4 text-balance text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl"
          >
            Tell me about your workflow.
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted">
            A few sentences is plenty. There’s no pitch and no pressure — just a conversation about how new
            customers reach you today.
          </p>

          <h3 className="mt-10 text-sm font-semibold text-white">What happens next</h3>
          <ol className="mt-4 space-y-3">
            {nextSteps.map((step, index) => (
              <li key={step} className="flex gap-3 text-sm text-muted">
                <span className="grid size-6 shrink-0 place-items-center rounded-full border border-white/10 font-mono text-[11px] text-accent-300">
                  {index + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>

          <p className="mt-10 flex items-center gap-2 text-sm text-muted">
            <Mail aria-hidden="true" className="size-4 text-dim" strokeWidth={1.75} />
            Prefer email?{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-soft underline decoration-white/20 underline-offset-4 transition-colors hover:decoration-accent-400"
            >
              {site.email}
            </a>
          </p>
          {site.linkedin && (
            <p className="mt-3 flex items-center gap-2 text-sm text-muted">
              <Handshake aria-hidden="true" className="size-4 text-dim" strokeWidth={1.75} />
              Or connect on{" "}
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-soft underline decoration-white/20 underline-offset-4 transition-colors hover:decoration-accent-400"
              >
                LinkedIn
              </a>
            </p>
          )}
        </Reveal>

        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}
