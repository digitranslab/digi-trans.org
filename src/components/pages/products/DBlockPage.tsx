/**
 * DBlockPage Component
 * 
 * The product page for DBLOCK - enterprise AI application platform.
 * Digitrans provides implementation, consulting, and managed services
 * for building enterprise AI solutions.
 * 
 * Includes:
 * - Hero section with tagline and CTAs
 * - Value propositions section
 * - Feature deep dive sections
 * - Technology integrations
 * - Use cases
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
import { TypewriterGradientText } from "@/components/ui/typewriter-text";
import {
  heroData,
  valuePropositions,
  features,
  useCases,
  componentCategories,
} from "@/data/dblock";

// Helper to get Lucide icon by name
const getIcon = (iconName: string) => {
  const Icon = (LucideIcons as any)[iconName];
  return Icon ? <Icon className="w-6 h-6" /> : null;
};

const DBlockPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedWrapper animation="fade-up-slow" className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <span className="inline-block mb-4 px-4 py-1.5 bg-blue-900/40 text-blue-300 text-sm rounded-full border border-blue-500/30">
                {heroData.tagline}
              </span>
              
              {/* Headline */}
              <TypewriterGradientText 
                text={heroData.headline}
                className="text-4xl md:text-6xl font-bold mb-6"
                gradientClassName="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
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
              <div className="relative max-w-5xl mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-30 blur-lg" />
                <img 
                  src="/images/products/dblock/workspace.png" 
                  alt="DBLOCK Visual Flow Editor"
                  className="relative w-full h-auto rounded-xl shadow-2xl border border-gray-800"
                />
              </div>
            </AnimatedWrapper>
          </div>
        </section>

        {/* Value Propositions Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Why DBLOCK"
              title="Enterprise AI, Delivered"
              description="Four reasons teams choose Digitrans for AI development."
              alignment="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {valuePropositions.map((prop, index) => (
                <AnimatedWrapper key={prop.title} animation="scale-up-bounce" delay={index * 0.1}>
                  <GlassCard variant="gradient" className="h-full p-6 hover:scale-[1.02] transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400">
                        {getIcon(prop.icon)}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{prop.title}</h3>
                        <p className="text-gray-400 text-sm mb-4">{prop.description}</p>
                        {prop.metric && (
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
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
              title="AI Solutions We Deliver"
              description="End-to-end AI development from strategy to production."
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
                        <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                          {getIcon(feature.icon)}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                      </div>
                      <p className="text-gray-400 mb-6">{feature.description}</p>
                      <ul className="space-y-2 mb-6">
                        {feature.capabilities.map((cap, capIndex) => (
                          <AnimatedWrapper key={cap} animation="slide-up" delay={capIndex * 0.05}>
                            <li className="flex items-start gap-2 text-gray-300">
                              <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                              <span>{cap}</span>
                            </li>
                          </AnimatedWrapper>
                        ))}
                      </ul>
                      <p className="text-blue-400 italic">"{feature.marketingAngle}"</p>
                    </div>
                    <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <AnimatedWrapper animation="zoom-in" delay={0.2}>
                        <GlassCard className="p-4 overflow-hidden hover:scale-[1.02] transition-all duration-300">
                        {feature.image ? (
                          <img 
                            src={feature.image} 
                            alt={`${feature.title} screenshot`}
                            className="w-full h-auto rounded-lg shadow-2xl"
                          />
                        ) : (
                          <div className="aspect-video flex items-center justify-center">
                            <div className="text-center">
                              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 inline-block mb-4">
                                {getIcon(feature.icon)}
                              </div>
                              <p className="text-gray-400">{feature.title} Preview</p>
                            </div>
                          </div>
                        )}
                      </GlassCard>
                    </AnimatedWrapper>
                    </div>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Component Categories Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Integrations"
              title="We Integrate With Your Stack"
              description="Connect to any LLM, vector store, or enterprise system."
              alignment="center"
            />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {componentCategories.map((category, index) => (
                <AnimatedWrapper key={category.category} animation="float-up" delay={index * 0.05}>
                  <GlassCard className="p-4 h-full min-h-[180px] hover:scale-[1.03] transition-all duration-300">
                    <h4 className="font-bold text-blue-400 mb-3">{category.category}</h4>
                    <ul className="space-y-1">
                      {category.items.map((item) => (
                        <li key={item} className="text-sm text-gray-400">
                          {item}
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
        <section className="py-20 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Use Cases"
              title="AI Solutions We Build"
              description="From knowledge systems to intelligent agents."
              alignment="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {useCases.map((useCase, index) => (
                <AnimatedWrapper key={useCase.title} animation="flip-up" delay={index * 0.1}>
                  <GlassCard className="h-full min-h-[140px] p-6 hover:scale-[1.03] transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400">
                        {getIcon(useCase.icon)}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">{useCase.title}</h4>
                        <p className="text-gray-400 text-sm">{useCase.description}</p>
                      </div>
                    </div>
                  </GlassCard>
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

export default DBlockPage;
