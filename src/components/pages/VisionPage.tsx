/**
 * Vision Page Component — Premium Redesign
 *
 * Renders the Digitrans vision with premium visual language.
 */

import { Link } from "react-router-dom";
import {
  ArrowRight,
  AlertTriangle,
  Eye,
  Lightbulb,
  Code,
  Rocket,
  TrendingUp,
  Play,
  Check,
  Sparkles,
  Calendar,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GradientButton } from "@/components/ui/gradient-button";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import SEO from "@/components/SEO";
import { TypewriterGradientText } from "@/components/ui/typewriter-text";
import { HeroBackground, HeroBottomFade, CTABackground } from "@/components/ui/hero-background";
import { visionData } from "@/data/vision";

const pillarIcons = [
  <Eye className="w-6 h-6" />,
  <Code className="w-6 h-6" />,
  <Rocket className="w-6 h-6" />,
  <TrendingUp className="w-6 h-6" />,
];

const VisionPage = () => {
  const { hero, efficiency, operationalizationWall, valueProposition, pillars, cta } = visionData;

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Vision | Digitrans — Next-Generation Business Efficiency"
        description={hero.description}
        canonicalUrl="/vision"
        keywords={["AI vision", "operationalization", "industrial AI", "digital transformation", "Digitrans"]}
      />
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
                {hero.badge}
              </span>
              <TypewriterGradientText text={hero.title} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" duration={1.8} />
              <p className="text-xl text-purple-200/80 mb-4 font-medium">{hero.subtitle}</p>
              <p className="text-lg text-gray-300/90 max-w-3xl mx-auto leading-relaxed">{hero.description}</p>
            </AnimatedWrapper>
          </div>
          <HeroBottomFade />
        </section>

        {/* ═══════════════════════════════════════════
            EFFICIENCY — Accent panel
            ═══════════════════════════════════════════ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader badge="The Opportunity" title={efficiency.title} description="" alignment="center" />
            <div className="max-w-4xl mx-auto mt-14">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl" />
                <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-8 space-y-5">
                  {efficiency.paragraphs.map((paragraph: string, i: number) => (
                    <AnimatedWrapper key={i} animation="fade-up-slow" delay={i * 0.1}>
                      <p className="text-gray-300 text-lg leading-relaxed">{paragraph}</p>
                    </AnimatedWrapper>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            WALL OF OPERATIONALIZATION — Split layout
            ═══════════════════════════════════════════ */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
              <AnimatedWrapper animation="fade-up-slow">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center text-red-400">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">{operationalizationWall.title}</h2>
                  </div>
                  {operationalizationWall.paragraphs.map((paragraph: string, i: number) => (
                    <p key={i} className="text-gray-400 mb-4 leading-relaxed">{paragraph}</p>
                  ))}
                  <div className="mt-6 inline-flex items-baseline gap-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">{operationalizationWall.stat}</span>
                    <span className="text-gray-500 text-lg">of companies stuck in POC</span>
                  </div>
                </div>
              </AnimatedWrapper>
              <AnimatedWrapper animation="fade-up-slow" delay={0.1}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-2xl blur-xl" />
                  <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-8">
                    <h3 className="text-lg font-bold text-white mb-6">The Hard Truths of AI Operationalization</h3>
                    <ul className="space-y-4">
                      {operationalizationWall.hardTruths.map((truth: { text: string }, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                          <AlertTriangle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                          <span>{truth.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedWrapper>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            VALUE PROPOSITION — Highlight panel
            ═══════════════════════════════════════════ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedWrapper animation="fade-up-slow">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 to-blue-500/15 rounded-2xl blur-xl" />
                  <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-10 text-center">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-400 mx-auto mb-6">
                      <Lightbulb className="w-7 h-7" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{valueProposition.title}</h2>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">{valueProposition.description}</p>
                  </div>
                </div>
              </AnimatedWrapper>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            PILLARS — Numbered cards
            ═══════════════════════════════════════════ */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <SectionHeader badge="Our Approach" title="Making AI Work for You" description="From ideation to operations, we support every stage of the digital lifecycle." alignment="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14 max-w-5xl mx-auto">
              {pillars.map((pillar: { title: string; description: string }, i: number) => (
                <AnimatedWrapper key={pillar.title} animation="float-up" delay={i * 0.08}>
                  <div className="group relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-400">
                          {pillarIcons[i]}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">{pillar.title}</h3>
                            <span className="text-xs font-mono text-gray-700">{String(i + 1).padStart(2, '0')}</span>
                          </div>
                          <p className="text-sm text-gray-500 leading-relaxed">{pillar.description}</p>
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
            CTA — Bold closing section
            ═══════════════════════════════════════════ */}
        <section className="py-24 relative overflow-hidden">
          <CTABackground />
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedWrapper animation="fade-up-slow" className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
                {cta.title}
              </h2>
              <p className="text-lg text-gray-400 mb-10">{cta.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <GradientButton size="lg" asChild>
                  <Link to={cta.buttonHref}><Calendar className="w-5 h-5 mr-2" />{cta.buttonText}</Link>
                </GradientButton>
                <GradientButton variant="secondary" size="lg" asChild>
                  <Link to="/services">Explore Our Services <ArrowRight className="w-5 h-5 ml-2" /></Link>
                </GradientButton>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" />Full-Service AI Operator</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" />You Own Your IP</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" />24/7 Global Support</span>
              </div>
            </AnimatedWrapper>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VisionPage;
