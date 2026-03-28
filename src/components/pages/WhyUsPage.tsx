/**
 * Why Us Page Component — Premium Redesign
 *
 * Renders the Digitrans differentiators, specialist team descriptions,
 * certifications, and cloud partnership info with premium visual language.
 */

import {
  ArrowRight,
  Shield,
  Award,
  Cloud,
  Check,
  Star,
  Cpu,
  Wrench,
  Code,
  Brain,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import SEO from "@/components/SEO";
import { TypewriterGradientText } from "@/components/ui/typewriter-text";
import { HeroBackground, HeroBottomFade, CTABackground } from "@/components/ui/hero-background";
import { whyUsData } from "@/data/whyUs";

const differentiatorIcons = [
  <Cpu className="w-5 h-5" />,
  <Shield className="w-5 h-5" />,
  <Wrench className="w-5 h-5" />,
  <Star className="w-5 h-5" />,
  <ArrowRight className="w-5 h-5" />,
  <Code className="w-5 h-5" />,
];

const teamIcons = [
  <Wrench className="w-6 h-6" />,
  <Cpu className="w-6 h-6" />,
  <Code className="w-6 h-6" />,
  <Brain className="w-6 h-6" />,
];

const WhyUsPage = () => {
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
            DIFFERENTIATORS — Numbered cards grid
            ═══════════════════════════════════════════ */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <SectionHeader badge="Our Edge" title="What Sets Us Apart" description="From full-lifecycle AI management to IP ownership, here's why leading industrial companies choose Digitrans." alignment="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14 max-w-6xl mx-auto">
              {differentiators.map((diff: { title: string; description: string }, i: number) => (
                <AnimatedWrapper key={diff.title} animation="float-up" delay={i * 0.06}>
                  <div className="group relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-5 hover:border-purple-500/30 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-400">
                          {differentiatorIcons[i]}
                        </div>
                        <span className="text-xs font-mono text-gray-700">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <h3 className="text-base font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{diff.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{diff.description}</p>
                    </div>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            TEAM SPECIALTIES — Skill tag cards
            ═══════════════════════════════════════════ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader badge="Our Team" title="State-of-the-Art Specialists" description="From data engineering to deep learning, our team of experts has every aspect of your project covered." alignment="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14 max-w-5xl mx-auto">
              {teamSpecialties.map((specialty: { title: string; skills: string[] }, i: number) => (
                <AnimatedWrapper key={specialty.title} animation="float-up" delay={i * 0.08}>
                  <div className="group relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center text-green-400">
                          {teamIcons[i]}
                        </div>
                        <h3 className="text-lg font-semibold text-white">{specialty.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {specialty.skills.map((skill: string) => (
                          <span key={skill} className="px-3 py-1.5 text-xs bg-gray-800/60 text-gray-300 border border-gray-700/40 rounded-lg hover:border-green-500/30 hover:text-green-300 transition-all duration-200">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CERTIFICATIONS — Award cards
            ═══════════════════════════════════════════ */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <SectionHeader badge="Certifications" title="Expertise and Certifications" description="We are proud to hold industry-leading certifications that demonstrate our commitment to excellence." alignment="center" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14 max-w-5xl mx-auto">
              {certifications.map((cert: { name: string; description: string }, i: number) => (
                <AnimatedWrapper key={cert.name} animation="scale-in" delay={i * 0.08}>
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-yellow-500/30 transition-all duration-300 text-center h-full">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center text-yellow-400 mx-auto mb-4">
                      <Award className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{cert.name}</h3>
                    <p className="text-sm text-gray-500">{cert.description}</p>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CLOUD PARTNERSHIPS — Partner cards
            ═══════════════════════════════════════════ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader badge="Cloud Partners" title="Cloud Partnerships" description="We collaborate with leading cloud providers to deliver top-notch solutions for industrial operations." alignment="center" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14 max-w-5xl mx-auto">
              {cloudPartners.map((partner: { name: string; description: string }, i: number) => (
                <AnimatedWrapper key={partner.name} animation="scale-in" delay={i * 0.08}>
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 text-center h-full">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-blue-400 mx-auto mb-4">
                      <Cloud className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{partner.name}</h3>
                    <p className="text-sm text-gray-500">{partner.description}</p>
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
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" />ISO 27001 Certified</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" />Kubernetes Specialists</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" />ITIL Accredited</span>
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
