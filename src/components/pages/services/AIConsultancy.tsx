import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { motion } from "framer-motion";
import { Card } from "../../ui/card";
import { GradientButton } from "../../ui/gradient-button";
import SEO from "../../SEO";
import {
  ArrowRight,
  Brain,
  BarChart,
  Database,
  TrendingUp,
  CheckCircle,
  Zap,
  Users,
  Globe,
  Target,
  Lightbulb,
  Settings,
} from "lucide-react";

const services = [
  {
    title: "Data Strategy & Architecture",
    description: "Design comprehensive data strategies that unlock business value from your information assets.",
    icon: <Database className="w-8 h-8" />,
    features: [
      "Data governance frameworks",
      "Modern data lake architectures", 
      "Real-time streaming pipelines",
      "Cloud-native data platforms"
    ]
  },
  {
    title: "AI Model Development",
    description: "Build custom machine learning models tailored to your specific business challenges.",
    icon: <Brain className="w-8 h-8" />,
    features: [
      "Predictive analytics models",
      "Natural language processing",
      "Computer vision solutions",
      "Recommendation engines"
    ]
  },
  {
    title: "Business Intelligence",
    description: "Transform raw data into actionable insights with advanced analytics and visualization.",
    icon: <BarChart className="w-8 h-8" />,
    features: [
      "Interactive dashboards",
      "Automated reporting",
      "KPI monitoring systems",
      "Self-service analytics"
    ]
  },
  {
    title: "AI Implementation",
    description: "Deploy AI solutions at scale with enterprise-grade infrastructure and monitoring.",
    icon: <Settings className="w-8 h-8" />,
    features: [
      "MLOps pipelines",
      "Model monitoring",
      "A/B testing frameworks",
      "Performance optimization"
    ]
  }
];

const results = [
  {
    metric: "300%",
    label: "Average ROI Improvement",
    description: "Clients see significant returns on AI investments within first year"
  },
  {
    metric: "85%",
    label: "Faster Decision Making",
    description: "Real-time insights accelerate business processes"
  },
  {
    metric: "200+",
    label: "AI Models Deployed",
    description: "Successfully implemented across diverse industries"
  },
  {
    metric: "99.9%",
    label: "Model Accuracy",
    description: "Enterprise-grade reliability and performance"
  }
];

const process = [
  {
    step: "1",
    title: "Discovery & Assessment",
    description: "Analyze your data landscape and identify AI opportunities that align with business objectives."
  },
  {
    step: "2", 
    title: "Strategy Development",
    description: "Create a comprehensive AI roadmap with prioritized use cases and implementation timeline."
  },
  {
    step: "3",
    title: "Proof of Concept",
    description: "Build and validate AI models with your data to demonstrate value and feasibility."
  },
  {
    step: "4",
    title: "Production Deployment",
    description: "Deploy AI solutions at scale with monitoring, governance, and continuous improvement."
  }
];

const industries = [
  "Financial Services", "Healthcare", "Manufacturing", "Retail & E-commerce",
  "Technology", "Energy & Utilities", "Telecommunications", "Government"
];

export default function AIConsultancy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Big Data & AI Consultancy | Digitrans Enterprise Solutions"
        description="Transform your business with intelligent data strategies, machine learning models, and AI-powered insights that drive measurable results. Expert consultancy for enterprise AI transformation."
        canonicalUrl="/services/ai-consultancy"
        keywords={[
          "AI consultancy",
          "big data consulting",
          "machine learning consulting",
          "data strategy",
          "AI transformation",
          "enterprise AI solutions",
        ]}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-gray-900 to-black relative">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-purple-900/10 rounded-full filter blur-[120px] -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-600/20 rounded-lg border border-purple-500/30 p-3 flex items-center justify-center">
                  <Brain className="w-10 h-10 text-purple-400" />
                </div>
                <div>
                  <span className="text-sm text-purple-400 font-medium">Consultancy</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-900/30 text-blue-300 border border-blue-500/20">
                      Enterprise
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-purple-900/30 text-purple-300 border border-purple-500/20">
                      AI Strategy
                    </span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Big Data & AI Consultancy
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with intelligent data strategies, machine learning models, and AI-powered insights that drive measurable results and competitive advantage.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <GradientButton
                  size="lg"
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                  onClick={() => (window.location.href = "/contact")}
                >
                  Start AI Transformation
                </GradientButton>
                <GradientButton
                  size="lg"
                  variant="secondary"
                >
                  View Case Studies
                </GradientButton>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-xl overflow-hidden border border-purple-500/20">
                <img
                  src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&auto=format&fit=crop&q=60"
                  alt="AI Consultancy Dashboard"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Proven Results</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI consultancy delivers measurable business impact across industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-purple-500/50 transition-all duration-300">
                  <div className="text-4xl font-bold text-purple-400 mb-2">{result.metric}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{result.label}</h3>
                  <p className="text-gray-300 text-sm">{result.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our AI & Data Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and data solutions designed for enterprise success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-purple-600/20 rounded-lg border border-purple-500/30 p-3 flex items-center justify-center text-purple-400 flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Proven Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to AI transformation that ensures success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-purple-500/50 transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center text-purple-400 mx-auto mb-4 border border-purple-500/30 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Delivering AI solutions across diverse sectors with deep domain expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-purple-500/50 transition-all duration-300">
                  <Globe className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-white font-medium">{industry}</h3>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-900/20 via-gray-900 to-blue-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI consultancy can unlock the value in your data and accelerate your digital transformation.
            </p>
            <GradientButton
              size="lg"
              rightIcon={<ArrowRight className="h-5 w-5" />}
              onClick={() => (window.location.href = "/contact")}
            >
              Schedule Consultation
            </GradientButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}