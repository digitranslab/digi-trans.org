import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  twitterCard?: "summary" | "summary_large_image";
  schema?: React.ReactNode;
}

const defaultKeywords = [
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
  "data integration",
  "enterprise AI",
  "data visualization",
  "real-time analytics",
];

export default function SEO({
  title = "Enterprise Data & AI Solutions | Digitrans",
  description = "Transform your business with enterprise-grade data analytics, cloud computing, and artificial intelligence solutions from Digitrans.",
  keywords = defaultKeywords,
  canonicalUrl,
  ogImage = "https://digi-trans.org/images/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  schema,
}: SEOProps) {
  // Construct the canonical URL
  const siteUrl = "https://digi-trans.org";
  const canonical = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <link rel="canonical" href={canonical} />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Digitrans" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="generator" content="Digitrans" />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Digitrans" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@Digitrans" />
      <meta name="twitter:creator" content="@Digitrans" />

      {/* Structured Data / JSON-LD */}
      {schema}
    </Helmet>
  );
}
