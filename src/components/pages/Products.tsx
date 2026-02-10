/**
 * Products Page
 * 
 * Showcases all Digitrans products: Allama and DBLOCK
 * with detailed information and CTAs.
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
  Shield, 
  Zap, 
  GitBranch,
  Globe,
  Lock,
  Workflow,
  Database,
  Sparkles,
  ExternalLink
} from "lucide-react";

// Products data
const products = [
  {
    name: "Allama",
    tagline: "Open-Source AI Security Automation",
    description: "Automate security workflows with intelligent AI agents that detect, analyse, and respond to threats in real-time. Built for modern SOC teams who need speed and precision.",
    longDescription: "Allama is an open-source AI security automation platform (SOAR) that uses AI to streamline incident response, threat detection, and security operations. With 80+ integrations and a visual workflow builder, teams can automate repetitive tasks and focus on what matters most.",
    benefits: [
      "Reduce incident response time by 90%",
      "Automate repetitive security tasks",
      "Integrate with 80+ security tools",
      "Self-hosted or cloud deployment",
      "AI-powered threat triage",
      "Visual workflow builder"
    ],
    features: [
      { icon: <Workflow className="w-5 h-5" />, title: "Visual Workflows", description: "Drag-and-drop workflow builder for security automation" },
      { icon: <Bot className="w-5 h-5" />, title: "AI Triage", description: "Intelligent alert prioritisation and analysis" },
      { icon: <Shield className="w-5 h-5" />, title: "80+ Integrations", description: "Connect to your existing security stack" },
      { icon: <Lock className="w-5 h-5" />, title: "Self-Hosted", description: "Deploy on your infrastructure for full control" },
    ],
    cta1: { text: "Learn More", href: "/products/allama" },
    cta2: { text: "View on GitHub", href: "https://github.com/digitranslab/allama", external: true },
    gradient: "from-purple-600 to-pink-600",
    status: "Live",
    icon: <Bot className="w-12 h-12" />,
    image: "/images/products/allama/parent-workflow.png",
  },
  {
    name: "DBLOCK",
    tagline: "AI-Powered Data Workflow Automation",
    description: "Build, deploy, and manage data applications with a visual workflow builder powered by AI. Create intelligent data pipelines without writing code.",
    longDescription: "DBLOCK is a next-generation data platform that combines visual workflow design with AI assistance. Connect to 100+ data sources, transform data with natural language, and deploy production-ready pipelines in minutes.",
    benefits: [
      "Visual drag-and-drop workflow builder",
      "AI-assisted data transformations",
      "Connect to 100+ data sources",
      "Self-service analytics for teams",
      "Real-time data processing",
      "Enterprise-grade security"
    ],
    features: [
      { icon: <Layers className="w-5 h-5" />, title: "Visual Editor", description: "Build complex pipelines with drag-and-drop" },
      { icon: <Sparkles className="w-5 h-5" />, title: "AI Assistant", description: "Natural language data transformations" },
      { icon: <Database className="w-5 h-5" />, title: "100+ Connectors", description: "Connect to any data source" },
      { icon: <Zap className="w-5 h-5" />, title: "Real-Time", description: "Stream processing at scale" },
    ],
    cta1: { text: "Learn More", href: "/products/dblock" },
    cta2: { text: "Join Waitlist", href: "/contact", external: false },
    gradient: "from-blue-600 to-cyan-600",
    status: "Coming Soon",
    icon: <Layers className="w-12 h-12" />,
    image: "/images/products/dblock/workspace.png",
  },
];

// Why our products section
const whyOurProducts = [
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: "Open-Source First",
    description: "Transparent, auditable code with active community support",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Self-Hosted Option",
    description: "Deploy on your infrastructure for complete data control",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Enterprise Ready",
    description: "SOC 2 compliant with enterprise support available",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Rapid Deployment",
    description: "Get started in minutes with Docker or Kubernetes",
  },
];

export default function Products() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block mb-4 px-4 py-1.5 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30">
              Our Products
            </span>
            <TypewriterGradientText
              text="Production-Ready AI Platforms"
              className="text-4xl md:text-6xl font-bold mb-6"
              gradientClassName="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
              duration={1.8}
            />
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Open-source foundations with enterprise-grade support. Deploy on your infrastructure 
              or let us manage it for you.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <GradientButton
                size="lg"
                onClick={() => navigate('/products/allama')}
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Explore Allama
              </GradientButton>
              <GradientButton
                size="lg"
                variant="secondary"
                onClick={() => navigate('/products/dblock')}
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Discover DBLOCK
              </GradientButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {products.map((product, index) => (
              <AnimatedWrapper
                key={product.name}
                animation="fade-in-blur"
                delay={index * 0.2}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${product.gradient} text-white`}>
                        {product.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h2 className="text-3xl font-bold text-white">{product.name}</h2>
                          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                            product.status === 'Live' 
                              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                              : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                          }`}>
                            {product.status}
                          </span>
                        </div>
                        <p className="text-purple-400">{product.tagline}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {product.longDescription}
                    </p>
                    
                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {product.features.map((feature, i) => (
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
                      {product.benefits.slice(0, 4).map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                    
                    {/* CTAs */}
                    <div className="flex gap-4">
                      <GradientButton
                        onClick={() => navigate(product.cta1.href)}
                        rightIcon={<ArrowRight className="w-4 h-4" />}
                      >
                        {product.cta1.text}
                      </GradientButton>
                      <GradientButton
                        variant="secondary"
                        onClick={() => product.cta2.external 
                          ? window.open(product.cta2.href, '_blank') 
                          : navigate(product.cta2.href)
                        }
                        rightIcon={product.cta2.external ? <ExternalLink className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                      >
                        {product.cta2.text}
                      </GradientButton>
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="relative">
                      <div className={`absolute -inset-4 bg-gradient-to-r ${product.gradient} rounded-2xl opacity-20 blur-xl`} />
                      <img 
                        src={product.image}
                        alt={`${product.name} Interface`}
                        className="relative w-full h-auto rounded-xl shadow-2xl border border-gray-800"
                      />
                    </div>
                  </div>
                </div>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Products */}
      <section className="py-24 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Why Choose Us"
            title="Built Different"
            description="Our products are designed with enterprise needs in mind"
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {whyOurProducts.map((item, index) => (
              <AnimatedWrapper
                key={item.title}
                animation="bounce-in"
                delay={index * 0.1}
              >
                <GlassCard className="p-6 text-center h-full">
                  <div className="inline-flex p-3 rounded-xl bg-purple-500/10 text-purple-400 mb-4">
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-indigo-900/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedWrapper animation="zoom-in" className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Try our products for free or schedule a demo to see them in action.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton
                size="lg"
                onClick={() => window.open('https://github.com/digitranslab/allama', '_blank')}
                rightIcon={<ExternalLink className="w-5 h-5" />}
              >
                Try Allama Free
              </GradientButton>
              <GradientButton
                size="lg"
                variant="secondary"
                onClick={() => navigate('/contact')}
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Schedule Demo
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
