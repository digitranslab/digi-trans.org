import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { motion } from "framer-motion";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import SEO from "../../SEO";
import {
  ArrowRight,
  Zap,
  Server,
  Clock,
  Shield,
  BarChart,
  CheckCircle,
  Cloud,
  Monitor,
  TrendingUp,
  GitMerge,
  Settings,
  Cpu,
} from "lucide-react";

const challenges = [
  {
    title: "Inefficient Infrastructure Deployment",
    description: "Manual deployment processes consume significant time and require numerous approvals to arrive at a configuration that aligns perfectly with the project's requirements."
  },
  {
    title: "Lack of Automation",
    description: "Inability to establish transparent and automated CI/CD processes, from initial code commit through to production deployment."
  },
  {
    title: "Monitoring Blind Spots",
    description: "Difficulties reviewing and analyzing key performance metrics such as deployment success rates, system uptime, resource utilization, and application performance."
  },
  {
    title: "Scalability Issues",
    description: "Inability to store and analyze historical data regarding infrastructure capacity and automatically scale resources based on demand patterns."
  },
  {
    title: "Security Vulnerabilities",
    description: "Lack of automated security scanning and compliance monitoring throughout the deployment pipeline."
  }
];

const benefits = [
  {
    number: "01",
    title: "Up to 4x faster infrastructure deployment",
    description: "With advanced automation and infrastructure as code, teams can deploy complex environments in minutes rather than hours or days."
  },
  {
    number: "02", 
    title: "75% reduction in deployment errors",
    description: "Automated testing and deployment pipelines eliminate human error and ensure consistent, reliable deployments across all environments."
  },
  {
    number: "03",
    title: "60% improved team productivity through automation",
    description: "Integration with popular DevOps tools allows teams to focus on development rather than manual infrastructure management and deployment tasks."
  },
  {
    number: "04",
    title: "Real-time monitoring and alerting",
    description: "Comprehensive monitoring provides instant insights into system performance, enabling proactive issue resolution and optimal resource utilization."
  },
  {
    number: "05",
    title: "Enterprise-grade security and compliance",
    description: "Advanced security scanning, compliance monitoring, and automated backup systems protect critical infrastructure and application data."
  },
  {
    number: "06",
    title: "Multi-cloud flexibility and cost optimization",
    description: "Support for AWS, Azure, and Google Cloud with intelligent cost optimization and resource right-sizing recommendations."
  }
];

const features = [
  {
    category: "Infrastructure Automation",
    items: [
      "Infrastructure as Code (IaC) templates for rapid environment provisioning",
      "Automated scaling based on performance metrics and usage patterns", 
      "Multi-cloud deployment orchestration with failover capabilities",
      "Container orchestration with Kubernetes and Docker support"
    ]
  },
  {
    category: "CI/CD Pipeline Management",
    items: [
      "Automated build, test, and deployment pipelines",
      "Integration with popular version control systems (Git, GitLab, Bitbucket)",
      "Automated testing frameworks and quality gates",
      "Blue-green and canary deployment strategies"
    ]
  },
  {
    category: "Monitoring & Analytics",
    items: [
      "Real-time performance monitoring and alerting",
      "Infrastructure cost analysis and optimization recommendations",
      "Application performance monitoring (APM) integration",
      "Custom dashboards and reporting for stakeholders"
    ]
  }
];

const useCases = [
  {
    title: "Accelerate application deployment for new projects",
    description: "Streamline the deployment of new applications with automated pipelines that handle everything from code integration to production deployment.",
    icon: <Zap className="w-8 h-8" />
  },
  {
    title: "Scale infrastructure automatically",
    description: "Implement auto-scaling policies that adjust resources based on real-time demand, ensuring optimal performance while minimizing costs.",
    icon: <TrendingUp className="w-8 h-8" />
  },
  {
    title: "Monitor and optimize system performance",
    description: "Gain comprehensive visibility into system performance with automated monitoring, alerting, and optimization recommendations.",
    icon: <Monitor className="w-8 h-8" />
  },
  {
    title: "Ensure reliable and consistent deployments",
    description: "Eliminate deployment failures with automated testing, rollback capabilities, and consistent environment configurations.",
    icon: <Shield className="w-8 h-8" />
  }
];

const technologies = [
  "Kubernetes", "Docker", "Terraform", "Ansible",
  "Jenkins", "GitLab CI", "AWS", "Azure",
  "Google Cloud", "Prometheus", "Grafana", "ELK Stack"
];

export default function DevOpsAccelerator() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="DevOps Accelerator | Digitrans Solutions Hub"
        description="Deploy your infrastructure four times faster with our DevOps Accelerator and substantially facilitate your platform's development and public release."
        canonicalUrl="/solutions-hub/devops-accelerator"
        keywords={[
          "DevOps accelerator",
          "infrastructure automation",
          "CI/CD pipeline",
          "deployment automation",
          "cloud infrastructure",
          "DevOps tools",
        ]}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-black via-gray-900 to-black relative">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-blue-900/10 rounded-full filter blur-[120px] -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-600/20 rounded-lg border border-blue-500/30 p-3 flex items-center justify-center">
                  <Zap className="w-10 h-10 text-blue-400" />
                </div>
                <div>
                  <span className="text-sm text-blue-400 font-medium">Accelerator</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-purple-900/30 text-purple-300 border border-purple-500/20">
                      Industry agnostic
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-900/30 text-blue-300 border border-blue-500/20">
                      DevOps
                    </span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                DevOps Accelerator enabling 4X faster infrastructure deployment
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Deploy your infrastructure four times faster with the Digitrans DevOps Accelerator and substantially facilitate your platform's development and public release.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Request a demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3"
                >
                  View Architecture
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-xl overflow-hidden border border-blue-500/20">
                <img
                  src="/assets/products/product4.webp"
                  alt="DevOps Accelerator Dashboard"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-16 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Platform overview: Opportunities opened with Digitrans DevOps Accelerator
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Digitrans DevOps Accelerator is a comprehensive and ready-to-use infrastructure automation platform that enables development teams to efficiently deploy, monitor, and scale their applications. It provides opportunities for rapid infrastructure provisioning, automated CI/CD pipelines, and intelligent monitoring for optimal performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-900/20 via-gray-900/50 to-purple-900/20 rounded-xl p-8 border border-blue-500/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-600/20 rounded-lg border border-blue-500/30 p-3 flex items-center justify-center">
                <Server className="w-10 h-10 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Expert DevOps Engineering</h3>
                <p className="text-blue-400">From Digitrans Technical Team</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Explore the art of building sophisticated infrastructure automation and deployment systems with the expertise of our experienced DevOps engineers.
            </p>
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2"
            >
              Watch Demo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Common DevOps challenges Digitrans Accelerator solves
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Infrastructure deployment and management typically consumes significant time and requires numerous manual processes. Without automated DevOps tools, organizations face challenges such as:
            </p>
          </motion.div>

          <div className="space-y-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{challenge.title}</h3>
                      <p className="text-gray-300">{challenge.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Proven benefits of the Digitrans DevOps Accelerator
            </h2>
          </motion.div>

          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 bg-gradient-to-br from-blue-900/20 via-gray-900/50 to-purple-900/20 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-lg border border-blue-500/30 flex items-center justify-center text-2xl font-bold text-blue-400 flex-shrink-0">
                      {benefit.number}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                      <p className="text-gray-300 text-lg">{benefit.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Digitrans DevOps Accelerator feature set
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The platform offers comprehensive features for modern DevOps workflows:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-6 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-500/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-blue-400 mb-6">{category.category}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Use cases of operational processes optimised with Digitrans DevOps Accelerator
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-gradient-to-br from-blue-900/20 via-gray-900/50 to-purple-900/20 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-lg border border-blue-500/30 p-3 flex items-center justify-center text-blue-400 flex-shrink-0">
                      {useCase.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-300">{useCase.description}</p>
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
              Built with industry-leading DevOps tools and technologies
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-full text-gray-300 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Card className="inline-block p-6 bg-gradient-to-br from-blue-900/20 via-gray-900/50 to-purple-900/20 border border-blue-500/20">
              <div className="flex items-center gap-4">
                <div className="text-left">
                  <p className="text-sm text-blue-400 mb-1">License</p>
                  <p className="text-white font-semibold">Digitrans</p>
                </div>
                <div className="text-left">
                  <p className="text-sm text-blue-400 mb-1">Integrates with</p>
                  <p className="text-white font-semibold">AWS, Azure, GCP, Kubernetes</p>
                </div>
                <div className="text-left">
                  <p className="text-sm text-blue-400 mb-1">Technologies</p>
                  <p className="text-white font-semibold">Terraform, Ansible, Docker</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Request a demo
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Explore a specialized DevOps accelerator overview, accompanied by a use case designed specifically for your business's unique requirements.
            </p>
            
            <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 max-w-2xl mx-auto">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full name*
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Business email*
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none h-32 resize-none"
                    placeholder="Tell us about your DevOps challenges..."
                  ></textarea>
                  <p className="text-xs text-gray-400 mt-1">0 /1000</p>
                </div>
                
                <div className="space-y-3 text-left">
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500"
                      required
                    />
                    <span className="text-sm text-gray-300">
                      I have read <a href="/privacy" className="text-blue-400 hover:underline">Privacy Notice*</a>
                    </span>
                  </label>
                  
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-300">
                      I agree to receive marketing materials about news, events, and proposals from Digitrans
                    </span>
                  </label>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3"
                >
                  Request a demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}