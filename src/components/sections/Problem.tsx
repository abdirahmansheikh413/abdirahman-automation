import { Clock, Copy, FolderOpen, Hourglass, MessagesSquare, UserCog, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const problems: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Leads sitting unanswered",
    description: "Requests come in while you’re on a job. By the time you check, the customer may have moved on.",
    icon: Clock,
  },
  {
    title: "Messages in too many places",
    description: "Website forms, texts, emails, and social messages all land in different inboxes.",
    icon: MessagesSquare,
  },
  {
    title: "Slow follow-up",
    description: "“I’ll get back to them” gets buried under everything else that happens in a day.",
    icon: Hourglass,
  },
  {
    title: "Scattered customer details",
    description: "Names, addresses, and job notes live in text threads, notebooks, and memory.",
    icon: FolderOpen,
  },
  {
    title: "Repetitive admin work",
    description: "The same replies, the same copy and paste, the same data entry, every single week.",
    icon: Copy,
  },
  {
    title: "Owners doing it all manually",
    description: "You’re running the business and also acting as its receptionist, scheduler, and filing system.",
    icon: UserCog,
  },
];

export function Problem() {
  return (
    <section id="problem" aria-labelledby="problem-title" className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="problem-title"
            eyebrow="The problem"
            title="Most businesses don’t need more software. They need fewer things falling through the cracks."
            intro="When you’re busy doing the actual work, the admin around new customers is the first thing to slip. It’s rarely one big failure. It’s a handful of small gaps that quietly add up."
          />
        </Reveal>

        <ul className="grid gap-3 sm:grid-cols-2">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Reveal as="li" key={problem.title} delay={index * 60}>
                <div className="surface h-full rounded-2xl p-6 transition duration-300 hover:border-white/15">
                  <span className="grid size-10 place-items-center rounded-xl border border-white/[0.08] bg-ink-900 text-accent-300">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 text-base font-semibold tracking-tight text-white">{problem.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{problem.description}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
