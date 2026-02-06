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
  Calendar,
  CheckCircle,
  Users,
  Target,
  Rocket,
  TrendingUp,
  Star,
  ArrowRight,
  Clock,
  DollarSign,
  Award,
  Lightbulb,
  Code2,
  Database,
  Cloud,
  Globe,
  Shield,
  Zap,
  BarChart3,
  GitBranch,
} from "lucide-react";

const mvpProcess = [
  {
    week: "Week 1-2",
    title: "Discovery & Strategy",
    description: "Market research, user interviews, and technical architecture planning",
    deliverables: [
      "Market analysis report",
      "User persona definition",
      "Technical architecture plan",
      "Project roadmap & timeline",
    ],
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    week: "Week 3-4",
    title: "Design & Validation",
    description: "UX/UI design, wireframing, and prototype validation with target users",
    deliverables: [
      "User journey mapping",
      "Interactive prototypes",
      "Design system creation",
      "User testing results",
    ],
    icon: <Target className="w-6 h-6" />,
  },
  {
    week: "Week 5-8",
    title: "Core Development",
    description: "Backend infrastructure, frontend development, and essential features",
    deliverables: [
      "Backend API development",
      "Frontend application build",
      "Database architecture",
      "Core feature implementation",
    ],
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    week: "Week 9-10",
    title: "Testing & Launch",
    description: "Quality assurance, performance optimization, and production deployment",
    deliverables: [
      "Comprehensive testing suite",
      "Performance optimization",
      "Production deployment",
      "Launch strategy execution",
    ],
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    week: "Week 11-12",
    title: "Growth & Iteration",
    description: "User feedback analysis, feature refinement, and scaling preparation",
    deliverables: [
      "User feedback analysis",
      "Feature iteration plan",
      "Scaling architecture review",
      "Success metrics dashboard",
    ],
    icon: <TrendingUp className="w-6 h-6" />,
  },
];

const technologies = [
  {
    category: "Frontend",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    icon: <Globe className="w-8 h-8" />,
  },
  {
    category: "Backend",
    tools: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL"],
    icon: <Database className="w-8 h-8" />,
  },
  {
    category: "Infrastructure",
    tools: ["AWS", "Docker", "Kubernetes", "CI/CD", "Monitoring"],
    icon: <Cloud className="w-8 h-8" />,
  },
  {
    category: "Security",
    tools: ["OAuth 2.0", "JWT", "SSL/TLS", "GDPR", "SOC 2"],
    icon: <Shield className="w-8 h-8" />,
  },
];

const successStories = [
  {
    name: "TechFlow SaaS",
    industry: "Project Management",
    timeline: "10 weeks",
    funding: "€2M",
    users: "500+",
    growth: "300% MRR",
    quote: "Digitrans transformed our MVP idea into a market-ready SaaS platform. We secured €2M in funding within 6 months.",
    founder: "Marcus Weber, CEO",
    logo: "/images/1.svg",
  },
  {
    name: "DataSync Pro",
    industry: "Data Integration",
    timeline: "12 weeks",
    funding: "€1.5M",
    users: "200+",
    growth: "400% revenue",
    quote: "The MVP development process was seamless. We're now processing millions of data points monthly.",
    founder: "Elena Rodriguez, CTO",
    logo: "/images/2.svg",
  },
  {
    name: "MedCare Connect",
    industry: "Healthcare",
    timeline: "8 weeks",
    funding: "€3M",
    users: "1000+",
    growth: "250% user growth",
    quote: "From concept to HIPAA-compliant platform in just 8 weeks. Incredible execution.",
    founder: "Dr. James Thompson, Founder",
    logo: "/images/3.svg",
  },
];

const guarantees = [
  "8-12 week delivery timeline",
  "Fixed-price project model",
  "Weekly progress demonstrations",
  "30-day post-launch support",
  "Source code ownership",
  "Scalable architecture from day one",
];

const mvpFeatures = [
  {
    title: "User Authentication & Management",
    description: "Secure user registration, login, and profile management with role-based access control",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Core Business Logic",
    description: "Essential features that validate your business model and create user value",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Payment Integration",
    description: "Subscription billing, payment processing, and revenue analytics",
    icon: <DollarSign className="w-6 h-6" />,
  },
  {
    title: "Admin Dashboard",
    description: "Comprehensive analytics, user management, and business insights",
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    title: "API Development",
    description: "RESTful APIs with documentation for future integrations and mobile apps",
    icon: <GitBranch className="w-6 h-6" />,
  },
  {
    title: "Responsive Design",
    description: "Mobile-first design that works perfectly on all devices and screen sizes",
    icon: <Globe className="w-6 h-6" />,
  },
];

export default function MvpDevelopment() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="MVP Development Services | Launch Your SaaS in 8-12 Weeks"
        description="Transform your SaaS idea into a market-ready MVP in 8-12 weeks. Fixed-price development with 80% funding success rate. Trusted by 50+ successful SaaS startups."
        keywords={[
          "MVP development",
          "SaaS MVP",
          "minimum viable product",
          "startup development",
          "SaaS development",
          "product development",
          "rapid prototyping",
          "startup MVP",
        ]}
        canonicalUrl="/services/mvp-development"
      />
      
      <ProgressBar />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-950 via-blue-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-purple-900/30 rounded-full border border-purple-500/30">
              <span className="text-purple-300 text-sm font-medium">MVP Development Service</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-400">
              Launch Your SaaS MVP in 8-12 Weeks
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your SaaS idea into a market-ready MVP with our proven development process. 
              Fixed timeline, transparent pricing, and 80% funding success rate for our MVPs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <GradientButton
                size="lg"
                rightIcon={<ArrowRight className="h-5 w-5" />}
              >
                Start Your MVP Project
              </GradientButton>
              <GradientButton
                size="lg"
                variant="secondary"
              >
                View Success Stories
              </GradientButton>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>50+ MVPs Launched</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>80% Funding Success</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>8-12 Week Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Fixed Price Model</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MVP Development Process */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Our Proven 12-Week Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach that has helped 50+ startups successfully launch their SaaS products
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {mvpProcess.map((phase, index) => (
              <motion.div
                key={phase.week}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-12"
              >
                <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-600/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-full flex items-center justify-center border border-purple-500/30">
                        <div className="text-purple-400">
                          {phase.icon}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <div className="text-purple-400 font-semibold mb-2">{phase.week}</div>
                          <h3 className="text-2xl font-bold text-white mb-3">{phase.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">{phase.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {phase.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Modern Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use cutting-edge technologies to build scalable, secure, and future-proof SaaS applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-600/50 transition-all duration-300 text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-full flex items-center justify-center mb-6 border border-purple-500/30">
                    <div className="text-purple-400">
                      {tech.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{tech.category}</h3>
                  
                  <div className="space-y-2">
                    {tech.tools.map((tool, idx) => (
                      <div key={idx} className="text-gray-300 text-sm">{tool}</div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MVP Features */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Essential MVP Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every MVP includes these core features to validate your business model and attract early customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mvpFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-600/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-lg flex items-center justify-center mb-4 border border-purple-500/30">
                    <div className="text-purple-400">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-gradient-to-br from-gray-950 via-blue-950 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              MVP Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from founders who launched with our MVP development service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-600/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <img src={story.logo} alt={story.name} className="w-12 h-12 rounded-lg" />
                    <div>
                      <h3 className="text-xl font-bold text-white">{story.name}</h3>
                      <p className="text-purple-400 text-sm">{story.industry}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-blue-800/30">
                      <div className="text-2xl font-bold text-purple-400">{story.timeline}</div>
                      <div className="text-gray-400 text-sm">Development</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-blue-800/30">
                      <div className="text-2xl font-bold text-green-400">{story.funding}</div>
                      <div className="text-gray-400 text-sm">Funding</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-blue-800/30">
                      <div className="text-2xl font-bold text-blue-400">{story.users}</div>
                      <div className="text-gray-400 text-sm">Users</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-blue-800/30">
                      <div className="text-2xl font-bold text-orange-400">{story.growth}</div>
                      <div className="text-gray-400 text-sm">Growth</div>
                    </div>
                  </div>

                  <blockquote className="text-gray-300 italic mb-4">
                    "{story.quote}"
                  </blockquote>

                  <p className="text-purple-300 text-sm font-medium">{story.founder}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Guarantees */}
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Our MVP Guarantees
              </h2>
              <p className="text-xl text-gray-300">
                We stand behind our work with concrete commitments to your success
              </p>
            </div>

            <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{guarantee}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-blue-800/30 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your MVP?</h3>
                <p className="text-gray-300 mb-6">
                  Join 50+ successful SaaS founders who launched with our MVP development service
                </p>
                <GradientButton
                  size="lg"
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                >
                  Get Your MVP Quote
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