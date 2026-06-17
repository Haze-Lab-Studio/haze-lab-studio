import Image from "next/image";
import { cormorant } from "./fonts";

const apps = [
  {
    id: "my-mood-cycle",
    name: "My Mood Cycle",
    descriptor:
      "A cycle tracker that helps you understand more than your fertility window.",
  },
  {
    id: "velum",
    name: "Velum",
    descriptor:
      "Track your symptoms daily. Walk into your appointment with clarity.",
  },
] as const;

export default function Home() {
  return (
    <>
      <div className="ambient-glow" aria-hidden="true" />
      <main className="mx-auto w-full max-w-[1080px] overflow-x-hidden px-[clamp(24px,6vw,80px)]">
        <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden">
          <span className={`${cormorant.className} hero-ghost`} aria-hidden="true">
            Studio
          </span>
          <h1 className="sr-only">Haze Lab Studio</h1>
          <Image
            src="/logo-dark.svg"
            alt="HazeLab Studio"
            width={280}
            height={80}
            priority
            className="fade-up fade-up-delay-0 relative z-10 h-auto w-[200px] sm:w-[280px]"
          />
          <hr
            className="fade-up fade-up-delay-200 relative z-10 mx-auto my-8 h-px w-[120px] border-0 bg-[var(--rule)]"
            aria-hidden="true"
          />
          <p
            className={`${cormorant.className} fade-up fade-up-delay-400 tagline relative z-10`}
          >
            Taste is the brief.
          </p>
        </section>

        <section className="pt-[clamp(80px,12vw,140px)]">
          <p className={`${cormorant.className} statement-headline`}>
            We build software
            <br />
            for people still figuring themselves out.
          </p>
          <p className="statement-support mt-8">
            Beautiful, low-friction, and genuinely useful. Nothing more.
          </p>
        </section>

        <section className="pt-[clamp(100px,14vw,160px)]">
          <p className="section-label">Work</p>
          <hr
            className="mt-4 h-px w-full border-0 bg-[var(--rule)]"
            aria-hidden="true"
          />
          <div className="mt-16 flex flex-col gap-0 md:grid md:grid-cols-2 md:gap-[clamp(40px,6vw,80px)]">
            {apps.map((app, index) => (
              <div key={app.id}>
                {index > 0 && (
                  <hr
                    className="mb-16 h-px w-full border-0 bg-[var(--rule)] md:hidden"
                    aria-hidden="true"
                  />
                )}
                <a href={`#${app.id}`} id={app.id} className="app-entry">
                  <h2 className={`${cormorant.className} app-name`}>{app.name}</h2>
                  <p className="app-descriptor mt-5">{app.descriptor}</p>
                  <p className="app-status mt-6">Coming soon</p>
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="pt-[clamp(100px,14vw,160px)] pb-24">
          <hr
            className="h-px w-full border-0 bg-[var(--rule)]"
            aria-hidden="true"
          />
          <div className="mt-12 flex flex-col items-center">
            <p className={`${cormorant.className} closing-line`}>
              Taste is the brief.
            </p>
            <a
              href="mailto:hello@hazelabstudio.com"
              aria-label="Email Haze Lab Studio"
              className="footer-contact mt-6"
            >
              hello@hazelabstudio.com
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
