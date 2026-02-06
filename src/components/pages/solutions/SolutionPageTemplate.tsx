/**
 * SolutionPageTemplate Component
 * 
 * Reusable template for industry solution pages including:
 * - Industry-specific hero
 * - Key challenges section
 * - Relevant services grid
 * - Compliance considerations (conditional)
 * - Case studies
 * - Contact CTA
 * 
 * Requirements: 12.2, 12.3
 */

import React from "react";
import { Link } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/sections/shared/PageHero";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import type { SolutionData } from "@/data/solutions";

interface SolutionPageTemplateProps {
  solution: SolutionData;
}

// Helper to get Lucide icon by name
const getIcon = (iconName: string) => {
  const Icon = (LucideIcons as any)[iconName];
  return Icon ? <Icon className="w-6 h-6" /> : null;
};

export function SolutionPageTemplate({ solution }: SolutionPageTemplateProps) {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <PageHero
          badge={solution.hero.badge}
          title={solution.hero.title}
          description={solution.hero.description}
        />

        {/* Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <AnimatedWrapper animation="fade-up" className="max-w-3xl">
              <p className="text-lg text-gray-300 leading-relaxed">
                {solution.overview}
              </p>
            </AnimatedWrapper>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-16 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Challenges"
              title="Key Industry Challenges"
              description="The unique challenges we help you overcome."
              alignment="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
              {solution.challenges.map((challenge, index) => (
                <AnimatedWrapper key={challenge.title} animation="fade-up" delay={index * 0.1}>
                  <GlassCard className="h-full p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400">
                        {getIcon(challenge.icon)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">{challenge.title}</h3>
                        <p className="text-gray-400 text-sm">{challenge.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Solutions"
              title="How We Help"
              description="Our services tailored for your industry."
              alignment="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
              {solution.services.map((service, index) => (
                <AnimatedWrapper key={service.title} animation="fade-up" delay={index * 0.1}>
                  <Link to={service.href}>
                    <GlassCard variant="hover" className="h-full p-6">
                      <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                      <span className="text-purple-400 text-sm flex items-center gap-1">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </span>
                    </GlassCard>
                  </Link>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section (conditional) */}
        {solution.compliance && solution.compliance.length > 0 && (
          <section className="py-16 bg-gray-900/30">
            <div className="container mx-auto px-4">
              <SectionHeader
                badge="Compliance"
                title="Regulatory Expertise"
                description="We understand your compliance requirements."
                alignment="center"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-5xl mx-auto">
                {solution.compliance.map((item, index) => (
                  <AnimatedWrapper key={item.name} animation="fade-up" delay={index * 0.05}>
                    <GlassCard className="p-4">
                      <h4 className="font-bold text-purple-400 mb-1">{item.name}</h4>
                      <p className="text-xs text-gray-400">{item.description}</p>
                    </GlassCard>
                  </AnimatedWrapper>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Case Studies Section */}
        {solution.caseStudies.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <SectionHeader
                badge="Success Stories"
                title="Proven Results"
                description="See how we've helped organisations like yours."
                alignment="center"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
                {solution.caseStudies.map((study, index) => (
                  <AnimatedWrapper key={study.title} animation="fade-up" delay={index * 0.1}>
                    <GlassCard variant="gradient" className="h-full p-6">
                      <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{study.description}</p>
                      <div className="space-y-2">
                        {study.results.map((result) => (
                          <div key={result} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{result}</span>
                          </div>
                        ))}
                      </div>
                    </GlassCard>
                  </AnimatedWrapper>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <AnimatedWrapper animation="fade-up" className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-gray-400 mb-8">
                Let's discuss how we can help transform your {solution.hero.badge.toLowerCase()} operations.
              </p>
              <GradientButton size="lg" asChild>
                <Link to="/contact">
                  {solution.ctaText}
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

export default SolutionPageTemplate;
