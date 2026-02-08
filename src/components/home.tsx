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
  Sparkles,
  Briefcase,
  Code2,
  Package,
  Landmark,
  HeartPulse,
  ShoppingCart,
  Cpu,
  Factory,
  Globe,
  Rocket,
  Lock,
  GitBranch
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
  { name: "Renault", logo: "/images/1.svg" },
  { name: "BPI France", logo: "/images/2.svg" },
  { name: "Dr. Martens", logo: "/images/3.svg" },
  { name: "Direct Line Insurance", logo: "/images/4.svg" },
  { name: "Thales", logo: "/images/5.svg" },
  { name: "RATP", logo: "/images/6.svg" },
];

// SECTION 2: Three Pillars - What We Do
const threePillars = [
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Consulting",
    subtitle: "Strategic AI & Data Advisory",
    description: "Expert guidance to define your data strategy, AI roadmap, and transformation journey.",
    bullets: [
      "Data strategy & governance frameworks",
      "AI readiness assessments",
      "Technology selection & architecture",
      "Change management & training"
    ],
    href: "/services",
    cta: "Explore Consulting",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Engineering",
    subtitle: "Build & Deploy at Scale",
    description: "End-to-end implementation of modern data platforms and AI solutions.",
    bullets: [
      "Data platform engineering",
      "ML/AI model development",
      "Real-time streaming pipelines",
      "Cloud migration & optimisation"
    ],
    href: "/services",
    cta: "View Engineering",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Products",
    subtitle: "Ready-to-Deploy Solutions",
    description: "Production-ready platforms that accelerate your AI and data initiatives.",
    bullets: [
      "Allama: AI workflow automation",
      "DBLOCK: Data application platform",
      "Open-source foundations",
      "Enterprise support included"
    ],
    href: "/products",
    cta: "Discover Products",
    gradient: "from-orange-500 to-amber-500",
  },
];

// SECTION 3: Products Showcase
const products = [
  {
    name: "Allama",
    headline: "Open-Source AI Security Automation",
    description: "Automate security workflows with intelligent AI agents that detect, analyse, and respond to threats in real-time.",
    benefits: [
      "Reduce incident response time by 90%",
      "Automate repetitive security tasks",
      "Integrate with existing security stack",
      "Open-source with enterprise support"
    ],
    cta1: { text: "Learn More", href: "/products/allama" },
    cta2: { text: "Try Free", href: "https://github.com/digitranslab/allama" },
    gradient: "from-purple-600 to-pink-600",
    icon: <Bot className="w-10 h-10" />,
  },
  {
    name: "DBLOCK",
    headline: "AI-Powered Data Workflow Automation",
    description: "Build, deploy, and manage data applications with a visual workflow builder powered by AI.",
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
];

// SECTION 5: Why DigiTransLab - 5 Differentiators
const differentiators = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Proven Experience",
    description: "10+ years delivering enterprise data solutions",
    proof: "500+ projects across 150+ clients",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Massive Scale",
    description: "Built to handle enterprise workloads",
    proof: "50PB+ data processed, 1B+ events daily",
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: "Open-Source First",
    description: "No vendor lock-in, full transparency",
    proof: "Contributors to major OSS projects",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Cloud Agnostic",
    description: "Deploy anywhere, migrate anytime",
    proof: "AWS, GCP, Azure certified partners",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Rapid Delivery",
    description: "From POC to production in weeks",
    proof: "4-week POC, 12-week production",
  },
];

// SECTION 6: Testimonials
const testimonials = [
  {
    quote: "DigiTransLab transformed our data infrastructure from a bottleneck into a competitive advantage. Their medallion architecture reduced query times by 10x.",
    name: "Sarah Chen",
    title: "VP of Data Engineering",
    company: "Fortune 500 Retailer",
    image: "/images/testimonials/ayoub.jpeg",
    results: ["10x Faster Queries", "45% Cost Reduction"],
  },
  {
    quote: "The team's expertise in AI and data engineering is exceptional. They delivered a production-ready ML platform in just 8 weeks.",
    name: "James Mitchell",
    title: "Chief Data Officer",
    company: "Global Insurance Provider",
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

      {/* Trust Bar - Client Logos */}
      <section className="py-16 bg-black overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block mb-4 px-4 py-1.5 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-700">
              Our Clients
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Data-Driven Enterprises Worldwide
            </h2>
          </motion.div>
          
          {/* Animated scrolling logos */}
          <div className="relative">
            <motion.div
              className="flex gap-6 items-center"
              animate={{ x: [0, -1800] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35,
                  ease: "linear",
                },
              }}
            >
              {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 px-8 py-5 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer hover:bg-gray-800/50"
                >
                  <div className="flex items-center gap-4">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="h-10 w-auto object-contain brightness-0 invert"
                    />
                    <span className="text-white font-medium whitespace-nowrap group-hover:text-purple-400 transition-colors text-lg">
                      {client.name}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT WE DO - Three Pillars */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            badge="What We Do"
            title="AI, Data & Products"
            description="Three pillars of expertise to accelerate your digital transformation"
            alignment="center"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {threePillars.map((pillar, index) => (
              <AnimatedWrapper
                key={pillar.title}
                animation="scale-up-bounce"
                delay={index * 0.15}
              >
                <GlassCard 
                  variant="gradient"
                  className="p-8 h-full cursor-pointer group hover:scale-[1.02] transition-all duration-300"
                  onClick={() => navigate(pillar.href)}
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${pillar.gradient} bg-opacity-20 text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {pillar.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-purple-400 text-sm font-medium mb-4">
                    {pillar.subtitle}
                  </p>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {pillar.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {pillar.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center gap-2 text-gray-400 group-hover:text-purple-400 group-hover:gap-4 transition-all mt-auto">
                    <span className="text-sm font-medium">{pillar.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </GlassCard>
              </AnimatedWrapper>
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 max-w-6xl mx-auto">
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

      {/* SECTION 4: INDUSTRIES */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Industries"
            title="Sector Expertise"
            description="Deep domain knowledge across key industries"
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16">
            {industries.map((industry, index) => (
              <AnimatedWrapper
                key={industry.title}
                animation="bounce-in"
                delay={index * 0.1}
              >
                <GlassCard 
                  className="p-6 text-center cursor-pointer group hover:scale-105 transition-all duration-300"
                  onClick={() => navigate(industry.href)}
                >
                  <div className="inline-flex p-4 rounded-xl bg-purple-500/10 text-purple-400 mb-4 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all">
                    {industry.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
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


      {/* SECTION 5: WHY DIGITRANSLAB */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Why DigiTransLab"
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
            {["AWS Partner", "GCP Partner", "Azure Partner", "SOC 2 Type II", "ISO 27001"].map((badge) => (
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
            description="Real results from real partnerships"
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
