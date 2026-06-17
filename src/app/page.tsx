import Image from "next/image";
import { cormorant } from "./fonts";

const apps = [
  {
    name: "My Mood Cycle",
    descriptor:
      "A cycle tracker that helps you understand more than your fertility window.",
  },
  {
    name: "Velum",
    descriptor:
      "Track your symptoms daily. Walk into your appointment with clarity.",
  },
] as const;

export default function Home() {
  return (
    <>
      <div className="ambient-glow" aria-hidden="true" />
      <main className="mx-auto w-full max-w-[960px] px-[clamp(24px,6vw,80px)]">
        <section className="flex min-h-svh flex-col items-center justify-center">
          <h1 className="sr-only">Haze Lab Studio</h1>
          <Image
            src="/logo-dark.svg"
            alt="HazeLab Studio"
            width={280}
            height={80}
            priority
            className="fade-up fade-up-delay-0 h-auto w-[200px] sm:w-[280px]"
          />
          <hr
            className="fade-up fade-up-delay-200 mx-auto my-8 h-[2px] w-[120px] border-0 bg-[var(--rule)]"
            aria-hidden="true"
          />
          <p className={`${cormorant.className} fade-up fade-up-delay-400 tagline`}>
            Taste is the brief.
          </p>
        </section>

        <section className="mt-32">
          <p className="body-copy">
            Haze Lab is an independent product studio. We build software for
            people who are still figuring themselves out — tools that are
            beautiful, low-friction, and genuinely useful. Nothing more.
          </p>
        </section>

        <section className="mt-32">
          <p className="section-label">Work</p>
          <hr
            className="mt-4 h-px w-full border-0 bg-[var(--rule)]"
            aria-hidden="true"
          />
          <div className="mt-16 flex flex-col md:grid md:grid-cols-2 md:gap-16">
            {apps.map((app, index) => (
              <div key={app.name}>
                {index > 0 && (
                  <hr
                    className="mb-16 h-px w-full border-0 bg-[var(--rule)] md:hidden"
                    aria-hidden="true"
                  />
                )}
                <article>
                  <h2 className={`${cormorant.className} app-name`}>{app.name}</h2>
                  <p className="app-descriptor mt-4">{app.descriptor}</p>
                  <p className="app-status mt-8">Coming soon</p>
                </article>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-32 pb-24">
          <hr
            className="h-px w-full border-0 bg-[var(--rule)]"
            aria-hidden="true"
          />
          <div className="mt-16 flex flex-col items-center">
            <p className={`${cormorant.className} closing-line`}>Built with care, from Porto Alegre.</p>
            <a
              href="mailto:hello@hazelabstudio.com"
              aria-label="Email Haze Lab Studio"
              className="footer-contact mt-8"
            >
              hello@hazelabstudio.com
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
