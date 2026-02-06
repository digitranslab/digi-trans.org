import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { motion } from "framer-motion";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { GradientButton } from "../../ui/gradient-button";
import SEO from "../../SEO";
import {
  ArrowRight,
  Database,
  Zap,
  Shield,
  BarChart,
  CheckCircle,
  Cloud,
  Globe,
  TrendingUp,
  Users,
  Code,
} from "lucide-react";

const features = [
  {
    title: "Real-time Data Processing",
    description: "Process IoT data streams in real-time with sub-100ms latency for immediate insights and actions.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Scalable Architecture", 
    description: "Auto-scaling infrastructure that handles millions of IoT devices and data points seamlessly.",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: "Advanced Analytics",
    description: "Built-in analytics engine with machine learning capabilities for predictive maintenance and optimization.",
    icon: <BarChart className="w-6 h-6" />
  },
  {
    title: "Enterprise Security",
    description: "End-to-end encryption, secure device authentication, and compliance with industry standards.",
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: "Multi-Cloud Support",
    description: "Deploy across AWS, Azure, or Google Cloud with hybrid and multi-cloud orchestration.",
    icon: <Cloud className="w-6 h-6" />
  },
  {
    title: "Device Management",
    description: "Comprehensive device lifecycle management, monitoring, and remote configuration capabilities.",
    icon: <Globe className="w-6 h-6" />
  }
];

const benefits = [
  "Reduce IoT product development time by 50%",
  "Cut infrastructure costs by up to 40%", 
  "Improve data processing and analysis speed",
  "Enable real-time data aggregation and analysis",
  "Accelerate time to market for IoT solutions",
  "Ensure scalability from prototype to production"
];

const industries = [
  { name: "Energy", description: "Smart grid management and energy optimization" },
  { name: "Healthcare", description: "Medical device monitoring and patient care" },
  { name: "Smart Home", description: "Connected home automation and security" },
  { name: "Automotive", description: "Connected vehicle and fleet management" },
  { name: "Environmental", description: "Environmental monitoring and sustainability" },
  { name: "FinTech", description: "Payment terminals and financial device networks" },
  { name: "Industrial", description: "Manufacturing equipment and process monitoring" },
  { name: "Agriculture", description: "Precision agriculture and crop monitoring" },
  { name: "Retail", description: "Smart retail and inventory management" },
  { name: "Transportation", description: "Logistics and supply chain optimization" },
  { name: "Manufacturing", description: "Industrial IoT and predictive maintenance" },
  { name: "Mining", description: "Equipment monitoring and safety systems" }
];

const technologies = [
  "Apache Druid", "Python", "React", "Kubernetes", 
  "Apache Kafka", "KeyCloak", "Docker", "PostgreSQL",
  "Redis", "Elasticsearch", "Grafana", "Prometheus"
];

export default function IoTAccelerator() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="IoT Data Management Accelerator | Digitrans Solutions Hub"
        description="Halve your IoT product's time to market with our comprehensive IoT accelerator. Speed up development and set up proper data management processes."
        canonicalUrl="/solutions-hub/iot-accelerator"
        keywords={[
          "IoT accelerator",
          "IoT data management",
          "IoT platform",
          "real-time IoT",
          "IoT development",
          "IoT analytics",
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
                  <Database className="w-10 h-10 text-purple-400" />
                </div>
                <div>
                  <span className="text-sm text-purple-400 font-medium">Accelerator</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-900/30 text-blue-300 border border-blue-500/20">
                      IoT
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-purple-900/30 text-purple-300 border border-purple-500/20">
                      Featured
                    </span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                IoT data management platform to halve your IoT product's time to market
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Try the Digitrans IoT Accelerator to speed up time to market for your project and set up proper data management processes.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <GradientButton
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                  onClick={() => (window.location.href = "/contact")}
                >
                  Request a demo
                </GradientButton>
                <GradientButton
                  variant="secondary"
                >
                  View Documentation
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
                  src="/assets/products/product1.webp"
                  alt="IoT Accelerator Dashboard"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Core Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to build, deploy, and scale your IoT solution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-purple-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg border border-purple-500/30 p-2 flex items-center justify-center text-purple-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Key Benefits
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Accelerate your IoT development with proven patterns and best practices
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="p-8 bg-gradient-to-br from-purple-900/20 via-gray-900/50 to-blue-900/20 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Performance Metrics</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Time to Market Reduction</span>
                    <span className="text-2xl font-bold text-purple-400">50%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full w-1/2"></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Infrastructure Cost Savings</span>
                    <span className="text-2xl font-bold text-blue-400">40%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full w-2/5"></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Development Speed Increase</span>
                    <span className="text-2xl font-bold text-green-400">3x</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900/50 to-black">
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
              Our IoT accelerator is designed for diverse industry applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card className="p-6 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-purple-500/50 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white mb-2">{industry.name}</h3>
                  <p className="text-gray-300 text-sm">{industry.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Technologies</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with industry-leading technologies for maximum performance and reliability
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-full text-gray-300 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
              >
                {tech}
              </motion.span>
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
              Fast-track your project's launch and optimize data handling
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Acquire a detailed walkthrough of the IoT accelerator, complete with a use case that mirrors the specificities of your business operation.
            </p>
            <GradientButton
              rightIcon={<ArrowRight className="h-5 w-5" />}
              onClick={() => (window.location.href = "/contact")}
            >
              Request a demo
            </GradientButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}