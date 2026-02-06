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
  Building,
  LineChart,
  Users,
  Briefcase,
  CheckCircle,
  ArrowRight,
  FileText,
  Zap,
  TrendingUp,
  Layers,
  Code,
  Database,
  Server,
  Network,
} from "lucide-react";

const features = [
  {
    icon: <Building className="w-8 h-8" />,
    title: "Enterprise Resource Planning",
    description:
      "Integrated ERP solutions that streamline operations, enhance visibility, and improve decision-making across your organization.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Customer Relationship Management",
    description:
      "Comprehensive CRM platforms that unify customer data, automate sales processes, and deliver personalized experiences at scale.",
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Business Intelligence",
    description:
      "Advanced analytics and reporting tools that transform raw data into actionable insights for strategic decision-making.",
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Workflow Automation",
    description:
      "Intelligent automation solutions that streamline processes, reduce manual effort, and improve operational efficiency.",
  },
];

const technologies = [
  {
    category: "ERP & CRM",
    tools: [
      "SAP",
      "Oracle",
      "Microsoft Dynamics",
      "Salesforce",
      "NetSuite",
      "Odoo",
      "HubSpot",
      "Zoho",
    ],
  },
  {
    category: "Business Intelligence",
    tools: [
      "Tableau",
      "Power BI",
      "Looker",
      "Qlik",
      "Domo",
      "ThoughtSpot",
      "MicroStrategy",
      "Sisense",
    ],
  },
  {
    category: "Integration & APIs",
    tools: [
      "MuleSoft",
      "Dell Boomi",
      "Informatica",
      "Zapier",
      "Apigee",
      "Kong",
      "Tray.io",
      "Workato",
    ],
  },
  {
    category: "Workflow & Automation",
    tools: [
      "UiPath",
      "Automation Anywhere",
      "Blue Prism",
      "Microsoft Power Automate",
      "Camunda",
      "Pega",
      "Appian",
      "ServiceNow",
    ],
  },
];

const caseStudies = [
  {
    industry: "Manufacturing",
    title: "Digital Transformation for Global Manufacturer",
    description:
      "Implemented an integrated ERP and business intelligence solution for a global manufacturer, connecting 50+ facilities and providing real-time visibility into operations, inventory, and financials.",
    metrics: [
      "35% reduction in operational costs",
      "40% improvement in inventory accuracy",
      "28% faster order-to-delivery time",
      "$15M annual savings",
    ],
    icon: <Building className="w-8 h-8" />,
  },
  {
    industry: "Financial Services",
    title: "Customer Experience Transformation",
    description:
      "Developed a unified customer experience platform for a financial services provider, integrating CRM, marketing automation, and analytics to deliver personalized services across all channels.",
    metrics: [
      "42% increase in customer satisfaction",
      "28% improvement in cross-selling",
      "65% reduction in service response time",
      "22% decrease in customer churn",
    ],
    icon: <Users className="w-8 h-8" />,
  },
  {
    industry: "Healthcare",
    title: "Operational Efficiency Program",
    description:
      "Implemented an enterprise-wide workflow automation solution for a healthcare network, digitizing paper-based processes and integrating disparate systems to improve patient care and operational efficiency.",
    metrics: [
      "70% reduction in administrative tasks",
      "45% decrease in documentation errors",
      "30% improvement in resource utilization",
      "$8M annual cost savings",
    ],
    icon: <Zap className="w-8 h-8" />,
  },
];

const benefits = [
  {
    title: "Operational Excellence",
    description:
      "Streamline processes, reduce inefficiencies, and optimize resource allocation across your organization.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Data-Driven Decision Making",
    description:
      "Transform raw data into actionable insights that drive strategic business decisions and create competitive advantages.",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: "Enhanced Customer Experience",
    description:
      "Deliver personalized, seamless experiences across all customer touchpoints to increase satisfaction and loyalty.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Accelerated Growth",
    description:
      "Scale your business operations efficiently while maintaining quality and consistency across all functions.",
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    title: "Business Agility",
    description:
      "Adapt quickly to changing market conditions and customer needs with flexible, scalable enterprise solutions.",
    icon: <Layers className="w-6 h-6" />,
  },
  {
    title: "Regulatory Compliance",
    description:
      "Ensure adherence to industry regulations and standards with built-in compliance features and audit trails.",
    icon: <CheckCircle className="w-6 h-6" />,
  },
];

const methodologies = [
  {
    title: "Discovery & Assessment",
    steps: [
      "Business requirements analysis",
      "Current state assessment",
      "Technology landscape evaluation",
      "Process mapping",
      "Gap analysis",
    ],
  },
  {
    title: "Solution Design & Planning",
    steps: [
      "Solution architecture design",
      "Technology selection",
      "Implementation roadmap",
      "Change management strategy",
      "Risk assessment",
    ],
  },
  {
    title: "Implementation & Integration",
    steps: [
      "Agile implementation approach",
      "System configuration",
      "Data migration",
      "Integration with existing systems",
      "User acceptance testing",
    ],
  },
  {
    title: "Deployment & Optimization",
    steps: [
      "Phased deployment strategy",
      "User training and adoption",
      "Performance monitoring",
      "Continuous improvement",
      "Ongoing support",
    ],
  },
];

export default function EnterpriseSolutions() {
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
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/videos/entreprise.mp4" type="video/mp4" />
        </video>
        <UniverseLights />

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Enterprise Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl"
          >
            Streamline operations, enhance collaboration, and drive growth with
            our custom enterprise software solutions built for your specific
            business challenges.
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Comprehensive Enterprise Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8">
              <div>
                <p className="text-xl text-gray-300 leading-relaxed text-left">
                  In today's rapidly evolving business landscape, enterprises
                  face unprecedented challenges in managing complex operations,
                  leveraging data effectively, and delivering exceptional
                  customer experiences. Our enterprise solutions address these
                  challenges by providing integrated, scalable platforms that
                  connect people, processes, and technology across your
                  organization.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80"
                  alt="Enterprise solutions visualization"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8">
              <div className="rounded-xl overflow-hidden shadow-2xl order-2 md:order-1">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="Enterprise technology solutions and data visualization"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-xl text-gray-300 leading-relaxed text-left">
                  We combine deep industry expertise with cutting-edge
                  technology to deliver solutions that are tailored to your
                  specific business needs. Whether you're looking to streamline
                  operations, enhance decision-making capabilities, or transform
                  customer experiences, our enterprise solutions provide the
                  foundation for sustainable growth and competitive advantage.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
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
              How our enterprise solutions create value for your organization
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
              Real-world examples of how our enterprise solutions have
              transformed businesses
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
              We leverage industry-leading technologies and platforms
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
              A proven approach to delivering successful enterprise solutions
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

      {/* Enterprise Architecture Section */}
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
              Enterprise Architecture
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building scalable, flexible, and future-proof enterprise systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-1 md:col-span-3"
            >
              <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20">
                <h3 className="text-2xl font-semibold mb-6 text-white">
                  Key Principles of Our Enterprise Architecture
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-blue-400">
                      Scalability & Flexibility
                    </h4>
                    <p className="text-gray-300 mb-4">
                      Our enterprise architectures are designed to scale with
                      your business, accommodating growth in users, data volume,
                      and transaction throughput. We employ modular,
                      microservices-based designs that allow components to
                      evolve independently, enabling you to adapt quickly to
                      changing business requirements.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-blue-400">
                      Integration & Interoperability
                    </h4>
                    <p className="text-gray-300 mb-4">
                      We build solutions that seamlessly integrate with your
                      existing systems and third-party applications through
                      robust APIs, middleware, and integration frameworks. Our
                      approach ensures data flows smoothly across your
                      enterprise, eliminating silos and providing a unified view
                      of your business operations.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-blue-400">
                      Security & Compliance
                    </h4>
                    <p className="text-gray-300 mb-4">
                      Security is built into our enterprise solutions from the
                      ground up, with comprehensive controls for authentication,
                      authorization, data protection, and audit logging. We
                      implement industry best practices and compliance
                      frameworks to ensure your systems meet regulatory
                      requirements and protect sensitive data.
                    </p>
                  </div>
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
                  <Server className="w-5 h-5 text-blue-500" /> Cloud-Native
                  Architecture
                </h3>
                <p className="text-gray-300 mb-4">
                  We leverage cloud-native architectures to build enterprise
                  solutions that take full advantage of cloud capabilities such
                  as elasticity, resilience, and managed services. Our
                  cloud-native approach enables faster innovation, reduced
                  operational overhead, and improved cost efficiency compared to
                  traditional on-premises deployments.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    Microservices
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    Containers
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    Serverless
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    DevOps
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
                  <Database className="w-5 h-5 text-blue-500" /> Data
                  Architecture
                </h3>
                <p className="text-gray-300 mb-4">
                  Our enterprise solutions include robust data architectures
                  that ensure data quality, consistency, and accessibility
                  across your organization. We implement data governance
                  frameworks, master data management, and data integration
                  patterns that provide a single source of truth for critical
                  business information.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    Data Warehousing
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    Data Lakes
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    MDM
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    Data Governance
                  </span>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20">
                <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                  <Network className="w-5 h-5 text-blue-500" /> API Strategy
                </h3>
                <p className="text-gray-300 mb-4">
                  We develop comprehensive API strategies that enable seamless
                  integration between systems, facilitate partner ecosystems,
                  and create new business opportunities. Our API-first approach
                  ensures that your enterprise systems are accessible, reusable,
                  and can evolve independently to support changing business
                  needs.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    REST APIs
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    GraphQL
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    API Gateway
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    API Management
                  </span>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Common questions about our enterprise solutions
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
                  How do you approach change management during enterprise
                  implementations?
                </h3>
                <p className="text-gray-300">
                  Change management is a critical component of our enterprise
                  implementation methodology. We take a comprehensive approach
                  that includes stakeholder analysis, communication planning,
                  training programs, and adoption measurement. We work closely
                  with your leadership team to identify potential resistance
                  points and develop strategies to address them. Our change
                  management framework is designed to ensure high user adoption
                  rates and minimize disruption to your business operations
                  during the transition.
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
                  How do you handle data migration during enterprise system
                  implementations?
                </h3>
                <p className="text-gray-300">
                  Data migration is a structured process in our implementation
                  methodology. We begin with a comprehensive data assessment to
                  understand your current data landscape, quality issues, and
                  migration requirements. We then develop a detailed migration
                  strategy that includes data mapping, transformation rules,
                  cleansing procedures, and validation criteria. Our approach
                  typically involves multiple test migrations before the final
                  cutover, with automated validation to ensure data integrity.
                  We also implement data governance processes to maintain data
                  quality after the migration.
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
                  How do you ensure security and compliance in enterprise
                  solutions?
                </h3>
                <p className="text-gray-300">
                  Security and compliance are foundational elements of our
                  enterprise solutions. We implement a defense-in-depth approach
                  that includes identity and access management, data encryption,
                  network security, and application security controls. Our
                  solutions are designed to comply with relevant regulations
                  such as GDPR, HIPAA, SOX, and industry-specific requirements.
                  We conduct regular security assessments, including
                  vulnerability scanning and penetration testing, to identify
                  and address potential security issues. We also implement
                  comprehensive audit logging and monitoring to support
                  compliance reporting and incident response.
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
                  What is your approach to customization vs. configuration in
                  enterprise systems?
                </h3>
                <p className="text-gray-300">
                  We follow a "configure first, customize second" approach to
                  enterprise implementations. We leverage the native
                  configuration capabilities of enterprise platforms to meet
                  your requirements whenever possible, as this approach
                  typically results in lower total cost of ownership and easier
                  upgrades. When configuration alone cannot meet critical
                  business requirements, we implement customizations using best
                  practices that minimize future maintenance challenges. Our
                  customizations are well-documented, thoroughly tested, and
                  designed to be upgrade-safe whenever possible.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Enterprise Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our enterprise solutions can help you achieve
              your business goals.
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
