import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import UniverseLights from "../UniverseLights";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { GradientButton } from "../ui/gradient-button";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import SEO from "../SEO";
import { OrganizationSchema } from "../JsonLd";
import { LazyImage } from "../ui/lazy-image";
import {
  BarChart,
  Cloud,
  Bot,
  FileText,
  Database,
  Code,
  Server,
  GitMerge,
  Brain,
  LineChart,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

// Application category definitions
const applications = {
  services: [
    {
      title: "Big Data Analytics",
      description: "Transform your data into insights with our visual analytics platform.",
      icon: <Database className="w-10 h-10 text-purple-500" />,
      href: "/services/big-data-analytics",
      features: ["Data pipeline builder", "Real-time analytics", "Visualization tools"]
    },
    {
      title: "AI Solutions",
      description: "Build sophisticated AI workflows without code using our drag-and-drop interface.",
      icon: <Brain className="w-10 h-10 text-purple-500" />,
      href: "/services/ai-solutions",
      features: ["LLM integration", "Multi-agent orchestration", "API creation"]
    }
  ],
  products: [
    {
      title: "QuantEdge",
      description: "Advanced analytics platform for financial markets with intuitive visual interface.",
      icon: <BarChart className="w-10 h-10 text-green-500" />,
      href: "/products/quant-edge",
      features: ["Visual strategy builder", "Market data integration", "Trading automation"]
    },
    {
      title: "Kozmo AI",
      description: "LLM orchestration for document analysis with visual workflow builder.",
      icon: <Bot className="w-10 h-10 text-green-500" />,
      href: "/products/kozmo-ai",
      features: ["Document processing", "Multi-agent coordination", "Visual debugging"]
    }
  ]
};

export default function Applications() {
  const [activeTab, setActiveTab] = useState("services");
  
  // Get applications based on active tab
  const getActiveApps = () => {
    return applications[activeTab] || [];
  };
  
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Business Applications | Visual Builder for AI & Data Workflows"
        description="Explore our suite of business applications built with our visual workflow builder."
        canonicalUrl="/applications"
      />
      <OrganizationSchema />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <UniverseLights />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Business Applications
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 mb-12"
            >
              Build powerful AI and data applications without code using our visual workflow builder.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <GradientButton
                size="lg"
                onClick={() => window.location.href = "/contact"}
                rightIcon={<ArrowRight className="h-5 w-5" />}
              >
                Request a Demo
              </GradientButton>
              <GradientButton
                size="lg"
                variant="secondary"
                onClick={() => window.location.href = "/pricing"}
              >
                View Pricing
              </GradientButton>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Applications Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Applications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore our suite of applications powered by visual workflows
            </p>
            
            <Tabs 
              value={activeTab} 
              onValueChange={setActiveTab}
              className="inline-flex bg-gray-800 p-1 rounded-lg"
            >
              <TabsTrigger 
                value="services" 
                className="px-6 py-2 rounded-md data-[state=active]:bg-purple-700"
              >
                Services
              </TabsTrigger>
              <TabsTrigger 
                value="products" 
                className="px-6 py-2 rounded-md data-[state=active]:bg-purple-700"
              >
                Products
              </TabsTrigger>
            </Tabs>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {getActiveApps().map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 hover:border-purple-500/50 transition-all duration-300">
                  <div className="p-6">
                    <div className="mb-6">{app.icon}</div>
                    <h3 className="text-2xl font-semibold mb-3 text-white">
                      {app.title}
                    </h3>
                    <p className="text-gray-300 mb-6">{app.description}</p>
                    <div className="space-y-2 mb-6">
                      {app.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-300">{feature}</p>
                        </div>
                      ))}
                    </div>
                    <GradientButton
                      className="w-full"
                      variant="ghost"
                      onClick={() => window.location.href = app.href}
                      rightIcon={<ArrowRight className="h-4 w-4" />}
                    >
                      Learn More
                    </GradientButton>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-blue-800/30 rounded-xl">
            <div className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Building?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Experience the power of visual workflows for your business applications
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <GradientButton
                  size="lg"
                  onClick={() => window.location.href = "/contact"}
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                >
                  Schedule a Demo
                </GradientButton>
                <GradientButton
                  size="lg"
                  variant="secondary"
                  onClick={() => window.location.href = "/contact"}
                >
                  Try for Free
                </GradientButton>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
} 