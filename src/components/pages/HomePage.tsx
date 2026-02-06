/**
 * HomePage Component
 * 
 * The main homepage that composes all seven sections:
 * 1. HeroSection - Main headline, CTAs, trust badges
 * 2. ThreePillarsSection - Consulting, Engineering, Products
 * 3. ProductsShowcaseSection - Allama and DBLOCK products
 * 4. IndustriesSection - Five industry verticals
 * 5. WhyDigitransLabSection - Five differentiators
 * 6. TestimonialsSection - Client testimonials
 * 7. FinalCTASection - Final call-to-action
 * 
 * Integrates with existing Navbar and Footer.
 * Maintains existing page structure patterns.
 * 
 * Requirements: 2.1-8.4
 */

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/homepage/HeroSection";
import ThreePillarsSection from "@/components/sections/homepage/ThreePillarsSection";
import ProductsShowcaseSection from "@/components/sections/homepage/ProductsShowcaseSection";
import IndustriesSection from "@/components/sections/homepage/IndustriesSection";
import WhyDigitransLabSection from "@/components/sections/homepage/WhyDigitransLabSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FinalCTASection from "@/components/sections/homepage/FinalCTASection";
import { testimonialsData } from "@/data/homepage";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main>
        {/* Section 1: Hero */}
        <HeroSection />
        
        {/* Section 2: Three Pillars */}
        <ThreePillarsSection />
        
        {/* Section 3: Products Showcase */}
        <ProductsShowcaseSection />
        
        {/* Section 4: Industries */}
        <IndustriesSection />
        
        {/* Section 5: Why DigitransLab */}
        <WhyDigitransLabSection />
        
        {/* Section 6: Testimonials */}
        <TestimonialsSection 
          testimonials={testimonialsData.map(t => ({
            quote: t.quote,
            author: t.author,
            title: t.title,
            company: t.company,
            avatar: t.avatar,
          }))}
          title="What Our Clients Say"
          description="Hear from the enterprises that have transformed their operations with DigitransLab."
          badge="Testimonials"
        />
        
        {/* Section 7: Final CTA */}
        <FinalCTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
