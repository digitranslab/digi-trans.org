/**
 * ServicePageTemplate Component - Premium Redesign
 * 
 * Professional, captivating template for AI & Data service pages.
 * Designed to convey deep technical expertise and enterprise credibility.
 */

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import { ArrowRight, Check, Calendar, ChevronDown, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GradientButton } from "@/components/ui/gradient-button";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { TypewriterGradientText } from "@/components/ui/typewriter-text";
import { HeroBackground, HeroBottomFade, CTABackground } from "@/components/ui/hero-background";
import type { ServiceData } from "@/data/services";
import type { ServiceData as NewServiceData } from "@/data/services-new";

interface ServicePageTemplateProps {
  service: ServiceData | NewServiceData;
}

const getIcon = (iconName: string, className: string = "w-6 h-6") => {
  const Icon = (LucideIcons as any)[iconName];
  return Icon ? <Icon className={className} /> : null;
};

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = React.useState(0);

  const useCases = 'useCases' in service ? service.useCases : undefined;
  const keyBenefits = 'keyBenefits' in service ? service.keyBenefits : undefined;

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main>
        {/* ═══════════════════════════════════════════
            HERO — Immersive gradient with floating orbs
            ═══════════════════════════════════════════ */}
        <section className="relative pt-36 pb-24 overflow-hidden">
          {/* Animated background */}
          <HeroBackground />
          
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedWrapper animation="fade-up-slow" className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" />
                {service.hero.badge}
              </span>
              
              <TypewriterGradientText 
                text={service.hero.title}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                duration={1.8}
              />
              
              <p className="text-lg md:text-xl text-gray-300/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                {service.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientButton size="lg" onClick={() => navigate('/contact')}>
                  <Calendar className="w-5 h-5 mr-2" />
                  {service.ctaText}
                </GradientButton>
              </div>
            </AnimatedWrapper>
          </div>

          {/* Bottom fade */}
          <HeroBottomFade />
        </section>


        {/* ═══════════════════════════════════════════
            VALUE PROPS — Impact metrics bar
            ═══════════════════════════════════════════ */}
        {service.valueProps && (
          <section className="py-16 relative">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {service.valueProps.map((prop, index) => (
                  <AnimatedWrapper key={prop.title} animation="scale-in" delay={index * 0.08}>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-6 text-center hover:border-purple-500/40 transition-all duration-300">
                        <div className="inline-flex p-2.5 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400 mb-3">
                          {getIcon(prop.icon, "w-5 h-5")}
                        </div>
                        <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-1">
                          {prop.metric}
                        </div>
                        <h3 className="text-sm font-semibold text-white mb-1">{prop.title}</h3>
                        <p className="text-xs text-gray-500">{prop.description}</p>
                      </div>
                    </div>
                  </AnimatedWrapper>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══════════════════════════════════════════
            OVERVIEW — Split layout with benefits
            ═══════════════════════════════════════════ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              {/* Overview text */}
              <AnimatedWrapper animation="slide-right" className="lg:col-span-3">
                <span className="inline-flex items-center px-3 py-1 mb-4 text-xs font-medium uppercase tracking-wider rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  Overview
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-snug">
                  {service.valuePropsTitle || "The Digitrans Advantage"}
                </h2>
                <p className="text-gray-400 leading-relaxed text-base">
                  {service.overview}
                </p>
              </AnimatedWrapper>

              {/* Key benefits sidebar */}
              {keyBenefits && (
                <AnimatedWrapper animation="slide-left" className="lg:col-span-2">
                  <div className="bg-gradient-to-br from-purple-950/40 to-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-400 mb-4">Key Benefits</h3>
                    <div className="space-y-3">
                      {keyBenefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm text-gray-300 leading-snug">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedWrapper>
              )}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            DELIVERABLES — Numbered cards grid
            ═══════════════════════════════════════════ */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <SectionHeader
              badge="What We Deliver"
              title="Capabilities & Deliverables"
              description="Tangible outcomes backed by deep technical expertise."
              alignment="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-14 max-w-7xl mx-auto">
              {service.deliverables.map((deliverable, index) => (
                <AnimatedWrapper key={deliverable.title} animation="float-up" delay={index * 0.06}>
                  <div className="group relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-5 hover:border-purple-500/30 transition-all duration-300">
                      {/* Number + Icon header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-400">
                          {getIcon(deliverable.icon, "w-5 h-5")}
                        </div>
                        <span className="text-xs font-mono text-gray-600">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                      <h3 className="text-base font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{deliverable.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{deliverable.description}</p>
                    </div>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════
            USE CASES — Interactive showcase
            ═══════════════════════════════════════════ */}
        {useCases && useCases.length > 0 && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <SectionHeader
                badge="Applications"
                title="Real-World Use Cases"
                description="How leading organizations apply these capabilities to drive measurable impact."
                alignment="center"
              />
              
              <div className="max-w-6xl mx-auto mt-14">
                {/* Use case tabs — browser-tab style */}
                <AnimatedWrapper animation="fade-in">
                  <div className={`grid grid-cols-2 sm:grid-cols-3 ${useCases.length <= 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-6'} gap-px bg-gray-800/40 rounded-xl overflow-hidden border border-gray-800/60 mb-12`}>
                    {useCases.map((uc, index) => (
                      <button
                        key={uc.title}
                        onClick={() => setActiveUseCase(index)}
                        className={`relative px-4 py-3.5 text-sm font-medium transition-all duration-200 text-center ${
                          activeUseCase === index
                            ? "bg-purple-600/20 text-white border-b-2 border-purple-500"
                            : "bg-gray-900/80 text-gray-500 hover:bg-gray-900/60 hover:text-gray-300 border-b-2 border-transparent"
                        }`}
                      >
                        {uc.title}
                      </button>
                    ))}
                  </div>
                </AnimatedWrapper>

                {/* Active use case detail */}
                <AnimatedWrapper animation="fade-in-blur" key={activeUseCase}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {useCases[activeUseCase].title}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {useCases[activeUseCase].description}
                      </p>
                      <div className="space-y-3">
                        {useCases[activeUseCase].benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-green-500/80 to-emerald-500/80 flex items-center justify-center">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-gray-300">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8">
                        <GradientButton size="md" onClick={() => navigate('/contact')}>
                          Discuss This Use Case
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </GradientButton>
                      </div>
                    </div>
                    
                    {/* Visual panel */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl blur-2xl" />
                      <div className="relative bg-gray-900/70 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 min-h-[300px] flex items-center justify-center">
                        <div className="text-center">
                          <div className="inline-flex p-5 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 mb-4">
                            <Sparkles className="w-10 h-10 text-purple-400" />
                          </div>
                          <p className="text-lg font-semibold text-white mb-2">{useCases[activeUseCase].title}</p>
                          <p className="text-sm text-gray-500">{useCases[activeUseCase].benefits.length} key outcomes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedWrapper>
              </div>
            </div>
          </section>
        )}

        {/* ═══════════════════════════════════════════
            PROCESS — Connected timeline
            ═══════════════════════════════════════════ */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <SectionHeader
              badge="Our Approach"
              title="Engagement Process"
              description="A proven methodology refined across 500+ enterprise engagements."
              alignment="center"
            />
            
            <div className="max-w-4xl mx-auto mt-14">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-purple-500/50 md:-translate-x-px" />
                
                {service.process.map((step, index) => (
                  <AnimatedWrapper key={step.step} animation={index % 2 === 0 ? "slide-right" : "slide-left"} delay={index * 0.1}>
                    <div className={`relative flex items-start gap-6 mb-10 last:mb-0 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}>
                      {/* Content */}
                      <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                        <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                      </div>
                      
                      {/* Step number node */}
                      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-purple-500/30 z-10">
                        {step.step}
                      </div>
                      
                      {/* Spacer for alternating layout */}
                      <div className="hidden md:block flex-1" />
                    </div>
                  </AnimatedWrapper>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            TECHNOLOGIES — Sleek tag layout
            ═══════════════════════════════════════════ */}
        {service.technologies && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <SectionHeader
                badge="Tech Stack"
                title="Technologies We Work With"
                description="Industry-leading tools and platforms — vendor-agnostic, open-standards-first."
                alignment="center"
              />
              
              <div className="max-w-5xl mx-auto mt-14 space-y-6">
                {service.technologies.map((tech, index) => (
                  <AnimatedWrapper key={tech.category} animation="fade-up" delay={index * 0.08}>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                      <span className="flex-shrink-0 w-32 text-xs font-semibold uppercase tracking-wider text-purple-400">
                        {tech.category}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {tech.items.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1.5 text-sm bg-gray-900/60 text-gray-300 border border-gray-800/60 rounded-lg hover:border-purple-500/30 hover:text-purple-300 transition-all duration-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AnimatedWrapper>
                ))}
              </div>
            </div>
          </section>
        )}


        {/* ═══════════════════════════════════════════
            CASE STUDIES — Prominent metrics cards
            ═══════════════════════════════════════════ */}
        {service.caseStudies && service.caseStudies.length > 0 && (
          <section className="py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-transparent" />
            <div className="container mx-auto px-4 relative z-10">
              <SectionHeader
                badge="Proven Results"
                title="Client Success Stories"
                description="Measurable impact from real enterprise engagements."
                alignment="center"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 max-w-6xl mx-auto">
                {service.caseStudies.map((study, index) => (
                  <AnimatedWrapper key={study.title} animation="float-up" delay={index * 0.1}>
                    <div className="group relative h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 flex flex-col">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="px-2.5 py-1 bg-blue-500/15 text-blue-400 text-xs font-medium rounded-full border border-blue-500/20">
                            {study.industry}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{study.title}</h3>
                        <p className="text-sm text-gray-500 mb-6 flex-1 leading-relaxed">{study.description}</p>
                        
                        {/* Metrics bar */}
                        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-800/50">
                          {study.metrics.map((metric) => (
                            <div key={metric.label} className="text-center">
                              <div className="text-lg font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                                {metric.value}
                              </div>
                              <div className="text-[10px] text-gray-600 uppercase tracking-wider mt-0.5">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AnimatedWrapper>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══════════════════════════════════════════
            FAQ — Clean accordion
            ═══════════════════════════════════════════ */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <SectionHeader
                badge="FAQ"
                title="Frequently Asked Questions"
                description="Expert answers to common questions."
                alignment="center"
              />
              
              <div className="max-w-3xl mx-auto mt-14 space-y-3">
                {service.faqs.map((faq, index) => (
                  <AnimatedWrapper key={index} animation="fade-up" delay={index * 0.05}>
                    <div className={`border rounded-xl transition-all duration-300 ${
                      openFaq === index 
                        ? "border-purple-500/30 bg-purple-950/20" 
                        : "border-gray-800/50 bg-gray-900/30 hover:border-gray-700/50"
                    }`}>
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full p-5 text-left flex items-center justify-between gap-4"
                        aria-expanded={openFaq === index}
                      >
                        <span className="font-medium text-white text-sm">{faq.question}</span>
                        <ChevronDown className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-purple-400' : ''}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </AnimatedWrapper>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══════════════════════════════════════════
            RELATED — Minimal link cards
            ═══════════════════════════════════════════ */}
        {service.relatedContent && service.relatedContent.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-600 mb-6 text-center">Explore Related</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {service.relatedContent.map((content, index) => (
                    <AnimatedWrapper key={content.title} animation="scale-in" delay={index * 0.08}>
                      <Link to={content.href} className="group block">
                        <div className="bg-gray-900/40 border border-gray-800/40 rounded-xl p-5 hover:border-purple-500/30 hover:bg-gray-900/60 transition-all duration-300">
                          <span className="text-[10px] text-purple-500 uppercase tracking-widest font-medium">
                            {content.type.replace("-", " ")}
                          </span>
                          <h4 className="text-sm font-semibold text-white mt-1.5 group-hover:text-purple-300 transition-colors flex items-center gap-2">
                            {content.title}
                            <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:translate-x-1 group-hover:text-purple-400 transition-all duration-300" />
                          </h4>
                        </div>
                      </Link>
                    </AnimatedWrapper>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ═══════════════════════════════════════════
            CTA — Bold closing section
            ═══════════════════════════════════════════ */}
        <section className="py-24 relative overflow-hidden">
          <CTABackground />
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedWrapper animation="fade-up-slow" className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
                Let's discuss how we can help transform your {service.category.toLowerCase()} capabilities.
              </p>
              <GradientButton size="lg" onClick={() => navigate('/contact')}>
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Consultation
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
