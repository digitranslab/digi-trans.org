import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import UniverseLights from "../UniverseLights";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { GradientButton } from "../ui/gradient-button";
import { ProgressBar } from "../ui/progress-bar";
import { BackToTop } from "../ui/back-to-top";
import { StickyCTA } from "../ui/sticky-cta";
import {
  Cloud,
  Server,
  Shield,
  Gauge,
  CheckCircle,
  ArrowRight,
  FileText,
  Users,
  TrendingUp,
  Layers,
  Zap,
  Code,
  Database,
  Lock,
  GitBranch,
} from "lucide-react";

const features = [
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Migration",
    description:
      "Seamless migration of your infrastructure to leading cloud platforms including AWS, Azure, and Google Cloud with zero downtime and minimal business disruption.",
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Infrastructure as Code",
    description:
      "Automated infrastructure deployment using modern DevOps practices and tools like Terraform, CloudFormation, and Pulumi for consistent, repeatable environments.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Cloud Security",
    description:
      "Enterprise-grade security measures for your cloud infrastructure including identity management, encryption, network security, and compliance frameworks.",
  },
  {
    icon: <Gauge className="w-8 h-8" />,
    title: "Performance Optimization",
    description:
      "Optimize your cloud resources for maximum performance and cost-efficiency through right-sizing, auto-scaling, and intelligent resource management.",
  },
];

const technologies = [
  {
    category: "Cloud Platforms",
    tools: [
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "Google Cloud Platform",
      "IBM Cloud",
      "Oracle Cloud",
      "Alibaba Cloud",
      "DigitalOcean",
      "Heroku",
    ],
  },
  {
    category: "Infrastructure as Code",
    tools: [
      "Terraform",
      "AWS CloudFormation",
      "Azure Resource Manager",
      "Google Cloud Deployment Manager",
      "Pulumi",
      "Ansible",
      "Chef",
      "Puppet",
    ],
  },
  {
    category: "Containerization & Orchestration",
    tools: [
      "Docker",
      "Kubernetes",
      "Amazon ECS/EKS",
      "Azure AKS",
      "Google GKE",
      "OpenShift",
      "Istio",
      "Helm",
    ],
  },
  {
    category: "DevOps & CI/CD",
    tools: [
      "GitHub Actions",
      "GitLab CI/CD",
      "Jenkins",
      "CircleCI",
      "ArgoCD",
      "Spinnaker",
      "Flux",
      "Tekton",
    ],
  },
];

const caseStudies = [
  {
    industry: "Financial Services",
    title: "Multi-Cloud Transformation",
    description:
      "Led a comprehensive cloud transformation for a global financial institution, migrating 2,000+ applications to a multi-cloud environment while ensuring regulatory compliance and enhancing security posture.",
    metrics: [
      "40% reduction in infrastructure costs",
      "99.99% uptime achieved",
      "Zero security incidents during migration",
      "3x faster application deployment",
    ],
    icon: <Server className="w-8 h-8" />,
  },
  {
    industry: "Healthcare",
    title: "Secure Cloud Data Platform",
    description:
      "Designed and implemented a HIPAA-compliant cloud data platform for a healthcare provider network, enabling secure data sharing, analytics, and AI capabilities while maintaining strict privacy controls.",
    metrics: [
      "100% HIPAA compliance maintained",
      "65% reduction in data processing time",
      "$4.5M annual cost savings",
      "Zero data breaches",
    ],
    icon: <Lock className="w-8 h-8" />,
  },
  {
    industry: "Retail",
    title: "Cloud-Native E-Commerce Platform",
    description:
      "Rebuilt a legacy e-commerce platform using cloud-native technologies, enabling the client to handle 10x more traffic during peak seasons while reducing operational costs and improving customer experience.",
    metrics: [
      "10x increase in traffic capacity",
      "70% reduction in page load times",
      "45% decrease in infrastructure costs",
      "99.99% availability during Black Friday",
    ],
    icon: <Code className="w-8 h-8" />,
  },
];

const benefits = [
  {
    title: "Cost Optimization",
    description:
      "Reduce capital expenditure and optimize operational costs with pay-as-you-go pricing models and efficient resource utilization.",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: "Scalability & Flexibility",
    description:
      "Easily scale resources up or down based on demand, ensuring optimal performance during peak periods without overprovisioning.",
    icon: <Layers className="w-6 h-6" />,
  },
  {
    title: "Enhanced Security",
    description:
      "Leverage advanced security features and compliance frameworks provided by leading cloud platforms to protect your data and applications.",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: "Business Agility",
    description:
      "Accelerate time-to-market for new products and features with rapid provisioning and deployment capabilities.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Global Reach",
    description:
      "Deploy your applications in multiple regions worldwide to reduce latency and improve user experience for your global customer base.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Disaster Recovery",
    description:
      "Implement robust disaster recovery solutions with automated backups, replication, and failover capabilities to ensure business continuity.",
    icon: <TrendingUp className="w-6 h-6" />,
  },
];

const methodologies = [
  {
    title: "Assessment & Strategy",
    steps: [
      "Current infrastructure evaluation",
      "Application portfolio analysis",
      "Cloud readiness assessment",
      "TCO and ROI calculation",
      "Migration strategy development",
    ],
  },
  {
    title: "Architecture & Design",
    steps: [
      "Cloud architecture design",
      "Security and compliance planning",
      "Network design",
      "Identity and access management",
      "Disaster recovery planning",
    ],
  },
  {
    title: "Migration & Implementation",
    steps: [
      "Proof of concept development",
      "Phased migration execution",
      "Data migration and validation",
      "Application refactoring",
      "Testing and quality assurance",
    ],
  },
  {
    title: "Optimization & Management",
    steps: [
      "Performance monitoring",
      "Cost optimization",
      "Security posture management",
      "Automated scaling implementation",
      "Continuous improvement",
    ],
  },
];

function WorkflowIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  );
}

export default function CloudComputing() {
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
          <source src="/videos/cloud.mp4" type="video/mp4" />
        </video>
        <UniverseLights />

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Cloud Computing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl"
          >
            Accelerate your digital transformation with secure, scalable, and
            cost-effective cloud solutions tailored to your business needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <GradientButton
              size="lg"
              rightIcon={<ArrowRight className="h-5 w-5" />}
              onClick={() => (window.location.href = "/contact")}
            >
              Request a Consultation
            </GradientButton>
            <GradientButton
              size="lg"
              variant="secondary"
              onClick={() =>
                document
                  .getElementById("case-studies")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Case Studies
            </GradientButton>
          </motion.div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Enterprise Cloud Solutions
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Cloud computing has evolved from a cost-saving technology to a
                strategic business enabler. Our solutions help organizations
                leverage cloud platforms to drive innovation, enhance agility,
                and create competitive advantages.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Whether you're migrating existing applications, building
                cloud-native solutions, or optimizing current infrastructure,
                our certified experts navigate cloud adoption complexities to
                maximize your investments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/cloud.png"
                alt="Cloud computing infrastructure visualization"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Cloud Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud solutions for modern enterprises
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20">
                  <div className="text-blue-500 mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-white text-left">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-left">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Business Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How cloud computing creates value for your organization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20">
                  <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center text-blue-500 mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white text-left">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-left">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-black scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world examples of how our cloud solutions have transformed
              businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20">
                  <div className="text-blue-500 mb-6">{study.icon}</div>
                  <div className="text-sm font-semibold text-blue-400 mb-2">
                    {study.industry}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    {study.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{study.description}</p>
                  <div className="space-y-2">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-300">{metric}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage industry-leading cloud technologies and tools
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20">
                  <h3 className="text-xl font-semibold mb-4 text-white border-b border-purple-500/20 pb-3">
                    {tech.category}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {tech.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Methodology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven approach to successful cloud adoption and transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {methodologies.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20">
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {index + 1}. {method.title}
                  </h3>
                  <ul className="space-y-2">
                    {method.steps.map((step, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-900/50 text-blue-400 flex items-center justify-center text-xs font-bold">
                          {i + 1}
                        </div>
                        <span className="text-gray-300">{step}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Adoption Frameworks Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cloud Adoption Frameworks
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage industry-standard frameworks to accelerate your cloud
              journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20">
                <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                  <Database className="w-5 h-5 text-blue-500" /> AWS Cloud
                  Adoption Framework
                </h3>
                <p className="text-gray-300 mb-4">
                  We utilize AWS CAF to help organizations accelerate their
                  cloud adoption journey and digital transformation. This
                  framework provides guidance across six perspectives: Business,
                  People, Governance, Platform, Security, and Operations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    Business Perspective
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    Technical Perspective
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    Maturity Model
                  </span>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20">
                <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                  <GitBranch className="w-5 h-5 text-blue-500" /> Microsoft
                  Cloud Adoption Framework
                </h3>
                <p className="text-gray-300 mb-4">
                  Microsoft's CAF provides proven guidance to help organizations
                  create and implement strategies for cloud adoption. We
                  leverage this framework to guide customers through their Azure
                  adoption journey, from initial planning to ongoing operations
                  and optimization.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    Strategy
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    Plan
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    Ready
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    Govern
                  </span>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20">
                <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                  <Cloud className="w-5 h-5 text-blue-500" /> Google Cloud
                  Architecture Framework
                </h3>
                <p className="text-gray-300 mb-4">
                  Google's framework provides best practices and guidance for
                  building systems on Google Cloud. We apply these principles to
                  help organizations design, implement, and operate cloud
                  architectures that are secure, efficient, resilient, high-
                  performing, and cost-effective.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    System Design
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    Operational Excellence
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    Security
                  </span>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Multi-Cloud Strategy Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Multi-Cloud Strategy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage the best of each cloud provider while avoiding vendor
              lock-in
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Benefits of Multi-Cloud
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">
                        Best-of-Breed Services:
                      </span>
                      <p className="text-gray-300">
                        Select the optimal services from each cloud provider
                        based on your specific requirements and use cases.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">
                        Risk Mitigation:
                      </span>
                      <p className="text-gray-300">
                        Reduce dependency on a single provider and minimize the
                        impact of service outages or price increases.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">
                        Geographic Coverage:
                      </span>
                      <p className="text-gray-300">
                        Leverage the global infrastructure of multiple providers
                        to optimize performance and comply with data sovereignty
                        requirements.
                      </p>
                    </div>
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Our Multi-Cloud Approach
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">
                        Unified Management:
                      </span>
                      <p className="text-gray-300">
                        Implement centralized management tools and processes to
                        simplify operations across multiple cloud environments.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">
                        Consistent Security:
                      </span>
                      <p className="text-gray-300">
                        Apply uniform security policies and controls across all
                        cloud platforms to maintain a strong security posture.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">
                        Workload Portability:
                      </span>
                      <p className="text-gray-300">
                        Design applications with portability in mind, using
                        containerization and infrastructure as code to enable
                        seamless migration between cloud providers.
                      </p>
                    </div>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Common questions about our cloud computing services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  How do you ensure security in the cloud?
                </h3>
                <p className="text-gray-300">
                  We implement a comprehensive security framework that includes
                  identity and access management, network security, data
                  encryption, vulnerability management, and continuous
                  monitoring. Our approach follows the shared responsibility
                  model, where we work with you to ensure security at all layers
                  of the cloud stack, from infrastructure to applications. We
                  also maintain compliance with industry standards and
                  regulations such as GDPR, HIPAA, PCI DSS, and SOC 2.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  What is your approach to cloud migration?
                </h3>
                <p className="text-gray-300">
                  Our cloud migration approach follows a proven methodology that
                  includes assessment, planning, migration, and optimization
                  phases. We begin with a thorough analysis of your current
                  infrastructure and applications to determine the most
                  appropriate migration strategy for each workload (rehost,
                  replatform, refactor, etc.). We then develop a detailed
                  migration plan, execute the migration in phases to minimize
                  business disruption, and continuously optimize your cloud
                  environment for performance and cost efficiency.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  How do you optimize cloud costs?
                </h3>
                <p className="text-gray-300">
                  We employ a multi-faceted approach to cloud cost optimization
                  that includes right-sizing resources, implementing
                  auto-scaling to match demand, utilizing reserved instances or
                  savings plans for predictable workloads, identifying and
                  eliminating unused resources, and leveraging spot instances
                  for non-critical workloads. We also implement FinOps practices
                  to provide visibility into cloud spending, establish
                  accountability, and continuously identify optimization
                  opportunities. Our clients typically achieve 20-40% cost
                  savings through our optimization efforts.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  What cloud platforms do you support?
                </h3>
                <p className="text-gray-300">
                  We have expertise across all major cloud platforms, including
                  Amazon Web Services (AWS), Microsoft Azure, Google Cloud
                  Platform (GCP), IBM Cloud, and Oracle Cloud. Our team includes
                  certified professionals for each of these platforms, ensuring
                  that we can provide expert guidance and implementation
                  regardless of your chosen cloud provider. We also specialize
                  in multi-cloud and hybrid cloud strategies, helping
                  organizations leverage the best capabilities of each platform
                  while maintaining operational consistency and security.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business with Cloud Computing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our cloud solutions can help you achieve your
              business goals.
            </p>
            <GradientButton
              size="lg"
              rightIcon={<ArrowRight className="h-5 w-5" />}
              onClick={() => (window.location.href = "/contact")}
            >
              Schedule a Consultation
            </GradientButton>
          </motion.div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <StickyCTA />
    </div>
  );
}
