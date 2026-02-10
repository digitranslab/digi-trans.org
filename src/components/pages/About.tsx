/**
 * About Page Component
 * 
 * Comprehensive About page for Digitrans matching AllamaPage design patterns.
 * Includes rich sections with alternating layouts, metrics, and premium styling.
 */

import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Target,
  Globe,
  Code,
  Zap,
  Check,
  Lightbulb,
  Heart,
  TrendingUp,
  Rocket,
  GitBranch,
  Play,
  Cloud,
  Shield,
  Building2,
  Cpu,
  Server,
  LineChart,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import LazyImage from "@/components/LazyImage";
import SEO from "@/components/SEO";
import { OrganizationSchema } from "@/components/JsonLd";
import { TypewriterGradientText } from "@/components/ui/typewriter-text";

// Hero Data
const heroData = {
  tagline: "AI & Data Solutions Company",
  headline: "Transforming Business Through AI & Data",
  description: "Digitrans is an AI and Data consulting and software company. We provide AI agentic solutions, data architecture and engineering services, custom AI/Data software development, and open-source products deployed to your environment.",
  primaryCTA: { label: "Schedule Consultation", href: "/contact" },
  secondaryCTA: { label: "Explore Products", href: "/products/allama" },
};

// Value Propositions (like AllamaPage)
const valuePropositions = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Open Source Philosophy",
    description: "We believe in transparency. Our products are open-source, giving you full visibility into what runs in your environment. No black boxes, no vendor lock-in.",
    metric: { value: "100%", label: "Open-source core" },
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cloud Agnostic",
    description: "Deploy anywhere - AWS, GCP, Azure, or on-premises. Your data stays in your infrastructure, under your control.",
    metric: { value: "3+", label: "Cloud platforms" },
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "AI-Native Approach",
    description: "AI built into the core, not bolted on. Modern architecture designed from the ground up for intelligent automation.",
    metric: { value: "LLM", label: "Powered workflows" },
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Developer-Friendly",
    description: "Built by developers, for developers. Clean APIs, comprehensive documentation, and an active community.",
    metric: { value: "80+", label: "Integrations" },
  },
];

// Three Pillars (Feature Deep Dive style)
const pillars = [
  {
    id: "consulting",
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Strategic Consulting",
    description: "Expert guidance to navigate your AI and data transformation journey. We help you build the roadmap, evaluate technologies, and plan implementations that deliver real business value.",
    capabilities: [
      "AI Readiness Assessment & Strategy",
      "Data Architecture & Governance",
      "Technology Evaluation & Selection",
      "Implementation Roadmap Planning",
      "Change Management & Training",
    ],
    marketingAngle: "We don't just advise—we partner with you to ensure successful outcomes.",
    image: null,
  },
  {
    id: "engineering",
    icon: <Code className="w-6 h-6" />,
    title: "Engineering Excellence",
    description: "Robust data pipelines, cloud infrastructure, and AI systems built for enterprise scale. Our engineering teams deliver production-ready solutions that grow with your business.",
    capabilities: [
      "Data Platform Architecture",
      "Cloud-Native Development",
      "AI/ML Model Development & Deployment",
      "DevOps & MLOps Automation",
      "Real-Time Data Processing",
    ],
    marketingAngle: "Enterprise-grade engineering with startup agility.",
    image: null,
  },
  {
    id: "products",
    icon: <Rocket className="w-6 h-6" />,
    title: "Open-Source Products",
    description: "Ready-to-deploy software that accelerates your transformation. Our products are open-source, self-hostable, and backed by enterprise support options.",
    capabilities: [
      "Allama - AI Security Automation Platform",
      "DBLOCK - AI Workflow & Agent Builder",
      "Self-Hosted Deployment Options",
      "Enterprise Support & SLAs",
      "Custom Integration Development",
    ],
    marketingAngle: "Enterprise capabilities, open-source freedom.",
    image: null,
  },
];

// Products
const products = [
  {
    name: "Allama",
    tagline: "Open-Source AI Security Automation",
    description: "Automate threat detection and response with AI-powered workflows. Self-hosted or cloud. 80+ integrations. Built for modern SOC teams.",
    status: "Live",
    href: "/products/allama",
    features: ["Visual Workflow Builder", "AI-Powered Triage", "80+ Integrations", "Self-Hosted"],
  },
  {
    name: "DBLOCK",
    tagline: "AI-Powered Data Workflow Automation",
    description: "Build, deploy, and manage AI applications with a visual flow-based interface. Create intelligent agents without writing code.",
    status: "Development",
    href: "/products/dblock",
    features: ["Visual Flow Editor", "AI Agent Builder", "MCP Support", "Enterprise Ready"],
  },
];

// Industries We Serve
const industries = [
  { name: "Financial Services", icon: <LineChart className="w-5 h-5" />, description: "Risk analytics, fraud detection, regulatory compliance" },
  { name: "Healthcare", icon: <Heart className="w-5 h-5" />, description: "Clinical analytics, patient data platforms, research" },
  { name: "Technology", icon: <Cpu className="w-5 h-5" />, description: "Data infrastructure, ML platforms, automation" },
  { name: "Retail & E-commerce", icon: <Building2 className="w-5 h-5" />, description: "Customer analytics, inventory optimization" },
  { name: "Government", icon: <Shield className="w-5 h-5" />, description: "Secure data platforms, citizen services" },
  { name: "Manufacturing", icon: <Server className="w-5 h-5" />, description: "IoT analytics, predictive maintenance" },
];

// Core Values
const values = [
  { icon: <Heart className="w-6 h-6" />, title: "Open Source First", description: "Transparency and community contribution are in our DNA." },
  { icon: <Users className="w-6 h-6" />, title: "People First", description: "Empowering our team and clients to achieve their potential." },
  { icon: <Target className="w-6 h-6" />, title: "Excellence", description: "Striving for excellence in every solution we deliver." },
  { icon: <TrendingUp className="w-6 h-6" />, title: "Continuous Growth", description: "Learning, innovation, and pushing boundaries." },
];

// Leadership Team
const teamMembers = [
  { name: "Fatima Aarab", role: "Chief Executive Officer", bio: "10+ years leading enterprise technology transformations", image: "/images/management/fatima.jpeg" },
  { name: "Mohamed BenChaliah", role: "Chief Technology Officer", bio: "15+ years building scalable distributed systems", image: "/images/management/mohamed.png" },
];

// Global Offices
const offices = [
  { city: "Dubai", country: "UAE", type: "Headquarters", description: "MENA operations hub" },
  { city: "London", country: "UK", type: "EMEA Hub", description: "European operations" },
  { city: "Paris", country: "France", type: "EU Office", description: "Continental Europe" },
  { city: "Casablanca", country: "Morocco", type: "Africa Hub", description: "African operations" },
];

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="About Digitrans | AI & Data Solutions Company"
        description="Digitrans is an AI and Data consulting and software company providing agentic AI solutions, data engineering services, and open-source products."
        canonicalUrl="/about"
        keywords={["AI consulting", "data engineering", "open source SOAR", "security automation", "Digitrans"]}
      />
      <OrganizationSchema />
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedWrapper animation="fade-up-slow" className="max-w-4xl mx-auto text-center">
              <span className="inline-block mb-4 px-4 py-1.5 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30">
                {heroData.tagline}
              </span>
              <TypewriterGradientText 
                text={heroData.headline}
                className="text-4xl md:text-6xl font-bold mb-6"
                duration={1.8}
              />
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{heroData.description}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientButton size="lg" asChild>
                  <Link to={heroData.primaryCTA.href}>
                    <Play className="w-5 h-5 mr-2" />
                    {heroData.primaryCTA.label}
                  </Link>
                </GradientButton>
                <GradientButton variant="secondary" size="lg" asChild>
                  <Link to={heroData.secondaryCTA.href}>
                    <Rocket className="w-5 h-5 mr-2" />
                    {heroData.secondaryCTA.label}
                  </Link>
                </GradientButton>
              </div>
            </AnimatedWrapper>
          </div>
        </section>

        {/* Value Propositions Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Why Digitrans"
              title="Enterprise Solutions, Open Source Values"
              description="Four pillars that make Digitrans the choice for modern enterprises."
              alignment="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {valuePropositions.map((prop, index) => (
                <AnimatedWrapper key={prop.title} animation="scale-up-bounce" delay={index * 0.1}>
                  <GlassCard variant="gradient" className="h-full p-6 hover:scale-[1.02] transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400">
                        {prop.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{prop.title}</h3>
                        <p className="text-gray-400 text-sm mb-4">{prop.description}</p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            {prop.metric.value}
                          </span>
                          <span className="text-sm text-gray-500">{prop.metric.label}</span>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Three Pillars Deep Dive Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="What We Do"
              title="Three Pillars of Expertise"
              description="Consulting, Engineering, and Products to transform your business."
              alignment="center"
            />
            
            <div className="space-y-16 mt-12">
              {pillars.map((pillar, index) => (
                <AnimatedWrapper 
                  key={pillar.id} 
                  animation={index % 2 === 0 ? "slide-right" : "slide-left"}
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}>
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                          {pillar.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{pillar.title}</h3>
                      </div>
                      <p className="text-gray-400 mb-6">{pillar.description}</p>
                      <ul className="space-y-2 mb-6">
                        {pillar.capabilities.map((cap, capIndex) => (
                          <AnimatedWrapper key={cap} animation="slide-up" delay={capIndex * 0.05}>
                            <li className="flex items-start gap-2 text-gray-300">
                              <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                              <span>{cap}</span>
                            </li>
                          </AnimatedWrapper>
                        ))}
                      </ul>
                      <p className="text-purple-400 italic">"{pillar.marketingAngle}"</p>
                    </div>
                    <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <AnimatedWrapper animation="zoom-in" delay={0.2}>
                        <GlassCard className="p-8 overflow-hidden hover:scale-[1.02] transition-all duration-300">
                          <div className="aspect-video flex items-center justify-center">
                            <div className="text-center">
                              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 inline-block mb-4">
                                {React.cloneElement(pillar.icon, { className: "w-12 h-12" })}
                              </div>
                              <p className="text-xl font-bold text-white">{pillar.title}</p>
                            </div>
                          </div>
                        </GlassCard>
                      </AnimatedWrapper>
                    </div>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Our Products"
              title="Advanced Software Built for Modern Teams"
              description="Enterprise-grade products with transparent, open-source foundations."
              alignment="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
              {products.map((product, index) => (
                <AnimatedWrapper key={product.name} animation="float-up" delay={index * 0.15}>
                  <GlassCard variant="gradient" className="h-full p-6 relative hover:scale-[1.02] transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        product.status === "Live" 
                          ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                          : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                      }`}>
                        {product.status}
                      </span>
                    </div>
                    <p className="text-purple-400 font-medium mb-3">{product.tagline}</p>
                    <p className="text-gray-400 text-sm mb-6">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.features.map((feature) => (
                        <span key={feature} className="px-3 py-1 bg-gray-800/50 rounded-full text-xs text-gray-300">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <GradientButton variant="secondary" className="w-full" asChild>
                      <Link to={product.href}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </GradientButton>
                  </GlassCard>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Industries"
              title="Serving Enterprises Across Sectors"
              description="Deep expertise in the industries that matter most."
              alignment="center"
            />
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
              {industries.map((industry, index) => (
                <AnimatedWrapper key={industry.name} animation="scale-in" delay={index * 0.05}>
                  <GlassCard className="p-4 hover:scale-[1.05] transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400">
                        {industry.icon}
                      </div>
                      <h4 className="font-bold text-white text-sm">{industry.name}</h4>
                    </div>
                    <p className="text-xs text-gray-400">{industry.description}</p>
                  </GlassCard>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <AnimatedWrapper animation="slide-right">
                <GlassCard variant="gradient" className="h-full p-8 hover:scale-[1.02] transition-all duration-300">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400 w-fit mb-4">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To empower organisations with transformative AI and data solutions that drive innovation, 
                    efficiency, and competitive advantage in the digital age.
                  </p>
                </GlassCard>
              </AnimatedWrapper>
              <AnimatedWrapper animation="slide-left">
                <GlassCard variant="gradient" className="h-full p-8 hover:scale-[1.02] transition-all duration-300">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400 w-fit mb-4">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To be the global leader in enterprise technology transformation, setting new standards 
                    for consulting excellence while building a community of visionary technologists.
                  </p>
                </GlassCard>
              </AnimatedWrapper>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Our Values"
              title="The Principles That Guide Us"
              description="Core values that shape everything we do."
              alignment="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <AnimatedWrapper key={value.title} animation="flip-up" delay={index * 0.1}>
                  <GlassCard className="h-full p-6 text-center hover:scale-[1.05] transition-all duration-300">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400 w-fit mx-auto mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </GlassCard>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Leadership"
              title="Meet Our Team"
              description="The experts leading our global operations."
              alignment="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
              {teamMembers.map((member, index) => (
                <AnimatedWrapper key={member.name} animation="bounce-in" delay={index * 0.15}>
                  <GlassCard variant="hover" className="h-full p-6 text-center hover:scale-[1.05] transition-all duration-300">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-2 border-purple-500/50">
                      <LazyImage 
                        src={member.image} 
                        alt={`${member.name}, ${member.role}`} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-purple-400 text-sm mb-3">{member.role}</p>
                    <p className="text-gray-400 text-xs">{member.bio}</p>
                  </GlassCard>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Global Presence Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Global Presence"
              title="Serving Clients Worldwide"
              description="Local expertise across continents."
              alignment="center"
            />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
              {offices.map((office, index) => (
                <AnimatedWrapper key={office.city} animation="float-up" delay={index * 0.1}>
                  <GlassCard variant="hover" className="p-6 text-center hover:scale-[1.05] transition-all duration-300">
                    <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4" />
                    <h4 className="font-bold text-white text-lg">{office.city}</h4>
                    <p className="text-gray-400 text-sm">{office.country}</p>
                    <p className="text-purple-400 text-xs mt-2">{office.type}</p>
                    <p className="text-gray-500 text-xs mt-1">{office.description}</p>
                  </GlassCard>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedWrapper animation="zoom-in" className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how Digitrans can help you harness the power of AI and data.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <GradientButton size="lg" asChild>
                  <Link to="/contact">
                    <Play className="w-5 h-5 mr-2" />
                    Schedule Consultation
                  </Link>
                </GradientButton>
                <GradientButton variant="secondary" size="lg" asChild>
                  <a href="https://github.com/digitranslab" target="_blank" rel="noopener noreferrer">
                    <GitBranch className="w-5 h-5 mr-2" />
                    View on GitHub
                  </a>
                </GradientButton>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  Open Source Products
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  Cloud Agnostic
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  Enterprise Ready
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

export default AboutPage;
