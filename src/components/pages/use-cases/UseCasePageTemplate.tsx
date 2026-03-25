/**
 * UseCasePageTemplate Component — Premium Redesign
 *
 * Reusable template for use case pages.
 * Redesigned with premium visual language matching MegamindPage/ServicePageTemplate.
 */

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { GradientButton } from "@/components/ui/gradient-button";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { TypewriterGradientText } from "@/components/ui/typewriter-text";
import type { UseCaseData } from "@/data/useCases";

interface UseCasePageTemplateProps {
  useCase: UseCaseData;
}

export function UseCasePageTemplate({ useCase }: UseCasePageTemplateProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title={`${useCase.hero.title} | Digitrans`}
        description={useCase.hero.description}
        canonicalUrl={`/use-cases/${useCase.slug}`}
      />
      <Navbar />

      <main>
        {/* ═══════════════════════════════════════════
            HERO — Immersive gradient with floating orbs
            ═══════════════════════════════════════════ */}
        <section className="relative pt-36 pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-950/40 via-black/80 to-black" />
            <div className="absolute top-20 left-[10%] w-72 h-72 bg-purple-600/15 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute top-40 right-[15%] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1.5s" }} />
            <div className="absolute bottom-20 left-[30%] w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "3s" }} />
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: "linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }} />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedWrapper animation="fade-up-slow" className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" />
                {useCase.hero.badge}
              </span>
              <TypewriterGradientText text={useCase.hero.title} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" duration={1.8} />
              <p className="text-xl text-purple-200/80 mb-4 font-medium">{useCase.hero.subtitle}</p>
              <p className="text-lg text-gray-300/90 mb-10 max-w-3xl mx-auto leading-relaxed">{useCase.hero.description}</p>
              <GradientButton size="lg" onClick={() => navigate("/contact")}>
                <Calendar className="w-5 h-5 mr-2" />
                {useCase.ctaText}
              </GradientButton>
            </AnimatedWrapper>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
        </section>

        {/* ═══════════════════════════════════════════
            BENEFITS — Numbered cards
            ═══════════════════════════════════════════ */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <SectionHeader badge="Benefits" title="Key Benefits" description="How this use case drives value for your business." alignment="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14 max-w-4xl mx-auto">
              {useCase.benefits.map((benefit, i) => (
                <AnimatedWrapper key={benefit.title} animation="float-up" delay={i * 0.08}>
                  <div className="group relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <span className="flex-shrink-0 text-2xl font-mono font-bold text-gray-700 group-hover:text-purple-500/60 transition-colors">{String(i + 1).padStart(2, '0')}</span>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{benefit.title}</h3>
                          <p className="text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
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
            RELATED INDUSTRIES — Link cards
            ═══════════════════════════════════════════ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader badge="Industries" title="Related Industries" description="Explore how this use case applies across industries." alignment="center" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-14 max-w-4xl mx-auto">
              {useCase.relatedIndustries.map((industry, i) => (
                <AnimatedWrapper key={industry.name} animation="scale-in" delay={i * 0.06}>
                  <Link to={industry.href} className="group block">
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-5 hover:border-purple-500/30 transition-all duration-300 text-center h-full">
                      <h3 className="text-base font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{industry.name}</h3>
                      <span className="text-purple-400 text-sm flex items-center justify-center gap-1.5">
                        Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </AnimatedWrapper>
              ))}
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
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
                Let's discuss how {useCase.hero.title.toLowerCase()} can transform your operations.
              </p>
              <GradientButton size="lg" onClick={() => navigate("/contact")}>
                <Calendar className="w-5 h-5 mr-2" />
                {useCase.ctaText}
              </GradientButton>
            </AnimatedWrapper>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default UseCasePageTemplate;
