import { Info, PenLine, ScanText, UserCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { title: "Captures the customer details", detail: "Name, contact info, and address from the quote form." },
  { title: "Identifies the service requested", detail: "Lawn maintenance and hedge trimming, not urgent." },
  { title: "Organizes the information", detail: "Adds the lead to the tracker with a status of “New.”" },
  { title: "Drafts a professional response", detail: "Friendly, specific, and ready to review." },
  { title: "Alerts the owner for approval", detail: "The owner approves, edits, or declines before anything is sent." },
];

const details = [
  { label: "Service", value: "Lawn maintenance, hedge trimming" },
  { label: "Property", value: "Residential, about ¼ acre" },
  { label: "Timing", value: "Within 2 weeks" },
  { label: "Prefers", value: "Email" },
];

export function ExampleWorkflow() {
  return (
    <section id="example" aria-labelledby="example-title" className="py-20 sm:py-28">
      <Container className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="inline-flex items-center rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-accent-300">
            Example Workflow
          </p>
          <h2
            id="example-title"
            className="mt-5 text-balance text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
          >
            A landscaping company receives a quote request.
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted sm:text-lg">
            Here’s how a simple lead system could handle it, from the moment the form is submitted to the
            owner’s approval.
          </p>

          <ol className="mt-8 space-y-5">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="grid size-7 shrink-0 place-items-center rounded-full border border-white/10 bg-ink-900 font-mono text-xs text-accent-300">
                  {index + 1}
                </span>
                <div>
                  <p className="font-medium text-white">{step.title}</p>
                  <p className="mt-0.5 text-sm text-muted">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-8 flex gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 text-sm text-muted">
            <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent-400" strokeWidth={1.75} />
            <span>
              <strong className="font-semibold text-soft">Example only — not a client case study.</strong> The
              business and customer shown here are fictional.
            </span>
          </p>
        </Reveal>

        <Reveal delay={150}>
          <figure className="surface relative overflow-hidden rounded-3xl">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 size-72 bg-[radial-gradient(closest-side,rgb(63_108_224/0.22),transparent)]"
            />

            <div className="relative flex items-center justify-between gap-4 border-b border-white/[0.06] px-5 py-4 sm:px-6">
              <p className="flex items-center gap-2 text-sm font-medium text-white">
                <span aria-hidden="true" className="size-2 rounded-full bg-accent-400" />
                New quote request
              </p>
              <p className="font-mono text-xs text-dim">Website form</p>
            </div>

            <div className="relative space-y-4 p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="grid size-10 place-items-center rounded-full bg-navy-800 text-sm font-semibold text-accent-300"
                >
                  JM
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Jordan M.</p>
                  <p className="text-xs text-dim">Fictional customer</p>
                </div>
              </div>

              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.06]">
                {details.map((item) => (
                  <div key={item.label} className="bg-ink-900 px-4 py-3">
                    <dt className="text-[11px] uppercase tracking-[0.12em] text-dim">{item.label}</dt>
                    <dd className="mt-1 text-sm text-soft">{item.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="rounded-xl border border-white/[0.06] bg-ink-900/70 p-4">
                <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-accent-300">
                  <ScanText aria-hidden="true" className="size-3.5" strokeWidth={2} />
                  AI summary
                </p>
                <p className="mt-2 text-sm text-soft">
                  Interested in recurring maintenance. Not urgent. Asking for a quote.
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-ink-900/70 p-4">
                <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-accent-300">
                  <PenLine aria-hidden="true" className="size-3.5" strokeWidth={2} />
                  Draft response
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Hi Jordan, thanks for reaching out about lawn maintenance and hedge trimming. We’d be glad to
                  help. Would Tuesday or Thursday afternoon work for a quick visit so we can give you an accurate
                  quote?
                </p>
              </div>

              <div className="flex flex-col gap-3 rounded-xl border border-trust-400/25 bg-trust-500/[0.07] p-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="flex items-center gap-2 text-sm font-medium text-trust-300">
                  <UserCheck aria-hidden="true" className="size-4" strokeWidth={1.9} />
                  Waiting for owner approval
                </p>
                <div aria-hidden="true" className="flex gap-2">
                  <span className="rounded-full border border-white/12 px-3.5 py-1.5 text-xs font-medium text-soft">
                    Edit
                  </span>
                  <span className="rounded-full bg-trust-500 px-3.5 py-1.5 text-xs font-semibold text-ink-950">
                    Approve & send
                  </span>
                </div>
              </div>
            </div>

            <figcaption className="relative border-t border-white/[0.06] px-5 py-3 text-xs text-dim sm:px-6">
              Illustration of the example workflow. Fictional data.
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
