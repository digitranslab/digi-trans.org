/**
 * SolutionPageTemplate Component — Premium Redesign
 * 
 * Reusable template for industry solution pages.
 * Redesigned with premium visual language matching MegamindPage/ServicePageTemplate.
 */

import { Link, useNavigate } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import { ArrowRight, Calendar, CheckCircle, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GradientButton } from "@/components/ui/gradient-button";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { TypewriterGradientText } from "@/components/ui/typewriter-text";
import { HeroBackground, HeroBottomFade, CTABackground } from "@/components/ui/hero-background";
import type { SolutionData } from "@/data/solutions";

interface SolutionPageTemplateProps {
  solution: SolutionData;
}

const getIcon = (iconName: string, className: string = "w-6 h-6") => {
  const Icon = (LucideIcons as any)[iconName];
  return Icon ? <Icon className={className} /> : null;
};

export function SolutionPageTemplate({ solution }: SolutionPageTemplateProps) {
  const navigate = useNavigate();

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
                {solution.hero.badge}
              </span>
              <TypewriterGradientText text={solution.hero.title} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" duration={1.8} />
              <p className="text-lg md:text-xl text-gray-300/90 mb-10 max-w-3xl mx-auto leading-relaxed">{solution.hero.description}</p>
              <GradientButton size="lg" onClick={() => navigate("/contact")}>
                <Calendar className="w-5 h-5 mr-2" />
                {solution.ctaText}
              </GradientButton>
            </AnimatedWrapper>
          </div>
          <HeroBottomFade />
        </section>

        {/* ═══════════════════════════════════════════
            OVERVIEW — Accent panel
            ═══════════════════════════════════════════ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <AnimatedWrapper animation="fade-up-slow">
              <div className="max-w-4xl mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl" />
                <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-8">
                  <p className="text-gray-300 leading-relaxed text-lg">{solution.overview}</p>
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CHALLENGES — Numbered cards grid
            ═══════════════════════════════════════════ */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <SectionHeader badge="Challenges" title="Key Industry Challenges" description="The unique challenges we help you overcome." alignment="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14 max-w-6xl mx-auto">
              {solution.challenges.map((challenge, i) => (
                <AnimatedWrapper key={challenge.title} animation="float-up" delay={i * 0.06}>
                  <div className="group relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-5 hover:border-purple-500/30 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-400">
                          {getIcon(challenge.icon, "w-5 h-5")}
                        </div>
                        <span className="text-xs font-mono text-gray-600">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <h3 className="text-base font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{challenge.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{challenge.description}</p>
                    </div>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SERVICES — How We Help cards
            ═══════════════════════════════════════════ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader badge="Solutions" title="How We Help" description="Our services tailored for your industry." alignment="center" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14 max-w-5xl mx-auto">
              {solution.services.map((service, i) => (
                <AnimatedWrapper key={service.title} animation="float-up" delay={i * 0.08}>
                  <Link to={service.href} className="block h-full">
                    <div className="group relative h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300">
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed mb-4">{service.description}</p>
                        <span className="text-purple-400 text-sm flex items-center gap-1.5">
                          Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            COMPLIANCE — Conditional tag layout
            ═══════════════════════════════════════════ */}
        {solution.compliance && solution.compliance.length > 0 && (
          <section className="py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-transparent" />
            <div className="container mx-auto px-4 relative z-10">
              <SectionHeader badge="Compliance" title="Regulatory Expertise" description="We understand your compliance requirements." alignment="center" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-14 max-w-5xl mx-auto">
                {solution.compliance.map((item, i) => (
                  <AnimatedWrapper key={item.name} animation="scale-in" delay={i * 0.06}>
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-5 hover:border-purple-500/30 transition-all duration-300 h-full">
                      <h4 className="font-semibold text-purple-400 mb-1.5 text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
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
        {solution.caseStudies && solution.caseStudies.length > 0 && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <SectionHeader badge="Proven Results" title="Client Success Stories" description="Measurable impact from real enterprise engagements." alignment="center" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14 max-w-5xl mx-auto">
                {solution.caseStudies.map((study, i) => (
                  <AnimatedWrapper key={study.title} animation="float-up" delay={i * 0.08}>
                    <div className="group relative h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 flex flex-col">
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{study.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">{study.description}</p>
                        <ul className="space-y-1.5 pt-4 border-t border-gray-800/50">
                          {study.results.map((result) => (
                            <li key={result} className="flex items-start gap-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                              {result}
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
        )}

        {/* ═══════════════════════════════════════════
            CTA — Bold closing section
            ═══════════════════════════════════════════ */}
        <section className="py-24 relative overflow-hidden">
          <CTABackground />
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedWrapper animation="fade-up-slow" className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
                {solution.ctaText}
              </h2>
              <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
                Let's discuss how AI and data can transform your operations.
              </p>
              <GradientButton size="lg" onClick={() => navigate("/contact")}>
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

export default SolutionPageTemplate;
