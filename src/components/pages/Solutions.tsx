/**
 * Solutions Page - Redesigned
 * 
 * Modern solutions hub page with gradient effects and glass cards.
 */

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Database,
  Cloud,
  Bot,
  Shield,
  LineChart,
  Zap,
  Building2,
  Heart,
  Cpu,
  Calendar,
} from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { GlassCard } from "../ui/glass-card";
import { GradientButton } from "../ui/gradient-button";
import { SectionHeader } from "../ui/section-header";
import { AnimatedWrapper } from "../ui/animated-wrapper";
import { TypewriterGradientText } from "../ui/typewriter-text";

const solutions = [
  {
    title: "Big Data Analytics",
    description:
      "Transform your data into actionable insights with enterprise-grade analytics solutions designed for massive scale and performance.",
    icon: Database,
    link: "/services/big-data-analytics",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    title: "Cloud Computing",
    description:
      "Accelerate your digital transformation with secure, scalable, and cost-effective cloud solutions tailored to your business needs.",
    icon: Cloud,
    link: "/services/cloud-computing",
    color: "from-purple-500/20 to-blue-500/20",
    iconColor: "text-purple-400",
  },
  {
    title: "AI Solutions",
    description:
      "Leverage the power of artificial intelligence and machine learning to automate processes, enhance decision-making, and create new opportunities.",
    icon: Bot,
    link: "/services/ai-solutions",
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
  },
  {
    title: "Digital Transformation",
    description:
      "Transform your business with cutting-edge digital solutions and strategies that drive innovation, efficiency, and competitive advantage.",
    icon: Zap,
    link: "/solutions/digital-transformation",
    color: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400",
  },
  {
    title: "Enterprise Solutions",
    description:
      "Streamline operations, enhance collaboration, and drive growth with custom enterprise software solutions built for your specific challenges.",
    icon: LineChart,
    link: "/solutions/enterprise-solutions",
    color: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-400",
  },
  {
    title: "Data Security",
    description:
      "Protect your valuable data assets with comprehensive security solutions designed for the modern threat landscape.",
    icon: Shield,
    link: "/solutions/data-security",
    color: "from-red-500/20 to-pink-500/20",
    iconColor: "text-red-400",
  },
];

const industries = [
  {
    title: "Financial Services",
    description: "Secure, compliant AI solutions for banking, insurance, and fintech.",
    icon: Building2,
    link: "/solutions/financial-services",
  },
  {
    title: "Healthcare",
    description: "HIPAA-compliant data platforms and AI automation for healthcare.",
    icon: Heart,
    link: "/solutions/healthcare",
  },
  {
    title: "Technology",
    description: "Scalable infrastructure and AI capabilities for tech companies.",
    icon: Cpu,
    link: "/solutions/technology",
  },
];

export default function Solutions() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
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
                Solutions
              </span>

              <TypewriterGradientText 
                text="Enterprise Technology Solutions"
                className="text-4xl md:text-6xl font-bold mb-6"
                duration={1.8}
              />

              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Comprehensive solutions designed to solve your most complex business challenges and drive digital transformation.
              </p>

              <GradientButton size="lg" onClick={() => navigate('/contact')}>
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Consultation
              </GradientButton>
            </AnimatedWrapper>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="What We Offer"
              title="Our Solutions"
              description="End-to-end technology solutions tailored to your business needs."
              alignment="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <AnimatedWrapper key={solution.title} animation="float-up" delay={index * 0.1}>
                    <Link to={solution.link}>
                      <GlassCard variant="hover" className="h-full p-6 min-h-[280px] group hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${solution.color} ${solution.iconColor} mb-4`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                          {solution.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 flex-grow">
                          {solution.description}
                        </p>
                        <span className="text-purple-400 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                          Learn more <ArrowRight className="w-4 h-4" />
                        </span>
                      </GlassCard>
                    </Link>
                  </AnimatedWrapper>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-20 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Industries"
              title="Industry-Specific Solutions"
              description="Deep expertise in regulated and complex industries."
              alignment="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <AnimatedWrapper key={industry.title} animation="scale-up-bounce" delay={index * 0.12}>
                    <Link to={industry.link}>
                      <GlassCard variant="gradient" className="h-full p-6 min-h-[200px] group text-center hover:scale-105 transition-transform duration-300">
                        <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400 mb-4">
                          <Icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                          {industry.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {industry.description}
                        </p>
                      </GlassCard>
                    </Link>
                  </AnimatedWrapper>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <AnimatedWrapper animation="zoom-in" className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Not Sure Which Solution You Need?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our experts can help you identify the right solutions for your specific business challenges.
              </p>
              <GradientButton size="lg" onClick={() => navigate('/contact')}>
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
