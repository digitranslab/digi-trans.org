import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import AnimatedDataViz from "./sections/AnimatedDataViz";
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle, 
  Layers, 
  Bot, 
  Quote,
  ChevronRight,
  Award,
  Landmark,
  HeartPulse,
  ShoppingCart,
  Cpu,
  Factory,
  Building,
  Rocket,
  GitBranch,
  Brain,
  Shield,
  Sparkles
} from "lucide-react";

import { StickyCTA } from "./ui/sticky-cta";
import { ProgressBar } from "./ui/progress-bar";
import { BackToTop } from "./ui/back-to-top";
import { GradientButton } from "./ui/gradient-button";
import { SectionHeader } from "./ui/section-header";
import { AnimatedWrapper } from "./ui/animated-wrapper";

// ─── DATA ────────────────────────────────────────────────────────────────────

const impactStats = [
  { value: "4.5M+", label: "Platform Downloads" },
  { value: "500+", label: "Projects Delivered" },
  { value: "150+", label: "Enterprise Clients" },
  { value: "50PB+", label: "Data Processed" },
];

const coreServices = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Software & Data Engineering",
    description: "Medallion architecture, lakehouses, real-time streaming pipelines, and cloud-native data platforms — designed for petabyte scale.",
    bullets: ["Lakehouse & medallion architecture", "Real-time streaming (Kafka, Spark)", "Cloud-native on AWS, GCP, Azure", "Data governance & quality frameworks"],
    href: "/services/big-data-architecture",
    metric: { value: "50PB+", label: "Data processed" },
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI & Data Strategy",
    description: "Sovereign AI-first consulting. Readiness assessments, on-premise architecture design, governance frameworks, and roadmaps aligned with business outcomes.",
    bullets: ["Sovereign AI architecture design", "Data governance & compliance", "On-premise & air-gapped planning", "AI readiness assessment & roadmaps"],
    href: "/services/ai-data-consulting",
    metric: { value: "150+", label: "Clients advised" },
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Agentic AI & Automation",
    description: "Autonomous AI agents using MCP that work independently on research, analysis, and operations — not chatbots, but systems that do real work.",
    bullets: ["Multi-agent orchestration via MCP", "Workflow automation (n8n, LangGraph)", "Custom tool & API integration", "Human-in-the-loop governance"],
    href: "/services/agentic-ai",
    metric: { value: "90%", label: "Task automation" },
  },
];

const products = [
  {
    name: "Megamind",
    headline: "Self-Hosted Sovereign AI Platform",
    description: "Open-source platform with 4.5M+ downloads. Deploy AI within your infrastructure — on-premise, air-gapped, or private cloud.",
    benefits: ["100% sovereign — zero data leaves your boundary", "GDPR, HIPAA, SOC2 compliance ready", "Fine-tuned models on 8–16GB RAM", "MCP integrations for enterprise tools"],
    href: "/products/megamind",
    githubHref: "https://github.com/digitranslab/megamind",
    gradient: "from-violet-600 to-purple-600",
    icon: <Brain className="w-6 h-6" />,
  },
  {
    name: "Allama",
    headline: "AI Security Automation (SOAR)",
    description: "Automate security workflows with AI agents that detect, analyse, and respond to threats in real-time. Built for modern SOC teams.",
    benefits: ["90% faster incident response", "80+ security tool integrations", "AI-powered triage & investigation", "Open-source with enterprise support"],
    href: "/products/allama",
    githubHref: "https://github.com/digitranslab/allama",
    gradient: "from-purple-600 to-pink-600",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    name: "Dblock",
    headline: "AI Data Workflow Automation",
    description: "Build and manage data applications with a visual workflow builder powered by AI. Connect to 100+ data sources.",
    benefits: ["Visual drag-and-drop workflow builder", "AI-assisted data transformations", "Connect to 100+ data sources", "Self-service analytics for teams"],
    href: "/products/dblock",
    githubHref: "/contact",
    gradient: "from-blue-600 to-cyan-600",
    icon: <Layers className="w-6 h-6" />,
    badge: "Coming Soon",
  },
];

const industries = [
  { icon: <Landmark className="w-6 h-6" />, title: "Financial Services", href: "/solutions/financial-services" },
  { icon: <Building className="w-6 h-6" />, title: "Government", href: "/solutions/government" },
  { icon: <ShoppingCart className="w-6 h-6" />, title: "Retail & E-commerce", href: "/solutions/retail" },
  { icon: <Factory className="w-6 h-6" />, title: "Manufacturing", href: "/solutions/manufacturing" },
  { icon: <Cpu className="w-6 h-6" />, title: "Energy & Mining", href: "/solutions/energy-mining" },
  { icon: <HeartPulse className="w-6 h-6" />, title: "Healthcare", href: "/solutions/healthcare" },
];

const differentiators = [
  { icon: <Award className="w-5 h-5" />, label: "10+ years delivering enterprise AI" },
  { icon: <GitBranch className="w-5 h-5" />, label: "Open-source first — Apache 2.0" },
  { icon: <Shield className="w-5 h-5" />, label: "Sovereign AI — on-premise, air-gapped" },
  { icon: <Rocket className="w-5 h-5" />, label: "POC to production in 4–12 weeks" },
  { icon: <Sparkles className="w-5 h-5" />, label: "91.1% SimpleQA accuracy (Jan-v1)" },
];

const testimonials = [
  {
    quote: "Digitrans transformed our data infrastructure from a bottleneck into a competitive advantage. Their medallion architecture reduced query times by 10x.",
    name: "VP of Data Engineering",
    company: "Global Retail Enterprise",
    image: "/images/testimonials/ayoub.jpeg",
    results: ["10x Faster Queries", "45% Cost Reduction"],
  },
  {
    quote: "The team's expertise in AI and data engineering is exceptional. They delivered a production-ready ML platform in just 8 weeks.",
    name: "Chief Data Officer",
    company: "International Insurance Group",
    image: "/images/testimonials/ben-amarti.jpeg",
    results: ["8-Week Delivery", "99.9% Uptime"],
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <ProgressBar />
      <Navbar />
      
      {/* 1. HERO */}
      <Hero videoUrl="/videos/home-page.mp4" showCards={false} />

      {/* 2. IMPACT STATS — Compact credibility bar */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {impactStats.map((stat, i) => (
              <AnimatedWrapper key={stat.label} animation="scale-in" delay={i * 0.08}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES — What We Do */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-purple-600/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-[15%] w-80 h-80 bg-blue-600/6 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader badge="What We Do" title="Data & AI Services" description="Three core capabilities — from data infrastructure to sovereign AI deployment" alignment="center" />
          <div className="max-w-6xl mx-auto mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5">
            {coreServices.map((service, i) => (
              <AnimatedWrapper key={service.title} animation="float-up" delay={i * 0.08}>
                <div className="group relative h-full cursor-pointer" onClick={() => navigate(service.href)}>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-400">{service.icon}</div>
                      {service.metric && (
                        <div className="ml-auto text-right">
                          <div className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{service.metric.value}</div>
                          <div className="text-xs text-gray-500">{service.metric.label}</div>
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">{service.description}</p>
                    <ul className="space-y-1.5 mb-4">
                      {service.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-center gap-2 text-xs text-gray-300">
                          <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />{b}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 text-purple-400 text-sm font-medium group-hover:gap-3 transition-all mt-auto pt-3 border-t border-gray-800/40">
                      <span>Learn more</span><ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRODUCTS — Open-Source Platforms */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader badge="Our Products" title="Production-Ready AI Platforms" description="Open-source foundations with enterprise-grade support" alignment="center" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-14 max-w-6xl mx-auto items-stretch">
            {products.map((product, i) => (
              <AnimatedWrapper key={product.name} animation="float-up" delay={i * 0.08} className="h-full">
                <div className="group relative h-full cursor-pointer" onClick={() => navigate(product.href)}>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-white`}>{product.icon}</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">{product.name}</h3>
                        <p className="text-xs text-gray-500 truncate">{product.headline}</p>
                      </div>
                      {product.badge && <span className="text-xs px-2 py-0.5 bg-yellow-500/20 text-yellow-300 rounded-full flex-shrink-0">{product.badge}</span>}
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">{product.description}</p>
                    <ul className="space-y-1.5 mb-4 flex-1">
                      {product.benefits.map((b, bi) => (
                        <li key={bi} className="flex items-center gap-2 text-xs text-gray-300">
                          <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />{b}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 text-purple-400 text-sm font-medium group-hover:gap-3 transition-all mt-auto pt-3 border-t border-gray-800/40">
                      <span>Explore</span><ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES — Compact row */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader badge="Industries" title="Sector Expertise" description="Deep domain knowledge across key industries" alignment="center" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-14 max-w-5xl mx-auto">
            {industries.map((ind, i) => (
              <AnimatedWrapper key={ind.title} animation="scale-in" delay={i * 0.06}>
                <div className="group cursor-pointer text-center" onClick={() => navigate(ind.href)}>
                  <div className="w-12 h-12 mx-auto rounded-xl bg-gray-900/60 border border-gray-800/50 flex items-center justify-center text-purple-400 mb-3 group-hover:border-purple-500/40 group-hover:bg-purple-500/10 transition-all duration-300">
                    {ind.icon}
                  </div>
                  <p className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{ind.title}</p>
                </div>
              </AnimatedWrapper>
            ))}
          </div>
          <div className="text-center mt-8">
            <GradientButton variant="secondary" size="sm" onClick={() => navigate("/services/industries")} rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
              View All Industries
            </GradientButton>
          </div>
        </div>
      </section>

      {/* 6. ANIMATED DATA VIZ — Visual credibility */}
      <AnimatedDataViz />

      {/* 7. WHY DIGITRANS — Differentiators as compact pills */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block mb-3 px-3 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full border border-purple-500/20 uppercase tracking-wider">Why Digitrans</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Your Strategic AI Partner</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {differentiators.map((d, i) => (
                <AnimatedWrapper key={d.label} animation="scale-in" delay={i * 0.06}>
                  <div className="flex items-center gap-2.5 px-4 py-2.5 bg-gray-900/50 border border-gray-800/50 rounded-full hover:border-purple-500/30 transition-all duration-300">
                    <span className="text-purple-400">{d.icon}</span>
                    <span className="text-sm text-gray-300">{d.label}</span>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/3 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader badge="Testimonials" title="What Our Clients Say" description="Representative outcomes from our enterprise partnerships" alignment="center" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-14 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <AnimatedWrapper key={t.name} animation="fade-up" delay={i * 0.12}>
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-7 h-full flex flex-col">
                  <Quote className="w-8 h-8 text-purple-500/20 mb-4" />
                  <blockquote className="text-base text-gray-200 leading-relaxed mb-5 flex-1">"{t.quote}"</blockquote>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {t.results.map((r, ri) => (
                      <span key={ri} className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-xs font-medium border border-purple-500/20">{r}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-800/40">
                    <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full border border-purple-500/30 object-cover" />
                    <div>
                      <div className="text-sm font-medium text-white">{t.name}</div>
                      <div className="text-xs text-gray-500">{t.company}</div>
                    </div>
                  </div>
                </div>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/15 to-indigo-900/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/8 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedWrapper animation="fade-up-slow" className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
              Let's Build Your AI Advantage
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
              Schedule a free consultation to discuss how we can help you implement AI that drives competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton size="lg" onClick={() => navigate('/contact')} rightIcon={<ArrowRight className="w-5 h-5" />}>
                Schedule Consultation
              </GradientButton>
              <GradientButton size="lg" variant="secondary" onClick={() => navigate('/services')} rightIcon={<ChevronRight className="w-5 h-5" />}>
                Explore Services
              </GradientButton>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-5 text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-400" />Free Consultation</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-400" />No Commitment</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-400" />Expert Guidance</span>
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
