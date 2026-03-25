/**
 * OurServicesPage — YLD-inspired services hub with tab navigation
 * and image card boxes with hover animations.
 */

import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Calendar, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GradientButton } from "@/components/ui/gradient-button";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { TypewriterGradientText } from "@/components/ui/typewriter-text";
import { HeroBackground, CTABackground } from "@/components/ui/hero-background";
import { useTheme } from "@/contexts/ThemeContext";

// Tab definitions
const tabs = [
  { id: "what-we-do", label: "What We Do", path: "/services" },
  { id: "by-industry", label: "By Industry", path: "/services/industries" },
  { id: "by-use-case", label: "By Use Case", path: "/services/use-cases" },
];

// What We Do — 3 service capabilities
const services = [
  {
    badge: "Engineering",
    title: "Software & Data Engineering",
    description: "We design and implement enterprise-grade data platforms using medallion architecture, lakehouses, and real-time streaming — built for petabyte scale on AWS, GCP, or Azure.",
    image: "/images/legacy/services/data-engineering.jpg",
    href: "/services/big-data-architecture",
  },
  {
    badge: "Strategy",
    title: "AI & Data Strategy",
    description: "Sovereign AI-first consulting. We assess readiness, design on-premise architectures, build governance frameworks, and create roadmaps that align AI investments with business outcomes.",
    image: "/images/legacy/services/consulting-meeting.jpg",
    href: "/services/ai-data-consulting",
  },
  {
    badge: "Automation",
    title: "Agentic AI & Automation",
    description: "Autonomous AI agents using MCP that work independently on research, analysis, and operations. Multi-agent orchestration with human-in-the-loop governance for enterprise.",
    image: "/images/legacy/services/chatbot-02.png",
    href: "/services/agentic-ai",
  },
];

// By Industry — 8 industries
const industries = [
  { badge: "Finance", title: "Financial Services", description: "Risk analytics, fraud detection, regulatory compliance, and AI-powered wealth management.", image: "/images/legacy/industries/financial-services.jpg", href: "/solutions/financial-services" },
  { badge: "Public Sector", title: "Government", description: "Sovereign cloud, citizen services, and secure data platforms for the public sector.", image: "/images/legacy/industries/government-building.jpg", href: "/solutions/government" },
  { badge: "Retail", title: "Retail & E-commerce", description: "Customer 360, demand forecasting, dynamic pricing, and personalisation engines.", image: "/images/legacy/industries/digital-transformation.jpg", href: "/solutions/retail" },
  { badge: "Industry 4.0", title: "Manufacturing", description: "Predictive maintenance, quality control AI, production optimisation, and smart factory analytics.", image: "/images/legacy/industries/factory-floor.jpg", href: "/solutions/manufacturing" },
  { badge: "Energy", title: "Energy & Mining", description: "Safety monitoring, energy management, process optimisation, and hydrogen production.", image: "/images/legacy/industries/energy-solar.jpg", href: "/solutions/energy-mining" },
  { badge: "Urban", title: "Smart City", description: "Smart grids, water networks, waste management, and urban infrastructure AI.", image: "/images/legacy/industries/smart-city.jpg", href: "/solutions/smart-city" },
  { badge: "Logistics", title: "Transportation & Logistics", description: "Route optimisation, fleet management, supply chain AI, and demand planning.", image: "/images/legacy/industries/logistics.jpg", href: "/solutions/transportation-logistics" },
  { badge: "Green Energy", title: "Hydrogen", description: "Digital solutions for hydrogen production, storage, transportation, and utilisation.", image: "/images/legacy/industries/hydrogen.jpg", href: "/solutions/hydrogen" },
];

// By Use Case — 9 use cases
const useCases = [
  { badge: "Maintenance", title: "Predictive Maintenance", description: "Anticipate equipment failures before they happen using AI and sensor data.", image: "/images/legacy/use-cases/predictive-maintenance.jpg", href: "/use-cases/predictive-maintenance" },
  { badge: "Quality", title: "Quality Control", description: "AI-powered defect detection and quality assurance in real-time.", image: "/images/legacy/use-cases/quality-control.jpg", href: "/use-cases/quality-control" },
  { badge: "Energy", title: "Energy Management", description: "Optimise energy consumption and costs across operations.", image: "/images/legacy/use-cases/energy-management.jpg", href: "/use-cases/energy-management" },
  { badge: "Supply Chain", title: "Supply Chain Optimization", description: "End-to-end supply chain intelligence and demand planning.", image: "/images/legacy/use-cases/supply-chain.jpg", href: "/use-cases/supply-chain" },
  { badge: "Process", title: "Process Control", description: "Real-time process monitoring, control, and optimisation.", image: "/images/legacy/use-cases/process-control.jpg", href: "/use-cases/process-control" },
  { badge: "Integration", title: "Data Integration", description: "Unified data pipelines connecting all your systems.", image: "/images/legacy/use-cases/data-integration.jpg", href: "/use-cases/data-integration" },
  { badge: "Production", title: "Production Optimization", description: "Maximise production output, yield, and efficiency.", image: "/images/legacy/use-cases/production.jpg", href: "/use-cases/production-optimization" },
  { badge: "Flow", title: "Flow Optimization", description: "Process flow analysis, bottleneck detection, and improvement.", image: "/images/legacy/use-cases/flow.jpg", href: "/use-cases/flow-optimization" },
  { badge: "Safety", title: "Safety & Risk Detection", description: "Proactive safety monitoring and risk mitigation with AI.", image: "/images/legacy/use-cases/safety.jpg", href: "/use-cases/safety-risk-detection" },
];

interface CardItem {
  badge: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

function ServiceCard({ item, index }: { item: CardItem; index: number }) {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <AnimatedWrapper animation="fade-up" delay={index * 0.06}>
      <div
        className="group cursor-pointer h-full"
        onClick={() => navigate(item.href)}
      >
        <div className="bg-gray-950 rounded-2xl overflow-hidden border border-gray-800/40 h-full flex flex-col transition-all duration-500 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10">
          {/* Text content */}
          <div className="p-6 flex-1">
            <span className="text-xs text-purple-400 font-medium uppercase tracking-wider">{item.badge}</span>
            <h3 className="text-lg font-semibold text-white mt-2 mb-3 group-hover:text-purple-300 transition-colors duration-300">{item.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
          </div>
          {/* Image */}
          <div className="relative overflow-hidden">
            <div className="aspect-[16/10] bg-gray-900">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  // Fallback gradient if image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  target.parentElement!.classList.add("bg-gradient-to-br", "from-purple-900/40", "to-blue-900/40");
                }}
              />
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: theme === "dark" ? "linear-gradient(to top, rgba(0,0,0,0.4), transparent)" : "none" }} />
          </div>
        </div>
      </div>
    </AnimatedWrapper>
  );
}

const OurServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activeTab = location.pathname === "/services/industries"
    ? "by-industry"
    : location.pathname === "/services/use-cases"
    ? "by-use-case"
    : "what-we-do";

  const activeItems: CardItem[] = activeTab === "by-industry"
    ? industries
    : activeTab === "by-use-case"
    ? useCases
    : services;

  useEffect(() => {
    document.title = "Our Services — Data & AI Consulting | Digitrans";
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-12 overflow-hidden">
          <HeroBackground />
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedWrapper animation="fade-up-slow" className="max-w-4xl mx-auto">
              <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" />
                Our Services
              </span>
              <TypewriterGradientText
                text="Data & AI Services for the Enterprise"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                duration={1.8}
              />
              <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
                From modern data infrastructure to sovereign AI deployment — we help organisations build intelligent systems they own, control, and trust.
              </p>
            </AnimatedWrapper>
          </div>
        </section>

        {/* Tab Navigation — YLD style with underline */}
        <section className="sticky top-[72px] z-30 bg-black/95 backdrop-blur-sm border-b border-gray-800/40">
          <div className="container mx-auto px-4">
            <div className="flex gap-10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => navigate(tab.path)}
                  className={`py-4 text-base font-medium transition-all border-b-2 ${
                    activeTab === tab.id
                      ? "text-white border-white"
                      : "text-gray-500 border-transparent hover:text-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Card Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className={`grid gap-6 max-w-7xl mx-auto ${
              activeTab === "what-we-do"
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                : activeTab === "by-industry"
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            }`}>
              {activeItems.map((item, i) => (
                <ServiceCard key={item.title} item={item} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <CTABackground />
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedWrapper animation="fade-up-slow" className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
                Let's discuss how we can help you build intelligent systems that drive competitive advantage.
              </p>
              <GradientButton size="lg" onClick={() => navigate("/contact")}>
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </GradientButton>
            </AnimatedWrapper>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurServicesPage;
