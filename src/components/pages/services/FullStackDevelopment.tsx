import { motion } from "framer-motion";
import { Card } from "../../ui/card";
import { GradientButton } from "../../ui/gradient-button";
import { ProgressBar } from "../../ui/progress-bar";
import { BackToTop } from "../../ui/back-to-top";
import { StickyCTA } from "../../ui/sticky-cta";
import SEO from "../../SEO";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import {
  Code2,
  Database,
  Server,
  Globe,
  Smartphone,
  Cloud,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  GitBranch,
  Monitor,
  Layers,
  Network,
  BarChart3,
  Settings,
  Lock,
  Rocket,
  Target,
  Users,
  Award,
  Clock,
  TrendingUp,
} from "lucide-react";

const techStack = [
  {
    category: "Frontend",
    description: "Modern, responsive user interfaces",
    technologies: [
      { name: "React", description: "Component-based UI library", icon: "⚛️" },
      { name: "Next.js", description: "Full-stack React framework", icon: "▲" },
      { name: "TypeScript", description: "Type-safe JavaScript", icon: "🔷" },
      { name: "Tailwind CSS", description: "Utility-first styling", icon: "🎨" },
    ],
    icon: <Globe className="w-8 h-8" />,
    color: "blue",
  },
  {
    category: "Backend", 
    description: "Scalable server-side architecture",
    technologies: [
      { name: "Node.js", description: "JavaScript runtime", icon: "🟢" },
      { name: "Python", description: "Versatile backend language", icon: "🐍" },
      { name: "PostgreSQL", description: "Reliable relational database", icon: "🐘" },
      { name: "Redis", description: "In-memory data store", icon: "🔴" },
    ],
    icon: <Server className="w-8 h-8" />,
    color: "purple",
  },
  {
    category: "API & Integration",
    description: "Robust API architecture",
    technologies: [
      { name: "GraphQL", description: "Flexible query language", icon: "◈" },
      { name: "REST API", description: "Standard web services", icon: "🔗" },
      { name: "WebSockets", description: "Real-time communication", icon: "⚡" },
      { name: "Microservices", description: "Modular architecture", icon: "🔧" },
    ],
    icon: <Network className="w-8 h-8" />,
    color: "green",
  },
  {
    category: "Infrastructure",
    description: "Cloud-native deployment",
    technologies: [
      { name: "AWS", description: "Amazon cloud platform", icon: "☁️" },
      { name: "Docker", description: "Containerization", icon: "🐳" },
      { name: "Kubernetes", description: "Container orchestration", icon: "⎈" },
      { name: "CI/CD", description: "Automated deployment", icon: "🔄" },
    ],
    icon: <Cloud className="w-8 h-8" />,
    color: "orange",
  },
];

const developmentProcess = [
  {
    phase: "Planning & Architecture",
    duration: "1-2 weeks",
    description: "Technical planning, architecture design, and development environment setup",
    activities: [
      "Technical requirements analysis",
      "System architecture design",
      "Database schema planning",
      "Development environment setup",
      "Technology stack finalization",
    ],
    deliverables: [
      "Technical specification document",
      "System architecture diagrams",
      "Database design schemas",
      "Development environment",
    ],
    icon: <Layers className="w-6 h-6" />,
  },
  {
    phase: "Backend Development",
    duration: "3-4 weeks",
    description: "Core backend infrastructure, APIs, and database implementation",
    activities: [
      "Database setup and migrations",
      "API development and testing",
      "Authentication and authorization",
      "Third-party integrations",
      "Performance optimization",
    ],
    deliverables: [
      "Complete backend APIs",
      "Database with test data",
      "Authentication system",
      "API documentation",
    ],
    icon: <Database className="w-6 h-6" />,
  },
  {
    phase: "Frontend Development",
    duration: "3-4 weeks",
    description: "User interface development and frontend-backend integration",
    activities: [
      "Component library development",
      "Page and feature implementation",
      "State management setup",
      "API integration",
      "Responsive design implementation",
    ],
    deliverables: [
      "Complete user interface",
      "Responsive web application",
      "Component documentation",
      "User flow implementation",
    ],
    icon: <Monitor className="w-6 h-6" />,
  },
  {
    phase: "Integration & Testing",
    duration: "1-2 weeks",
    description: "System integration, comprehensive testing, and quality assurance",
    activities: [
      "End-to-end integration testing",
      "Performance testing and optimization",
      "Security testing and hardening",
      "User acceptance testing",
      "Bug fixing and refinements",
    ],
    deliverables: [
      "Fully integrated system",
      "Test suite and reports",
      "Performance benchmarks",
      "Security audit results",
    ],
    icon: <CheckCircle className="w-6 h-6" />,
  },
  {
    phase: "Deployment & Launch",
    duration: "1 week",
    description: "Production deployment, monitoring setup, and go-live support",
    activities: [
      "Production environment setup",
      "Deployment automation",
      "Monitoring and alerting",
      "Performance optimization",
      "Launch support and documentation",
    ],
    deliverables: [
      "Live production application",
      "Monitoring dashboards",
      "Deployment documentation",
      "Maintenance guides",
    ],
    icon: <Rocket className="w-6 h-6" />,
  },
];

const features = [
  {
    title: "Scalable Architecture",
    description: "Built to handle growth from 100 to 100,000+ users",
    icon: <TrendingUp className="w-6 h-6" />,
    benefits: [
      "Microservices architecture",
      "Auto-scaling infrastructure", 
      "Load balancing and caching",
      "Database optimization",
    ],
  },
  {
    title: "Security First",
    description: "Enterprise-grade security built into every layer",
    icon: <Shield className="w-6 h-6" />,
    benefits: [
      "OAuth 2.0 authentication",
      "End-to-end encryption",
      "GDPR and SOC 2 compliance",
      "Regular security audits",
    ],
  },
  {
    title: "API-First Design",
    description: "RESTful APIs with comprehensive documentation",
    icon: <GitBranch className="w-6 h-6" />,
    benefits: [
      "RESTful API architecture",
      "GraphQL for complex queries",
      "Comprehensive documentation",
      "SDK and integration support",
    ],
  },
  {
    title: "Real-Time Features",
    description: "Live updates and real-time collaboration",
    icon: <Zap className="w-6 h-6" />,
    benefits: [
      "WebSocket connections",
      "Live notifications",
      "Real-time collaboration",
      "Event-driven architecture",
    ],
  },
  {
    title: "Performance Optimized",
    description: "Fast loading times and smooth user experience",
    icon: <BarChart3 className="w-6 h-6" />,
    benefits: [
      "CDN integration",
      "Caching strategies",
      "Image optimization",
      "Code splitting",
    ],
  },
  {
    title: "Mobile Ready",
    description: "Responsive design that works on all devices",
    icon: <Smartphone className="w-6 h-6" />,
    benefits: [
      "Mobile-first design",
      "Progressive Web App features",
      "Touch-optimized interactions",
      "Offline functionality",
    ],
  },
];

const projectExamples = [
  {
    name: "TechFlow SaaS",
    description: "Full-stack project management platform",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    features: [
      "Real-time collaboration",
      "Advanced analytics",
      "API integrations",
      "Mobile responsiveness",
    ],
    metrics: {
      users: "500+",
      performance: "99.9%",
      loadTime: "< 2s",
      apis: "50+",
    },
    quote: "The technical architecture they built scales beautifully. We handle thousands of concurrent users without any issues.",
    founder: "Marcus Weber, CTO",
    logo: "/images/1.svg",
  },
  {
    name: "DataSync Pro",
    description: "Enterprise data integration platform",
    technologies: ["React", "Python", "Redis", "Kubernetes"],
    features: [
      "Data pipeline automation",
      "Real-time processing",
      "Enterprise integrations",
      "Advanced monitoring",
    ],
    metrics: {
      users: "200+",
      performance: "99.8%", 
      loadTime: "< 1.5s",
      apis: "100+",
    },
    quote: "Their full-stack expertise enabled us to build a platform that processes millions of data points seamlessly.",
    founder: "Elena Rodriguez, Technical Lead",
    logo: "/images/2.svg",
  },
  {
    name: "MedCare Connect",
    description: "HIPAA-compliant healthcare platform",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    features: [
      "HIPAA compliance",
      "Secure messaging",
      "Patient management", 
      "Telemedicine integration",
    ],
    metrics: {
      users: "1000+",
      performance: "99.7%",
      loadTime: "< 2.5s",
      apis: "25+",
    },
    quote: "Security and compliance were critical. Their technical implementation exceeded all our requirements.",
    founder: "Dr. James Thompson, Medical Director",
    logo: "/images/3.svg",
  },
];

const guarantees = [
  "Clean, maintainable code",
  "Comprehensive documentation",
  "Automated testing suite",
  "Performance benchmarks",
  "Security audit compliance",
  "Scalable architecture",
  "Mobile responsiveness",
  "API documentation",
];

export default function FullStackDevelopment() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Full-Stack Development Services | Complete SaaS Development"
        description="End-to-end full-stack development for SaaS applications. React, Node.js, cloud infrastructure. Scalable, secure, and performance-optimized solutions."
        keywords={[
          "full-stack development",
          "SaaS development",
          "React development",
          "Node.js development",
          "web application development",
          "API development",
          "cloud development",
          "scalable applications",
        ]}
        canonicalUrl="/services/full-stack-development"
      />
      
      <ProgressBar />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-950 via-green-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-green-900/10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-green-900/30 rounded-full border border-green-500/30">
              <span className="text-green-300 text-sm font-medium">Full-Stack Development Service</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-500 to-teal-400">
              Complete Technical Solutions
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              End-to-end full-stack development for your SaaS application. From responsive frontends 
              to scalable backends, we build production-ready solutions that grow with your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <GradientButton
                size="lg"
                rightIcon={<ArrowRight className="h-5 w-5" />}
              >
                Start Development
              </GradientButton>
              <GradientButton
                size="lg"
                variant="secondary"
              >
                View Technical Examples
              </GradientButton>
            </div>

            {/* Technical Highlights */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Modern Tech Stack</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Scalable Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>API-First Design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Security Built-In</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
              Modern Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use cutting-edge technologies to build fast, secure, and scalable SaaS applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {techStack.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-600/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600/30 to-green-600/30 rounded-full flex items-center justify-center mb-6 border border-blue-500/30">
                    <div className="text-blue-400">
                      {stack.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{stack.category}</h3>
                  <p className="text-gray-400 text-sm mb-4">{stack.description}</p>
                  
                  <div className="space-y-3">
                    {stack.technologies.map((tech, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-2 bg-gray-800/30 rounded-lg border border-gray-700/30">
                        <span className="text-lg">{tech.icon}</span>
                        <div>
                          <div className="text-white font-medium text-sm">{tech.name}</div>
                          <div className="text-gray-400 text-xs">{tech.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
              Development Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to building robust, scalable full-stack applications
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {developmentProcess.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-12"
              >
                <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-600/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600/30 to-green-600/30 rounded-full flex items-center justify-center border border-blue-500/30">
                        <div className="text-blue-400">
                          {phase.icon}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{phase.phase}</h3>
                          <div className="text-green-400 font-semibold text-sm">{phase.duration}</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">{phase.description}</p>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-white font-semibold mb-3">Key Activities</h4>
                          <div className="space-y-2">
                            {phase.activities.map((activity, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <Settings className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300 text-sm">{activity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-white font-semibold mb-3">Deliverables</h4>
                          <div className="space-y-2">
                            {phase.deliverables.map((deliverable, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300 text-sm">{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
              What We Build
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive full-stack features that power modern SaaS applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-600/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600/30 to-green-600/30 rounded-lg flex items-center justify-center mb-4 border border-blue-500/30">
                    <div className="text-blue-400">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Examples */}
      <section className="py-24 bg-gradient-to-br from-gray-950 via-blue-950 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
              Full-Stack Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real applications built with our full-stack development expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projectExamples.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-600/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <img src={project.logo} alt={project.name} className="w-12 h-12 rounded-lg" />
                    <div>
                      <h3 className="text-xl font-bold text-white">{project.name}</h3>
                      <p className="text-blue-400 text-sm">{project.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-800/50 text-blue-300 text-sm rounded-full border border-blue-800/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-blue-800/30">
                      <div className="text-xl font-bold text-blue-400">{project.metrics.users}</div>
                      <div className="text-gray-400 text-xs">Active Users</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-blue-800/30">
                      <div className="text-xl font-bold text-green-400">{project.metrics.performance}</div>
                      <div className="text-gray-400 text-xs">Uptime</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-blue-800/30">
                      <div className="text-xl font-bold text-purple-400">{project.metrics.loadTime}</div>
                      <div className="text-gray-400 text-xs">Load Time</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-blue-800/30">
                      <div className="text-xl font-bold text-orange-400">{project.metrics.apis}</div>
                      <div className="text-gray-400 text-xs">API Endpoints</div>
                    </div>
                  </div>

                  <blockquote className="text-gray-300 italic mb-4 border-l-2 border-blue-500/30 pl-4">
                    "{project.quote}"
                  </blockquote>

                  <p className="text-blue-300 text-sm font-medium">{project.founder}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Guarantees */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
                Development Guarantees
              </h2>
              <p className="text-xl text-gray-300">
                Quality standards we commit to in every full-stack development project
              </p>
            </div>

            <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{guarantee}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-blue-800/30 pt-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Your Application?</h3>
                <p className="text-gray-300 mb-6">
                  Get a full-stack application that scales, performs, and delights your users
                </p>
                <GradientButton
                  size="lg"
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                >
                  Start Development Project
                </GradientButton>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <StickyCTA />
    </div>
  );
}