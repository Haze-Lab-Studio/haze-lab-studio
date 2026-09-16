export const bioImages = [
  { src: "/portfolio/bio/tennis.jpg", alt: "Playing tennis" },
  { src: "/portfolio/bio/bookstore.jpg", alt: "At a bookstore" },
  { src: "/portfolio/bio/painting-couch.jpg", alt: "Painting on the couch" },
  { src: "/portfolio/bio/painting-closeup.jpg", alt: "Painting, close up" },
  { src: "/portfolio/bio/painting-sunflowers.jpg", alt: "Oil pastel painting of sunflowers" },
  { src: "/portfolio/bio/fuerza-studio-office.jpg", alt: "Working at the Fuerza Studio office" },
  { src: "/portfolio/bio/coworking-cafe.jpg", alt: "Working from a cafe" },
  { src: "/portfolio/bio/coworking-cafe-bw.jpg", alt: "Working from a cafe" },
  { src: "/portfolio/bio/home-office.jpg", alt: "Working from my home office" },
  { src: "/portfolio/bio/desk-setup.jpg", alt: "My desk setup" },
];

export const devImages = Array.from({ length: 9 }, (_, i) => ({
  src: `/portfolio/dev/${String(i + 1).padStart(2, "0")}.svg`,
  alt: "Screenshot from a development project",
}));

export type CaseStudy = {
  id: string;
  title: string;
  cover: string;
  hoverNote: string;
  credit: string;
  description: string[];
  gallery: { src: string; alt: string }[];
  links?: { label: string; url: string }[];
};

const FUERZA_CREDIT = "Fuerza Studio — worked as a contractor";

export const caseStudies: CaseStudy[] = [
  {
    id: "low-light-games",
    title: "Low Light Games",
    cover: "/portfolio/cases/low-light-games/cover.jpg",
    hoverNote: "React · Vite · UI/UX Design",
    credit: "Independent project — my husband's game studio",
    description: [
      "Designed and developed the Low Light Games website myself, end-to-end, for my husband's indie game studio shipping noir-tinged titles for Steam and mobile.",
      "Built with React and Vite, with client-side routing and a custom cookie-consent flow built from scratch rather than a third-party script.",
      "Beyond the site, I worked with him on the studio's monetization plan, and handled the creative side of advertising — designing the ad creatives and editing the video ads.",
    ],
    gallery: [
      { src: "/portfolio/cases/low-light-games/gallery-1.jpg", alt: "Low Light Games site" },
      { src: "/portfolio/cases/low-light-games/gallery-2.jpg", alt: "Low Light Games site" },
      { src: "/portfolio/cases/low-light-games/gallery-3.jpg", alt: "Low Light Games site" },
      { src: "/portfolio/cases/low-light-games/gallery-4.jpg", alt: "Low Light Games site" },
    ],
    links: [{ label: "Visit site", url: "https://lowlightgames.com" }],
  },
  {
    id: "my-mood-cycle",
    title: "My Mood Cycle",
    cover: "/portfolio/cases/my-mood-cycle/cover.jpg",
    hoverNote: "Next.js · Tailwind CSS · Brand & Marketing",
    credit: "Haze Lab Studio — my own product",
    description: [
      "Planned My Mood Cycle from scratch as a full product at Haze Lab Studio — designed the logo, the website, and the marketing materials, including the Emotional Cycle Guide, a free downloadable guide that introduces the app's core idea.",
      "Built with Next.js (App Router) and Tailwind CSS.",
      "Put together the entire launch plan: social media strategy and content, video concepts, and the video editing itself — all while developing the app, with some help from my husband.",
    ],
    gallery: [
      { src: "/portfolio/cases/my-mood-cycle/gallery-1.jpg", alt: "My Mood Cycle app" },
      { src: "/portfolio/cases/my-mood-cycle/gallery-2.jpg", alt: "My Mood Cycle app" },
      { src: "/portfolio/cases/my-mood-cycle/gallery-3.jpg", alt: "My Mood Cycle app" },
      { src: "/portfolio/cases/my-mood-cycle/gallery-4.jpg", alt: "My Mood Cycle app" },
      { src: "/portfolio/cases/my-mood-cycle/gallery-5.jpg", alt: "My Mood Cycle Instagram page" },
    ],
    links: [
      { label: "Visit site", url: "https://www.mymoodcycle.com" },
      { label: "@mymoodcycle on Instagram", url: "https://www.instagram.com/mymoodcycle/" },
    ],
  },
  {
    id: "mush",
    title: "Mush",
    cover: "/portfolio/cases/mush/cover.jpg",
    hoverNote: "Next.js · Tailwind CSS · Brand Design",
    credit: "Independent project — prototype in development",
    description: [
      "A prototype e-commerce site for a candle store, designed and developed from scratch — including the visual identity and logo.",
      "Built with Next.js and Tailwind CSS, using a custom theme configured around the brand's own design tokens.",
      "A full shopping flow already works end-to-end — product pages with size variants, a cart, and quantity controls — with the checkout button held as a placeholder until Shopify integration.",
    ],
    gallery: [
      { src: "/portfolio/cases/mush/gallery-1.jpg", alt: "Mush shop page" },
      { src: "/portfolio/cases/mush/gallery-2.jpg", alt: "Mush product page" },
      { src: "/portfolio/cases/mush/gallery-3.jpg", alt: "Mush cart page" },
      { src: "/portfolio/cases/mush/gallery-4.jpg", alt: "Mush homepage highlights" },
    ],
    links: [{ label: "View live prototype", url: "https://mush-roan.vercel.app" }],
  },
  {
    id: "envivo",
    title: "Envivo.io",
    cover: "/portfolio/cases/envivo/cover.jpg",
    hoverNote: "WordPress · Lottie · Team Lead",
    credit: FUERZA_CREDIT,
    description: [
      "Institutional website for Envivo, a B2B SaaS platform for hyper-personalized, branded client-communication microsites. This is a multilingual WordPress site, built from scratch using Gutenberg and ACF.",
      "I worked as Lead Developer, overseeing a team of three junior front-end developers and a junior back-end developer: building part of the front-end directly, running code reviews, and making the technical calls. Partnered with a motion designer to bring animations to life with Lottie, and worked with the project manager to plan the project scope, timeline and deliveries.",
      "Visual design was handled by Fuerza Studio's design team.",
    ],
    gallery: [
      { src: "/portfolio/cases/envivo/gallery-1.jpg", alt: "Envivo.io content creation feature" },
      { src: "/portfolio/cases/envivo/gallery-2.jpg", alt: "Envivo.io feature highlights" },
      { src: "/portfolio/cases/envivo/gallery-3.jpg", alt: "Envivo.io customer testimonial" },
      { src: "/portfolio/cases/envivo/gallery-4.jpg", alt: "Envivo.io platform" },
      { src: "/portfolio/cases/envivo/gallery-5.jpg", alt: "Envivo.io platform" },
    ],
    links: [{ label: "Visit site", url: "https://envivo.io" }],
  },
  {
    id: "atlas-power",
    title: "Atlas Power",
    cover: "/portfolio/cases/atlas-power/cover.jpg",
    hoverNote: "WordPress · CSS/JS Animation · Team Lead",
    credit: FUERZA_CREDIT,
    description: [
      "Corporate site for an energy and digital-asset infrastructure company. This is a WordPress website, built from scratch using Gutenberg and ACF.",
      "I worked as the Lead Developer, overseeing a team of three junior front-end developers. I handled some back-end integrations and the most complex front-end work, including animations. I also oversaw a team of three junior developers, conducted code reviews, collaborated with the project manager to define scope, deliverables, and schedule, and ensured the team adhered to them.",
      "Visual design was handled by Fuerza Studio's design team.",
    ],
    gallery: [
      { src: "/portfolio/cases/atlas-power/gallery-1.jpg", alt: "Atlas Power site" },
      { src: "/portfolio/cases/atlas-power/gallery-2.jpg", alt: "Atlas Power site" },
      { src: "/portfolio/cases/atlas-power/gallery-3.jpg", alt: "Atlas Power site" },
      { src: "/portfolio/cases/atlas-power/gallery-4.jpg", alt: "Atlas Power site" },
    ],
    links: [{ label: "Visit site", url: "https://atlaspower.io" }],
  },
  {
    id: "somos-la-salle",
    title: "Somos La Salle",
    cover: "/portfolio/cases/somos-la-salle/cover.jpg",
    hoverNote: "WordPress · Custom JS · API Integration",
    credit: FUERZA_CREDIT,
    description: [
      "A daily Catholic liturgy tool developed for Brazil's Lasallian school network.",
      "This is a heavily customized WordPress build: the liturgy calendar, daily readings, and tabbed navigation (readings, psalm, gospel, prayers) all run on custom JavaScript and API calls rather than default WordPress templating. I handled the front end, styles, and API calls, ensuring the navigation worked as the client intended, while Fuerza Studio handled the back end, custom endpoints, etc.",
      "Visual design was handled by Fuerza Studio's design team.",
    ],
    gallery: [
      { src: "/portfolio/cases/somos-la-salle/gallery-1.jpg", alt: "Somos La Salle liturgy tool" },
      { src: "/portfolio/cases/somos-la-salle/gallery-2.jpg", alt: "Somos La Salle liturgy tool" },
      { src: "/portfolio/cases/somos-la-salle/gallery-3.jpg", alt: "Somos La Salle liturgy tool" },
      { src: "/portfolio/cases/somos-la-salle/gallery-4.jpg", alt: "Somos La Salle liturgy tool" },
    ],
    links: [{ label: "Visit site", url: "https://somoslasalle.com.br/liturgia-do-dia/" }],
  },
  {
    id: "professor-marcello",
    title: "Professor Marcello",
    cover: "/portfolio/cases/professor-marcello/cover.jpg",
    hoverNote: "WordPress · WooCommerce · Custom LMS",
    credit: FUERZA_CREDIT,
    description: [
      "A Portuguese-language online education platform built from scratch with WordPress, completely integrated with a WooCommerce-based e-commerce platform. The online courses include video lessons, downloadable materials, and a custom essay correction feature for students.",
      "I work in a Front-End capacity, alongside a senior back-end developer, to build this customized project in order to fit the client's needs and expectations.",
      "Visual design was handled by Fuerza Studio's design team.",
    ],
    gallery: [
      { src: "/portfolio/cases/professor-marcello/gallery-1.jpg", alt: "Professor Marcello platform" },
      { src: "/portfolio/cases/professor-marcello/gallery-2.jpg", alt: "Professor Marcello platform" },
      { src: "/portfolio/cases/professor-marcello/gallery-3.jpg", alt: "Professor Marcello platform" },
      { src: "/portfolio/cases/professor-marcello/gallery-4.jpg", alt: "Professor Marcello platform" },
    ],
    links: [{ label: "Visit site", url: "https://professormarcello.com.br" }],
  },
  {
    id: "game-launch",
    title: "Harry Potter: Hogwarts Mystery",
    cover: "/portfolio/cases/game-launch/cover.jpg",
    hoverNote: "WordPress · WPML · Divi",
    credit: FUERZA_CREDIT,
    description: [
      "The official companion site for Harry Potter: Hogwarts Mystery, the mobile game that has surpassed 50M+ downloads worldwide.",
      "Collaborated on the front-end build, while solely owning internationalization with WPML — supporting eight languages (English, French, German, Spanish, Portuguese, Japanese, Korean, and Traditional Chinese) so every region could go live for the global launch at the same time.",
    ],
    gallery: [
      { src: "/portfolio/cases/game-launch/gallery-1.jpg", alt: "Harry Potter: Hogwarts Mystery site" },
      { src: "/portfolio/cases/game-launch/gallery-2.jpg", alt: "Harry Potter: Hogwarts Mystery site" },
      { src: "/portfolio/cases/game-launch/gallery-3.jpg", alt: "Harry Potter: Hogwarts Mystery site" },
      { src: "/portfolio/cases/game-launch/gallery-4.jpg", alt: "Harry Potter: Hogwarts Mystery site" },
    ],
    links: [{ label: "Visit site", url: "https://www.harrypotterhogwartsmystery.com" }],
  },
];
