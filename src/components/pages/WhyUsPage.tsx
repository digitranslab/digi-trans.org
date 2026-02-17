/**
 * Why Us Page Component
 *
 * Renders the Digitrans differentiators, specialist team descriptions,
 * certifications (ISO 27001, Kubernetes, ITIL), and cloud partnership info
 * (Azure, Google Cloud, AWS).
 */

import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Users,
  Award,
  Cloud,
  Play,
  Check,
  Star,
  Cpu,
  Wrench,
  Code,
  Brain,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import SEO from "@/components/SEO";
import { TypewriterGradientText } from "@/components/ui/typewriter-text";
import { whyUsData } from "@/data/whyUs";

const differentiatorIcons = [
  <Cpu className="w-6 h-6" />,
  <Shield className="w-6 h-6" />,
  <Wrench className="w-6 h-6" />,
  <Star className="w-6 h-6" />,
  <ArrowRight className="w-6 h-6" />,
  <Code className="w-6 h-6" />,
];

const teamIcons = [
  <Wrench className="w-6 h-6" />,
  <Cpu className="w-6 h-6" />,
  <Code className="w-6 h-6" />,
  <Brain className="w-6 h-6" />,
];

const WhyUsPage: React.FC = () => {
  const { hero, differentiators, teamSpecialties, certifications, cloudPartners, cta } = whyUsData;

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Why Us | Digitrans — Your Trusted Industrial AI Partner"
        description={hero.description}
        canonicalUrl="/why-us"
        keywords={["why Digitrans", "industrial AI partner", "AI operator", "certifications", "cloud partnerships"]}
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

        {/* Differentiators Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Our Edge"
              title="What Sets Us Apart"
              description="From full-lifecycle AI management to IP ownership, here's why leading industrial companies choose Digitrans."
              alignment="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
              {differentiators.map((diff, index) => (
                <AnimatedWrapper key={diff.title} animation="scale-up-bounce" delay={index * 0.08}>
                  <GlassCard className="h-full p-6 hover:scale-[1.02] transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400">
                        {differentiatorIcons[index]}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2">{diff.title}</h3>
                        <p className="text-gray-400 text-sm">{diff.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Team Specialties Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Our Team"
              title="State-of-the-Art Specialists"
              description="From data engineering to deep learning, our team of experts has every aspect of your project covered."
              alignment="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
              {teamSpecialties.map((specialty, index) => (
                <AnimatedWrapper key={specialty.title} animation="slide-up" delay={index * 0.1}>
                  <GlassCard variant="gradient" className="h-full p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 text-green-400">
                        {teamIcons[index]}
                      </div>
                      <h3 className="text-xl font-bold text-white">{specialty.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {specialty.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 bg-gray-900/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Certifications"
              title="Expertise and Certifications"
              description="We are proud to hold industry-leading certifications that demonstrate our commitment to excellence."
              alignment="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
              {certifications.map((cert, index) => (
                <AnimatedWrapper key={cert.name} animation="zoom-in" delay={index * 0.12}>
                  <GlassCard className="h-full p-6 text-center hover:scale-[1.02] transition-all duration-300">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 text-yellow-400 w-fit mx-auto mb-4">
                      <Award className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{cert.name}</h3>
                    <p className="text-gray-400 text-sm">{cert.description}</p>
                  </GlassCard>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Partnerships Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Cloud Partners"
              title="Cloud Partnerships"
              description="We collaborate with leading cloud providers to deliver top-notch solutions for industrial operations."
              alignment="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
              {cloudPartners.map((partner, index) => (
                <AnimatedWrapper key={partner.name} animation="scale-up-bounce" delay={index * 0.1}>
                  <GlassCard className="h-full p-6 text-center hover:scale-[1.02] transition-all duration-300">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-blue-400 w-fit mx-auto mb-4">
                      <Cloud className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{partner.name}</h3>
                    <p className="text-gray-400 text-sm">{partner.description}</p>
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
                  ISO 27001 Certified
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  Kubernetes Specialists
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  ITIL Accredited
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

export default WhyUsPage;
