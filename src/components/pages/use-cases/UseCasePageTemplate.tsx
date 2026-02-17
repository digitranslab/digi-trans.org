/**
 * UseCasePageTemplate Component
 *
 * Reusable template for use case pages including:
 * - Hero section with badge, title, subtitle, and description
 * - Key benefits grid (2-column layout)
 * - Related industries links
 * - CTA section with "Schedule a meeting" button
 *
 * Requirements: 1.1, 1.4, 1.5
 */

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { GlassCard } from "@/components/ui/glass-card";
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
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedWrapper
              animation="fade-up-slow"
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-block mb-4 px-4 py-1.5 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30">
                {useCase.hero.badge}
              </span>

              <TypewriterGradientText
                text={useCase.hero.title}
                className="text-4xl md:text-6xl font-bold mb-6"
                duration={1.8}
              />

              <p className="text-xl text-purple-200 mb-4 font-medium">
                {useCase.hero.subtitle}
              </p>

              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                {useCase.hero.description}
              </p>

              {useCase.hero.image && (
                <div className="mt-4 mb-8 max-w-3xl mx-auto rounded-xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/10">
                  <img 
                    src={useCase.hero.image} 
                    alt={useCase.hero.title}
                    className="w-full h-64 md:h-80 object-cover"
                    loading="eager"
                  />
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientButton
                  size="lg"
                  onClick={() => navigate("/contact")}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  {useCase.ctaText}
                </GradientButton>
              </div>
            </AnimatedWrapper>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-16 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Benefits"
              title="Key Benefits"
              description="How this use case drives value for your business."
              alignment="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
              {useCase.benefits.map((benefit, index) => (
                <AnimatedWrapper
                  key={benefit.title}
                  animation="slide-up"
                  delay={index * 0.12}
                >
                  <GlassCard className="h-full p-6 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400">
                        <Lightbulb className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Related Industries Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Industries"
              title="Related Industries"
              description="Explore how this use case applies across industries."
              alignment="center"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
              {useCase.relatedIndustries.map((industry, index) => (
                <AnimatedWrapper
                  key={industry.name}
                  animation="scale-up-bounce"
                  delay={index * 0.1}
                >
                  <Link to={industry.href}>
                    <GlassCard
                      variant="hover"
                      className="h-full p-6 text-center hover:scale-105 transition-transform duration-300"
                    >
                      <h3 className="text-lg font-bold text-white mb-2">
                        {industry.name}
                      </h3>
                      <span className="text-purple-400 text-sm flex items-center justify-center gap-1">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </span>
                    </GlassCard>
                  </Link>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <AnimatedWrapper
              animation="zoom-in"
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-gray-400 mb-8">
                Let's discuss how {useCase.hero.title.toLowerCase()} can
                transform your operations.
              </p>
              <GradientButton
                size="lg"
                onClick={() => navigate("/contact")}
              >
                {useCase.ctaText}
                <ArrowRight className="w-5 h-5 ml-2" />
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
