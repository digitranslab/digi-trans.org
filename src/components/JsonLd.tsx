import React from "react";

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  sameAs?: string[];
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    telephone: string;
    contactType: string;
    email?: string;
    availableLanguage?: string[];
  };
  keywords?: string[];
}

export function OrganizationSchema({
  name = "Digitrans",
  url = "https://digi-trans.org",
  logo = "https://digi-trans.org/logo.png",
  sameAs = [
    "https://www.linkedin.com/company/digitrans",
    "https://twitter.com/digitrans",
    "https://github.com/digitranslab",
  ],
  address = {
    streetAddress: "Downtown Dubai",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    postalCode: "12345",
    addressCountry: "UAE",
  },
  contactPoint = {
    telephone: "+971-4-123-4567",
    contactType: "customer service",
    email: "info@digitrans.ai",
    availableLanguage: ["English", "Arabic", "French"],
  },
  keywords = [
    "IT consultancy",
    "big data analytics",
    "business intelligence",
    "business applications development",
    "SaaS products",
    "AI platform",
    "AI agents orchestration",
    "machine learning",
    "ML development",
    "ML inference",
    "LLM RAGs development",
  ],
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    sameAs,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    contactPoint: {
      "@type": "ContactPoint",
      ...contactPoint,
    },
    keywords: keywords.join(", "),
    description:
      "Enterprise IT consultancy specializing in big data analytics, AI solutions, ML development, and business intelligence for digital transformation.",
  };

  return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
}

interface ServiceSchemaProps {
  name?: string;
  description?: string;
  provider?: string;
  serviceType?: string;
  areaServed?: string | string[];
  keywords?: string[];
}

export function ServiceSchema({
  name = "Digitrans IT Consultancy Services",
  description = "Enterprise-grade data analytics, cloud computing, artificial intelligence solutions, and business intelligence services",
  provider = "Digitrans",
  serviceType = "IT Consultancy",
  areaServed = "Global",
  keywords = [
    "IT consultancy",
    "big data analytics",
    "business intelligence",
    "business applications development",
    "SaaS products",
    "AI platform",
    "AI agents orchestration",
    "machine learning",
    "ML development",
    "ML inference",
    "LLM RAGs development",
  ],
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
      url: "https://digi-trans.org",
    },
    serviceType,
    areaServed:
      typeof areaServed === "string"
        ? areaServed
        : areaServed.map((area) => ({
            "@type": "Country",
            name: area,
          })),
    keywords: keywords.join(", "),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: "https://digi-trans.org/services",
    },
  };

  return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
}

interface ArticleSchemaProps {
  headline: string;
  description?: string;
  datePublished: string;
  dateModified?: string;
  image: string;
  authorName?: string;
  authorUrl?: string;
  publisherName?: string;
  publisherLogo?: string;
}

export const ArticleSchema: React.FC<ArticleSchemaProps> = ({
  headline,
  description,
  datePublished,
  dateModified,
  image,
  authorName = "Digitrans",
  authorUrl = "https://digi-trans.org",
  publisherName = "Digitrans",
  publisherLogo = "https://digi-trans.org/logo.png",
}) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    ...(description && { description }),
    image,
    datePublished,
    ...(dateModified && { dateModified }),
    author: {
      "@type": "Person",
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      "@type": "Organization",
      name: publisherName,
      logo: {
        "@type": "ImageObject",
        url: publisherLogo,
      },
    },
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
};

// New schema for FAQs
export function FAQSchema({
  questions,
}: {
  questions: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };

  return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
}

// New schema for software applications (for SaaS products)
export function SoftwareApplicationSchema({
  name,
  description,
  image,
  applicationCategory = "BusinessApplication",
  operatingSystem = "Web browser",
  offers,
}: {
  name: string;
  description: string;
  image: string;
  applicationCategory?: string;
  operatingSystem?: string;
  offers?: {
    price: string;
    priceCurrency: string;
    priceValidUntil?: string;
  };
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    image,
    applicationCategory,
    operatingSystem,
    offers: offers
      ? {
          "@type": "Offer",
          ...offers,
        }
      : undefined,
  };

  return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
}

// New schema for breadcrumbs
export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://digi-trans.org${item.url}`,
    })),
  };

  return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
}
