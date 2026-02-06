import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { GradientButton } from "../ui/gradient-button";
import { ArrowRight, ExternalLink, TrendingUp, Users, DollarSign, Calendar, Star, Award, Zap } from "lucide-react";
import SEO from "../SEO";

const saasProjects = [
  {
    id: "techflow",
    title: "TechFlow SaaS",
    subtitle: "Project Management Platform",
    description: "Comprehensive project management SaaS platform designed for enterprise teams. Built from concept to production in 10 weeks, this platform revolutionized how distributed teams collaborate and manage complex projects.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop&q=60",
    logo: "/images/1.svg",
    founder: {
      name: "Marcus Weber",
      title: "CEO & Founder",
      image: "/images/testimonials/ayoub.jpeg",
      quote: "Digitrans transformed our MVP idea into a market-ready SaaS platform in just 10 weeks. We've already secured €2M in funding and onboarded 500+ customers."
    },
    metrics: [
      { label: "Funding Raised", value: "€2M", icon: DollarSign },
      { label: "Enterprise Customers", value: "500+", icon: Users },
      { label: "Development Time", value: "10 weeks", icon: Calendar },
      { label: "Uptime", value: "99.9%", icon: TrendingUp }
    ],
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Kubernetes"],
    features: [
      "Real-time collaboration tools",
      "Advanced project analytics",
      "Enterprise-grade security",
      "API integrations ecosystem",
      "Mobile-responsive design",
      "Automated workflow engine"
    ],
    results: [
      "Secured €2M Series A funding in 6 months",
      "Onboarded 500+ enterprise customers",
      "Achieved 99.9% uptime since launch",
      "Processed 1M+ project tasks monthly",
      "Generated €500K ARR in first year"
    ],
    industry: "Project Management",
    location: "Berlin, Germany",
    launchDate: "Q1 2024",
    teamSize: "25-50 employees"
  },
  {
    id: "datasync",
    title: "DataSync Pro", 
    subtitle: "Data Integration Platform",
    description: "Enterprise data integration SaaS platform that connects disparate systems and automates data workflows. Our strategic product guidance helped them achieve perfect product-market fit and explosive growth.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    logo: "/images/2.svg",
    founder: {
      name: "Sophie Laurent",
      title: "Co-founder & CTO",
      image: "/images/testimonials/ben-amarti.jpeg",
      quote: "Their product strategy expertise helped us pivot early and find our product-market fit. Revenue grew 400% in our first year thanks to their guidance."
    },
    metrics: [
      { label: "Revenue Growth", value: "400%", icon: TrendingUp },
      { label: "Product-Market Fit", value: "Perfect", icon: Star },
      { label: "Daily Users", value: "10K+", icon: Users },
      { label: "Technical Debt", value: "Zero", icon: Award }
    ],
    technologies: ["Python", "Django", "React", "PostgreSQL", "Apache Kafka", "Docker"],
    features: [
      "Universal data connectors",
      "Real-time sync capabilities", 
      "Visual workflow builder",
      "Enterprise security controls",
      "API-first architecture",
      "Comprehensive audit trails"
    ],
    results: [
      "400% revenue growth in first year",
      "Perfect product-market fit achieved",
      "Zero technical debt maintained",
      "Scaled to 10,000+ daily users",
      "Featured in major industry publications"
    ],
    industry: "Data Integration",
    location: "Paris, France", 
    launchDate: "Q2 2023",
    teamSize: "15-25 employees"
  },
  {
    id: "medcare",
    title: "MedCare Connect",
    subtitle: "Healthcare SaaS Platform", 
    description: "HIPAA-compliant healthcare management platform connecting patients, providers, and care teams. Built with enterprise-grade security and compliance from day one, serving 50+ healthcare organizations.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60",
    logo: "/images/3.svg",
    founder: {
      name: "Lisa Chen",
      title: "Founder & CEO",
      image: "/images/testimonials/ben-amarti.jpeg", 
      quote: "From concept to production in 12 weeks. Their full-stack development team delivered a HIPAA-compliant platform that now serves 50+ healthcare providers."
    },
    metrics: [
      { label: "Healthcare Providers", value: "50+", icon: Users },
      { label: "HIPAA Compliance", value: "Day 1", icon: Award },
      { label: "Development Time", value: "12 weeks", icon: Calendar },
      { label: "Security Incidents", value: "Zero", icon: Star }
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "AWS", "HIPAA Compliance"],
    features: [
      "Patient portal with secure messaging",
      "Provider dashboard and scheduling",
      "Telehealth video consultations", 
      "Electronic health records (EHR)",
      "Prescription management",
      "Insurance verification system"
    ],
    results: [
      "HIPAA-compliant from day one",
      "50+ healthcare providers onboarded",
      "12-week development timeline",
      "Zero security incidents to date",
      "98% patient satisfaction score"
    ],
    industry: "HealthTech",
    location: "Amsterdam, Netherlands",
    launchDate: "Q3 2023", 
    teamSize: "10-15 employees"
  },
  {
    id: "financeflow",
    title: "FinanceFlow",
    subtitle: "Financial Services Platform",
    description: "Enterprise financial services SaaS platform providing automated accounting, invoicing, and financial analytics. Achieved remarkable growth scaling to €5M ARR in just 18 months with exceptional unit economics.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=60",
    logo: "/images/4.svg",
    founder: {
      name: "Roberto Silva", 
      title: "CEO & Founder",
      image: "/images/testimonials/ayoub.jpeg",
      quote: "Digitrans didn't just build our product - they became our technology partner. Their ongoing support helped us scale to €5M ARR in 18 months."
    },
    metrics: [
      { label: "Annual Recurring Revenue", value: "€5M", icon: DollarSign },
      { label: "Time to Scale", value: "18 months", icon: Calendar },
      { label: "SOC 2 Certified", value: "Type II", icon: Award },
      { label: "Transaction Reliability", value: "99.99%", icon: TrendingUp }
    ],
    technologies: ["React", "Python", "FastAPI", "PostgreSQL", "Stripe", "SOC 2"],
    features: [
      "Automated invoice processing",
      "Real-time financial reporting",
      "Multi-currency support",
      "Bank integration APIs",
      "Tax compliance automation",
      "Advanced analytics dashboard"
    ],
    results: [
      "€5M ARR achieved in 18 months",
      "SOC 2 Type II certification",
      "Auto-scaling cloud architecture",
      "99.99% transaction reliability",
      "150% improvement in unit economics"
    ],
    industry: "FinTech",
    location: "Madrid, Spain",
    launchDate: "Q4 2022",
    teamSize: "20-30 employees"
  },
  {
    id: "cloudops",
    title: "CloudOps Solutions",
    subtitle: "DevOps & Infrastructure Platform",
    description: "Enterprise DevOps automation platform that simplifies cloud infrastructure management. Built to scale seamlessly from startup to enterprise, handling 100,000+ concurrent users with 99.99% uptime.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60",
    logo: "/images/5.svg", 
    founder: {
      name: "James Mitchell",
      title: "CTO & Co-founder",
      image: "/images/testimonials/ayoub.jpeg",
      quote: "Working with Digitrans was like having a world-class engineering team from day one. They built our infrastructure to scale from 100 to 100,000 users seamlessly."
    },
    metrics: [
      { label: "Concurrent Users", value: "100K+", icon: Users },
      { label: "Uptime Achievement", value: "99.99%", icon: TrendingUp },
      { label: "Infrastructure Cost Reduction", value: "50%", icon: DollarSign },
      { label: "Zero-Downtime Deployments", value: "100%", icon: Zap }
    ],
    technologies: ["Kubernetes", "Docker", "AWS", "Terraform", "Grafana", "Prometheus"],
    features: [
      "Auto-scaling infrastructure",
      "CI/CD pipeline automation",
      "Multi-cloud deployment",
      "Real-time monitoring alerts",
      "Infrastructure as code",
      "Security compliance toolkit"
    ],
    results: [
      "99.99% uptime maintained",
      "Auto-scales to 100K+ users",
      "50% reduction in infrastructure costs", 
      "Zero-downtime deployments achieved",
      "Industry-leading performance metrics"
    ],
    industry: "DevOps & Infrastructure",
    location: "London, UK",
    launchDate: "Q1 2023",
    teamSize: "15-20 employees"
  },
  {
    id: "eduflow",
    title: "EduFlow",
    subtitle: "Educational Technology Platform",
    description: "Modern learning management SaaS platform designed for educational institutions and corporate training. Built with a focus on user experience and accessibility, serving thousands of students and educators.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60",
    logo: "/images/6.svg",
    founder: {
      name: "Ahmed Hassan",
      title: "Founder & CEO", 
      image: "/images/testimonials/ben-amarti.jpeg",
      quote: "As a non-technical founder, I was worried about building a SaaS platform. Digitrans made the entire process transparent and stress-free."
    },
    metrics: [
      { label: "Active Students", value: "25K+", icon: Users },
      { label: "Course Completion Rate", value: "94%", icon: TrendingUp },
      { label: "Platform Uptime", value: "99.8%", icon: Star },
      { label: "User Satisfaction", value: "4.9/5", icon: Award }
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "WebRTC", "S3"],
    features: [
      "Interactive course builder",
      "Video streaming & conferencing",
      "Student progress analytics",
      "Mobile learning apps",
      "Certification management",
      "Integrated assessment tools"
    ],
    results: [
      "25,000+ active students",
      "94% course completion rate",
      "99.8% platform uptime",
      "4.9/5 user satisfaction score",
      "Successfully serving 100+ institutions"
    ],
    industry: "EdTech",
    location: "Dubai, UAE",
    launchDate: "Q2 2024",
    teamSize: "12-18 employees"
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="SaaS Case Studies | 50+ Successful Products Launched"
        description="Explore our SaaS success stories. From €2M funding rounds to 500+ enterprise customers, see how we help founders build market-leading products."
        canonicalUrl="/portfolio"
        keywords={[
          "SaaS case studies",
          "SaaS development success stories",
          "MVP development case studies",
          "SaaS product launches",
          "startup success stories",
          "EMEA SaaS companies",
        ]}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-purple-900/10 rounded-full filter blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-blue-900/10 rounded-full filter blur-[120px] -z-10"></div>
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="inline-block mb-4 px-4 py-1 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30">
              Success Stories
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-400">
              SaaS Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From MVP to market leadership - explore how we've helped 50+ SaaS founders 
              transform their ideas into successful, scalable businesses across EMEA.
            </p>
            
            {/* Success metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300 text-sm">Products Launched</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">€45M+</div>
                <div className="text-gray-300 text-sm">Funding Raised</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">80%</div>
                <div className="text-gray-300 text-sm">Funding Success</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Avg. Uptime</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {saasProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <Card className="overflow-hidden h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 transition-all duration-300">
                  {/* Project Image */}
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent"></div>
                    
                    {/* Company Logo */}
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-2 flex items-center justify-center">
                        <img 
                          src={project.logo} 
                          alt={`${project.title} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    
                    {/* Industry Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-purple-600/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-purple-500/30">
                        {project.industry}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-purple-300 text-sm">{project.subtitle}</p>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-300 mb-6 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {project.metrics.slice(0, 4).map((metric, i) => {
                        const IconComponent = metric.icon;
                        return (
                          <div key={i} className="flex items-center gap-2 bg-black/30 rounded-lg p-2">
                            <IconComponent className="w-4 h-4 text-purple-400" />
                            <div>
                              <div className="text-white font-semibold text-sm">{metric.value}</div>
                              <div className="text-gray-400 text-xs">{metric.label}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 bg-blue-900/30 text-blue-300 rounded-md border border-blue-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-xs px-2 py-1 bg-gray-800/50 text-gray-400 rounded-md">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <GradientButton className="w-full" rightIcon={<ArrowRight className="w-4 h-4" />}>
                      View Case Study
                    </GradientButton>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 50+ successful SaaS founders who've transformed their ideas into thriving businesses. 
              Book a free consultation to discuss your project.
            </p>
            <GradientButton
              size="lg"
              rightIcon={<ArrowRight className="h-5 w-5" />}
              onClick={() => window.open("/contact", "_self")}
            >
              Start Your Success Story
            </GradientButton>
          </motion.div>
        </div>
      </section>

      {/* Detailed Case Study Modal would go here - for now we'll redirect to contact */}
      
      <Footer />
    </div>
  );
}
