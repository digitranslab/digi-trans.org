/**
 * AllamaPage Component — Premium Redesign
 * 
 * Product page for Allama — open-source AI-powered SOAR platform.
 * Redesigned with premium visual language matching MegamindPage/ServicePageTemplate.
 */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import { Calendar, Users, Check, Sparkles, ChevronDown, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GradientButton } from "@/components/ui/gradient-button";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
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

const getIcon = (iconName: string, className: string = "w-6 h-6") => {
  const Icon = (LucideIcons as any)[iconName];
  return Icon ? <Icon className={className} /> : null;
};

const AllamaPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeUseCase, setActiveUseCase] = useState(0);

  useEffect(() => {
    document.title = "Allama — AI-Powered Security Automation (SOAR) | Digitrans";
    document.querySelector('meta[name="description"]')?.setAttribute("content",
      "Allama is the open-source AI-powered SOAR platform. Autonomous investigation, adaptive triage, and intelligent playbook orchestration — deployed by security experts in weeks."
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
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-950/40 via-black/80 to-black" />
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-20 left-[10%] w-72 h-72 bg-purple-600/15 rounded-full blur-[100px] animate-pulse" />
              <div className="absolute top-40 right-[15%] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1.5s" }} />
              <div className="absolute bottom-20 left-[30%] w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "3s" }} />
            </div>
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: "linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedWrapper animation="fade-up-slow" className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" />
                {heroData.tagline}
              </span>
              <TypewriterGradientText text={heroData.headline} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" duration={1.8} />
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
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
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
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-6 text-center hover:border-purple-500/40 transition-all duration-300">
                      <div className="inline-flex p-2.5 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400 mb-3">
                        {getIcon(prop.icon, "w-5 h-5")}
                      </div>
                      {prop.metric && (
                        <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-1">{prop.metric.value}</div>
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
            <SectionHeader badge="Why Allama" title="Security Automation, Delivered" description="Four reasons security teams choose Digitrans." alignment="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14 max-w-5xl mx-auto">
              {valuePropositions.map((prop, i) => (
                <AnimatedWrapper key={prop.title} animation="float-up" delay={i * 0.06}>
                  <div className="group relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-400">
                          {getIcon(prop.icon, "w-5 h-5")}
                        </div>
                        <span className="text-xs font-mono text-gray-600">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{prop.title}</h3>
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
            <SectionHeader badge="Services" title="What We Deliver" description="End-to-end security automation from strategy to production." alignment="center" />
            <div className="max-w-6xl mx-auto mt-14 space-y-20">
              {features.map((feature, i) => (
                <AnimatedWrapper key={feature.id} animation={i % 2 === 0 ? "slide-right" : "slide-left"}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 text-white">
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
                      <p className="text-sm text-purple-400/80 italic border-l-2 border-purple-500/30 pl-4">"{feature.marketingAngle}"</p>
                    </div>
                    <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl blur-2xl" />
                        <div className="relative bg-gray-900/70 backdrop-blur-sm border border-gray-800/50 rounded-3xl overflow-hidden">
                          {feature.image ? (
                            <img src={feature.image} alt={`${feature.title}`} className="w-full h-auto" />
                          ) : (
                            <div className="p-8 min-h-[280px] flex items-center justify-center">
                              <div className="text-center">
                                <div className="inline-flex p-5 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 mb-4">
                                  {getIcon(feature.icon, "w-10 h-10 text-purple-400")}
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
            USE CASES — Interactive tabs
            ═══════════════════════════════════════════ */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <SectionHeader badge="Results" title="Real-World Impact" description="See how we've transformed security operations for our clients." alignment="center" />
            <div className="max-w-5xl mx-auto mt-14">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 mb-8 bg-gray-900/50 rounded-xl p-1 border border-gray-800/50">
                {useCases.map((uc, i) => (
                  <button
                    key={uc.title}
                    onClick={() => setActiveUseCase(i)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeUseCase === i
                        ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white border border-purple-500/30"
                        : "text-gray-500 hover:text-gray-300"
                    }`}
                  >
                    {uc.title}
                  </button>
                ))}
              </div>
              <AnimatedWrapper key={activeUseCase} animation="fade-up">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-6">{useCases[activeUseCase].title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-red-400" />
                        <span className="text-sm font-medium text-red-400">Problem</span>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">{useCases[activeUseCase].problem}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        <span className="text-sm font-medium text-blue-400">Solution</span>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">{useCases[activeUseCase].solution}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                        <span className="text-sm font-medium text-green-400">Result</span>
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed font-medium">{useCases[activeUseCase].result}</p>
                    </div>
                  </div>
                </div>
              </AnimatedWrapper>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            INTEGRATIONS — Category cards
            ═══════════════════════════════════════════ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader badge="Integrations" title="We Connect Your Security Stack" description="Our team integrates Allama with your existing tools." alignment="center" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14 max-w-6xl mx-auto">
              {integrations.map((category, i) => (
                <AnimatedWrapper key={category.category} animation="float-up" delay={i * 0.06}>
                  <div className="group relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-5 hover:border-purple-500/30 transition-all duration-300">
                      <h4 className="font-semibold text-purple-400 mb-3 text-sm uppercase tracking-wider">{category.category}</h4>
                      <ul className="space-y-2">
                        {category.tools.map((tool) => (
                          <li key={tool.name} className="flex items-center gap-2 text-sm text-gray-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500/60" />
                            {tool.name}
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
            AUTH + COMPARISON — Split layout
            ═══════════════════════════════════════════ */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              <AnimatedWrapper animation="slide-right" className="lg:col-span-2">
                <span className="inline-flex items-center px-3 py-1 mb-4 text-xs font-medium uppercase tracking-wider rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  Authentication
                </span>
                <h2 className="text-2xl font-bold text-white mb-6">Enterprise Auth</h2>
                <div className="space-y-3">
                  {authOptions.map((option) => (
                    <div key={option.name} className="flex items-center justify-between py-3 border-b border-gray-800/40 last:border-0">
                      <div>
                        <span className="text-sm font-medium text-white">{option.name}</span>
                        <p className="text-xs text-gray-500">{option.description}</p>
                      </div>
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                  ))}
                </div>
              </AnimatedWrapper>
              <AnimatedWrapper animation="slide-left" className="lg:col-span-3">
                <span className="inline-flex items-center px-3 py-1 mb-4 text-xs font-medium uppercase tracking-wider rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  Comparison
                </span>
                <h2 className="text-2xl font-bold text-white mb-6">Why Choose Allama</h2>
                <div className="space-y-4">
                  {competitors.map((comp) => (
                    <div key={comp.competitor} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-5">
                      <h4 className="text-sm font-semibold text-purple-300 mb-3">vs. {comp.competitor}</h4>
                      <div className="space-y-2">
                        {comp.aspects.slice(0, 3).map((a) => (
                          <div key={a.aspect} className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">{a.aspect}</span>
                            <div className="flex items-center gap-4">
                              <span className="text-green-400 font-medium">{a.allama}</span>
                              <span className="text-gray-600">vs</span>
                              <span className="text-gray-500">{a.competitor}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedWrapper>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CTA — Bold closing section
            ═══════════════════════════════════════════ */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-[20%] w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-[20%] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedWrapper animation="fade-up-slow" className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
                Automate Your SOC with AI
              </h2>
              <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
                Open-source, AI-native, and deployed by security experts. Allama transforms your security operations in weeks, not months.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientButton size="lg" onClick={() => navigate("/contact")}>
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Consultation
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

export default AllamaPage;
