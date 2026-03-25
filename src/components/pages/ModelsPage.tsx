/**
 * ModelsPage Component — Premium Redesign
 * 
 * Showcase page for Digitrans Lab's fine-tuned AI model portfolio.
 * Redesigned with premium visual language matching MegamindPage/ServicePageTemplate.
 */

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import { Calendar, ExternalLink, Check, Clock, Sparkles, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GradientButton } from "@/components/ui/gradient-button";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { TypewriterGradientText } from "@/components/ui/typewriter-text";
import { heroData, modelPhilosophy, modelCards, upcomingModels, fineTuningService } from "@/data/models";

const getIcon = (iconName: string, className: string = "w-6 h-6") => {
  const Icon = (LucideIcons as any)[iconName];
  return Icon ? <Icon className={className} /> : null;
};

const ModelsPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "AI Models — Fine-Tuned for Agentic AI | Digitrans";
    document.querySelector('meta[name="description"]')?.setAttribute("content",
      "Explore Digitrans Lab's fine-tuned AI models: Jan-v1 (91.1% SimpleQA), Jan-Nano-128k, Jan-Nano-32k, and Lucy. Compact models optimized for reasoning, tool calling, and deep research."
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
                {heroData.badge}
              </span>
              <TypewriterGradientText text={heroData.headline} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" duration={1.8} />
              <p className="text-lg md:text-xl text-gray-300/90 mb-10 max-w-3xl mx-auto leading-relaxed">{heroData.description}</p>
              <GradientButton size="lg" onClick={() => navigate(heroData.cta.href)}>
                <Calendar className="w-5 h-5 mr-2" />
                {heroData.cta.label}
              </GradientButton>
            </AnimatedWrapper>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
        </section>

        {/* ═══════════════════════════════════════════
            PHILOSOPHY — Accent panel
            ═══════════════════════════════════════════ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <AnimatedWrapper animation="fade-up-slow">
              <div className="max-w-4xl mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl" />
                <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400">
                      {getIcon("Brain", "w-6 h-6")}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Our Model Philosophy</h3>
                      <p className="text-gray-300 leading-relaxed">{modelPhilosophy}</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            MODEL CARDS — Premium grid
            ═══════════════════════════════════════════ */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <SectionHeader badge="Model Portfolio" title="Production-Ready Models" description="Four fine-tuned models covering reasoning, research, and edge deployment." alignment="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 max-w-5xl mx-auto">
              {modelCards.map((model, i) => (
                <AnimatedWrapper key={model.name} animation="float-up" delay={i * 0.08}>
                  <div className="group relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-400">
                          {getIcon(model.icon, "w-5 h-5")}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">{model.name}</h3>
                          <span className="text-xs text-purple-400">{model.parameters} parameters</span>
                        </div>
                        <span className="text-xs font-mono text-gray-600 ml-auto">{String(i + 1).padStart(2, '0')}</span>
                      </div>

                      <p className="text-sm text-gray-500 mb-4 leading-relaxed">{model.specialty}</p>

                      {/* Benchmark + Context */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-black/30 rounded-xl p-3 border border-gray-800/30">
                          <div className="text-xs text-gray-500 mb-1">{model.benchmark.metric}</div>
                          <div className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{model.benchmark.value}</div>
                        </div>
                        {model.contextWindow && (
                          <div className="bg-black/30 rounded-xl p-3 border border-gray-800/30">
                            <div className="text-xs text-gray-500 mb-1">Context Window</div>
                            <div className="text-sm font-medium text-gray-200">{model.contextWindow}</div>
                          </div>
                        )}
                      </div>

                      {/* Hardware */}
                      <div className="mb-4">
                        <div className="text-xs text-gray-500 mb-2">Hardware Requirements</div>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs px-2.5 py-1 bg-gray-800/50 text-gray-400 rounded-lg border border-gray-700/30">Min: {model.hardware.minimum}</span>
                          <span className="text-xs px-2.5 py-1 bg-gray-800/50 text-gray-400 rounded-lg border border-gray-700/30">Rec: {model.hardware.recommended}</span>
                        </div>
                      </div>

                      {/* Deployment */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {model.deploymentOptions.map((opt) => (
                          <span key={opt} className="text-xs px-2 py-0.5 bg-purple-900/30 text-purple-300 rounded-full border border-purple-500/20">{opt}</span>
                        ))}
                      </div>

                      {/* Quantizations */}
                      {model.quantizations && (
                        <div className="mb-4">
                          <div className="text-xs text-gray-500 mb-1.5">Quantizations (GGUF)</div>
                          <div className="flex flex-wrap gap-1.5">
                            {model.quantizations.map((q) => (
                              <span key={q} className="text-xs px-2 py-0.5 bg-black/30 text-gray-400 rounded border border-gray-800/30">{q}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      {model.basedOn && (
                        <p className="text-xs text-gray-600 mb-3">Based on: <span className="text-gray-400">{model.basedOn}</span></p>
                      )}

                      {/* Links */}
                      <div className="flex items-center gap-4 pt-3 border-t border-gray-800/30">
                        <a href={model.huggingFaceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300 transition-colors">
                          <ExternalLink className="w-3.5 h-3.5" /> HuggingFace
                        </a>
                        {model.researchPaper && (
                          <a href={model.researchPaper.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                            <ExternalLink className="w-3.5 h-3.5" /> Paper
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            UPCOMING MODELS — Coming soon cards
            ═══════════════════════════════════════════ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader badge="Coming Soon" title="Next Generation" description="Models in development for multimodal and voice AI." alignment="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14 max-w-3xl mx-auto">
              {upcomingModels.map((model, i) => (
                <AnimatedWrapper key={model.name} animation="float-up" delay={i * 0.08}>
                  <div className="group relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-400">
                          {getIcon(model.icon, "w-5 h-5")}
                        </div>
                        <h4 className="font-semibold text-white">{model.name}</h4>
                        <span className="text-xs px-2 py-0.5 bg-yellow-500/20 text-yellow-300 rounded-full flex items-center gap-1 ml-auto">
                          <Clock className="w-3 h-3" /> Soon
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed">{model.description}</p>
                    </div>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            FINE-TUNING SERVICE — Split layout
            ═══════════════════════════════════════════ */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <SectionHeader badge="Custom Training" title={fineTuningService.title} description={fineTuningService.description} alignment="center" />
              <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                <AnimatedWrapper animation="slide-right" className="lg:col-span-2">
                  <div className="bg-gradient-to-br from-purple-950/40 to-gray-900/60 border border-purple-500/20 rounded-2xl p-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-purple-400 mb-4">Pricing & Infrastructure</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Starting Cost</div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{fineTuningService.startingCost}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Hardware</div>
                        <p className="text-sm text-gray-300">{fineTuningService.hardware}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedWrapper>
                <AnimatedWrapper animation="slide-left" className="lg:col-span-3">
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-purple-400 mb-4">Capabilities</h4>
                    <ul className="space-y-3">
                      {fineTuningService.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-3 text-gray-300">
                          <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-green-500/80 to-emerald-500/80 flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedWrapper>
              </div>
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
                Train Models for Your Domain
              </h2>
              <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
                Compact, efficient models fine-tuned on your data. From reasoning to tool calling — models that run on consumer hardware and outperform giants.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientButton size="lg" onClick={() => navigate("/contact")}>
                  <Calendar className="w-5 h-5 mr-2" />
                  Discuss Custom Training
                </GradientButton>
                <GradientButton variant="secondary" size="lg" onClick={() => window.open("https://huggingface.co/digitranslab", "_blank")}>
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View on HuggingFace
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

export default ModelsPage;
