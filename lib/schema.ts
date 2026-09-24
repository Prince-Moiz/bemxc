import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";

export type JsonLd = Record<string, unknown>;

const organizationId = `${SITE_URL}/#organization`;
const productId = `${SITE_URL}/#financial-product`;
const appId = `${SITE_URL}/#software`;

export const organizationJsonLd: JsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": organizationId,
  name: SITE_NAME,
  legalName: "BEMXC",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  description: SITE_DESCRIPTION,
  slogan: SITE_TAGLINE,
  foundingDate: "2026",
  sameAs: [
    "https://x.com/bemxc",
    "https://discord.gg/bemxc",
    "https://t.me/bemxc",
    "https://github.com/bemxc",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: `${SITE_URL}/articles/what-is-bemxc`,
    availableLanguage: ["English"],
  },
};

export const financialProductJsonLd: JsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  "@id": productId,
  name: "BEMXC Zero-Fake Signal Protocol",
  description:
    "BEMXC is a verified forex-signal protocol. Providers publish time-stamped FX calls. BEMXC scores those calls with an Elo-based Trust Score, enforces risk-to-reward floors, and demotes fabricated win rates. BEMXC is not a forex broker and does not custody funds.",
  url: SITE_URL,
  category: "Forex signal verification",
  provider: { "@id": organizationId },
  brand: { "@id": organizationId },
  feesAndCommissionsSpecification: `${SITE_URL}/articles/automated-execution-disclaimer`,
  termsOfService: `${SITE_URL}/articles/automated-execution-disclaimer`,
};

export const softwareApplicationJsonLd: JsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": appId,
  name: SITE_NAME,
  alternateName: "BEMXC Terminal",
  applicationCategory: "FinanceApplication",
  applicationSubCategory: "Skill verification and verified forex signals",
  operatingSystem: "macOS, Windows, Linux, iOS, Android, Web",
  url: SITE_URL,
  downloadUrl: `${SITE_URL}/download`,
  description: SITE_DESCRIPTION,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  publisher: { "@id": organizationId },
  creator: { "@id": organizationId },
  featureList: [
    "Zero-fake signal verification",
    "Elo-based Trust Score",
    "Open Playground for signal publication",
    "Non-custodial broker webhooks",
    "1v1 desk chats and group rooms",
    "Live verified FX tape",
  ],
};

export const techArticleJsonLd = ({
  headline,
  description,
  path,
  datePublished,
  articleSection,
  keywords,
}: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  articleSection: string;
  keywords: string[];
}): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline,
  description,
  datePublished,
  dateModified: datePublished,
  proficiencyLevel: "Expert",
  articleSection,
  keywords: keywords.join(", "),
  inLanguage: "en-US",
  isAccessibleForFree: true,
  mainEntityOfPage: `${SITE_URL}${path}`,
  url: `${SITE_URL}${path}`,
  image: `${SITE_URL}/opengraph-image`,
  author: { "@id": organizationId },
  publisher: { "@id": organizationId },
  about: [{ "@id": productId }, { "@id": appId }],
});

export const howToJsonLd = ({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name,
  description,
  step: steps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
});

export const breadcrumbJsonLd = (
  items: { name: string; path: string }[],
): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});

export const faqJsonLd = (
  questions: { question: string; answer: string }[],
): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: questions.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});
