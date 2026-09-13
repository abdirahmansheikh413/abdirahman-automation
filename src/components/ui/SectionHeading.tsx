import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ id, eyebrow, title, intro, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl", className)}>
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-400">{eyebrow}</p>
      )}
      <h2
        id={id}
        className="mt-4 text-balance text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
      >
        {title}
      </h2>
      {intro && <p className="mt-5 text-pretty text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
    </div>
  );
}
