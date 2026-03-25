/**
 * DBlockPage Component — Premium Redesign
 * 
 * Product page for Dblock — enterprise AI application platform.
 * Redesigned with premium visual language matching MegamindPage/ServicePageTemplate.
 */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import { Calendar, Users, Check, Sparkles, ArrowRight, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GradientButton } from "@/components/ui/gradient-button";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { TypewriterGradientText } from "@/components/ui/typewriter-text";
import { HeroBackground, HeroBottomFade, CTABackground } from "@/components/ui/hero-background";
import {
  heroData,
  valuePropositions,
  features,
  useCases,
  componentCategories,
} from "@/data/dblock";

const getIcon = (iconName: string, className: string = "w-6 h-6") => {
  const Icon = (LucideIcons as any)[iconName];
  return Icon ? <Icon className={className} /> : null;
};

const DBlockPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Dblock — Enterprise AI Application Platform | Digitrans";
    document.querySelector('meta[name="description"]')?.setAttribute("content",
      "Dblock accelerates enterprise AI initiatives. From RAG systems to multi-agent orchestration — custom AI applications designed, built, and deployed by our experts."
    );
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        {/* ═══════════════════════════════════════════
            HERO — Immersive gradient with floating orbs
            ═══════════════════════════════════════════ */}
        <section className="relative pt-36 pb-24 overflow-hidden">
          <HeroBackground accent="blue" />

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedWrapper animation="fade-up-slow" className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-blue-900/40 text-blue-300 text-sm rounded-full border border-blue-500/30 backdrop-blur-sm">
                <Clock className="w-3.5 h-3.5" />
                {heroData.tagline}
              </span>
              <TypewriterGradientText
                text={heroData.headline}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                gradientClassName="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
                duration={1.8}
              />
              <p className="text-lg md:text-xl text-gray-300/90 mb-10 max-w-3xl mx-auto leading-relaxed">{heroData.description}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientButton size="lg" onClick={() => navigate(heroData.primaryCTA.href)}>
                  <Calendar className="w-5 h-5 mr-2" />
                  {heroData.primaryCTA.label}
                </GradientButton>
                <GradientButton variant="secondary" size="lg" onClick={() => navigate(heroData.secondaryCTA.href)}>
                  <Users className="w-5 h-5 mr-2" />
                  {heroData.secondaryCTA.label}
                </GradientButton>
              </div>
            </AnimatedWrapper>
          </div>
          <HeroBottomFade />
        </section>

        {/* ═══════════════════════════════════════════
            IMPACT METRICS — Gradient stat bar
            ═══════════════════════════════════════════ */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {valuePropositions.map((prop, i) => (
                <AnimatedWrapper key={prop.title} animation="scale-in" delay={i * 0.08}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-6 text-center hover:border-blue-500/40 transition-all duration-300">
                      <div className="inline-flex p-2.5 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400 mb-3">
                        {getIcon(prop.icon, "w-5 h-5")}
                      </div>
                      {prop.metric && (
                        <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">{prop.metric.value}</div>
                      )}
                      <p className="text-sm text-gray-400">{prop.metric?.label || prop.title}</p>
                    </div>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            VALUE PROPOSITIONS — Numbered cards
            ═══════════════════════════════════════════ */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <SectionHeader badge="Why Dblock" title="Enterprise AI, Delivered" description="Four reasons teams choose Digitrans for AI development." alignment="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14 max-w-5xl mx-auto">
              {valuePropositions.map((prop, i) => (
                <AnimatedWrapper key={prop.title} animation="float-up" delay={i * 0.06}>
                  <div className="group relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-blue-400">
                          {getIcon(prop.icon, "w-5 h-5")}
                        </div>
                        <span className="text-xs font-mono text-gray-600">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">{prop.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{prop.description}</p>
                    </div>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FEATURES — Alternating layout with visual panels
            ═══════════════════════════════════════════ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader badge="Services" title="AI Solutions We Deliver" description="End-to-end AI development from strategy to production." alignment="center" />
            <div className="max-w-6xl mx-auto mt-14 space-y-20">
              {features.map((feature, i) => (
                <AnimatedWrapper key={feature.id} animation={i % 2 === 0 ? "slide-right" : "slide-left"}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                          {getIcon(feature.icon, "w-5 h-5")}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                      </div>
                      <p className="text-gray-400 mb-6 leading-relaxed">{feature.description}</p>
                      <ul className="space-y-2.5 mb-6">
                        {feature.capabilities.map((cap) => (
                          <li key={cap} className="flex items-start gap-3 text-gray-300">
                            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-green-500/80 to-emerald-500/80 flex items-center justify-center">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm text-blue-400/80 italic border-l-2 border-blue-500/30 pl-4">"{feature.marketingAngle}"</p>
                    </div>
                    <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl" />
                        <div className="relative bg-gray-900/70 backdrop-blur-sm border border-gray-800/50 rounded-3xl overflow-hidden">
                          {feature.image ? (
                            <img src={feature.image} alt={`${feature.title}`} className="w-full h-auto" />
                          ) : (
                            <div className="p-8 min-h-[280px] flex items-center justify-center">
                              <div className="text-center">
                                <div className="inline-flex p-5 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-4">
                                  {getIcon(feature.icon, "w-10 h-10 text-blue-400")}
                                </div>
                                <p className="text-lg font-semibold text-white mb-2">{feature.title}</p>
                                <p className="text-sm text-gray-500">{feature.capabilities.length} capabilities</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            INTEGRATIONS — Category cards
            ═══════════════════════════════════════════ */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <SectionHeader badge="Integrations" title="We Integrate With Your Stack" description="Connect to any LLM, vector store, or enterprise system." alignment="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14 max-w-6xl mx-auto">
              {componentCategories.map((category, i) => (
                <AnimatedWrapper key={category.category} animation="float-up" delay={i * 0.06}>
                  <div className="group relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-5 hover:border-blue-500/30 transition-all duration-300">
                      <h4 className="font-semibold text-blue-400 mb-3 text-sm uppercase tracking-wider">{category.category}</h4>
                      <ul className="space-y-2">
                        {category.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-gray-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/60" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            USE CASES — Grid cards
            ═══════════════════════════════════════════ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader badge="Use Cases" title="AI Solutions We Build" description="From knowledge systems to intelligent agents." alignment="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14 max-w-6xl mx-auto">
              {useCases.map((useCase, i) => (
                <AnimatedWrapper key={useCase.title} animation="float-up" delay={i * 0.06}>
                  <div className="group relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-blue-400">
                          {getIcon(useCase.icon, "w-5 h-5")}
                        </div>
                        <span className="text-xs font-mono text-gray-600">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">{useCase.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{useCase.description}</p>
                    </div>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CTA — Bold closing section
            ═══════════════════════════════════════════ */}
        <section className="py-24 relative overflow-hidden">
          <CTABackground />
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedWrapper animation="fade-up-slow" className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
                Build AI Applications That Deliver
              </h2>
              <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
                From RAG systems to multi-agent orchestration — our experts design, build, and deploy custom AI applications tailored to your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientButton size="lg" onClick={() => navigate("/contact")}>
                  <Calendar className="w-5 h-5 mr-2" />
                  Join the Waitlist
                </GradientButton>
                <GradientButton variant="secondary" size="lg" onClick={() => navigate("/clients")}>
                  <ArrowRight className="w-5 h-5 mr-2" />
                  View Case Studies
                </GradientButton>
              </div>
            </AnimatedWrapper>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DBlockPage;
