import { motion } from "framer-motion";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { GradientButton } from "../../ui/gradient-button";
import { ProgressBar } from "../../ui/progress-bar";
import { BackToTop } from "../../ui/back-to-top";
import { StickyCTA } from "../../ui/sticky-cta";
import SEO from "../../SEO";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import {
  Target,
  Users,
  Brain,
  TrendingUp,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Eye,
  BarChart3,
  Compass,
  Zap,
  Star,
  DollarSign,
  Clock,
  Award,
  MessageSquare,
  PieChart,
  Globe,
  Rocket,
  Shield,
  GitBranch,
} from "lucide-react";

const strategyProcess = [
  {
    phase: "1",
    title: "Market Research & Analysis",
    duration: "1-2 weeks",
    description: "Deep dive into your market, competitors, and target audience to identify opportunities",
    activities: [
      "Competitive landscape analysis",
      "Market size and opportunity assessment",
      "Target audience research and segmentation",
      "Industry trends and future predictions",
    ],
    deliverables: [
      "Market analysis report",
      "Competitive positioning map",
      "Target persona definitions",
      "Opportunity assessment matrix",
    ],
    icon: <Compass className="w-6 h-6" />,
  },
  {
    phase: "2", 
    title: "User Research & Validation",
    duration: "2-3 weeks",
    description: "Understand your users' pain points, behaviors, and needs through direct research",
    activities: [
      "User interviews and surveys",
      "Persona development and validation",
      "Journey mapping and pain point analysis",
      "Feature validation testing",
    ],
    deliverables: [
      "User research insights report",
      "Validated user personas",
      "Customer journey maps",
      "Feature prioritization matrix",
    ],
    icon: <Users className="w-6 h-6" />,
  },
  {
    phase: "3",
    title: "Product Vision & Strategy",
    duration: "1-2 weeks", 
    description: "Define your product vision, positioning, and go-to-market strategy",
    activities: [
      "Product vision development",
      "Value proposition crafting",
      "Positioning strategy creation",
      "Go-to-market planning",
    ],
    deliverables: [
      "Product vision statement",
      "Value proposition canvas",
      "Positioning strategy document",
      "Go-to-market roadmap",
    ],
    icon: <Target className="w-6 h-6" />,
  },
  {
    phase: "4",
    title: "Feature Planning & Roadmap",
    duration: "1-2 weeks",
    description: "Create a detailed product roadmap with prioritized features and development phases",
    activities: [
      "Feature brainstorming and evaluation",
      "MVP scope definition",
      "Development roadmap creation",
      "Success metrics definition",
    ],
    deliverables: [
      "Detailed product roadmap",
      "MVP feature specifications",
      "Development timeline",
      "Success metrics framework",
    ],
    icon: <GitBranch className="w-6 h-6" />,
  },
  {
    phase: "5",
    title: "Design & Prototyping",
    duration: "2-3 weeks",
    description: "Create user-centered designs and interactive prototypes for validation",
    activities: [
      "Wireframing and user flow design",
      "UI/UX design creation",
      "Interactive prototype development",
      "User testing and iteration",
    ],
    deliverables: [
      "Complete wireframe set",
      "UI/UX design system",
      "Interactive prototypes",
      "User testing results",
    ],
    icon: <Eye className="w-6 h-6" />,
  },
];

const strategyServices = [
  {
    title: "Market Analysis",
    description: "Comprehensive market research and competitive analysis",
    features: [
      "Total Addressable Market (TAM) analysis",
      "Competitive landscape mapping",
      "Market trends and opportunity identification",
      "Pricing strategy recommendations",
    ],
    icon: <BarChart3 className="w-8 h-8" />,
  },
  {
    title: "User Research",
    description: "Deep understanding of your target users and their needs",
    features: [
      "User interviews and surveys",
      "Persona development and validation",
      "Customer journey mapping",
      "Pain point and opportunity analysis",
    ],
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: "Product Positioning",
    description: "Strategic positioning that differentiates your SaaS product",
    features: [
      "Value proposition development",
      "Competitive differentiation strategy",
      "Brand positioning framework",
      "Messaging and communication strategy",
    ],
    icon: <Target className="w-8 h-8" />,
  },
  {
    title: "Feature Strategy",
    description: "Data-driven feature prioritization and roadmap planning",
    features: [
      "Feature impact analysis",
      "MVP scope definition",
      "Development prioritization",
      "Success metrics definition",
    ],
    icon: <Lightbulb className="w-8 h-8" />,
  },
  {
    title: "Go-to-Market Planning",
    description: "Strategic launch and growth planning for market success",
    features: [
      "Launch strategy development",
      "Channel strategy and partnerships",
      "Growth hacking opportunities",
      "Customer acquisition planning",
    ],
    icon: <Rocket className="w-8 h-8" />,
  },
  {
    title: "Design Strategy",
    description: "User-centered design that converts and retains customers",
    features: [
      "Design system creation",
      "User experience optimization",
      "Conversion rate optimization",
      "Accessibility and usability standards",
    ],
    icon: <Eye className="w-8 h-8" />,
  },
];

const successMetrics = [
  {
    metric: "95%",
    description: "Product-market fit achievement rate",
    icon: <Target className="w-6 h-6" />,
  },
  {
    metric: "3.5x",
    description: "Average increase in user engagement",
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    metric: "80%",
    description: "Reduction in development rework",
    icon: <Clock className="w-6 h-6" />,
  },
  {
    metric: "60%",
    description: "Faster time to market",
    icon: <Zap className="w-6 h-6" />,
  },
];

const caseStudies = [
  {
    company: "TechFlow SaaS",
    challenge: "Undefined product vision and unclear target market",
    solution: "Comprehensive market research and product strategy development",
    results: [
      "Identified €50M market opportunity",
      "Defined clear value proposition",
      "Secured €2M funding based on strategy",
      "Achieved product-market fit in 6 months",
    ],
    quote: "The product strategy work was invaluable. It gave us clarity on our vision and a roadmap to success.",
    founder: "Marcus Weber, CEO",
    industry: "Project Management",
    logo: "/images/1.svg",
  },
  {
    company: "HealthTech Pro",
    challenge: "Multiple competing features and unclear user needs",
    solution: "User research and feature prioritization strategy",
    results: [
      "Reduced feature scope by 40%",
      "Increased user satisfaction by 85%",
      "Improved development velocity by 60%",
      "Achieved 10x user engagement",
    ],
    quote: "The user research insights completely changed our product direction for the better.",
    founder: "Dr. Sarah Johnson, Founder",
    industry: "Healthcare Technology",
    logo: "/images/2.svg",
  },
  {
    company: "FinanceFlow",
    challenge: "Struggling to differentiate in crowded fintech market",
    solution: "Competitive positioning and go-to-market strategy",
    results: [
      "Identified unique market niche",
      "Developed compelling positioning",
      "Increased conversion rate by 120%",
      "Achieved €5M ARR in 18 months",
    ],
    quote: "The positioning strategy helped us stand out and win in a competitive market.",
    founder: "Alex Chen, CTO",
    industry: "Financial Technology",
    logo: "/images/3.svg",
  },
];

const strategyDeliverables = [
  "Market Analysis Report",
  "User Research Insights",
  "Product Vision Document",
  "Feature Prioritization Matrix",
  "Go-to-Market Strategy",
  "Design System Guidelines",
  "Success Metrics Framework",
  "Competitive Analysis",
  "User Persona Definitions",
  "Product Roadmap",
];

export default function ProductStrategy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Product Strategy & Design Services | SaaS Strategy Consulting"
        description="Transform your SaaS idea into a winning product strategy. Market research, user validation, and strategic planning that drives 95% product-market fit achievement."
        keywords={[
          "product strategy",
          "SaaS strategy",
          "product planning",
          "market research",
          "user research",
          "product roadmap",
          "go-to-market strategy",
          "product design",
        ]}
        canonicalUrl="/services/product-strategy"
      />
      
      <ProgressBar />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-950 via-purple-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-purple-900/30 rounded-full border border-purple-500/30">
              <span className="text-purple-300 text-sm font-medium">Product Strategy Service</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-400">
              Transform Vision Into Strategy
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Turn your SaaS idea into a winning product strategy with comprehensive market research, 
              user validation, and strategic planning that achieves 95% product-market fit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <GradientButton
                size="lg"
                rightIcon={<ArrowRight className="h-5 w-5" />}
              >
                Start Strategy Project
              </GradientButton>
              <GradientButton
                size="lg"
                variant="secondary"
              >
                View Case Studies
              </GradientButton>
            </div>

            {/* Success Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {successMetrics.map((metric, index) => (
                <motion.div
                  key={metric.metric}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-full flex items-center justify-center border border-purple-500/30">
                    <div className="text-purple-400">
                      {metric.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-purple-400 mb-1">{metric.metric}</div>
                  <div className="text-gray-400 text-sm">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategy Process */}
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
              Our Strategic Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven 5-phase approach that transforms ideas into successful SaaS products
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {strategyProcess.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-12"
              >
                <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-600/50 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="flex-shrink-0 flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-full flex items-center justify-center border border-purple-500/30">
                        <div className="text-purple-400">
                          {phase.icon}
                        </div>
                      </div>
                      <div className="lg:hidden">
                        <div className="text-purple-400 font-bold text-sm">Phase {phase.phase}</div>
                        <div className="text-gray-400 text-sm">{phase.duration}</div>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="hidden lg:flex items-center gap-4 mb-4">
                        <div className="text-purple-400 font-bold">Phase {phase.phase}</div>
                        <div className="text-gray-400">•</div>
                        <div className="text-gray-400">{phase.duration}</div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3">{phase.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{phase.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-white font-semibold mb-3">Key Activities</h4>
                          <div className="space-y-2">
                            {phase.activities.map((activity, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
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
                                <Star className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
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

      {/* Strategy Services */}
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
              Strategy Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive strategic services to position your SaaS for market success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {strategyServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-600/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-full flex items-center justify-center mb-6 border border-purple-500/30">
                    <div className="text-purple-400">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
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
              Strategy Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real transformations achieved through strategic product planning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-600/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <img src={study.logo} alt={study.company} className="w-12 h-12 rounded-lg" />
                    <div>
                      <h3 className="text-xl font-bold text-white">{study.company}</h3>
                      <p className="text-purple-400 text-sm">{study.industry}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                    
                    <h4 className="text-white font-semibold mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Results</h4>
                    <div className="space-y-2">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-gray-300 italic mb-4 border-l-2 border-purple-500/30 pl-4">
                    "{study.quote}"
                  </blockquote>

                  <p className="text-purple-300 text-sm font-medium">{study.founder}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 bg-gradient-to-br from-gray-950 via-purple-950 to-black">
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
                Complete Strategy Package
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to transform your idea into a winning product strategy
              </p>
            </div>

            <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {strategyDeliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300">{deliverable}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-blue-800/30 pt-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Your Strategy?</h3>
                  <p className="text-gray-300 mb-6">
                    Join successful SaaS founders who achieved product-market fit with our strategic guidance
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <GradientButton
                      size="lg"
                      rightIcon={<ArrowRight className="h-5 w-5" />}
                    >
                      Start Strategy Project
                    </GradientButton>
                    <GradientButton
                      size="lg"
                      variant="secondary"
                    >
                      Schedule Consultation
                    </GradientButton>
                  </div>
                </div>
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