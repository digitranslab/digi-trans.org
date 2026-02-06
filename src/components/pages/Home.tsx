import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "../Hero";
import ServicesSection from "../sections/ServicesSection";
import ProcessSection from "../sections/ProcessSection";
import SEO from "../SEO";
import { OrganizationSchema, ServiceSchema } from "../JsonLd";

export default function Home() {
  // Define keywords specific to the home page
  const homeKeywords = [
    "AI development company",
    "big data consultancy",
    "AI-assisted accounting software",
    "AI project management platform",
    "enterprise AI solutions",
    "machine learning consulting",
    "intelligent automation platform",
    "AI platform integration",
    "data analytics consulting",
    "AI business transformation",
    "custom AI development",
    "artificial intelligence consulting",
    "AI workflow automation",
    "intelligent business solutions",
    "AI data platform development",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Digitrans | Enterprise AI & Data Intelligence Solutions"
        description="Transform your business with cutting-edge AI platforms, intelligent automation, and data-driven insights. We specialize in AI-assisted accounting, project management SaaS, and custom AI platform integration. Trusted by enterprise clients across EMEA."
        canonicalUrl="/"
        keywords={homeKeywords}
        schema={
          <>
            <OrganizationSchema keywords={homeKeywords} />
            <ServiceSchema keywords={homeKeywords} />
          </>
        }
      />

      <Navbar />
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <Footer />
    </div>
  );
}
