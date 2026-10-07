"use client";

import { useEffect, useState } from "react";

const TYPE_MS = 55;
const ERASE_MS = 22;
const HOLD_MS = 1500;
const PAUSE_MS = 350;

export default function TypingTerminal({ lines }: { lines: string[] }) {
  const [text, setText] = useState("");

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      timer = setTimeout(() => setText(lines[0]), 0);
      return () => clearTimeout(timer);
    }

    let line = 0;
    let count = 0;
    let erasing = false;

    const tick = () => {
      const full = lines[line];

      if (!erasing) {
        count += 1;
        setText(full.slice(0, count));
        if (count === full.length) {
          erasing = true;
          timer = setTimeout(tick, HOLD_MS);
        } else {
          timer = setTimeout(tick, TYPE_MS + Math.random() * 45);
        }
        return;
      }

      count -= 1;
      setText(full.slice(0, count));
      if (count === 0) {
        erasing = false;
        line = (line + 1) % lines.length;
        timer = setTimeout(tick, PAUSE_MS);
      } else {
        timer = setTimeout(tick, ERASE_MS);
      }
    };

    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, [lines]);

  return (
    <div className="nf-terminal" aria-hidden="true">
      <div className="nf-terminal-bar">
        <i />
        <i />
        <i />
        <span className="nf-terminal-title">haze-lab — looking for your page</span>
      </div>
      <div className="nf-terminal-body">
        <span className="nf-prompt">$</span>
        <span>{text}</span>
        <span className="nf-caret" />
      </div>
    </div>
  );
}
