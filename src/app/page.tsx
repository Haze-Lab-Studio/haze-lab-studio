import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-16">
      <Image
        src="/logo.png"
        alt="Haze Lab Studio"
        width={320}
        height={320}
        priority
        className="w-48 sm:w-64"
      />
      <a
        href="mailto:hello@hazelabstudio.com"
        className="mt-10 text-sm tracking-wide text-haze transition-opacity hover:opacity-70 sm:text-base"
      >
        hello@hazelabstudio.com
      </a>
    </main>
  );
}
