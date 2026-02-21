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
  Landmark,
  HeartPulse,
  ShoppingCart,
  Cpu,
  Factory,
  Building,
  Briefcase,
  GraduationCap,
  Sparkles,
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
  tagline: "Your Digital, Data & AI Scale-up Partner",
  headline: "Transforming Business Through AI & Data",
  description: "Digitrans enhances your operations by integrating customised digital solutions with a strategic vision. We align, build, and maintain your digital, data & AI roadmap, ensuring consistent reliability and efficiency worldwide.",
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
    title: "Explore & Frame",
    description: "If you have not conducted your own analysis already, the Digitrans promise starts with a 360-degree survey of your operations. Using our findings, we provide expert recommendations on the ideal areas where data-powered solutions can bring value to your business.",
    capabilities: [
      "AI Readiness Assessment & Strategy",
      "Data Architecture & Governance",
      "Technology Evaluation & Selection",
      "Implementation Roadmap Planning",
      "Change Management & Training",
    ],
    marketingAngle: "We don't just advise — we partner with you to ensure successful outcomes.",
    image: "/images/legacy/services/consulting-meeting.jpg",
  },
  {
    id: "engineering",
    icon: <Code className="w-6 h-6" />,
    title: "Design & Build",
    description: "We design, build, and enrich your data and digital ecosystems with custom applications, data storage and processing layers, AI models, APIs and backend services, to fit the specific requirements of your business. Our custom-designed solutions fit seamlessly into your current IT environment — edge, cloud, or hybrid.",
    capabilities: [
      "Data Platform Architecture & Pipelines",
      "Cloud-Native Development (AWS, GCP, Azure)",
      "AI/ML Model Development & Deployment",
      "DevOps & MLOps Automation",
      "Real-Time Data Processing & Analytics",
    ],
    marketingAngle: "Enterprise-grade engineering with startup agility.",
    image: "/images/legacy/services/data-engineering.jpg",
  },
  {
    id: "products",
    icon: <Rocket className="w-6 h-6" />,
    title: "Deploy, Run & Scale",
    description: "We offer 24/7 DevOps and MLOps support across 5 continents. Our comprehensive SLAs cover IT, data infrastructure, ModelOps, data science and application support. We guarantee specific levels of system availability, performance, and support response time. We build it, you own it.",
    capabilities: [
      "Allama — AI Security Automation Platform",
      "DBLOCK — AI Workflow & Agent Builder",
      "24/7 Global DevOps & MLOps Support",
      "Guaranteed SLAs & Proactive Monitoring",
      "IP Ownership — You Own What We Build",
    ],
    marketingAngle: "Enterprise capabilities, open-source freedom.",
    image: "/images/legacy/services/chatbot-02.png",
  },
];

// Products
const products = [
  {
    name: "Allama",
    tagline: "AI-Powered Security Automation",
    description: "Automate threat detection and response with AI-powered workflows. Self-hosted or cloud. 80+ integrations. Built for modern SOC teams.",
    status: "Live",
    href: "/products/allama",
    features: ["Visual Workflow Builder", "AI-Powered Triage", "80+ Integrations", "Self-Hosted"],
  },
  {
    name: "DBLOCK",
    tagline: "AI-Powered Data Workflow Automation",
    description: "Build, deploy, and manage AI applications with a visual flow-based interface. Create intelligent agents without writing code.",
    status: "Coming Soon",
    href: "/products/dblock",
    features: ["Visual Flow Editor", "AI Agent Builder", "MCP Support", "Enterprise Ready"],
  },
];

// Industries We Serve
const industries = [
  { name: "Financial Services", icon: <Landmark className="w-5 h-5" />, description: "Risk analytics, fraud detection, regulatory compliance" },
  { name: "Healthcare", icon: <HeartPulse className="w-5 h-5" />, description: "Clinical analytics, patient data platforms, research" },
  { name: "Technology", icon: <Cpu className="w-5 h-5" />, description: "Data infrastructure, ML platforms, automation" },
  { name: "Retail & E-commerce", icon: <ShoppingCart className="w-5 h-5" />, description: "Customer analytics, inventory optimisation" },
  { name: "Manufacturing", icon: <Factory className="w-5 h-5" />, description: "IoT analytics, predictive maintenance, quality control AI" },
  { name: "Energy & Mining", icon: <Zap className="w-5 h-5" />, description: "Safety monitoring, energy management, process optimisation" },
  { name: "Smart City", icon: <Building className="w-5 h-5" />, description: "Smart grids, water networks, urban infrastructure AI" },
  { name: "Transportation & Logistics", icon: <Globe className="w-5 h-5" />, description: "Route optimisation, fleet management, supply chain AI" },
  { name: "Government", icon: <Landmark className="w-5 h-5" />, description: "Secure data platforms, citizen services" },
];

// Core Values
const values = [
  { icon: <Heart className="w-6 h-6" />, title: "Open Source First", description: "Transparency and community contribution are in our DNA." },
  { icon: <Users className="w-6 h-6" />, title: "People First", description: "Empowering our team and clients to achieve their potential." },
  { icon: <Target className="w-6 h-6" />, title: "Excellence", description: "Striving for excellence in every solution we deliver." },
  { icon: <TrendingUp className="w-6 h-6" />, title: "Continuous Growth", description: "Learning, innovation, and pushing boundaries." },
];

// State-of-the-art Specialist Areas (from legacy Why Us page)
const expertiseAreas = [
  {
    title: "Software Engineering",
    skills: ["Cloud Architecture", "Edge Architecture", "Back-end & Front-end Engineering", "UX/UI Design", "Quality Assurance", "DevOps & Monitoring"],
  },
  {
    title: "Data Engineering & Management",
    skills: ["Strategy & Security", "Architecture & Storage", "Processing & Analysis", "Visualisation", "MLOps"],
  },
  {
    title: "Industrial Expertise",
    skills: ["Production & Maintenance", "Quality & Logistics", "Process Control & Automation", "Rotating & Mechanical Engineering", "Electrical Engineering"],
  },
  {
    title: "Applied Science",
    skills: ["Applied Mathematics", "Hydraulics & Thermodynamics", "Optimisation & Operations Research", "Geosciences"],
  },
  {
    title: "AI, Machine Learning & Deep Learning",
    skills: ["Time Series Forecasting", "Computer Vision", "NLP", "Physics-Informed ML", "Neural Networks & Transfer Learning"],
  },
];

// Leadership Team
const teamMembers = [
  { name: "Mohamed BenChaliah", role: "Co-Founder, CEO", bio: "Master's in Software Engineering from Mines ParisTech. Deployed IT and data systems across 20+ countries on five continents. Leads the team in delivering safer, more efficient business operations.", image: "/images/management/mohamed.png" },
  { name: "Chakib Ougued", role: "Head of Labs", bio: "Runs Digitrans Labs, dedicated to accelerating delivery of tech-enabled services through R&D. Two decades of experience in computer science and analytics. Graduate of Ecole Polytechnique and Télécom Paris.", image: "/images/management/chakib.jpeg" },
  { name: "Fatima BenChaliah", role: "Head of Marketing & Communication", bio: "Overseen successful implementation and adoption of Digitrans solutions on industrial sites across four continents.", image: "/images/management/fatima.jpeg" },
];

// Global Offices
const offices = [
  { city: "Dubai", country: "UAE", type: "Headquarters", description: "MENA operations hub", image: "/assets/offices/dubai.webp" },
  { city: "London", country: "UK", type: "EMEA Hub", description: "European operations", image: "/assets/offices/london.webp" },
  { city: "Paris", country: "France", type: "EU Office", description: "Continental Europe", image: "/assets/offices/paris.webp" },
  { city: "Casablanca", country: "Morocco", type: "Africa Hub", description: "African operations", image: "/assets/offices/casa.webp" },
];

// Careers / Join Our Team
const careersContent = {
  headline: "Shape the Future of Industry",
  tagline: "Are you ready to be part of the future? Or better yet, build it?",
  description:
    "Digitrans was born out of a need to improve the quality of information in industrial operations, and with dedication, hard work, and unwavering focus, we have been moving steadily towards that goal, day after day, year after year. We want to continue growing, improving, and bringing innovation to industrial operations, so it's important to us that we maintain the same dedication when it comes to our own team members and in-house operations.",
  candidatesDescription:
    "We are on the lookout for talented, visionary, and creative people with strong backgrounds in engineering, math, and tech — people who are ready to evolve quickly and grow in their roles as we grow as a company.",
  workEnvironment:
    "We work hard to cultivate a work environment that is inspiring, positive, and gives our team room to learn, improve their skills, and learn new ones. Join us in building the factories of the future.",
  traits: [
    { icon: <GraduationCap className="w-5 h-5" />, title: "Engineering & Math", description: "Strong analytical and technical foundations" },
    { icon: <Code className="w-5 h-5" />, title: "Tech & Software", description: "Modern development and data engineering skills" },
    { icon: <Sparkles className="w-5 h-5" />, title: "Creative & Visionary", description: "Innovative thinkers who push boundaries" },
    { icon: <TrendingUp className="w-5 h-5" />, title: "Growth Mindset", description: "Ready to evolve and learn continuously" },
  ],
};

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
                        <GlassCard className="p-2 overflow-hidden hover:scale-[1.02] transition-all duration-300">
                          <div className="aspect-video rounded-lg overflow-hidden">
                            <img 
                              src={pillar.image} 
                              alt={pillar.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
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
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
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
            {/* State-of-the-art Specialists */}
            <SectionHeader
              badge="Our Expertise"
              title="State-of-the-Art Specialists"
              description="From data engineering to deep learning, our team of experts has every aspect of your project covered."
              alignment="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-12 max-w-6xl mx-auto mb-20">
              {expertiseAreas.map((area, index) => (
                <AnimatedWrapper key={area.title} animation="scale-in" delay={index * 0.08}>
                  <GlassCard className="h-full p-5 hover:scale-[1.03] transition-all duration-300">
                    <h4 className="font-bold text-white text-sm mb-3 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{area.title}</h4>
                    <ul className="space-y-1.5">
                      {area.skills.map((skill) => (
                        <li key={skill} className="text-xs text-gray-400 flex items-start gap-1.5">
                          <Check className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </AnimatedWrapper>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <AnimatedWrapper animation="slide-right">
                <GlassCard variant="gradient" className="h-full p-8 hover:scale-[1.02] transition-all duration-300">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400 w-fit mb-4">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To help industrial businesses improve safety, operational efficiency, and agility through 
                    advances in data and AI technology. We build data-driven software and algorithms that unlock 
                    new operating models, then take charge of operating and maintaining these solutions so they 
                    continue to support our clients' most critical operations safely and reliably, over the long term.
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
                    We believe in a world where data and AI technologies will allow industrial operations to be 
                    safer and more efficient, consuming fewer resources while producing less waste, for a minimal 
                    footprint with maximum uptime. We build it, you own it — unlike point software solutions, you 
                    own and control the algorithms and software we develop and manage for you.
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

        {/* Leadership Team Section - Temporarily deactivated */}
        {/* <section className="py-20">
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
        </section> */}

        {/* Company History Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Our Journey"
              title="From Industrial Operations to Global AI Partner"
              description="A decade of building data-powered solutions for industry."
              alignment="center"
            />
            
            <div className="max-w-3xl mx-auto mt-12 space-y-6">
              {[
                { year: "2011", text: "The team started building a field operations data management platform, undergoing an intense phase of R&D." },
                { year: "2014", text: "The platform went live for the first time in Africa, pushing the young company to develop its ability to face challenges on a global scale." },
                { year: "2016", text: "Digitrans started exploring new verticals as demand for its integrated AI-deployment platform rose steadily within the industrial sector." },
                { year: "2018", text: "The company opened new offices in Paris and expanded its European operations." },
                { year: "2024", text: "Present on five continents, serving Fortune 500 companies across 150+ industrial sites. ISO 27001 certified." },
              ].map((milestone, index) => (
                <AnimatedWrapper key={milestone.year} animation="slide-up" delay={index * 0.1}>
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        {milestone.year}
                      </span>
                    </div>
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-3 h-3 bg-purple-500 rounded-full" />
                      {index < 4 && <div className="w-0.5 h-full bg-purple-500/20 mt-1" />}
                    </div>
                    <p className="text-gray-300 pb-4">{milestone.text}</p>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team / Careers Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Careers"
              title={careersContent.headline}
              description={careersContent.tagline}
              alignment="center"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
              <AnimatedWrapper animation="slide-right">
                <GlassCard variant="gradient" className="h-full p-8 hover:scale-[1.02] transition-all duration-300">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400 w-fit mb-4">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Culture</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{careersContent.description}</p>
                  <p className="text-gray-300 leading-relaxed">{careersContent.workEnvironment}</p>
                </GlassCard>
              </AnimatedWrapper>
              <AnimatedWrapper animation="slide-left">
                <GlassCard variant="gradient" className="h-full p-8 hover:scale-[1.02] transition-all duration-300">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400 w-fit mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Who We're Looking For</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{careersContent.candidatesDescription}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {careersContent.traits.map((trait) => (
                      <div key={trait.title} className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                        <div className="text-purple-400 mt-0.5">{trait.icon}</div>
                        <div>
                          <p className="text-white text-sm font-medium">{trait.title}</p>
                          <p className="text-gray-400 text-xs">{trait.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </AnimatedWrapper>
            </div>

            <div className="mt-8 text-center">
              <GradientButton size="lg" asChild>
                <Link to="/contact">
                  <Briefcase className="w-5 h-5 mr-2" />
                  Get in Touch to Apply
                </Link>
              </GradientButton>
            </div>
          </div>
        </section>

        {/* ISO 27001 & Certifications */}
        <section className="py-16 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <AnimatedWrapper animation="fade-in-blur" className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-green-900/30 rounded-full border border-green-500/30">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-green-300 font-medium">ISO 27001 Certified</span>
                </div>
              </div>
              <p className="text-gray-400">
                Digitrans is ISO 27001 certified, a globally recognised standard for information security management. 
                Your data and analytics are safe and secure with us.
              </p>
            </AnimatedWrapper>
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
                  <GlassCard variant="hover" className="p-0 overflow-hidden text-center hover:scale-[1.05] transition-all duration-300">
                    <div className="h-32 overflow-hidden">
                      <img src={office.image} alt={office.city} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-white text-lg">{office.city}</h4>
                      <p className="text-gray-400 text-sm">{office.country}</p>
                      <p className="text-purple-400 text-xs mt-2">{office.type}</p>
                      <p className="text-gray-500 text-xs mt-1">{office.description}</p>
                    </div>
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
