import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import AnimatedDataViz from "./sections/AnimatedDataViz";
import TechStackShowcase from "./sections/TechStackShowcase";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle, 
  Layers, 
  Bot, 
  Target,
  Play,
  Star,
  Quote,
  ChevronRight,
  Zap,
  Shield,
  Clock,
  Users,
  TrendingUp,
  Award,
  Building2,
  Sparkles
} from "lucide-react";

import { StickyCTA } from "./ui/sticky-cta";
import { ProgressBar } from "./ui/progress-bar";
import { BackToTop } from "./ui/back-to-top";
import { GlassCard } from "./ui/glass-card";
import { GradientButton } from "./ui/gradient-button";
import { SectionHeader } from "./ui/section-header";
import { AnimatedWrapper } from "./ui/animated-wrapper";

// Client logos for trust bar
const clientLogos = [
  { name: "Fortune 500 Bank", logo: "/images/1.svg" },
  { name: "Healthcare Leader", logo: "/images/2.svg" },
  { name: "Tech Unicorn", logo: "/images/3.svg" },
  { name: "Retail Giant", logo: "/images/4.svg" },
  { name: "Insurance Corp", logo: "/images/5.svg" },
  { name: "Manufacturing Co", logo: "/images/6.svg" },
];

// Core services - aligned with new 3 categories
const coreServices = [
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Big Data Architecture",
    description: "Modern data platforms with medallion architecture, lakehouses, and real-time streaming at petabyte scale.",
    href: "/services/big-data-architecture",
    gradient: "from-blue-500 to-cyan-500",
    stats: "10x faster queries",
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "Agentic AI for Data",
    description: "Autonomous AI agents that self-heal pipelines, manage metadata, and ensure continuous data quality.",
    href: "/services/agentic-ai-data",
    gradient: "from-purple-500 to-pink-500",
    stats: "90% auto-resolution",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "AI & Data Consulting",
    description: "Strategic advisory on data strategy, AI roadmaps, governance frameworks, and organizational transformation.",
    href: "/services/ai-data-consulting",
    gradient: "from-orange-500 to-amber-500",
    stats: "3-5x ROI",
  },
];

// Key metrics
const metrics = [
  { value: "200+", label: "AI Models Deployed", icon: <Sparkles className="w-5 h-5" /> },
  { value: "50PB+", label: "Data Processed", icon: <Layers className="w-5 h-5" /> },
  { value: "99.9%", label: "Platform Uptime", icon: <Shield className="w-5 h-5" /> },
  { value: "45%", label: "Cost Reduction", icon: <TrendingUp className="w-5 h-5" /> },
];

// Process steps
const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "Deep dive into your data landscape, business goals, and technical requirements.",
  },
  {
    number: "02", 
    title: "Strategy",
    description: "Design architecture, define roadmap, and prioritize high-impact initiatives.",
  },
  {
    number: "03",
    title: "Build",
    description: "Implement solutions with agile methodology, continuous delivery, and quality gates.",
  },
  {
    number: "04",
    title: "Scale",
    description: "Optimize performance, enable self-service, and transfer knowledge to your team.",
  },
];

// Featured testimonial
const featuredTestimonial = {
  quote: "DigiTransLab transformed our data infrastructure from a bottleneck into a competitive advantage. Their medallion architecture implementation reduced our query times by 10x and cut costs by 45%.",
  name: "Sarah Chen",
  title: "VP of Data Engineering",
  company: "Fortune 500 Retailer",
  image: "/images/testimonials/ayoub.jpeg",
  results: ["10x Faster Queries", "45% Cost Reduction", "99.9% Uptime"],
};

// Why choose us
const whyChooseUs = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Deep Expertise",
    description: "50+ data engineers with Databricks, Snowflake, and cloud certifications",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Rapid Delivery",
    description: "POC in 4 weeks, production in 12 weeks with our proven methodology",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enterprise Security",
    description: "SOC 2, ISO 27001, GDPR compliant with zero security incidents",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Knowledge Transfer",
    description: "We build your team's capabilities, not just your platform",
  },
];


export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <ProgressBar />
      <Navbar />
      
      {/* Hero Section - Kept as requested */}
      <Hero videoUrl="/videos/home-page.mp4" />

      {/* Trust Bar - Client Logos */}
      <section className="py-12 bg-black/50 border-y border-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-gray-400 text-sm uppercase tracking-wider">
              Trusted by data-driven enterprises worldwide
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-8 md:h-10 w-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            badge="Our Services"
            title="Data & AI Excellence"
            description="End-to-end services from architecture to autonomous operations"
            alignment="center"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {coreServices.map((service, index) => (
              <AnimatedWrapper
                key={service.title}
                animation="scale-up-bounce"
                delay={index * 0.15}
              >
                <GlassCard 
                  variant="gradient"
                  className="p-8 h-full cursor-pointer group hover:scale-[1.02] transition-all duration-300"
                  onClick={() => navigate(service.href)}
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-20 text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-purple-400">
                      {service.stats}
                    </span>
                    <div className="flex items-center gap-2 text-gray-400 group-hover:text-purple-400 group-hover:gap-4 transition-all">
                      <span className="text-sm font-medium">Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </GlassCard>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <AnimatedWrapper
                key={metric.label}
                animation="bounce-in"
                delay={index * 0.1}
              >
                <div className="text-center">
                  <div className="inline-flex p-3 rounded-xl bg-purple-500/10 text-purple-400 mb-4">
                    {metric.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {metric.label}
                  </div>
                </div>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Data Visualization Section */}
      <AnimatedDataViz />

      {/* Technology Stack Showcase */}
      <TechStackShowcase />


      {/* How We Work Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Our Process"
            title="From Vision to Value"
            description="A proven methodology that delivers results in weeks, not months"
            alignment="center"
          />
          
          <div className="max-w-5xl mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <AnimatedWrapper
                  key={step.number}
                  animation="float-up"
                  delay={index * 0.15}
                >
                  <div className="relative">
                    {/* Connector line */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-blue-500/50" />
                    )}
                    
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg shadow-purple-500/30">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400 text-sm">{step.description}</p>
                    </div>
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial Section */}
      <section className="py-24 bg-gray-900/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/5 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <AnimatedWrapper animation="fade-in-blur">
              <GlassCard className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  {/* Quote */}
                  <div className="lg:col-span-2">
                    <Quote className="w-12 h-12 text-purple-500/30 mb-6" />
                    <blockquote className="text-xl md:text-2xl text-white font-light leading-relaxed mb-8">
                      "{featuredTestimonial.quote}"
                    </blockquote>
                    
                    {/* Results */}
                    <div className="flex flex-wrap gap-4 mb-8">
                      {featuredTestimonial.results.map((result, index) => (
                        <span 
                          key={index}
                          className="px-4 py-2 bg-purple-500/10 text-purple-300 rounded-full text-sm font-medium border border-purple-500/20"
                        >
                          {result}
                        </span>
                      ))}
                    </div>
                    
                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <img 
                        src={featuredTestimonial.image}
                        alt={featuredTestimonial.name}
                        className="w-14 h-14 rounded-full border-2 border-purple-500/30"
                      />
                      <div>
                        <div className="font-bold text-white">{featuredTestimonial.name}</div>
                        <div className="text-gray-400 text-sm">{featuredTestimonial.title}</div>
                        <div className="text-purple-400 text-sm">{featuredTestimonial.company}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Video Play Button / CTA */}
                  <div className="flex flex-col items-center justify-center">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 shadow-2xl shadow-purple-500/30">
                        <Play className="w-12 h-12 text-white ml-2" />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-ping" />
                    </div>
                    <span className="text-gray-400 text-sm">Watch Case Study</span>
                  </div>
                </div>
              </GlassCard>
            </AnimatedWrapper>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <AnimatedWrapper animation="slide-right">
              <div>
                <span className="inline-block mb-4 px-4 py-1.5 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30">
                  Why DigiTransLab
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Your Strategic Data Partner
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  We don't just build data platforms—we transform how organizations 
                  think about and leverage their data for competitive advantage.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {whyChooseUs.map((item) => (
                    <div 
                      key={item.title}
                      className="flex items-start gap-3 p-4 rounded-xl bg-gray-900/50 border border-gray-800"
                    >
                      <div className="flex-shrink-0 p-2 rounded-lg bg-purple-500/10 text-purple-400">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <GradientButton
                  size="lg"
                  onClick={() => navigate('/about')}
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Learn About Us
                </GradientButton>
              </div>
            </AnimatedWrapper>
            
            {/* Right - Stats Card */}
            <AnimatedWrapper animation="slide-left">
              <GlassCard className="p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
                
                <h3 className="text-2xl font-bold text-white mb-8">
                  Proven Track Record
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Building2 className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">Enterprise Clients</span>
                    </div>
                    <span className="text-2xl font-bold text-white">150+</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">Projects Delivered</span>
                    </div>
                    <span className="text-2xl font-bold text-white">500+</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="text-gray-300">Client Satisfaction</span>
                    </div>
                    <span className="text-2xl font-bold text-white">98%</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Data Engineers</span>
                    </div>
                    <span className="text-2xl font-bold text-white">50+</span>
                  </div>
                </div>
                
                {/* Certifications */}
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <p className="text-sm text-gray-400 mb-4">Certifications & Partnerships</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">AWS Partner</span>
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">Databricks Partner</span>
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">SOC 2</span>
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">ISO 27001</span>
                  </div>
                </div>
              </GlassCard>
            </AnimatedWrapper>
          </div>
        </div>
      </section>


      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-indigo-900/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedWrapper animation="zoom-in" className="max-w-4xl mx-auto text-center">
            <span className="inline-block mb-4 px-4 py-1.5 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30">
              Ready to Transform?
            </span>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Let's Build Your Data Advantage
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Schedule a free consultation to discuss how we can help you build 
              intelligent data platforms that drive competitive advantage.
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
                onClick={() => navigate('/services')}
                rightIcon={<ChevronRight className="w-5 h-5" />}
              >
                Explore Services
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
