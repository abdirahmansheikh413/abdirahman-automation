import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
  children: ReactNode;
};

const variants = {
  primary:
    "bg-accent-600 text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.18),0_10px_30px_-12px_rgb(63_108_224/0.8)] hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.22),0_16px_40px_-12px_rgb(95_137_242/0.9)]",
  secondary:
    "border border-white/12 bg-white/[0.03] text-soft hover:border-white/25 hover:bg-white/[0.07]",
};

export function ButtonLink({ href, variant = "primary", className, children }: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-medium transition duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0",
        variants[variant],
        className,
      )}
    >
      {children}
      {variant === "primary" && (
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
        />
      )}
    </a>
  );
}
