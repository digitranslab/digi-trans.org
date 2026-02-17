/**
 * Vision Page Component
 *
 * Renders the Digitrans vision: next-generation business efficiency,
 * the wall of operationalization (80-85% stuck in POC), and the
 * full-service AI operator value proposition.
 */

import React from "react";
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
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import SEO from "@/components/SEO";
import { TypewriterGradientText } from "@/components/ui/typewriter-text";
import { visionData } from "@/data/vision";

const pillarIcons = [
  <Eye className="w-6 h-6" />,
  <Code className="w-6 h-6" />,
  <Rocket className="w-6 h-6" />,
  <TrendingUp className="w-6 h-6" />,
];

const VisionPage: React.FC = () => {
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
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedWrapper animation="fade-up-slow" className="max-w-4xl mx-auto text-center">
              <span className="inline-block mb-4 px-4 py-1.5 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30">
                {hero.badge}
              </span>
              <TypewriterGradientText
                text={hero.title}
                className="text-4xl md:text-6xl font-bold mb-6"
                duration={1.8}
              />
              <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">{hero.subtitle}</p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">{hero.description}</p>
            </AnimatedWrapper>
          </div>
        </section>

        {/* Efficiency Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="The Opportunity"
              title={efficiency.title}
              description=""
              alignment="center"
            />
            <div className="max-w-3xl mx-auto mt-12 space-y-6">
              {efficiency.paragraphs.map((paragraph, index) => (
                <AnimatedWrapper key={index} animation="fade-up-slow" delay={index * 0.15}>
                  <p className="text-gray-300 text-lg leading-relaxed">{paragraph}</p>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Wall of Operationalization Section */}
        <section className="py-20 bg-gray-900/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-red-500/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <AnimatedWrapper animation="slide-right">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 text-red-400">
                      <AlertTriangle className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      {operationalizationWall.title}
                    </h2>
                  </div>
                  {operationalizationWall.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-gray-400 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                  <div className="mt-6 inline-flex items-baseline gap-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                      {operationalizationWall.stat}
                    </span>
                    <span className="text-gray-400 text-lg">of companies stuck in POC</span>
                  </div>
                </div>
              </AnimatedWrapper>

              <AnimatedWrapper animation="slide-left">
                <GlassCard variant="gradient" className="p-8">
                  <h3 className="text-xl font-bold text-white mb-6">
                    The Hard Truths of AI Operationalization
                  </h3>
                  <ul className="space-y-4">
                    {operationalizationWall.hardTruths.map((truth, index) => (
                      <AnimatedWrapper key={index} animation="slide-up" delay={index * 0.08}>
                        <li className="flex items-start gap-3 text-gray-300">
                          <AlertTriangle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                          <span>{truth.text}</span>
                        </li>
                      </AnimatedWrapper>
                    ))}
                  </ul>
                </GlassCard>
              </AnimatedWrapper>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedWrapper animation="zoom-in">
                <GlassCard variant="gradient" className="p-10 text-center">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400 w-fit mx-auto mb-6">
                    <Lightbulb className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {valueProposition.title}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                    {valueProposition.description}
                  </p>
                </GlassCard>
              </AnimatedWrapper>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Our Approach"
              title="Making AI Work for You"
              description="From ideation to operations, we support every stage of the digital lifecycle."
              alignment="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
              {pillars.map((pillar, index) => (
                <AnimatedWrapper key={pillar.title} animation="scale-up-bounce" delay={index * 0.1}>
                  <GlassCard className="h-full p-6 hover:scale-[1.02] transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400">
                        {pillarIcons[index]}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                        <p className="text-gray-400 text-sm">{pillar.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedWrapper animation="zoom-in" className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                {cta.title}
              </h2>
              <p className="text-xl text-gray-300 mb-8">{cta.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <GradientButton size="lg" asChild>
                  <Link to={cta.buttonHref}>
                    <Play className="w-5 h-5 mr-2" />
                    {cta.buttonText}
                  </Link>
                </GradientButton>
                <GradientButton variant="secondary" size="lg" asChild>
                  <Link to="/services">
                    Explore Our Services
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </GradientButton>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  Full-Service AI Operator
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  You Own Your IP
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  24/7 Global Support
                </span>
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
