import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import AnimatedDataViz from "./sections/AnimatedDataViz";
import TechStackShowcase from "./sections/TechStackShowcase";
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle, 
  Layers, 
  Bot, 
  Quote,
  ChevronRight,
  Zap,
  Award,
  Briefcase,
  Landmark,
  HeartPulse,
  ShoppingCart,
  Cpu,
  Factory,
  Building,
  Globe,
  Rocket,
  GitBranch,
  Brain,
  Shield,
  Sparkles
} from "lucide-react";

import { StickyCTA } from "./ui/sticky-cta";
import { ProgressBar } from "./ui/progress-bar";
import { BackToTop } from "./ui/back-to-top";
import { GlassCard } from "./ui/glass-card";
import { GradientButton } from "./ui/gradient-button";
import { SectionHeader } from "./ui/section-header";
import { AnimatedWrapper } from "./ui/animated-wrapper";

// EXPERIENCE & IMPACT STATS (inspired by Bain/McKinsey credibility patterns)
const impactStats = [
  { value: "4.5M+", label: "Megamind Downloads", description: "Open-source platform adoption" },
  { value: "500+", label: "Projects Delivered", description: "Across data & AI engagements" },
  { value: "150+", label: "Enterprise Clients", description: "Global organizations served" },
  { value: "50PB+", label: "Data Processed", description: "At enterprise scale" },
];

// AI CONSULTING CAPABILITIES (structured like EY's 5 domains / Bain's 4 capability groups)
const aiCapabilities = [
  {
    icon: <Brain className="w-7 h-7" />,
    title: "AI Strategy & Assessment",
    description: "Evaluate organizational readiness, identify high-ROI automation opportunities, and design sovereign AI architectures aligned with business objectives.",
    href: "/services/ai-consulting",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    icon: <Bot className="w-7 h-7" />,
    title: "Agentic AI Implementation",
    description: "Build autonomous AI agents using MCP that work independently for hours on research, analysis, and report generation — not just chatbots, but systems that do real work.",
    href: "/services/agentic-ai",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Sovereign AI Deployment",
    description: "Deploy AI entirely within your infrastructure — on-premise, air-gapped, or private cloud. Complete data residency compliance for regulated industries.",
    href: "/services/sovereign-ai",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: "Custom Model Fine-Tuning",
    description: "Train domain-specific models (1.7B–4B parameters) on your data. Our Jan-v1 achieves 91.1% SimpleQA accuracy — outperforming models 17x its size.",
    href: "/models",
    gradient: "from-orange-500 to-amber-500",
  },
];

// SECTION 2: Services - What We Do (2 groups × 2 services)
const serviceGroups = [
  {
    groupTitle: "Data Architecture & Engineering",
    groupDescription: "Design, build, and scale modern data infrastructure",
    services: [
      {
        icon: <Layers className="w-6 h-6" />,
        title: "Big Data Architecture",
        description: "Medallion architecture, lakehouses, real-time streaming pipelines, and cloud-native data platforms — designed for petabyte scale.",
        bullets: ["Lakehouse & medallion architecture", "Real-time streaming (Kafka, Spark)", "Cloud-native on AWS, GCP, Azure", "Data governance & quality frameworks"],
        href: "/services/big-data-architecture",
        metric: { value: "50PB+", label: "Data processed" },
      },
      {
        icon: <Briefcase className="w-6 h-6" />,
        title: "AI & Data Strategy",
        description: "Roadmaps, governance frameworks, and data maturity assessments that align your data investments with business outcomes.",
        bullets: ["AI readiness assessment", "Data governance & compliance", "Technology evaluation & selection", "Implementation roadmap planning"],
        href: "/services/ai-data-consulting",
        metric: { value: "150+", label: "Clients advised" },
      },
    ],
  },
  {
    groupTitle: "Sovereign AI & Consulting",
    groupDescription: "Deploy AI you own, control, and trust",
    services: [
      {
        icon: <Bot className="w-6 h-6" />,
        title: "Agentic AI & Automation",
        description: "Autonomous AI agents using MCP that work independently on research, analysis, and operations — not chatbots, but systems that do real work.",
        bullets: ["Multi-agent orchestration via MCP", "Workflow automation (n8n, LangGraph)", "Custom tool & API integration", "Human-in-the-loop governance"],
        href: "/services/agentic-ai",
        metric: { value: "90%", label: "Task automation" },
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: "Sovereign AI",
        description: "Deploy AI entirely within your infrastructure — on-premise, air-gapped, or private cloud. Complete data residency for regulated industries.",
        bullets: ["On-premise & air-gapped deployment", "Custom model fine-tuning from $100", "GDPR, HIPAA, SOC2 compliance", "Zero data leaves your boundary"],
        href: "/services/sovereign-ai",
        metric: { value: "100%", label: "Data sovereignty" },
      },
    ],
  },
];

// SECTION 3: Products Showcase
const products = [
  {
    name: "Allama",
    headline: "Open-Source AI Security Automation",
    description: "Automate security workflows with intelligent AI agents that detect, analyse, and respond to threats in real-time. Built for modern SOC teams.",
    benefits: [
      "Reduce incident response time by 90%",
      "Automate repetitive security tasks",
      "Integrate with 80+ security tools",
      "Open-source with enterprise support"
    ],
    cta1: { text: "Learn More", href: "/products/allama" },
    cta2: { text: "View on GitHub", href: "https://github.com/digitranslab/allama" },
    gradient: "from-purple-600 to-pink-600",
    icon: <Bot className="w-10 h-10" />,
  },
  {
    name: "Megamind",
    headline: "Self-Hosted Sovereign AI Platform",
    description: "Deploy AI entirely within your infrastructure. Open-source platform with 4.5M+ downloads powering sovereign AI for regulated industries — on-premise, air-gapped, or private cloud.",
    benefits: [
      "100% sovereign — zero data leaves your boundary",
      "Self-hosted with GDPR, HIPAA, SOC2 compliance",
      "Fine-tuned models running on 8–16GB RAM",
      "MCP integrations for enterprise tool connectivity"
    ],
    cta1: { text: "Explore Megamind", href: "/products/megamind" },
    cta2: { text: "View on GitHub", href: "https://github.com/digitranslab/megamind" },
    gradient: "from-violet-600 to-purple-600",
    icon: <Brain className="w-10 h-10" />,
  },
  {
    name: "Dblock",
    headline: "AI-Powered Data Workflow Automation",
    description: "Build, deploy, and manage data applications with a visual workflow builder powered by AI. Coming soon.",
    benefits: [
      "Visual drag-and-drop workflow builder",
      "AI-assisted data transformations",
      "Connect to 100+ data sources",
      "Self-service analytics for teams"
    ],
    cta1: { text: "Learn More", href: "/products/dblock" },
    cta2: { text: "Join Waitlist", href: "/contact" },
    gradient: "from-blue-600 to-cyan-600",
    icon: <Layers className="w-10 h-10" />,
  },
];

// SECTION 4: Industries
const industries = [
  {
    icon: <Landmark className="w-8 h-8" />,
    title: "Financial Services",
    description: "Risk analytics, fraud detection, and regulatory compliance at scale.",
    href: "/solutions/financial-services",
  },
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: "Healthcare",
    description: "Patient insights, clinical analytics, and operational efficiency.",
    href: "/solutions/healthcare",
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Retail & E-commerce",
    description: "Customer 360, demand forecasting, and personalisation engines.",
    href: "/solutions/retail",
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Technology",
    description: "Product analytics, user behaviour, and platform optimisation.",
    href: "/solutions/technology",
  },
  {
    icon: <Factory className="w-8 h-8" />,
    title: "Manufacturing",
    description: "Predictive maintenance, supply chain, and quality analytics.",
    href: "/solutions/manufacturing",
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "Government",
    description: "Secure data platforms, citizen services, and policy analytics.",
    href: "/solutions/government",
  },
];

// SECTION 5: Why Digitrans - 5 Differentiators
const differentiators = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Proven Experience",
    description: "10+ years delivering enterprise data & AI solutions",
    proof: "500+ projects across 150+ clients",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI-Native Platform",
    description: "Megamind: 4.5M+ downloads, 16K+ community",
    proof: "91.1% SimpleQA accuracy (Jan-v1)",
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: "Open-Source First",
    description: "Apache 2.0 — no vendor lock-in, full transparency",
    proof: "100+ contributors, 2,800+ PRs merged",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Sovereign AI",
    description: "On-premise, air-gapped, private cloud",
    proof: "GDPR, HIPAA, SOC2, FedRAMP ready",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Rapid Delivery",
    description: "From POC to production in weeks",
    proof: "4-week POC, 12-week production",
  },
];

// SECTION 6: Testimonials (representative examples based on real client outcomes)
const testimonials = [
  {
    quote: "Digitrans transformed our data infrastructure from a bottleneck into a competitive advantage. Their medallion architecture reduced query times by 10x.",
    name: "Data Engineering Lead",
    title: "VP of Data Engineering",
    company: "Global Retail Enterprise",
    image: "/images/testimonials/ayoub.jpeg",
    results: ["10x Faster Queries", "45% Cost Reduction"],
  },
  {
    quote: "The team's expertise in AI and data engineering is exceptional. They delivered a production-ready ML platform in just 8 weeks.",
    name: "Chief Data Officer",
    title: "Chief Data Officer",
    company: "International Insurance Group",
    image: "/images/testimonials/ben-amarti.jpeg",
    results: ["8-Week Delivery", "99.9% Uptime"],
  },
];


export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <ProgressBar />
      <Navbar />
      
      {/* SECTION 1: HERO */}
      <Hero videoUrl="/videos/home-page.mp4" showCards={false} />

      {/* SECTION 2: WHAT WE DO - Services */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-[10%] w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-20 right-[15%] w-96 h-96 bg-blue-600/8 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            badge="What We Do"
            title="Data & AI Services"
            description="Two practice areas, four specialized services — from data infrastructure to sovereign AI deployment"
            alignment="center"
          />
          
          <div className="max-w-6xl mx-auto mt-16 space-y-16">
            {serviceGroups.map((group, gi) => (
              <div key={group.groupTitle}>
                <AnimatedWrapper animation="fade-up" delay={gi * 0.1}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-px flex-1 bg-gradient-to-r from-purple-500/40 to-transparent" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">{group.groupTitle}</span>
                    <div className="h-px flex-1 bg-gradient-to-l from-purple-500/40 to-transparent" />
                  </div>
                  <p className="text-center text-sm text-gray-500 mb-8">{group.groupDescription}</p>
                </AnimatedWrapper>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {group.services.map((service, si) => (
                    <AnimatedWrapper key={service.title} animation="float-up" delay={(gi * 2 + si) * 0.08}>
                      <div 
                        className="group relative h-full cursor-pointer"
                        onClick={() => navigate(service.href)}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-400">
                              {service.icon}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">{service.title}</h3>
                            </div>
                            {service.metric && (
                              <div className="text-right">
                                <div className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{service.metric.value}</div>
                                <div className="text-xs text-gray-500">{service.metric.label}</div>
                              </div>
                            )}
                          </div>
                          <p className="text-sm text-gray-400 leading-relaxed mb-4">{service.description}</p>
                          <ul className="space-y-2 mb-4">
                            {service.bullets.map((bullet, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                          <div className="flex items-center gap-2 text-purple-400 text-sm font-medium group-hover:gap-3 transition-all">
                            <span>Learn more</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </div>
                    </AnimatedWrapper>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PRODUCTS SHOWCASE */}
      <section className="py-24 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Our Products"
            title="Production-Ready AI Platforms"
            description="Open-source foundations with enterprise-grade support"
            alignment="center"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <AnimatedWrapper
                key={product.name}
                animation="fade-in-blur"
                delay={index * 0.2}
              >
                <GlassCard className="p-8 h-full relative overflow-hidden group">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${product.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${product.gradient} text-white`}>
                      {product.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                      <p className="text-gray-400 text-sm">{product.headline}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-4">
                    <GradientButton
                      onClick={() => navigate(product.cta1.href)}
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      {product.cta1.text}
                    </GradientButton>
                    <GradientButton
                      variant="secondary"
                      onClick={() => window.open(product.cta2.href, product.cta2.href.startsWith('http') ? '_blank' : '_self')}
                    >
                      {product.cta2.text}
                    </GradientButton>
                  </div>
                </GlassCard>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE & IMPACT */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            badge="Experience & Impact"
            title="Proven at Scale"
            description="Trusted by enterprises worldwide to deliver AI and data solutions that work"
            alignment="center"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-5xl mx-auto">
            {impactStats.map((stat, index) => (
              <AnimatedWrapper key={stat.label} animation="scale-up-bounce" delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-500">{stat.description}</div>
                </div>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* AI CONSULTING CAPABILITIES */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="AI Consulting Services"
            title="End-to-End AI Transformation"
            description="From strategy to production — we help organizations implement AI they own, control, and trust"
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
            {aiCapabilities.map((cap, index) => (
              <AnimatedWrapper key={cap.title} animation="fade-in-blur" delay={index * 0.12}>
                <GlassCard 
                  className="p-8 h-full cursor-pointer group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
                  onClick={() => navigate(cap.href)}
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cap.gradient} opacity-5 rounded-full blur-2xl group-hover:opacity-15 transition-opacity`} />
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${cap.gradient} text-white mb-4`}>
                    {cap.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{cap.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{cap.description}</p>
                  <div className="flex items-center gap-2 text-purple-400 text-sm font-medium group-hover:gap-3 transition-all">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </GlassCard>
              </AnimatedWrapper>
            ))}
          </div>

          <div className="text-center mt-12">
            <GradientButton size="lg" onClick={() => navigate('/services/ai-consulting')} rightIcon={<ArrowRight className="w-5 h-5" />}>
              Explore All AI Services
            </GradientButton>
          </div>
        </div>
      </section>

      {/* SECTION 4: INDUSTRIES */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Industries"
            title="Sector Expertise"
            description="Deep domain knowledge across key industries"
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16 items-stretch">
            {industries.map((industry, index) => (
              <AnimatedWrapper
                key={industry.title}
                animation="bounce-in"
                delay={index * 0.1}
                className="h-full"
              >
                <GlassCard 
                  className="p-6 text-center cursor-pointer group hover:scale-105 transition-all duration-300 h-full flex flex-col"
                  onClick={() => navigate(industry.href)}
                >
                  <div className="inline-flex p-4 rounded-xl bg-purple-500/10 text-purple-400 mb-4 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all mx-auto">
                    {industry.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-gray-400 text-sm flex-grow">
                    {industry.description}
                  </p>
                </GlassCard>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Data Visualization Section */}
      <AnimatedDataViz />

      {/* Technology Stack Showcase */}
      <TechStackShowcase />


      {/* SECTION 5: WHY DIGITRANS */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Why Digitrans"
            title="Your Strategic Data Partner"
            description="What sets us apart from the rest"
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
            {differentiators.map((diff, index) => (
              <AnimatedWrapper
                key={diff.title}
                animation="float-up"
                delay={index * 0.1}
              >
                <GlassCard className="p-6 text-center h-full">
                  <div className="inline-flex p-3 rounded-xl bg-purple-500/10 text-purple-400 mb-4">
                    {diff.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {diff.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {diff.description}
                  </p>
                  <p className="text-purple-400 text-xs font-medium">
                    {diff.proof}
                  </p>
                </GlassCard>
              </AnimatedWrapper>
            ))}
          </div>
          
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-12">
            {["Open Source First", "Sovereign AI Ready", "Cloud Agnostic", "Apache 2.0 Licensed"].map((badge) => (
              <span 
                key={badge}
                className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section className="py-24 bg-gray-900/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/5 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            badge="Testimonials"
            title="What Our Clients Say"
            description="Representative outcomes from our enterprise partnerships"
            alignment="center"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <AnimatedWrapper
                key={testimonial.name}
                animation="fade-in-blur"
                delay={index * 0.2}
              >
                <GlassCard className="p-8 h-full">
                  <Quote className="w-10 h-10 text-purple-500/30 mb-4" />
                  <blockquote className="text-lg text-white font-light leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {testimonial.results.map((result, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm font-medium border border-purple-500/20"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border-2 border-purple-500/30"
                    />
                    <div>
                      <div className="font-bold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.title}</div>
                      <div className="text-purple-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 7: FINAL CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-indigo-900/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedWrapper animation="zoom-in" className="max-w-4xl mx-auto text-center">
            <span className="inline-block mb-4 px-4 py-1.5 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30">
              Ready to Transform?
            </span>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Let's Build Your AI Advantage
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Schedule a free consultation to discuss how we can help you implement 
              AI that drives competitive advantage — from strategy to autonomous agents.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton
                size="lg"
                onClick={() => navigate('/contact')}
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Schedule Consultation
              </GradientButton>
              
              <GradientButton
                size="lg"
                variant="secondary"
                onClick={() => navigate('/products')}
                rightIcon={<ChevronRight className="w-5 h-5" />}
              >
                Explore Products
              </GradientButton>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>No Commitment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Expert Guidance</span>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </section>

      <Footer />
      <StickyCTA />
      <BackToTop />
    </div>
  );
}
