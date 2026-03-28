/**
 * About Page Component — Premium Redesign
 * 
 * Comprehensive About page for Digitrans with premium visual language.
 * Floating gradient orbs, grid overlays, numbered cards, alternating layouts.
 */

import { useState } from "react";
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
  Cloud,
  Landmark,
  HeartPulse,
  ShoppingCart,
  Cpu,
  Factory,
  Building,
  Sparkles,
  Building2,
  Star,
  Quote,
  Handshake,
  Brain,
  Shield,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GradientButton } from "@/components/ui/gradient-button";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";

import SEO from "@/components/SEO";
import { OrganizationSchema } from "@/components/JsonLd";
import { TypewriterGradientText } from "@/components/ui/typewriter-text";
import { HeroBackground, HeroBottomFade, CTABackground } from "@/components/ui/hero-background";

// Hero Data
const heroData = {
  tagline: "Your Digital, Data & AI Scale-up Partner",
  headline: "Transforming Business Through AI & Data",
  description: "Digitrans enhances your operations by integrating customised digital solutions with a strategic vision. We align, build, and maintain your digital, data & AI roadmap, ensuring consistent reliability and efficiency worldwide.",
  primaryCTA: { label: "Schedule Consultation", href: "/contact" },
  secondaryCTA: { label: "Explore Products", href: "/products/allama" },
};

// Value Propositions
const valuePropositions = [
  { icon: <Heart className="w-6 h-6" />, title: "Open Source Philosophy", description: "We believe in transparency. Our products are open-source, giving you full visibility into what runs in your environment. No black boxes, no vendor lock-in.", metric: { value: "100%", label: "Open-source core" } },
  { icon: <Cloud className="w-6 h-6" />, title: "Cloud Agnostic", description: "Deploy anywhere - AWS, GCP, Azure, or on-premises. Your data stays in your infrastructure, under your control.", metric: { value: "3+", label: "Cloud platforms" } },
  { icon: <Zap className="w-6 h-6" />, title: "AI-Native Approach", description: "AI built into the core, not bolted on. Modern architecture designed from the ground up for intelligent automation.", metric: { value: "LLM", label: "Powered workflows" } },
  { icon: <Code className="w-6 h-6" />, title: "Developer-Friendly", description: "Built by developers, for developers. Clean APIs, comprehensive documentation, and an active community.", metric: { value: "80+", label: "Integrations" } },
];

// Three Pillars
const pillars = [
  { id: "consulting", icon: <Lightbulb className="w-6 h-6" />, title: "Explore & Frame", description: "If you have not conducted your own analysis already, the Digitrans promise starts with a 360-degree survey of your operations. Using our findings, we provide expert recommendations on the ideal areas where data-powered solutions can bring value to your business.", capabilities: ["AI Readiness Assessment & Strategy", "Data Architecture & Governance", "Technology Evaluation & Selection", "Implementation Roadmap Planning", "Change Management & Training"], marketingAngle: "We don't just advise — we partner with you to ensure successful outcomes.", image: "/images/legacy/services/consulting-meeting.jpg" },
  { id: "engineering", icon: <Code className="w-6 h-6" />, title: "Design & Build", description: "We design, build, and enrich your data and digital ecosystems with custom applications, data storage and processing layers, AI models, APIs and backend services, to fit the specific requirements of your business. Our custom-designed solutions fit seamlessly into your current IT environment — edge, cloud, or hybrid.", capabilities: ["Data Platform Architecture & Pipelines", "Cloud-Native Development (AWS, GCP, Azure)", "AI/ML Model Development & Deployment", "DevOps & MLOps Automation", "Real-Time Data Processing & Analytics"], marketingAngle: "Enterprise-grade engineering with startup agility.", image: "/images/legacy/services/data-engineering.jpg" },
  { id: "products", icon: <Rocket className="w-6 h-6" />, title: "Deploy, Run & Scale", description: "We offer 24/7 DevOps and MLOps support across 5 continents. Our comprehensive SLAs cover IT, data infrastructure, ModelOps, data science and application support. We guarantee specific levels of system availability, performance, and support response time. We build it, you own it.", capabilities: ["Allama — AI Security Automation Platform", "Dblock — AI Workflow & Agent Builder", "24/7 Global DevOps & MLOps Support", "Guaranteed SLAs & Proactive Monitoring", "IP Ownership — You Own What We Build"], marketingAngle: "Enterprise capabilities, open-source freedom.", image: "/images/legacy/services/chatbot-02.png" },
];

// Products
const products = [
  { name: "Allama", tagline: "AI-Powered Security Automation", description: "Automate threat detection and response with AI-powered workflows. Self-hosted or cloud. 80+ integrations. Built for modern SOC teams.", status: "Live", href: "/products/allama", features: ["Visual Workflow Builder", "AI-Powered Triage", "80+ Integrations", "Self-Hosted"] },
  { name: "Dblock", tagline: "AI-Powered Data Workflow Automation", description: "Build, deploy, and manage AI applications with a visual flow-based interface. Create intelligent agents without writing code.", status: "Coming Soon", href: "/products/dblock", features: ["Visual Flow Editor", "AI Agent Builder", "MCP Support", "Enterprise Ready"] },
];

// Industries
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

// Expertise Areas
const expertiseAreas = [
  { title: "Software Engineering", skills: ["Cloud Architecture", "Edge Architecture", "Back-end & Front-end Engineering", "UX/UI Design", "Quality Assurance", "DevOps & Monitoring"] },
  { title: "Data Engineering & Management", skills: ["Strategy & Security", "Architecture & Storage", "Processing & Analysis", "Visualisation", "MLOps"] },
  { title: "Industrial Expertise", skills: ["Production & Maintenance", "Quality & Logistics", "Process Control & Automation", "Rotating & Mechanical Engineering", "Electrical Engineering"] },
  { title: "Applied Science", skills: ["Applied Mathematics", "Hydraulics & Thermodynamics", "Optimisation & Operations Research", "Geosciences"] },
  { title: "AI, Machine Learning & Deep Learning", skills: ["Time Series Forecasting", "Computer Vision", "NLP", "Physics-Informed ML", "Neural Networks & Transfer Learning"] },
];

// Featured Industrial Customers
const featuredCustomers = [
  { name: "TotalEnergies", industry: "Energy", logo: "/images/legacy/partners/totalenergies.svg" },
  { name: "SNCF", industry: "Transportation", logo: "/images/legacy/partners/sncf.svg" },
  { name: "Groupe ADP", industry: "Aviation & Logistics", logo: "/images/legacy/partners/groupe-adp.svg" },
  { name: "Suez", industry: "Environmental Services", logo: "/images/legacy/partners/suez.svg" },
  { name: "Alperia", industry: "Energy", logo: "/images/legacy/partners/alperia.svg" },
  { name: "Hummink", industry: "Advanced Manufacturing", logo: "/images/legacy/clients/logo-hummink.png" },
];

// Client Categories
const clientCategories = [
  { icon: <Building2 className="w-7 h-7" />, title: "Fortune 500", count: "50+", description: "Enterprise clients across finance, healthcare, and manufacturing" },
  { icon: <Landmark className="w-7 h-7" />, title: "Government", count: "15+", description: "Federal and state agencies with compliance" },
  { icon: <Rocket className="w-7 h-7" />, title: "Startups", count: "100+", description: "High-growth startups from seed to Series C" },
];

// Partnership Highlights
const partnershipHighlights = [
  { icon: <Handshake className="w-5 h-5" />, title: "Hands-On Partnership", description: "We work hand in hand with our customers to build, deploy, and operate solutions that harness the power of data and AI technology." },
  { icon: <Brain className="w-5 h-5" />, title: "AI-Powered Operations", description: "Our AI solutions underpin critical industrial operations so our customers can count on them to run reliably, anywhere in the world." },
  { icon: <Shield className="w-5 h-5" />, title: "Safety & Efficiency", description: "We streamline operations, boost efficiency, and make the workplace safer for everybody through advances in data and AI." },
  { icon: <Factory className="w-5 h-5" />, title: "Industrial Expertise", description: "Deep domain knowledge across energy, mining, manufacturing, smart cities, and transportation enables us to deliver solutions that truly fit." },
];

// Testimonials
const testimonials = [
  { quote: "Digitrans transformed our security operations. What used to take hours now happens in seconds. The ROI was visible within the first month.", name: "Sarah Chen", title: "CISO", company: "Global Financial Corp", rating: 5 },
  { quote: "Their AI expertise helped us build a personalization engine that increased our conversion rate by 70%. They're true partners, not just vendors.", name: "Marcus Weber", title: "CTO", company: "RetailTech Inc", rating: 5 },
  { quote: "The team delivered our MVP in 10 weeks. We secured €2M in funding based on what they built. Couldn't have done it without them.", name: "Sophie Laurent", title: "Founder", company: "DataSync Pro", rating: 5 },
];

const milestones = [
  { year: "2023", text: "Digitrans founded in March 2023 in Dubai by a team of data engineers and AI specialists with deep industrial experience. Immediate focus on sovereign AI consulting and data platform engineering for enterprise clients." },
  { year: "2023", text: "First major engagements secured — delivering data architecture and AI strategy consulting for manufacturing and energy clients across the MENA region. London office established to serve European markets." },
  { year: "2024", text: "Rapid growth across three continents. Launched Megamind (open-source sovereign AI platform) and Allama (AI security automation). Achieved ISO 27001 certification. Expanded to 50+ enterprise clients." },
  { year: "2025", text: "Megamind surpasses 4.5M downloads. Digitrans Lab releases Jan-v1 model (91.1% SimpleQA accuracy). Casablanca office opened for African operations. 150+ enterprise clients across financial services, manufacturing, energy, and government." },
  { year: "2026", text: "Present on five continents with offices in Dubai (HQ), London, and Casablanca. 500+ projects delivered, 50PB+ data processed. Recognised as a leading sovereign AI consultancy for regulated industries." },
];

const AboutPage = () => {
  const [activePillar, setActivePillar] = useState(0);

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
        {/* ═══════════════════════════════════════════
            HERO — Immersive gradient with floating orbs
            ═══════════════════════════════════════════ */}
        <section className="relative pt-36 pb-24 overflow-hidden">
          <HeroBackground />
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedWrapper animation="fade-up-slow" className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" />
                {heroData.tagline}
              </span>
              <TypewriterGradientText text={heroData.headline} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" duration={1.8} />
              <p className="text-lg md:text-xl text-gray-300/90 mb-10 max-w-3xl mx-auto leading-relaxed">{heroData.description}</p>
            </AnimatedWrapper>
          </div>
          <HeroBottomFade />
        </section>

        {/* ═══════════════════════════════════════════
            VALUE PROPOSITIONS — Metric cards
            ═══════════════════════════════════════════ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader badge="Why Digitrans" title="Enterprise Solutions, Open Source Values" description="Four pillars that make Digitrans the choice for modern enterprises." alignment="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14 max-w-5xl mx-auto">
              {valuePropositions.map((prop, i) => (
                <AnimatedWrapper key={prop.title} animation="float-up" delay={i * 0.08}>
                  <div className="group relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-400">
                          {prop.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{prop.title}</h3>
                          <p className="text-sm text-gray-500 mb-4 leading-relaxed">{prop.description}</p>
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{prop.metric.value}</span>
                            <span className="text-sm text-gray-600">{prop.metric.label}</span>
                          </div>
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
            THREE PILLARS — Tab navigation
            ═══════════════════════════════════════════ */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <SectionHeader badge="What We Do" title="Three Pillars of Expertise" description="Consulting, Engineering, and Products to transform your business." alignment="center" />

            {/* Tab buttons */}
            <div className="flex justify-center gap-2 mt-10 mb-10">
              {pillars.map((pillar, i) => (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(i)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activePillar === i
                      ? "bg-gray-800 text-white border border-gray-700"
                      : "text-gray-500 hover:text-gray-300 border border-transparent"
                  }`}
                >
                  {pillar.title}
                </button>
              ))}
            </div>

            {/* Active pillar content */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white">{pillars[activePillar].icon}</div>
                    <h3 className="text-2xl font-bold text-white">{pillars[activePillar].title}</h3>
                  </div>
                  <p className="text-gray-400 mb-6 leading-relaxed">{pillars[activePillar].description}</p>
                  <ul className="space-y-2 mb-6">
                    {pillars[activePillar].capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2 text-gray-300 text-sm">
                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-purple-400 italic text-sm">"{pillars[activePillar].marketingAngle}"</p>
                </div>
                <div>
                  <div className="relative rounded-2xl overflow-hidden border border-gray-800/50">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
                    <img src={pillars[activePillar].image} alt={pillars[activePillar].title} className="w-full h-64 lg:h-80 object-cover" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            PRODUCTS — Premium cards
            ═══════════════════════════════════════════ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader badge="Our Products" title="Advanced Software Built for Modern Teams" description="Enterprise-grade products with transparent, open-source foundations." alignment="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14 max-w-5xl mx-auto">
              {products.map((product, i) => (
                <AnimatedWrapper key={product.name} animation="float-up" delay={i * 0.1}>
                  <div className="group relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">{product.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${product.status === "Live" ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"}`}>{product.status}</span>
                      </div>
                      <p className="text-purple-400 font-medium text-sm mb-2">{product.tagline}</p>
                      <p className="text-sm text-gray-500 mb-5 flex-1 leading-relaxed">{product.description}</p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {product.features.map((f) => (
                          <span key={f} className="px-3 py-1 bg-gray-800/60 rounded-full text-xs text-gray-400 border border-gray-700/40">{f}</span>
                        ))}
                      </div>
                      <GradientButton variant="secondary" className="w-full" asChild>
                        <Link to={product.href}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                      </GradientButton>
                    </div>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            INDUSTRIES — Compact grid
            ═══════════════════════════════════════════ */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <SectionHeader badge="Industries" title="Serving Enterprises Across Sectors" description="Deep expertise in the industries that matter most." alignment="center" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-14 max-w-5xl mx-auto">
              {industries.map((industry, i) => (
                <AnimatedWrapper key={industry.name} animation="scale-in" delay={i * 0.04}>
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-4 hover:border-purple-500/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-400">{industry.icon}</div>
                      <h4 className="font-semibold text-white text-sm">{industry.name}</h4>
                    </div>
                    <p className="text-xs text-gray-500">{industry.description}</p>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CLIENTS — Partnership approach + featured customers
            ═══════════════════════════════════════════ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader badge="Our Customers" title="Trusted by Industry Leaders" description="We work hand in hand with our customers to build, deploy, and operate AI solutions that power critical operations." alignment="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14 max-w-5xl mx-auto">
              {partnershipHighlights.map((highlight, i) => (
                <AnimatedWrapper key={highlight.title} animation="float-up" delay={i * 0.08}>
                  <div className="group relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-400">
                          {highlight.icon}
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-white mb-1.5 group-hover:text-purple-300 transition-colors">{highlight.title}</h3>
                          <p className="text-sm text-gray-500 leading-relaxed">{highlight.description}</p>
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
            FEATURED CUSTOMERS — Logo grid
            ═══════════════════════════════════════════ */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-600 mb-8 text-center">Industrial Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-12">
              {featuredCustomers.map((customer, i) => (
                <AnimatedWrapper key={customer.name} animation="scale-in" delay={i * 0.06}>
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-5 hover:border-purple-500/30 transition-all duration-300 text-center">
                    <div className="w-14 h-14 mx-auto mb-3 flex items-center justify-center">
                      <img src={customer.logo} alt={customer.name} className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity" />
                    </div>
                    <h4 className="text-white font-medium text-sm">{customer.name}</h4>
                    <p className="text-xs text-gray-600">{customer.industry}</p>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
            <div className="max-w-4xl mx-auto">
              <img src="/images/legacy/partners/all-logos.png" alt="Our clients and partners" className="w-full h-auto object-contain opacity-70" />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CLIENT CATEGORIES — Metric cards
            ═══════════════════════════════════════════ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {clientCategories.map((category, i) => (
                <AnimatedWrapper key={category.title} animation="scale-in" delay={i * 0.08}>
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 text-center">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-400 mx-auto mb-3">
                      {category.icon}
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-1">{category.count}</div>
                    <h3 className="text-base font-semibold text-white mb-1">{category.title}</h3>
                    <p className="text-xs text-gray-500">{category.description}</p>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            TESTIMONIALS — Quote cards
            ═══════════════════════════════════════════ */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <SectionHeader badge="Testimonials" title="What Our Clients Say" description="Hear from the leaders who've partnered with us." alignment="center" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14 max-w-5xl mx-auto">
              {testimonials.map((testimonial, i) => (
                <AnimatedWrapper key={testimonial.name} animation="float-up" delay={i * 0.08}>
                  <div className="group relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 flex flex-col">
                      <Quote className="w-7 h-7 text-purple-500/30 mb-4" />
                      <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1 italic">"{testimonial.quote}"</p>
                      <div className="pt-4 border-t border-gray-800/50">
                        <div className="flex mb-2">
                          {[...Array(testimonial.rating)].map((_, j) => (
                            <Star key={j} className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                        <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                        <p className="text-xs text-gray-500">{testimonial.title}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            EXPERTISE — Specialist areas
            ═══════════════════════════════════════════ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader badge="Our Expertise" title="State-of-the-Art Specialists" description="From data engineering to deep learning, our team of experts has every aspect of your project covered." alignment="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-14 max-w-6xl mx-auto">
              {expertiseAreas.map((area, i) => (
                <AnimatedWrapper key={area.title} animation="scale-in" delay={i * 0.06}>
                  <div className="h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-5 hover:border-purple-500/30 transition-all duration-300">
                    <h4 className="font-semibold text-sm mb-3 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{area.title}</h4>
                    <ul className="space-y-1.5">
                      {area.skills.map((skill) => (
                        <li key={skill} className="text-xs text-gray-500 flex items-start gap-1.5">
                          <Check className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            MISSION & VISION — Split accent panels
            ═══════════════════════════════════════════ */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-5xl mx-auto">
              <AnimatedWrapper animation="fade-up-slow">
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl" />
                  <div className="relative h-full bg-gray-900/60 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-8">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-400 mb-4">
                      <Target className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                    <p className="text-gray-300 leading-relaxed">To help industrial businesses improve safety, operational efficiency, and agility through advances in data and AI technology. We build data-driven software and algorithms that unlock new operating models, then take charge of operating and maintaining these solutions so they continue to support our clients' most critical operations safely and reliably, over the long term.</p>
                  </div>
                </div>
              </AnimatedWrapper>
              <AnimatedWrapper animation="fade-up-slow" delay={0.1}>
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl blur-xl" />
                  <div className="relative h-full bg-gray-900/60 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-8">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center text-blue-400 mb-4">
                      <Globe className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                    <p className="text-gray-300 leading-relaxed">We believe in a world where data and AI technologies will allow industrial operations to be safer and more efficient, consuming fewer resources while producing less waste, for a minimal footprint with maximum uptime. We build it, you own it — unlike point software solutions, you own and control the algorithms and software we develop and manage for you.</p>
                  </div>
                </div>
              </AnimatedWrapper>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CORE VALUES — Compact cards
            ═══════════════════════════════════════════ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader badge="Our Values" title="The Principles That Guide Us" description="Core values that shape everything we do." alignment="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-14 max-w-5xl mx-auto">
              {values.map((value, i) => (
                <AnimatedWrapper key={value.title} animation="scale-in" delay={i * 0.06}>
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 text-center h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-400 mx-auto mb-4">{value.icon}</div>
                    <h3 className="text-base font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-500">{value.description}</p>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            COMPANY HISTORY — Timeline
            ═══════════════════════════════════════════ */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <SectionHeader badge="Our Journey" title="From Founding to Global AI Partner" description="Three years of rapid growth — from a Dubai startup to a five-continent sovereign AI consultancy." alignment="center" />
            <div className="max-w-3xl mx-auto mt-14 space-y-0">
              {milestones.map((milestone, i) => (
                <AnimatedWrapper key={milestone.year} animation="fade-up-slow" delay={i * 0.08}>
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{milestone.year}</span>
                    </div>
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-3 h-3 bg-purple-500 rounded-full" />
                      {i < milestones.length - 1 && <div className="w-0.5 h-full bg-purple-500/20 mt-1" />}
                    </div>
                    <p className="text-gray-300 pb-6">{milestone.text}</p>
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">Let's discuss how Digitrans can help you harness the power of AI and data.</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" />Open Source Products</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" />Cloud Agnostic</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" />Enterprise Ready</span>
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
