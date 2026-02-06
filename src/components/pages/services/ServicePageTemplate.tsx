/**
 * ServicePageTemplate Component
 * 
 * Reusable template for service pages including:
 * - Hero section
 * - Service description
 * - Key deliverables grid
 * - Process overview
 * - Related content
 * - Contact CTA
 * 
 * Requirements: 11.2, 11.3
 */

import React from "react";
import { Link } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/sections/shared/PageHero";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import type { ServiceData } from "@/data/services";

interface ServicePageTemplateProps {
  service: ServiceData;
}

// Helper to get Lucide icon by name
const getIcon = (iconName: string) => {
  const Icon = (LucideIcons as any)[iconName];
  return Icon ? <Icon className="w-6 h-6" /> : null;
};

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <PageHero
          badge={service.hero.badge}
          title={service.hero.title}
          description={service.hero.description}
        />

        {/* Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <AnimatedWrapper animation="fade-up" className="max-w-3xl">
              <p className="text-lg text-gray-300 leading-relaxed">
                {service.overview}
              </p>
            </AnimatedWrapper>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="py-16 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="What We Deliver"
              title="Key Deliverables"
              description="Tangible outcomes you can expect from our engagement."
              alignment="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {service.deliverables.map((deliverable, index) => (
                <AnimatedWrapper key={deliverable.title} animation="fade-up" delay={index * 0.1}>
                  <GlassCard className="h-full p-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400 w-fit mb-4">
                      {getIcon(deliverable.icon)}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{deliverable.title}</h3>
                    <p className="text-gray-400 text-sm">{deliverable.description}</p>
                  </GlassCard>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Our Approach"
              title="How We Work"
              description="A proven methodology that delivers results."
              alignment="center"
            />
            
            <div className="max-w-4xl mx-auto mt-12">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 to-blue-500 hidden md:block" />
                
                <div className="space-y-8">
                  {service.process.map((step, index) => (
                    <AnimatedWrapper key={step.step} animation="fade-up" delay={index * 0.1}>
                      <div className="flex gap-6 items-start">
                        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl relative z-10">
                          {step.step}
                        </div>
                        <div className="flex-1 pt-3">
                          <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                          <p className="text-gray-400">{step.description}</p>
                        </div>
                      </div>
                    </AnimatedWrapper>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Content Section */}
        {service.relatedContent.length > 0 && (
          <section className="py-16 bg-gray-900/30">
            <div className="container mx-auto px-4">
              <SectionHeader
                badge="Related"
                title="Explore More"
                description="Discover related products and solutions."
                alignment="center"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
                {service.relatedContent.map((content, index) => (
                  <AnimatedWrapper key={content.title} animation="fade-up" delay={index * 0.1}>
                    <Link to={content.href}>
                      <GlassCard variant="hover" className="p-6 h-full">
                        <span className="text-xs text-purple-400 uppercase tracking-wider">
                          {content.type.replace("-", " ")}
                        </span>
                        <h3 className="text-lg font-bold text-white mt-2 group-hover:text-purple-400 transition-colors">
                          {content.title}
                        </h3>
                        <ArrowRight className="w-5 h-5 text-gray-400 mt-4" />
                      </GlassCard>
                    </Link>
                  </AnimatedWrapper>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AnimatedWrapper animation="fade-up" className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-gray-400 mb-8">
                Let's discuss how we can help transform your business.
              </p>
              <GradientButton size="lg" asChild>
                <Link to="/contact">
                  {service.ctaText}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </GradientButton>
            </AnimatedWrapper>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default ServicePageTemplate;
