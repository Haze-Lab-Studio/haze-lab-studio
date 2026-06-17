import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="ambient-glow" aria-hidden="true" />
      <main className="flex min-h-screen flex-col items-center justify-center px-6">
        <Image
          src="/logo-dark.svg"
          alt="HazeLab Studio"
          width={280}
          height={80}
          priority
          className="fade-up fade-up-delay-0 h-auto w-[200px] sm:w-[280px]"
        />
        <hr
          className="fade-up fade-up-delay-200 mx-auto my-8 h-px w-[120px] border-0 bg-[var(--rule)]"
          aria-hidden="true"
        />
        <p className="fade-up fade-up-delay-400 tagline">Taste is the brief.</p>
        <a
          href="mailto:hello@hazelabstudio.com"
          aria-label="Email Haze Lab Studio"
          className="fade-up fade-up-delay-550 contact-link mt-8"
        >
          hello@hazelabstudio.com
        </a>
      </main>
    </>
  );
}
