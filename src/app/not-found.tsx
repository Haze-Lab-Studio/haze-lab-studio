import Link from "next/link";
import { cormorant } from "./fonts";
import TypingTerminal from "./components/TypingTerminal";

const statusLines = [
  "Rereading the brief…",
  "Blaming the cache…",
  "Asking taste for a second opinion…",
  "Checking under “Coming soon”…",
];

export default function NotFound() {
  return (
    <main className="nf flex min-h-svh flex-col items-center px-[clamp(24px,6vw,80px)] text-center">
      <TypingTerminal lines={statusLines} />

      <div className="flex flex-1 flex-col items-center justify-center">
        <h1 className="sr-only">404 — Page not found</h1>
        <p
          className={`${cormorant.className} nf-numerals`}
          aria-hidden="true"
        >
          404
        </p>
        <p className={`${cormorant.className} nf-title`}>
          This page didn&apos;t make it past the brief.
        </p>
        <p className="statement-support nf-sub">
          We&apos;re not a software house — and apparently not a page house
          either.
        </p>
        <Link href="/" className="nf-link">
          Take me back to the studio
        </Link>
      </div>
    </main>
  );
}
