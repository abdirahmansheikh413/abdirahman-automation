"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

type RevealProps = {
  as?: ElementType;
  className?: string;
  /** Delay in ms before this element fades in. */
  delay?: number;
  /** Skip the default fade so descendants can animate off `data-visible` instead. */
  plain?: boolean;
  children: ReactNode;
};

/** Sets `data-visible="true"` once the element scrolls into view. Styling lives in globals.css. */
export function Reveal({ as: Tag = "div", className, delay = 0, plain = false, children }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      element.dataset.visible = "true";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.visible = "true";
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const classes = [plain ? "" : "reveal", className].filter(Boolean).join(" ");
  const style = delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined;

  return (
    <Tag ref={ref} className={classes} style={style}>
      {children}
    </Tag>
  );
}
