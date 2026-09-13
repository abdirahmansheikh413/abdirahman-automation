import { BellRing, Inbox, MessageSquareText, Route, Sheet, Workflow, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Lead Capture Systems",
    description: "Bring form submissions, emails, and messages into one reliable place so no request slips by.",
    icon: Inbox,
  },
  {
    title: "AI Response Drafting",
    description: "Clear, friendly first replies drafted for each new inquiry, ready for you to review before sending.",
    icon: MessageSquareText,
  },
  {
    title: "Follow-Up Automation",
    description: "Timely reminders and follow-ups so interested customers hear back instead of going quiet.",
    icon: BellRing,
  },
  {
    title: "CRM / Spreadsheet Organization",
    description: "Customer details, job requests, and status kept in one tidy spreadsheet or simple CRM.",
    icon: Sheet,
  },
  {
    title: "Workflow Automation",
    description: "Connect the repetitive steps between your tools so routine admin stops depending on copy and paste.",
    icon: Workflow,
  },
  {
    title: "Custom Business Process Improvements",
    description: "Map how work actually flows today, then fix the step that slows everything else down.",
    icon: Route,
  },
];

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            id="services-title"
            eyebrow="What I build"
            title="Small systems that handle the busywork around new customers."
            intro="Each one can stand on its own or work together. The goal is always the smallest system that solves the real problem."
          />
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal as="li" key={service.title} delay={index * 60}>
                <div className="surface group h-full rounded-2xl p-7 transition duration-300 hover:-translate-y-1 hover:border-accent-500/30">
                  <span className="grid size-11 place-items-center rounded-xl border border-accent-500/20 bg-navy-900/60 text-accent-300 transition-colors duration-300 group-hover:border-accent-500/40">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
