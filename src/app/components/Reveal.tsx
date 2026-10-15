"use client";

import { useLayoutEffect, useRef, type CSSProperties, type ReactNode } from "react";

type Variant = "fade" | "words" | "rule" | "children";

type RevealProps = {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
};

export default function Reveal({
  children,
  variant = "fade",
  delay = 0,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets =
      variant === "children"
        ? (Array.from(root.children) as HTMLElement[])
        : [root];

    const pending = new Set<HTMLElement>();

    const show = (target: HTMLElement) => {
      target.dataset.reveal = "visible";
      pending.delete(target);
      observer.unobserve(target);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) show(entry.target as HTMLElement);
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );

    // Intersection events never fire for content skipped by a jump (anchor
    // link, End key), so also sweep on scroll for anything now above the fold.
    let frame = 0;
    const sweep = () => {
      frame = 0;
      for (const target of pending) {
        if (target.getBoundingClientRect().top < window.innerHeight * 0.9) {
          show(target);
        }
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(sweep);
    };

    for (const target of targets) {
      // Anything already on screen (or scrolled past) stays visible; only
      // content below the fold is hidden, so there is never a flash.
      if (target.getBoundingClientRect().top < window.innerHeight * 0.9) continue;
      target.dataset.reveal = "pending";
      pending.add(target);
      observer.observe(target);
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [variant]);

  return (
    <div
      ref={ref}
      className={`reveal-${variant} ${className}`.trim()}
      style={
        delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined
      }
    >
      {children}
    </div>
  );
}
