/**
 * Services Page
 * 
 * Showcases Digitrans's three core service pillars with rich content
 * matching the Products page design style.
 */

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { GlassCard } from "../ui/glass-card";
import { GradientButton } from "../ui/gradient-button";
import { SectionHeader } from "../ui/section-header";
import { AnimatedWrapper } from "../ui/animated-wrapper";
import { BackToTop } from "../ui/back-to-top";
import { TypewriterGradientText } from "../ui/typewriter-text";
import { 
  ArrowRight, 
  CheckCircle, 
  Bot, 
  Layers, 
  Target,
  Zap, 
  Users,
  Globe,
  Award,
  Clock,
  Database,
  Sparkles,
  Shield,
  Brain,
  FileSearch,
  Settings,
  TrendingUp,
  Landmark,
  HeartPulse,
  ShoppingCart,
  Cpu,
  Factory,
  Search,
  Code,
  Server,
  Lock,
  Headphones,
  FileCheck,
  UserCheck
} from "lucide-react";
import { serviceMethodology } from "../../data/services-methodology";

// Main service offerings - 3 pillars
const services = [
  {
    name: "Big Data Architecture & Engineering",
    tagline: "Modern Data Platforms at Scale",
    description: "Build enterprise-grade data platforms using medallion architecture, lakehouses, and real-time streaming pipelines.",
    longDescription: "Transform raw data into trusted, analytics-ready assets at petabyte scale. Our data engineering team designs and implements modern data architectures that enable self-service analytics, real-time insights, and AI-ready data foundations. From data mesh to federated governance, we build platforms that scale with your business.",
    benefits: [
      "Medallion Architecture (Bronze-Silver-Gold)",
      "Data Lakehouse Implementation",
      "Real-Time Streaming Pipelines",
      "Data Mesh & Federated Governance",
      "Petabyte-Scale Processing",
      "Self-Service Analytics Enablement"
    ],
    features: [
      { icon: <Layers className="w-5 h-5" />, title: "Medallion Architecture", description: "Bronze-Silver-Gold data layers for quality and governance" },
      { icon: <Database className="w-5 h-5" />, title: "Data Lakehouse", description: "Combine data lake flexibility with warehouse performance" },
      { icon: <Zap className="w-5 h-5" />, title: "Real-Time Streaming", description: "Process millions of events per second with Kafka & Flink" },
      { icon: <Settings className="w-5 h-5" />, title: "Data Mesh", description: "Domain-oriented, self-serve data infrastructure" },
    ],
    technologies: ["Databricks", "Delta Lake", "Apache Kafka", "Apache Spark", "Snowflake", "dbt", "Apache Flink", "Airflow"],
    cta1: { text: "Learn More", href: "/services/big-data-architecture" },
    cta2: { text: "View Case Studies", href: "/portfolio" },
    gradient: "from-blue-600 to-cyan-600",
    icon: <Layers className="w-12 h-12" />,
    stats: [
      { value: "50+", label: "Data Platforms Built" },
      { value: "10PB+", label: "Data Processed Daily" },
      { value: "99.9%", label: "Pipeline Reliability" },
    ],
  },
  {
    name: "Agentic AI for Data",
    tagline: "Autonomous Intelligence for Your Data",
    description: "Deploy AI agents that sense, reason, and act on your data pipelines—enabling self-healing workflows and intelligent automation.",
    longDescription: "Move beyond traditional automation to truly autonomous data operations. Our agentic AI solutions deploy intelligent agents that continuously monitor data quality, optimise pipeline performance, and resolve issues before they impact your business. From self-healing ETL to predictive maintenance, we bring AI-native thinking to data engineering.",
    benefits: [
      "Self-Healing Data Pipelines",
      "Intelligent Data Quality Agents",
      "Autonomous Metadata Management",
      "Predictive Pipeline Optimisation",
      "Natural Language Data Queries",
      "Automated Anomaly Detection"
    ],
    features: [
      { icon: <Bot className="w-5 h-5" />, title: "AI Agents", description: "Autonomous agents that monitor and optimise pipelines" },
      { icon: <Shield className="w-5 h-5" />, title: "Self-Healing", description: "Automatic detection and resolution of data issues" },
      { icon: <Brain className="w-5 h-5" />, title: "Intelligent Quality", description: "ML-powered data quality monitoring and alerting" },
      { icon: <Sparkles className="w-5 h-5" />, title: "Natural Language", description: "Query and transform data using plain English" },
    ],
    technologies: ["LangChain", "OpenAI", "Claude", "Great Expectations", "Monte Carlo", "Alation", "Atlan", "Vector DBs"],
    cta1: { text: "Learn More", href: "/services/agentic-ai-data" },
    cta2: { text: "Book Demo", href: "/contact" },
    gradient: "from-purple-600 to-pink-600",
    icon: <Bot className="w-12 h-12" />,
    stats: [
      { value: "90%", label: "Reduction in Manual Tasks" },
      { value: "24/7", label: "Autonomous Monitoring" },
      { value: "60%", label: "Faster Issue Resolution" },
    ],
  },
  {
    name: "AI & Data Consulting",
    tagline: "Strategic Guidance for the AI Era",
    description: "Navigate the AI era with confidence—from data strategy and governance to AI roadmaps and organisational transformation.",
    longDescription: "In 2025, enterprise data strategy is being reshaped by AI, regulatory pressure, and the need to operationalise insights in real time. Our consultants bring deep expertise in data strategy, AI implementation, and organisational change to help you build a sustainable competitive advantage. From opportunity assessment to responsible AI frameworks, we guide your transformation journey.",
    benefits: [
      "Enterprise Data Strategy",
      "AI Opportunity Assessment",
      "Data Governance Framework",
      "Responsible AI Guidelines",
      "ROI-Focused Roadmaps",
      "Change Management Support"
    ],
    features: [
      { icon: <Target className="w-5 h-5" />, title: "Strategy", description: "Data and AI strategies aligned to business outcomes" },
      { icon: <FileSearch className="w-5 h-5" />, title: "Assessment", description: "Identify high-value AI opportunities in your organisation" },
      { icon: <Shield className="w-5 h-5" />, title: "Governance", description: "Build robust data governance and compliance frameworks" },
      { icon: <TrendingUp className="w-5 h-5" />, title: "Transformation", description: "Guide organisational change for AI adoption" },
    ],
    technologies: ["Strategy", "Governance", "Change Management", "ROI Analysis", "Risk Assessment", "Compliance", "Training", "Workshops"],
    cta1: { text: "Learn More", href: "/services/ai-data-consulting" },
    cta2: { text: "Schedule Consultation", href: "/contact" },
    gradient: "from-orange-500 to-amber-500",
    icon: <Target className="w-12 h-12" />,
    stats: [
      { value: "200+", label: "Enterprises Advised" },
      { value: "£500M+", label: "Value Delivered" },
      { value: "15+", label: "Years Experience" },
    ],
  },
];

// Why choose us section
const whyChooseUs = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Proven Expertise",
    description: "200+ successful data and AI projects across industries",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Senior Team",
    description: "Consultants with 10+ years average experience",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Cloud Agnostic",
    description: "AWS, Azure, and GCP certified partners",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Rapid Delivery",
    description: "POC to production in weeks, not months",
  },
];

// Client logos/industries
const industries = [
  { name: "Financial Services", icon: <Landmark className="w-6 h-6" /> },
  { name: "Healthcare", icon: <HeartPulse className="w-6 h-6" /> },
  { name: "Retail", icon: <ShoppingCart className="w-6 h-6" /> },
  { name: "Technology", icon: <Cpu className="w-6 h-6" /> },
  { name: "Manufacturing", icon: <Factory className="w-6 h-6" /> },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-black to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block mb-4 px-4 py-1.5 bg-blue-900/40 text-blue-300 text-sm rounded-full border border-blue-500/30">
              Our Services
            </span>
            <TypewriterGradientText
              text="Data & AI Services for the Enterprise"
              className="text-4xl md:text-6xl font-bold mb-6"
              gradientClassName="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              duration={1.8}
            />
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From modern data architecture to autonomous AI agents—we help enterprises 
              build intelligent data platforms that drive competitive advantage.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
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
                onClick={() => navigate('/portfolio')}
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                View Case Studies
              </GradientButton>
            </div>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 mt-16"
          >
            {["Open Source First", "Cloud Agnostic", "Enterprise Ready", "Self-Hosted Option"].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm">{badge}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Alternating Layout */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {services.map((service, index) => (
              <AnimatedWrapper
                key={service.name}
                animation="fade-in-blur"
                delay={index * 0.2}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient} text-white`}>
                        {service.icon}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white">{service.name}</h2>
                        <p className="text-purple-400">{service.tagline}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {service.longDescription}
                    </p>
                    
                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/50 border border-gray-800">
                          <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                            {feature.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-sm">{feature.title}</h4>
                            <p className="text-xs text-gray-400">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Benefits */}
                    <div className="grid grid-cols-2 gap-2 mb-8">
                      {service.benefits.slice(0, 4).map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                    
                    {/* Technologies */}
                    <div className="mb-8">
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* CTAs */}
                    <div className="flex gap-4">
                      <GradientButton
                        onClick={() => navigate(service.cta1.href)}
                        rightIcon={<ArrowRight className="w-4 h-4" />}
                      >
                        {service.cta1.text}
                      </GradientButton>
                      <GradientButton
                        variant="secondary"
                        onClick={() => navigate(service.cta2.href)}
                        rightIcon={<ArrowRight className="w-4 h-4" />}
                      >
                        {service.cta2.text}
                      </GradientButton>
                    </div>
                  </div>
                  
                  {/* Stats Card */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="relative">
                      <div className={`absolute -inset-4 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-20 blur-xl`} />
                      <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800 p-8">
                        <h3 className="text-xl font-bold text-white mb-8 text-center">Impact & Results</h3>
                        <div className="grid grid-cols-3 gap-6">
                          {service.stats.map((stat, i) => (
                            <div key={i} className="text-center">
                              <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-2`}>
                                {stat.value}
                              </div>
                              <div className="text-xs text-gray-400">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Additional service highlights */}
                        <div className="mt-8 pt-8 border-t border-gray-800">
                          <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Key Capabilities</h4>
                          <div className="space-y-3">
                            {service.benefits.slice(0, 3).map((benefit, i) => (
                              <div key={i} className="flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                                <span className="text-sm text-gray-300">{benefit}</span>
                              </div>
                            ))}
                          </div>
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

      {/* 5-Step Methodology */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Our Methodology"
            title="From Design to ROI"
            description="Begin your Industry 4.0 journey at whichever point makes sense for you — our experts guide you every step of the way"
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16">
            {serviceMethodology.steps.map((step, index) => (
              <AnimatedWrapper
                key={step.index}
                animation="bounce-in"
                delay={index * 0.1}
              >
                <GlassCard className="p-6 h-full relative overflow-hidden">
                  <div className="text-5xl font-bold text-purple-500/20 absolute top-3 right-4">
                    {step.index}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-white mb-3 pr-8">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < serviceMethodology.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                      <ArrowRight className="w-5 h-5 text-purple-400" />
                    </div>
                  )}
                </GlassCard>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Design & Build */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedWrapper animation="fade-in-blur">
              <div>
                <span className="inline-block mb-4 px-4 py-1.5 bg-blue-900/40 text-blue-300 text-sm rounded-full border border-blue-500/30">
                  Design & Build
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {serviceMethodology.designBuild.title}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {serviceMethodology.designBuild.content}
                </p>
                <div className="space-y-3">
                  {serviceMethodology.designBuild.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper animation="fade-in-blur" delay={0.2}>
              <GlassCard className="p-8">
                <h3 className="text-xl font-bold text-white mb-6">Our Team</h3>
                <p className="text-gray-400 mb-6">
                  Your industrial AI needs are taken care of by our team of:
                </p>
                <div className="space-y-4">
                  {serviceMethodology.teamComposition.map((role, i) => {
                    const icons = [
                      <UserCheck key="uc" className="w-5 h-5" />,
                      <Database key="db" className="w-5 h-5" />,
                      <Code key="cd" className="w-5 h-5" />,
                      <Brain key="br" className="w-5 h-5" />,
                    ];
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-4 p-3 rounded-lg bg-gray-900/50 border border-gray-800"
                      >
                        <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                          {icons[i]}
                        </div>
                        <span className="text-white font-medium">{role}</span>
                      </div>
                    );
                  })}
                </div>
              </GlassCard>
            </AnimatedWrapper>
          </div>
        </div>
      </section>

      {/* Deploy & Run */}
      <section className="py-24 bg-gradient-to-b from-gray-900/30 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedWrapper animation="fade-in-blur" delay={0.1}>
              <GlassCard className="p-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  We've Got You Covered
                </h3>
                <div className="space-y-4">
                  {serviceMethodology.deployRun.features.map((feature, i) => {
                    const icons = [
                      <Server key="sv" className="w-5 h-5" />,
                      <FileCheck key="fc" className="w-5 h-5" />,
                      <Search key="sr" className="w-5 h-5" />,
                      <Headphones key="hp" className="w-5 h-5" />,
                      <Lock key="lk" className="w-5 h-5" />,
                    ];
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-4 p-3 rounded-lg bg-gray-900/50 border border-gray-800"
                      >
                        <div className="p-2 rounded-lg bg-green-500/10 text-green-400">
                          {icons[i]}
                        </div>
                        <span className="text-white font-medium">{feature}</span>
                      </div>
                    );
                  })}
                </div>
              </GlassCard>
            </AnimatedWrapper>

            <AnimatedWrapper animation="fade-in-blur" delay={0.2}>
              <div>
                <span className="inline-block mb-4 px-4 py-1.5 bg-green-900/40 text-green-300 text-sm rounded-full border border-green-500/30">
                  Deploy & Run
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {serviceMethodology.deployRun.title}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {serviceMethodology.deployRun.content}
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Operations are complex enough — we're here to make sure you have a partner in your corner to help shoulder the burden of running your AI ops day to day. Our security management services reinforce your company's security protocols, keeping your data and analytics safe and secure.
                </p>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Industries"
            title="Trusted Across Sectors"
            description="We bring deep domain expertise to every engagement"
            alignment="center"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16">
            {industries.map((industry, index) => (
              <AnimatedWrapper
                key={industry.name}
                animation="bounce-in"
                delay={index * 0.1}
              >
                <GlassCard className="p-6 text-center h-full hover:scale-105 transition-transform cursor-pointer">
                  <div className="inline-flex p-3 rounded-xl bg-purple-500/10 text-purple-400 mb-4">
                    {industry.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white">
                    {industry.name}
                  </h3>
                </GlassCard>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Why Digitrans"
            title="Your Trusted Data Partner"
            description="We combine deep technical expertise with strategic thinking"
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {whyChooseUs.map((item, index) => (
              <AnimatedWrapper
                key={item.title}
                animation="bounce-in"
                delay={index * 0.1}
              >
                <GlassCard className="p-6 text-center h-full">
                  <div className="inline-flex p-3 rounded-xl bg-blue-500/10 text-blue-400 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {item.description}
                  </p>
                </GlassCard>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-pink-900/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedWrapper animation="zoom-in" className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help you build intelligent data platforms 
              that drive competitive advantage.
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
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Explore Our Products
              </GradientButton>
            </div>
          </AnimatedWrapper>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}
