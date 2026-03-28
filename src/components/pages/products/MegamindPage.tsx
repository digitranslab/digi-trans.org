/**
 * MegamindPage Component — Premium Redesign
 * 
 * Product page for Megamind — open-source sovereign AI platform by digitranslab.
 * Redesigned with premium visual language matching the service page template.
 */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import { Calendar, ExternalLink, Check, ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GradientButton } from "@/components/ui/gradient-button";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { TypewriterGradientText } from "@/components/ui/typewriter-text";
import { HeroBackground, HeroBottomFade, CTABackground } from "@/components/ui/hero-background";

import {
  heroData,
  productVariants,
  capabilities,
  mcpCategories,
  privacyFeatures,
  communityStats,
  links,
  cloudProviders,
  supportedPlatforms,
  apiEndpoints,
} from "@/data/megamind";

const getIcon = (iconName: string, className: string = "w-6 h-6") => {
  const Icon = (LucideIcons as any)[iconName];
  return Icon ? <Icon className={className} /> : null;
};

const MegamindPage: React.FC = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  const [activeCap, setActiveCap] = useState(0);

  useEffect(() => {
    document.title = "Megamind — Self-Hosted Sovereign AI Platform for Enterprise | Digitrans";
    document.querySelector('meta[name="description"]')?.setAttribute("content",
      "Megamind is the open-source sovereign AI platform for enterprise. Self-hosted, air-gapped, on-premise deployment with fine-tuned models, MCP integrations, and OpenAI-compatible API. By digitranslab."
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
          <HeroBackground />
          
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
                <GradientButton variant="secondary" size="lg" onClick={() => window.open(heroData.secondaryCTA.href, "_blank")}>
                  <ExternalLink className="w-5 h-5 mr-2" />
                  {heroData.secondaryCTA.label}
                </GradientButton>
              </div>
            </AnimatedWrapper>
          </div>
          <HeroBottomFade />
        </section>

        {/* ═══════════════════════════════════════════
            COMMUNITY STATS — Impact metrics bar
            ═══════════════════════════════════════════ */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {communityStats.map((stat, i) => (
                <AnimatedWrapper key={stat.label} animation="scale-in" delay={i * 0.08}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-6 text-center hover:border-purple-500/40 transition-all duration-300">
                      <div className="inline-flex p-2.5 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400 mb-3">
                        {getIcon(stat.icon, "w-5 h-5")}
                      </div>
                      <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-1">{stat.value}</div>
                      <p className="text-sm text-gray-400">{stat.label}</p>
                    </div>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            PRODUCT SUITE — Numbered cards grid
            ═══════════════════════════════════════════ */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <SectionHeader badge="Enterprise Platform" title="Sovereign AI Stack" description="Everything you need to deploy, operate, and scale AI within your infrastructure." alignment="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14 max-w-6xl mx-auto">
              {productVariants.map((variant, i) => (
                <AnimatedWrapper key={variant.name} animation="float-up" delay={i * 0.06}>
                  <div className="group relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-5 hover:border-purple-500/30 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-400">
                          {getIcon(variant.icon, "w-5 h-5")}
                        </div>
                        <span className="text-xs font-mono text-gray-600">{String(i + 1).padStart(2, '0')}</span>
                        {variant.status === "coming-soon" && (
                          <span className="text-xs px-2 py-0.5 bg-yellow-500/20 text-yellow-300 rounded-full ml-auto">Coming Soon</span>
                        )}
                      </div>
                      <h3 className="text-base font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{variant.name}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-4">{variant.description}</p>
                      <ul className="space-y-1.5">
                        {variant.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                            <div className="flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-br from-green-500/80 to-emerald-500/80 flex items-center justify-center">
                              <Check className="w-2.5 h-2.5 text-white" />
                            </div>
                            {f}
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
            CAPABILITIES — Alternating layout
            ═══════════════════════════════════════════ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader badge="Capabilities" title="What Megamind Can Do" description="From local model inference to cloud AI orchestration — a complete AI toolkit." alignment="center" />

            {/* Tab buttons */}
            <div className="flex flex-wrap justify-center gap-2 mt-10 mb-10">
              {capabilities.map((cap, i) => (
                <button
                  key={cap.id}
                  onClick={() => setActiveCap(i)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeCap === i
                      ? "bg-gray-800 text-white border border-gray-700"
                      : "text-gray-500 hover:text-gray-300 border border-transparent"
                  }`}
                >
                  {cap.title}
                </button>
              ))}
            </div>

            {/* Active capability content */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                      {getIcon(capabilities[activeCap].icon, "w-5 h-5")}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{capabilities[activeCap].title}</h3>
                  </div>
                  <p className="text-gray-400 mb-6 leading-relaxed">{capabilities[activeCap].description}</p>
                  <ul className="space-y-2.5 mb-6">
                    {capabilities[activeCap].capabilities.map((c) => (
                      <li key={c} className="flex items-start gap-3 text-gray-300">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-green-500/80 to-emerald-500/80 flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-purple-400/80 italic border-l-2 border-purple-500/30 pl-4">"{capabilities[activeCap].marketingAngle}"</p>
                </div>
                <div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl blur-2xl" />
                    <div className="relative bg-gray-900/70 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 min-h-[280px] flex items-center justify-center">
                      <div className="text-center">
                        <div className="inline-flex p-5 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 mb-4">
                          {getIcon(capabilities[activeCap].icon, "w-10 h-10 text-purple-400")}
                        </div>
                        <p className="text-lg font-semibold text-white mb-2">{capabilities[activeCap].title}</p>
                        <p className="text-sm text-gray-500">{capabilities[activeCap].capabilities.length} capabilities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            MCP INTEGRATIONS — Category cards
            ═══════════════════════════════════════════ */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <SectionHeader badge="Agentic AI" title="MCP Tool Integrations" description="Model Context Protocol transforms Megamind from a chatbot into an agentic AI platform." alignment="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14 max-w-6xl mx-auto">
              {mcpCategories.map((cat, i) => (
                <AnimatedWrapper key={cat.category} animation="float-up" delay={i * 0.08}>
                  <div className="group relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-5 hover:border-purple-500/30 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-400">
                          {getIcon(cat.icon, "w-5 h-5")}
                        </div>
                        <h4 className="font-semibold text-white">{cat.category}</h4>
                      </div>
                      <ul className="space-y-3">
                        {cat.tools.map((tool) => (
                          <li key={tool.name}>
                            <span className="text-sm font-medium text-gray-200">{tool.name}</span>
                            <p className="text-xs text-gray-500 mt-0.5">{tool.description}</p>
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
            PRIVACY — Split layout with features
            ═══════════════════════════════════════════ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              <AnimatedWrapper animation="slide-right" className="lg:col-span-3">
                <span className="inline-flex items-center px-3 py-1 mb-4 text-xs font-medium uppercase tracking-wider rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  Privacy First
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-snug">Your Data, Your Control</h2>
                <p className="text-gray-400 leading-relaxed text-base mb-8">
                  Zero data collection by default. Everything stays on your device. Megamind is designed from the ground up for organizations that cannot compromise on data sovereignty — no telemetry, no cloud dependencies, no exceptions.
                </p>
                <div className="space-y-4">
                  {privacyFeatures.map((feat, i) => (
                    <div key={feat.title} className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400">
                        {getIcon(feat.icon, "w-4 h-4")}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-0.5">{feat.title}</h4>
                        <p className="text-xs text-gray-500">{feat.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedWrapper>
              <AnimatedWrapper animation="slide-left" className="lg:col-span-2">
                <div className="bg-gradient-to-br from-purple-950/40 to-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-400 mb-4">Cloud Providers</h3>
                  <p className="text-xs text-gray-500 mb-4">Use local models for privacy or connect to cloud providers — all through one interface.</p>
                  <div className="space-y-2.5">
                    {cloudProviders.map((provider) => (
                      <div key={provider.name} className="flex items-center justify-between py-2 border-b border-gray-800/40 last:border-0">
                        <div>
                          <span className="text-sm font-medium text-white">{provider.name}</span>
                          <p className="text-xs text-gray-500">{provider.models}</p>
                        </div>
                        <span className="text-xs px-2 py-0.5 bg-purple-900/30 text-purple-300 rounded-full">{provider.integration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedWrapper>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            PLATFORM SUPPORT — Sleek tag layout
            ═══════════════════════════════════════════ */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <SectionHeader badge="Cross-Platform" title="Runs Everywhere" description="macOS, Windows, Linux — with automatic GPU acceleration." alignment="center" />
            <div className="max-w-5xl mx-auto mt-14 space-y-6">
              {supportedPlatforms.map((plat, i) => (
                <AnimatedWrapper key={plat.platform} animation="fade-up" delay={i * 0.08}>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <span className="flex-shrink-0 w-24 text-xs font-semibold uppercase tracking-wider text-purple-400">{plat.platform}</span>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 text-sm bg-gray-900/60 text-gray-300 border border-gray-800/60 rounded-lg">{plat.architecture}</span>
                      <span className="px-3 py-1.5 text-sm bg-gray-900/60 text-gray-300 border border-gray-800/60 rounded-lg">{plat.gpuSupport}</span>
                    </div>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            API REFERENCE — Clean table
            ═══════════════════════════════════════════ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader badge="Developer API" title="OpenAI-Compatible REST API" description="Drop-in replacement at localhost:1337 — same interface, complete privacy." alignment="center" />
            <div className="max-w-4xl mx-auto mt-14">
              <AnimatedWrapper animation="fade-up-slow">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-gray-700/50">
                          <th className="px-6 py-4 text-sm font-medium text-purple-300">Endpoint</th>
                          <th className="px-6 py-4 text-sm font-medium text-purple-300">Method</th>
                          <th className="px-6 py-4 text-sm font-medium text-purple-300">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {apiEndpoints.map((ep) => (
                          <tr key={ep.endpoint} className="border-b border-gray-800/50 hover:bg-white/5 transition-colors">
                            <td className="px-6 py-3 text-sm font-mono text-gray-200">{ep.endpoint}</td>
                            <td className="px-6 py-3">
                              <span className="text-xs px-2 py-0.5 bg-blue-900/30 text-blue-300 rounded font-mono">{ep.method}</span>
                            </td>
                            <td className="px-6 py-3 text-sm text-gray-400">{ep.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </AnimatedWrapper>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
                Deploy Sovereign AI in Your Organization
              </h2>
              <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
                Megamind is {links.license} licensed — inspect, audit, modify, and fork the entire codebase. Self-host with full compliance and zero external dependencies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientButton size="lg" onClick={() => navigate("/contact")}>
                  <Calendar className="w-5 h-5 mr-2" />
                  Talk to Our Team
                </GradientButton>
                <GradientButton variant="secondary" size="lg" onClick={() => window.open(links.github, "_blank")}>
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View on GitHub
                </GradientButton>
              </div>
              <div className="flex flex-wrap gap-6 justify-center mt-8 text-sm text-gray-500">
                <a href={links.web} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5" /> chat.megamind.ai
                </a>
                <a href={links.discord} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5" /> Discord Community
                </a>
                <a href={links.docs} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5" /> Documentation
                </a>
              </div>
            </AnimatedWrapper>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MegamindPage;
