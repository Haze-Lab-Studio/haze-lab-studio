"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function BarContent() {
  return (
    <div className="mx-auto flex max-w-[1080px] items-center justify-between px-[clamp(24px,6vw,80px)]">
      <a href="#top" aria-label="Haze Lab Studio — back to top">
        <Image
          src="/logo-dark.svg"
          alt="HazeLab Studio"
          width={96}
          height={28}
          className="h-auto w-[115px]"
        />
      </a>
      <a
        href="mailto:hello@hazelabstudio.com"
        aria-label="Email Haze Lab Studio"
        className="topbar-contact"
      >
        Contact
      </a>
    </div>
  );
}

// Default: a fixed bar that slides in once the hero is behind us.
// `pinned`: the bar is also visible from the start, in the page flow at the
// top, and the fixed copy takes over once the hero has scrolled past.
export default function TopBar({ pinned = false }: { pinned?: boolean }) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // The sentinel sits right after the hero. In pinned mode the page renders
    // it itself, since this component lives at the top of the page.
    const sentinel =
      sentinelRef.current ?? document.getElementById("topbar-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.boundingClientRect.top < 0);
    });
    observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {pinned ? (
        <header className="topbar topbar-static" inert={visible}>
          <BarContent />
        </header>
      ) : (
        <div ref={sentinelRef} className="topbar-sentinel" aria-hidden="true" />
      )}
      <header className="topbar" data-visible={visible}>
        <BarContent />
      </header>
    </>
  );
}
