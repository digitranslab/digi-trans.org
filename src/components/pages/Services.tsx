import Navbar from "../Navbar";
import Footer from "../Footer";
import UniverseLights from "../UniverseLights";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { ArrowRight } from "lucide-react";
import {
  Brain,
  Code2,
  Cloud,
  Database,
  Users,
  Lightbulb,
  Bot,
  Server,
  BarChart,
  Network,
  Briefcase,
  Globe,
  CheckCircle,
  Layers,
  Sparkles,
  Target,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "../ui/progress-bar";
import { BackToTop } from "../ui/back-to-top";
import { StickyCTA } from "../ui/sticky-cta";
import { AnimatedWrapper } from "../ui/animated-wrapper";
import { GlassCard } from "../ui/glass-card";
import { SectionHeader } from "../ui/section-header";
import { TypewriterGradientText } from "../ui/typewriter-text";
import { GradientButton } from "../ui/gradient-button";

// New consolidated service categories
const mainServices = [
  {
    icon: <Layers className="w-10 h-10" />,
    title: "Big Data Architecture & Engineering",
    description: "Modern data platforms using medallion architecture, lakehouses, and real-time streaming. Transform raw data into trusted, analytics-ready assets at petabyte scale.",
    href: "/services/big-data-architecture",
    highlights: [
      "Medallion Architecture (Bronze-Silver-Gold)",
      "Data Lakehouse Implementation",
      "Real-Time Streaming Pipelines",
      "Data Mesh & Federated Governance",
    ],
    technologies: ["Databricks", "Delta Lake", "Apache Kafka", "Spark", "Snowflake"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Bot className="w-10 h-10" />,
    title: "Agentic AI for Data",
    description: "Deploy autonomous AI agents that sense, reason, and act on your data pipelines. Self-healing workflows, intelligent metadata management, and continuous data quality.",
    href: "/services/agentic-ai-data",
    highlights: [
      "Self-Healing Data Pipelines",
      "Intelligent Data Quality Agents",
      "Autonomous Metadata Management",
      "Predictive Pipeline Optimization",
    ],
    technologies: ["LangChain", "OpenAI", "Claude", "Great Expectations", "Alation"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: <Target className="w-10 h-10" />,
    title: "AI & Data Consulting",
    description: "Navigate the AI era with confidence. From data strategy and governance to AI roadmaps and organizational transformation—expert guidance that delivers results.",
    href: "/services/ai-data-consulting",
    highlights: [
      "Enterprise Data Strategy",
      "AI Opportunity Assessment",
      "Data Governance Framework",
      "Responsible AI Guidelines",
    ],
    technologies: ["Strategy", "Governance", "Change Management", "ROI Analysis"],
    gradient: "from-orange-500 to-amber-500",
  },
];

const services = [
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "MVP Development",
    description:
      "Transform your SaaS idea into a market-ready MVP in 8-12 weeks",
    features: [
      "User Research & Market Validation",
      "Technical Architecture Planning",
      "Agile Development Process",
      "Weekly Progress Demos",
      "Production Deployment",
      "Launch Strategy Support",
    ],
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    successStory: {
      title: "TechFlow SaaS - Project Management Platform",
      description:
        "Developed a comprehensive project management SaaS platform from concept to production in 10 weeks. The platform secured €2M in funding within 6 months and onboarded 500+ enterprise customers.",
      metrics: [
        "€2M funding raised in 6 months",
        "500+ enterprise customers",
        "10-week development timeline",
        "99.9% uptime since launch",
      ],
    },
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "Product Strategy & Design",
    description:
      "Transform your vision into a winning product strategy that users love",
    features: [
      "Product Strategy Development",
      "User Persona Research",
      "Competitive Analysis",
      "UX/UI Design System",
      "Wireframing & Prototyping",
      "User Testing & Validation",
    ],
    technologies: [
      "Figma",
      "User Research",
      "Product Strategy",
      "Market Validation",
      "Design Systems",
    ],
    successStory: {
      title: "DataSync Pro - Product-Market Fit Success",
      description:
        "Guided a data integration startup through product strategy refinement and UX redesign. Our strategic approach helped them achieve perfect product-market fit and 400% revenue growth in the first year.",
      metrics: [
        "400% revenue growth in year 1",
        "Perfect product-market fit",
        "Zero technical debt",
        "95% user satisfaction score",
      ],
    },
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Full-Stack Development",
    description:
      "Complete technical development with modern, scalable technologies",
    features: [
      "Frontend Development (React/Next.js)",
      "Backend API Development",
      "Database Design & Optimization",
      "Third-party Integrations",
      "Payment Processing Setup",
      "Security Implementation",
    ],
    technologies: ["React", "Next.js", "Python", "Django", "PostgreSQL", "Stripe"],
    successStory: {
      title: "MedCare Connect - Healthcare Platform",
      description:
        "Built a HIPAA-compliant healthcare SaaS platform from the ground up in 12 weeks. The platform now serves 50+ healthcare providers with zero security incidents and full compliance.",
      metrics: [
        "HIPAA-compliant from day one",
        "50+ healthcare providers",
        "12-week development cycle",
        "Zero security incidents",
      ],
    },
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "DevOps & Scaling",
    description:
      "Production-ready infrastructure that grows with your business",
    features: [
      "Cloud Infrastructure Setup",
      "Automated CI/CD Pipelines",
      "Auto-scaling Configuration",
      "Monitoring & Alerting",
      "Security & Compliance",
      "Performance Optimization",
    ],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Monitoring"],
    successStory: {
      title: "CloudOps Solutions - Infrastructure Excellence",
      description:
        "Architected and deployed auto-scaling infrastructure for a DevOps SaaS platform. The system seamlessly handles traffic spikes from 100 to 100,000+ concurrent users with 99.99% uptime.",
      metrics: [
        "99.99% uptime achieved",
        "Auto-scales to 100K+ users",
        "50% reduction in infrastructure costs",
        "Zero-downtime deployments",
      ],
    },
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "SaaS Consulting",
    description: "Strategic guidance for SaaS success and growth optimization",
    features: [
      "SaaS Business Model Design",
      "Technology Stack Selection",
      "Scaling Strategy Planning",
      "Performance Optimization",
      "Security Assessment",
      "Growth Metrics Analysis",
    ],
    technologies: [
      "SaaS Metrics",
      "Business Intelligence",
      "Growth Strategy",
      "Technical Due Diligence",
    ],
    successStory: {
      title: "FinanceFlow - Strategic SaaS Growth",
      description:
        "Provided strategic consulting for a fintech SaaS platform, optimizing their technology stack and growth strategy. Our guidance helped them achieve €5M ARR in 18 months with exceptional unit economics.",
      metrics: [
        "€5M ARR in 18 months",
        "150% improvement in unit economics",
        "SOC 2 Type II certification",
        "40% reduction in churn rate",
      ],
    },
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Technical Co-founder",
    description: "On-demand technical leadership for non-technical founders",
    features: [
      "Technical Strategy & Roadmap",
      "Team Building & Management",
      "Technology Decision Making",
      "Investor Communication",
      "Due Diligence Support",
      "Ongoing Technical Guidance",
    ],
    technologies: ["Leadership", "Strategy", "Team Management", "Investor Relations"],
    successStory: {
      title: "EduFlow - Technical Leadership Success",
      description:
        "Served as technical co-founder for an EdTech startup led by a non-technical founder. Provided end-to-end technical leadership from MVP to Series A funding round, building a world-class product and team.",
      metrics: [
        "Series A funding achieved",
        "Technical team scaled to 15+",
        "Product launched in 6 months",
        "Zero technical debt accumulated",
      ],
    },
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <ProgressBar />
      <Navbar />
      <div className="relative w-full h-[800px] bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50 object-center"
          style={{ objectPosition: "center 30%" }}
        >
          <source src="/videos/services.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center pt-32">
          <AnimatedWrapper animation="fade-up-slow">
            <TypewriterGradientText 
              text="Data & AI Services"
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              gradientClassName="bg-gradient-to-r from-white via-purple-300 to-purple-500 bg-clip-text text-transparent"
              duration={2.0}
            />
          </AnimatedWrapper>

          <AnimatedWrapper animation="fade-up" delay={0.2}>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl">
              From modern data architecture to autonomous AI agents—we help enterprises 
              build intelligent data platforms that drive competitive advantage.
            </p>
          </AnimatedWrapper>

          <AnimatedWrapper animation="fade-up" delay={0.4}>
            <div className="max-w-4xl space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                In 2025, enterprise data strategy is being reshaped by AI, regulatory pressure, 
                and the need to operationalize insights in real time. Organizations are shifting 
                from experimentation to operationalization, with focus on measurable ROI, 
                ethical governance, and sustainable practices.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Our services span the full data lifecycle—from building scalable data platforms 
                with medallion architecture to deploying autonomous AI agents that continuously 
                optimize your data operations. We combine deep technical expertise with strategic 
                advisory to deliver solutions that transform data into competitive advantage.
              </p>
            </div>
          </AnimatedWrapper>
        </div>
      </div>

      {/* Main Services - 3 Categories */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Our Services"
            title="Three Pillars of Data Excellence"
            description="Comprehensive services spanning architecture, AI automation, and strategic consulting."
            alignment="center"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {mainServices.map((service, index) => (
              <AnimatedWrapper
                key={service.title}
                animation="scale-up-bounce"
                delay={index * 0.15}
              >
                <GlassCard 
                  variant="gradient"
                  className="p-8 h-full hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
                  onClick={() => navigate(service.href)}
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-20 text-white mb-6`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-white text-sm uppercase tracking-wider">
                      Key Capabilities
                    </h4>
                    <ul className="space-y-2">
                      {service.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="text-gray-400 flex items-center gap-2 text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-white text-sm uppercase tracking-wider">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-purple-400 group-hover:gap-4 transition-all">
                    <span className="font-semibold">Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </GlassCard>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="container mx-auto px-4">
          <AnimatedWrapper animation="zoom-in" className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help you build intelligent data platforms 
              that drive competitive advantage.
            </p>
            <GradientButton size="lg" onClick={() => navigate('/contact')}>
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </GradientButton>
          </AnimatedWrapper>
        </div>
      </section>

      {/* Legacy Services - Additional Offerings */}
      <section className="py-24 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Additional Services"
            title="SaaS Development Services"
            description="End-to-end development services for ambitious founders."
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <AnimatedWrapper
                key={service.title}
                animation="scale-up-bounce"
                delay={index * 0.1}
              >
                <GlassCard 
                  variant="gradient"
                  className="p-8 h-full hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  <div className="text-blue-500 mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-white">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-gray-400 flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-white">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-sm px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>
      <Dialog
        open={!!selectedService}
        onOpenChange={() => setSelectedService(null)}
      >
        <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-indigo-900/20 text-white border border-blue-500/10 backdrop-blur-sm">
          {selectedService?.successStory && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-white">
                  {selectedService.successStory.title}
                </DialogTitle>
                <DialogDescription className="text-gray-300 mt-4">
                  {selectedService.successStory.description}
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {selectedService.successStory.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-gray-800/50 p-4 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-200">{metric}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
      <BackToTop />
      <StickyCTA />
    </div>
  );
}
