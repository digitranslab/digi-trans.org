/**
 * AllamaPage Component
 * 
 * The main product page for Allama - enterprise security automation platform.
 * DigiTransLab provides implementation, consulting, and managed services
 * for security teams.
 * 
 * Includes:
 * - Hero section with tagline and CTAs
 * - Value propositions section
 * - Feature deep dive sections
 * - Integration list by category
 * - Competitive comparison tables
 * 
 * Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import { 
  Check,
  Calendar,
  Users
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { ComparisonTable } from "@/components/ui/comparison-table";
import { TypewriterGradientText } from "@/components/ui/typewriter-text";
import {
  heroData,
  valuePropositions,
  features,
  integrations,
  competitors,
  useCases,
  authOptions,
} from "@/data/allama";

// Helper to get Lucide icon by name
const getIcon = (iconName: string) => {
  const Icon = (LucideIcons as any)[iconName];
  return Icon ? <Icon className="w-6 h-6" /> : null;
};

const AllamaPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedWrapper animation="fade-up-slow" className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <span className="inline-block mb-4 px-4 py-1.5 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30">
                {heroData.tagline}
              </span>
              
              {/* Headline */}
              <TypewriterGradientText 
                text={heroData.headline}
                className="text-4xl md:text-6xl font-bold mb-6"
                duration={1.8}
              />
              
              {/* Description */}
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                {heroData.description}
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <GradientButton size="lg" onClick={() => navigate('/contact')}>
                  <Calendar className="w-5 h-5 mr-2" />
                  {heroData.primaryCTA.label}
                </GradientButton>
                <GradientButton variant="secondary" size="lg" onClick={() => navigate('/clients')}>
                  <Users className="w-5 h-5 mr-2" />
                  {heroData.secondaryCTA.label}
                </GradientButton>
              </div>
              
              {/* Hero Screenshot */}
              <AnimatedWrapper animation="scale-up" delay={0.3}>
                <div className="relative max-w-5xl mx-auto">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-30 blur-lg" />
                  <img 
                    src="/images/products/allama/parent-workflow.png" 
                    alt="Allama Workflow Builder"
                    className="relative w-full h-auto rounded-xl shadow-2xl border border-gray-800 hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>
              </AnimatedWrapper>
            </AnimatedWrapper>
          </div>
        </section>

        {/* Value Propositions Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Why Allama"
              title="Security Automation, Delivered"
              description="Four reasons security teams choose DigiTransLab."
              alignment="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {valuePropositions.map((prop, index) => (
                <AnimatedWrapper key={prop.title} animation="float-up" delay={index * 0.12}>
                  <GlassCard variant="gradient" className="h-full p-6 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400">
                        {getIcon(prop.icon)}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{prop.title}</h3>
                        <p className="text-gray-400 text-sm mb-4">{prop.description}</p>
                        {prop.metric && (
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                              {prop.metric.value}
                            </span>
                            <span className="text-sm text-gray-500">{prop.metric.label}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Features Deep Dive Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Services"
              title="What We Deliver"
              description="End-to-end security automation from strategy to production."
              alignment="center"
            />
            
            <div className="space-y-16 mt-12">
              {features.map((feature, index) => (
                <AnimatedWrapper 
                  key={feature.id} 
                  animation={index % 2 === 0 ? "slide-right" : "slide-left"}
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}>
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                          {getIcon(feature.icon)}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                      </div>
                      <p className="text-gray-400 mb-6">{feature.description}</p>
                      <ul className="space-y-2 mb-6">
                        {feature.capabilities.map((cap) => (
                          <li key={cap} className="flex items-start gap-2 text-gray-300">
                            <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-purple-400 italic">"{feature.marketingAngle}"</p>
                    </div>
                    <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <GlassCard className="p-4 overflow-hidden">
                        {feature.image ? (
                          <img 
                            src={feature.image} 
                            alt={`${feature.title} screenshot`}
                            className="w-full h-auto rounded-lg shadow-2xl"
                          />
                        ) : (
                          <div className="aspect-video flex items-center justify-center">
                            <div className="text-center">
                              <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 inline-block mb-4">
                                {getIcon(feature.icon)}
                              </div>
                              <p className="text-gray-400">{feature.title} Preview</p>
                            </div>
                          </div>
                        )}
                      </GlassCard>
                    </div>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Authentication Options Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Authentication"
              title="Enterprise Authentication"
              description="Flexible authentication options for teams of any size."
              alignment="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto">
              {authOptions.map((option, index) => (
                <AnimatedWrapper key={option.name} animation="scale-in" delay={index * 0.08}>
                  <GlassCard className="p-4 text-center h-full min-h-[100px] hover:scale-105 transition-transform duration-300">
                    <h4 className="font-bold text-white mb-1">{option.name}</h4>
                    <p className="text-sm text-gray-400">{option.description}</p>
                  </GlassCard>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Integrations"
              title="We Connect Your Security Stack"
              description="Our team integrates Allama with your existing tools."
              alignment="center"
            />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {integrations.map((category, index) => (
                <AnimatedWrapper key={category.category} animation="flip-up" delay={index * 0.08}>
                  <GlassCard className="p-4 h-full min-h-[180px] hover:scale-105 transition-transform duration-300">
                    <h4 className="font-bold text-purple-400 mb-3">{category.category}</h4>
                    <ul className="space-y-1">
                      {category.tools.map((tool) => (
                        <li key={tool.name} className="text-sm text-gray-400">
                          {tool.name}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Results"
              title="Real-World Impact"
              description="See how we've transformed security operations for our clients."
              alignment="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {useCases.slice(0, 6).map((useCase, index) => (
                <AnimatedWrapper key={useCase.title} animation="slide-up" delay={index * 0.1}>
                  <GlassCard className="h-full p-6 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                    <h4 className="text-lg font-bold text-white mb-3">{useCase.title}</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="text-red-400 font-medium">Problem: </span>
                        <span className="text-gray-400">{useCase.problem}</span>
                      </div>
                      <div>
                        <span className="text-blue-400 font-medium">Solution: </span>
                        <span className="text-gray-400">{useCase.solution}</span>
                      </div>
                      <div>
                        <span className="text-green-400 font-medium">Result: </span>
                        <span className="text-gray-300">{useCase.result}</span>
                      </div>
                    </div>
                  </GlassCard>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Comparison Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Comparison"
              title="Why Choose Allama"
              description="See why teams choose us over traditional SOAR vendors."
              alignment="center"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
              {competitors.map((comp, index) => (
                <AnimatedWrapper key={comp.competitor} animation="bounce-in" delay={index * 0.15}>
                  <ComparisonTable
                    competitor={comp.competitor}
                    aspects={comp.aspects}
                  />
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AllamaPage;
