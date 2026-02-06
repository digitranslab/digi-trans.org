import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ServicesSection from "./sections/ServicesSection";
import ProcessSection from "./sections/ProcessSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import ValuePropositionSection from "./sections/ValuePropositionSection";
import SaaSTestimonialsSection from "./sections/SaaSTestimonialsSection";
import Footer from "./Footer";

import { StickyCTA } from "./ui/sticky-cta";
import { ProgressBar } from "./ui/progress-bar";
import { BackToTop } from "./ui/back-to-top";
import { RelatedContent } from "./ui/related-content";

export default function Home() {
  // Product spotlight removed

  const relatedContent = [
    {
      title: "How We Helped a $3.5B Retailer Transform Their IT",
      description:
        "Learn how our strategic IT assessment unlocked $16M+ in value and created a technology roadmap that became a competitive advantage.",
      image: "/images/consult.png",
      url: "/blog/enabling-our-client-to-maximise-the-business-value-from-it",
      type: "blog",
    },
    {
      title: "Cloud Computing Solutions",
      description:
        "Scale your business with secure and efficient cloud infrastructure solutions.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      url: "/services/cloud-computing",
      type: "service",
    },
    {
      title: "uTrack - Project Management",
      description:
        "The open source alternative to Jira. Plan, track, and deliver projects with a modern interface.",
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
      url: "/products/utrack",
      type: "product",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <ProgressBar />
      <Navbar />
      <Hero videoUrl="/videos/home-page.mp4" />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <ValuePropositionSection />
      <SaaSTestimonialsSection />
      <Footer />

      <StickyCTA />
      <BackToTop />
      {/* Product spotlight removed */}
    </div>
  );
}
