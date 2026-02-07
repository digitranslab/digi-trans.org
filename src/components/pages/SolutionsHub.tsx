import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { GradientButton } from "../ui/gradient-button";
import SEO from "../SEO";
import {
  ArrowRight,
  Filter,
  Search,
  CheckCircle,
  Zap,
  Cloud,
  Database,
  Bot,
  Shield,
  Code,
  BarChart,
  Globe,
  Briefcase,
} from "lucide-react";
import { AnimatedWrapper } from "../ui/animated-wrapper";
import { GlassCard } from "../ui/glass-card";
import { SectionHeader } from "../ui/section-header";
import { TypewriterGradientText } from "../ui/typewriter-text";

// Solution categories based on Yalantis structure
const solutions = [
  {
    id: "iot-accelerator",
    title: "IoT Data Management Platform",
    description: "Halve your IoT product's time to market with our comprehensive IoT accelerator to speed up development and set up proper data management processes.",
    type: "Accelerator",
    industry: ["IoT", "Manufacturing", "Healthcare"],
    license: "Digitrans",
    image: "/assets/products/product1.webp",
    icon: <Database className="w-8 h-8" />,
    featured: true,
    href: "/solutions-hub/iot-accelerator"
  },
  {
    id: "ai-assistant",
    title: "AI-Powered Virtual Assistant",
    description: "Exceed your KPIs and streamline operations with our AI-powered virtual assistant optimized for SaaS businesses.",
    type: "PoC",
    industry: ["Industry agnostic"],
    license: "Digitrans",
    image: "/assets/products/product2.webp",
    icon: <Bot className="w-8 h-8" />,
    featured: false,
    href: "/solutions-hub/ai-assistant"
  },
  {
    id: "saas-container-optimizer",
    title: "SaaS Container Optimizer",
    description: "Say goodbye to wasted resources, improve performance, and reduce infrastructure costs for your SaaS platform.",
    type: "PoC",
    industry: ["Software products", "SaaS"],
    license: "Digitrans",
    image: "/assets/products/product3.webp",
    icon: <Cloud className="w-8 h-8" />,
    featured: false,
    href: "/solutions-hub/container-optimizer"
  },
  {
    id: "devops-accelerator",
    title: "DevOps Accelerator",
    description: "Deploy your infrastructure four times faster with our DevOps Accelerator and substantially facilitate your platform's development and public release.",
    type: "Accelerator",
    industry: ["Industry agnostic"],
    license: "Digitrans",
    image: "/assets/products/product1.webp",
    icon: <Zap className="w-8 h-8" />,
    featured: false,
    href: "/solutions-hub/devops-accelerator"
  },
  {
    id: "auth-accelerator",
    title: "Authorization Accelerator",
    description: "Accelerate your time to market and reduce costs on essential solution functionality with our secure authorization platform.",
    type: "Accelerator",
    industry: ["Industry agnostic", "SaaS"],
    license: "Digitrans",
    image: "/assets/products/product2.webp",
    icon: <Shield className="w-8 h-8" />,
    featured: false,
    href: "/solutions-hub/auth-accelerator"
  },
  {
    id: "serverless-accelerator",
    title: "Serverless Infrastructure Accelerator",
    description: "Deploy your cloud infrastructure in 1 day with our serverless accelerator. Manage scalability and reduce deployment costs.",
    type: "Accelerator",
    industry: ["Industry agnostic", "Cloud"],
    license: "Digitrans",
    image: "/assets/products/product3.webp",
    icon: <Cloud className="w-8 h-8" />,
    featured: false,
    href: "/solutions-hub/serverless-accelerator"
  },
  {
    id: "saas-analytics",
    title: "SaaS Analytics Suite",
    description: "Comprehensive analytics and reporting solution designed specifically for SaaS businesses to track KPIs and user behavior.",
    type: "Product",
    industry: ["SaaS", "Analytics"],
    license: "Digitrans",
    image: "/assets/products/product1.webp",
    icon: <BarChart className="w-8 h-8" />,
    featured: false,
    href: "/solutions-hub/saas-analytics"
  },
  {
    id: "quality-accelerator",
    title: "Quality Assurance Accelerator",
    description: "Quickly evaluate software and development process quality with our QA accelerator that streamlines project management and quality assurance practices.",
    type: "Accelerator",
    industry: ["Software products", "Quality assurance"],
    license: "Digitrans",
    image: "/assets/products/product2.webp",
    icon: <CheckCircle className="w-8 h-8" />,
    featured: false,
    href: "/solutions-hub/qa-accelerator"
  },
  {
    id: "payment-system",
    title: "SaaS Payment Management",
    description: "Streamline subscription management and payment processing with our customizable and flexible compensation management system.",
    type: "Product",
    industry: ["FinTech", "SaaS"],
    license: "Digitrans",
    image: "/assets/products/product3.webp",
    icon: <Briefcase className="w-8 h-8" />,
    featured: false,
    href: "/solutions-hub/payment-system"
  },
  {
    id: "erp-system",
    title: "SaaS-Ready ERP System",
    description: "Robust ERP system facilitating resource planning for midsize and large SaaS businesses with cloud-native architecture.",
    type: "Product",
    industry: ["Software products", "Enterprise"],
    license: "Digitrans",
    image: "/assets/products/product1.webp",
    icon: <Globe className="w-8 h-8" />,
    featured: false,
    href: "/solutions-hub/erp-system"
  }
];

const filters = {
  industry: [
    "SaaS", "IoT", "FinTech", "Healthcare", "Manufacturing", "Analytics", 
    "Software products", "Industry agnostic", "Quality assurance", "Cloud", "Enterprise"
  ],
  type: ["Product", "Accelerator", "PoC"],
  license: ["Digitrans"]
};

export default function SolutionsHub() {
  const [selectedFilters, setSelectedFilters] = useState({
    industry: [],
    type: [],
    license: []
  });
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filteredSolutions = solutions.filter(solution => {
    if (selectedFilters.industry.length > 0) {
      const hasIndustry = solution.industry.some(ind => selectedFilters.industry.includes(ind));
      if (!hasIndustry) return false;
    }
    if (selectedFilters.type.length > 0 && !selectedFilters.type.includes(solution.type)) {
      return false;
    }
    if (selectedFilters.license.length > 0 && !selectedFilters.license.includes(solution.license)) {
      return false;
    }
    return true;
  });

  const sortedSolutions = [...filteredSolutions].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return b.id.localeCompare(a.id);
      case "featured":
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
      default:
        return 0;
    }
  });

  const toggleFilter = (category, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

  const clearFilters = () => {
    setSelectedFilters({ industry: [], type: [], license: [] });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Solutions Hub | Digitrans SaaS Development Accelerators"
        description="Technical excellence and years of SaaS engineering consolidated into industry-specific ready-made solutions to minimize time to market and increase business efficiency."
        canonicalUrl="/solutions-hub"
        keywords={[
          "SaaS accelerators",
          "development solutions",
          "IoT platform",
          "DevOps accelerator",
          "SaaS products",
          "ready-made solutions",
        ]}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedWrapper animation="fade-up-slow" className="text-center max-w-4xl mx-auto">
            <TypewriterGradientText 
              text="Digitrans Solutions Hub"
              className="text-5xl md:text-6xl font-bold mb-6"
              duration={1.8}
            />
            <p className="text-xl text-gray-300 leading-relaxed">
              Technical excellence and years of SaaS engineering consolidated into industry-specific ready-made solutions to minimize time to market and increase business efficiency
            </p>
          </AnimatedWrapper>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-900/50 border-y border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                <Filter className="w-4 h-4 mr-2" />
                SHOW FILTERS
              </Button>
              
              {Object.values(selectedFilters).some(arr => arr.length > 0) && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">Filter by:</span>
                  {Object.entries(selectedFilters).map(([category, values]) =>
                    values.map(value => (
                      <span
                        key={`${category}-${value}`}
                        className="px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-500/30 flex items-center gap-2"
                      >
                        {value}
                        <button
                          onClick={() => toggleFilter(category, value)}
                          className="text-purple-300 hover:text-white"
                        >
                          ×
                        </button>
                      </span>
                    ))
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-gray-400 hover:text-white"
                  >
                    Clear all
                  </Button>
                </div>
              )}
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-800 border border-gray-600 text-white px-3 py-2 rounded text-sm"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="latest">Latest</option>
              </select>
            </div>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-800/50 rounded-lg border border-gray-700"
            >
              {Object.entries(filters).map(([category, options]) => (
                <div key={category}>
                  <h3 className="text-white font-medium mb-3 capitalize">{category}</h3>
                  <div className="space-y-2">
                    {options.map(option => (
                      <label key={option} className="flex items-center gap-2 text-sm text-gray-300">
                        <input
                          type="checkbox"
                          checked={selectedFilters[category].includes(option)}
                          onChange={() => toggleFilter(category, option)}
                          className="rounded border-gray-600 bg-gray-700 text-purple-600 focus:ring-purple-500"
                        />
                        {option} ({solutions.filter(s => 
                          category === 'industry' ? s.industry.includes(option) : s[category] === option
                        ).length})
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedSolutions.map((solution, index) => (
              <AnimatedWrapper
                key={solution.id}
                animation="scale-up-bounce"
                delay={index * 0.1}
              >
                <GlassCard variant="gradient" className="h-full hover:scale-[1.02] transition-all duration-300 overflow-hidden group cursor-pointer">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    
                    {/* Solution Icon */}
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-purple-600/20 backdrop-blur-sm rounded-lg border border-purple-500/30 p-2 flex items-center justify-center text-purple-400">
                        {solution.icon}
                      </div>
                    </div>
                    
                    {/* Featured Badge */}
                    {solution.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                          featured
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs px-2 py-1 rounded-full bg-blue-900/30 text-blue-300 border border-blue-500/20">
                        {solution.type}
                      </span>
                      <span className="text-xs px-2 py-1 rounded-full bg-purple-900/30 text-purple-300 border border-purple-500/20">
                        {solution.industry[0]}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {solution.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{solution.license}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-purple-400 hover:text-purple-300 p-0"
                        onClick={() => window.location.href = solution.href}
                      >
                        Learn more <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedWrapper>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 rounded bg-purple-600 text-white font-medium">1</button>
              <button className="w-10 h-10 rounded bg-gray-800 text-gray-300 hover:bg-gray-700">2</button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-purple-900/20 via-gray-900 to-blue-900/20 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedWrapper animation="zoom-in" className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Build a custom solution for your specific business needs
            </h2>
            <p className="text-gray-300 mb-8">
              Can't find the perfect solution? Let our experts create a custom accelerator tailored to your unique requirements.
            </p>
            <GradientButton
              size="lg"
              rightIcon={<ArrowRight className="h-5 w-5" />}
              onClick={() => (window.location.href = "/contact")}
            >
              Request Custom Solution
            </GradientButton>
          </AnimatedWrapper>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <AnimatedWrapper animation="fade-up">
            <h2 className="text-3xl font-bold text-center mb-12">Your steps with Digitrans</h2>
          </AnimatedWrapper>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              "Schedule a call",
              "We collect your requirements", 
              "We offer a solution",
              "We succeed together!"
            ].map((step, index) => (
              <AnimatedWrapper
                key={step}
                animation="bounce-in"
                delay={index * 0.15}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-full flex items-center justify-center text-xl font-bold text-purple-400 mx-auto mb-4 border border-purple-500/30">
                    {index + 1}
                  </div>
                  <p className="text-gray-300 font-medium">{step}</p>
                </div>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}