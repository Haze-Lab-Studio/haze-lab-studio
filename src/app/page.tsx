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
    <main className="overflow-x-hidden">
      <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-[var(--off-white)]">
        <div className="hero-glow" aria-hidden="true" />
        <h1 className="sr-only">Haze Lab Studio</h1>
        <Image
          src="/logo-dark.svg"
          alt="HazeLab Studio"
          width={280}
          height={80}
          priority
          className="fade-up fade-up-delay-0 relative z-[1] h-auto w-[200px] sm:w-[280px]"
        />
        <hr
          className="fade-up fade-up-delay-200 relative z-[1] mx-auto my-8 h-px w-[120px] border-0 bg-[var(--rule)]"
          aria-hidden="true"
        />
        <p
          className={`${cormorant.className} fade-up fade-up-delay-350 tagline relative z-[1]`}
        >
          Taste is the brief.
        </p>
      </section>

      <section className="bg-[var(--off-white)] py-[clamp(100px,14vw,160px)]">
        <div className="mx-auto max-w-[1080px] px-[clamp(24px,6vw,80px)]">
          <p className={`${cormorant.className} statement-headline`}>
            We build things we&apos;d want to use.
            <br />
            Then we share them.
          </p>
          <p className="statement-support mt-10">
            An independent studio. No briefs we don&apos;t believe in.
          </p>
        </div>
      </section>

      <section className="bg-[var(--warm-cream)] py-[clamp(80px,10vw,130px)]">
        <div className="mx-auto max-w-[1080px] px-[clamp(24px,6vw,80px)]">
          <p className="section-label mb-5">Work</p>
          <hr className="work-rule" aria-hidden="true" />
          <div className="mt-[clamp(48px,6vw,72px)] flex flex-col md:grid md:grid-cols-2 md:gap-[clamp(48px,8vw,96px)]">
            {apps.map((app, index) => (
              <div key={app.id}>
                {index > 0 && (
                  <hr
                    className="work-divider mb-[clamp(48px,6vw,72px)] md:hidden"
                    aria-hidden="true"
                  />
                )}
                <article id={app.id}>
                  <h2 className={`${cormorant.className} app-name`}>
                    {app.name}
                  </h2>
                  <p className="app-descriptor mt-6">{app.descriptor}</p>
                  <p className="app-status mt-8">Coming soon</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--off-white)] pt-[clamp(80px,10vw,120px)] pb-20">
        <div className="mx-auto max-w-[1080px] px-[clamp(24px,6vw,80px)]">
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
        </div>
      </section>
    </main>
  );
}
