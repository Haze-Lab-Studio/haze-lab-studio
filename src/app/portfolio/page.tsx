import type { Metadata } from "next";
import Image from "next/image";
import { cormorant } from "../fonts";
import Reveal from "../components/Reveal";
import SplitWords from "../components/SplitWords";
import TopBar from "../components/TopBar";
import { bioImages, caseStudies } from "./data";
import CasesGrid from "./CasesGrid";

export const metadata: Metadata = {
  title: "Gabi Candido — Portfolio",
  description: "Personal portfolio of Gabi Candido.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function PortfolioPage() {
  const carouselImages = [...bioImages, ...bioImages];

  return (
    <main id="top" className="overflow-x-hidden">
      <TopBar pinned />

      <section className="portfolio-hero flex min-h-[40svh] flex-col items-center justify-center py-[clamp(64px,10vw,96px)]">
        <p className="section-label fade-up fade-up-delay-0 mb-5">Portfolio</p>
        <h1 className={`${cormorant.className} portfolio-name split-load`}>
          <SplitWords text="Gabi Candido" />
        </h1>
        <p className="portfolio-role fade-up fade-up-delay-700 mt-4">
          WordPress Front-End Developer
        </p>
      </section>

      <div id="topbar-sentinel" className="topbar-sentinel" aria-hidden="true" />

      <section className="bg-[var(--warm-cream)] py-[clamp(80px,10vw,130px)]">
        <div className="mx-auto max-w-[1080px] px-[clamp(24px,6vw,80px)]">
          <Reveal variant="rule">
            <p className="section-label mb-5">Bio</p>
            <hr className="work-rule" aria-hidden="true" />
          </Reveal>

          <Reveal
            variant="children"
            className="mt-[clamp(40px,6vw,64px)] flex flex-col gap-6"
          >
            <p className="portfolio-body">
              I&apos;m a WordPress Front-End Developer with 10+ years of
              experience and a solid foundation in HTML and CSS. I began my
              career in a Web Design position that combined design and
              front-end work, which still shapes how I approach building
              interfaces today. In 2018, while studying Advertising, I made
              the call to drop out of college to focus on my development
              career full-time. For most of my career, I&apos;ve worked with
              JavaScript and WordPress, and in recent years I&apos;ve also
              collaborated on React projects.
            </p>
            <p className="portfolio-body">
              My work has spanned custom digital experiences for major
              marketing platforms, a multilingual site for the global launch
              of a mobile game with 50M+ downloads, and the redesign of an
              e-commerce site that helped grow a client&apos;s sales by 25%.
              I&apos;ve also built MVPs and websites for marketing agencies
              and mortgage and survey companies, often collaborating closely
              with design, UX, and content teams to bring a project&apos;s
              full vision to life.
            </p>
            <p className="portfolio-body">
              As a Lead Developer, I served as the main link between
              developers and project managers — planning and prioritizing
              tasks, estimating deadlines, and mentoring junior developers to
              help them grow in their careers.
            </p>
            <p className="portfolio-body">
              In 2026, I founded Haze Lab Studio as a way to get back into
              the market after taking a sabbatical to dedicate myself to
              other aspects of my life. We&apos;re gearing up to launch our
              first app soon. Around the same time, my husband founded his
              own game development company, Low Light Games, and I&apos;ve
              been putting my Advertising studies to work, helping him with
              marketing and some design work.
            </p>
          </Reveal>
        </div>

        <Reveal className="portfolio-carousel mt-[clamp(56px,8vw,88px)]">
          <div className="portfolio-carousel-track">
            {carouselImages.map((img, i) => (
              <div key={i} className="portfolio-carousel-item">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="240px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="work-section py-[clamp(80px,10vw,130px)]">
        <div className="mx-auto max-w-[1080px] px-[clamp(24px,6vw,80px)]">
          <Reveal variant="rule">
            <p className="section-label mb-5">Development Work</p>
            <hr className="work-rule" aria-hidden="true" />
          </Reveal>

          <Reveal
            variant="children"
            className="mt-[clamp(40px,6vw,64px)] flex flex-col gap-6"
          >
            <p className="portfolio-body portfolio-body-dark">
              WordPress has been the backbone of my career — years of
              building custom themes, working with ACF and Gutenberg, and
              shipping everything from institutional sites to full
              WooCommerce stores. Alongside building sites from scratch,
              I&apos;ve also worked with page builders like Elementor, Divi,
              and Avada, creating customizations and optimizing them
              whenever clients needed it. That&apos;s paired with a solid
              foundation in HTML, CSS, and Sass, PHP and jQuery for the logic
              and interactivity WordPress projects often call for, and
              JavaScript throughout — more recently expanding into React for
              component-driven work, and into React Native for building
              mobile apps.
            </p>
            <p className="portfolio-body portfolio-body-dark">
              My path into this started at Mazer Distribuidora, a
              distributor in Porto Alegre, where I was hired as a Web
              Designer but ended up doing hands-on front-end development
              almost immediately — building and maintaining PHP-based
              internal systems for the company&apos;s intranet, from sales
              tools to stock requests. It was a hybrid role that gave me an
              early sense of how design decisions and front-end code shape
              each other, something that&apos;s stuck with me ever since.
            </p>
            <p className="portfolio-body portfolio-body-dark">
              From there, I moved fully into front-end development, spending
              seven years at Fuerza Studio — a design-driven software house
              — where I grew from a junior developer building institutional
              sites into someone leading a small team, working across
              WordPress-based websites, e-commerce sites, and web
              applications. During my time there, I also worked closely with
              marketing teams, connecting CRMs, setting up tracking for
              campaigns, handling SEO, and doing performance optimization
              work like caching and CDN configuration for images. A short
              stint at Watson Creative had me handling WordPress projects
              end-to-end, from front-end builds to light infrastructure work
              on Pantheon, collaborating closely with designers and
              strategists along the way. Most recently, at BairesDev, I
              worked with JavaScript, using the platform&apos;s API to build
              custom digital experiences for a B2C marketing platform&apos;s
              biggest clients.
            </p>
            <p className="portfolio-body portfolio-body-dark">
              Today, that same drive to build things end-to-end lives on in
              Haze Lab Studio, the independent product studio I founded,
              where I get to take projects — including a mobile app built
              with React Native — from idea through to launch. We&apos;ll
              soon be releasing our first app.
            </p>
          </Reveal>
        </div>

        {/* Mosaic hidden for now — re-enable by uncommenting and restoring the devImages import.
        <div className="portfolio-mosaic mt-[clamp(56px,8vw,88px)]">
          {devImages.map((img, i) => (
            <div key={i} className={`portfolio-mosaic-item mosaic-item-${i}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        */}
      </section>

      <section className="bg-[var(--off-white)] py-[clamp(80px,10vw,130px)]">
        <div className="mx-auto max-w-[1080px] px-[clamp(24px,6vw,80px)]">
          <Reveal variant="rule">
            <p className="section-label mb-5">Cases</p>
            <hr className="work-rule" aria-hidden="true" />
          </Reveal>
          <div className="mt-[clamp(40px,6vw,64px)]">
            <CasesGrid cases={caseStudies} />
          </div>
        </div>
      </section>

      <section className="bg-[var(--off-white)] pt-0 pb-20">
        <div className="mx-auto max-w-[1080px] px-[clamp(24px,6vw,80px)]">
          <div className="mt-12 flex flex-col items-center">
            <Image
              src="/logo-dark.svg"
              alt="HazeLab Studio"
              width={150}
              height={43}
              className="mb-8 h-auto w-[150px]"
            />
            <p className={`${cormorant.className} closing-line`}>
              Not a software house.
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

      <footer className="bg-[var(--off-white)] pt-0 pb-[clamp(40px,6vw,64px)]">
        <div className="mx-auto flex flex-col items-center px-[clamp(24px,6vw,80px)]">
          <div className="mt-8 flex w-full flex-col items-center">
            <hr
              className="h-px w-full border-0 bg-[var(--rule)]"
              aria-hidden="true"
            />
            <p className="footer-copyright mt-6">© 2026 Haze Lab Studio</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
