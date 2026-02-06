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
import SEO from "../SEO";
import { ServiceSchema } from "../JsonLd";
import LazyImage from "../LazyImage";
import {
  Database,
  BarChart,
  Brain,
  LineChart,
  Server,
  Layers,
  Zap,
  CheckCircle,
  ArrowRight,
  FileText,
  Users,
  TrendingUp,
  Bot,
} from "lucide-react";

const features = [
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data Processing",
    description:
      "Process and analyze large datasets efficiently using distributed computing frameworks like Apache Spark, Hadoop, and modern cloud data warehouses.",
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Analytics Dashboard",
    description:
      "Interactive dashboards for real-time data visualization and insights, powered by tools like Tableau, Power BI, and custom solutions built on D3.js.",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Machine Learning",
    description:
      "Advanced ML algorithms for predictive analytics and pattern recognition, deployed at scale using MLOps best practices and enterprise-grade infrastructure.",
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Predictive Analysis",
    description:
      "Forecast trends and make data-driven decisions with predictive models that leverage time series analysis, regression, and deep learning techniques.",
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "LLM-Powered Analytics",
    description:
      "Leverage large language models to analyze complex business data using RAG frameworks, unlocking insights from unstructured data and enabling natural language querying of your data.",
  },
];

const technologies = [
  {
    category: "Data Processing",
    tools: [
      "Apache Spark",
      "Apache Hadoop",
      "Apache Kafka",
      "Apache Flink",
      "Databricks",
      "AWS EMR",
      "Google Dataflow",
      "Azure Synapse",
    ],
  },
  {
    category: "Data Storage",
    tools: [
      "Snowflake",
      "Amazon Redshift",
      "Google BigQuery",
      "Azure Synapse Analytics",
      "MongoDB Atlas",
      "Cassandra",
      "Delta Lake",
      "Apache Iceberg",
    ],
  },
  {
    category: "Data Visualization",
    tools: [
      "Tableau",
      "Power BI",
      "Looker",
      "Grafana",
      "Kibana",
      "D3.js",
      "Plotly",
      "Apache Superset",
    ],
  },
  {
    category: "Machine Learning & AI",
    tools: [
      "TensorFlow",
      "PyTorch",
      "LangChain",
      "LlamaIndex",
      "Pinecone",
      "CrewAI",
      "MLflow",
      "Amazon SageMaker",
    ],
  },
];

const caseStudies = [
  {
    industry: "Financial Services",
    title: "Real-time Fraud Detection System",
    description:
      "Implemented a real-time fraud detection system for a global financial institution processing over 10 million transactions daily. The solution reduced fraud losses by 60% while maintaining a false positive rate below 0.1%.",
    metrics: [
      "10M+ daily transactions processed",
      "60% reduction in fraud losses",
      "99.9% accuracy rate",
      "<10ms response time",
    ],
    icon: <Server className="w-8 h-8" />,
  },
  {
    industry: "Retail",
    title: "Customer 360 & Personalization Engine",
    description:
      "Developed a comprehensive customer data platform for a Fortune 500 retailer, unifying data from 20+ sources to create a single customer view. The platform powers personalized recommendations that increased conversion rates by 35%.",
    metrics: [
      "500M+ customer profiles unified",
      "35% increase in conversion rates",
      "42% improvement in customer retention",
      "$120M additional annual revenue",
    ],
    icon: <Users className="w-8 h-8" />,
  },
  {
    industry: "Healthcare",
    title: "Predictive Patient Outcomes Platform",
    description:
      "Built a predictive analytics platform for a healthcare network that analyzes patient data to identify high-risk individuals and recommend preventive interventions. The system has helped reduce hospital readmissions by 28%.",
    metrics: [
      "28% reduction in readmissions",
      "15M+ patient records analyzed",
      "$45M annual savings",
      "HIPAA compliant architecture",
    ],
    icon: <TrendingUp className="w-8 h-8" />,
  },
];

const benefits = [
  {
    title: "Data-Driven Decision Making",
    description:
      "Transform raw data into actionable insights that drive strategic business decisions and create competitive advantages.",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: "Operational Efficiency",
    description:
      "Optimize business processes and reduce operational costs through automated data processing and real-time analytics.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Customer Experience",
    description:
      "Enhance customer satisfaction and loyalty by delivering personalized experiences based on deep customer insights.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Predictive Capabilities",
    description:
      "Anticipate market trends, customer behavior, and potential issues before they impact your business.",
    icon: <LineChart className="w-6 h-6" />,
  },
  {
    title: "Scalable Architecture",
    description:
      "Future-proof your data infrastructure with cloud-native solutions that scale seamlessly with your business growth.",
    icon: <Layers className="w-6 h-6" />,
  },
  {
    title: "Competitive Advantage",
    description:
      "Stay ahead of the competition by leveraging advanced analytics to identify new opportunities and optimize strategies.",
    icon: <TrendingUp className="w-6 h-6" />,
  },
];

const methodologies = [
  {
    title: "Data Strategy & Architecture",
    steps: [
      "Business requirements analysis",
      "Data maturity assessment",
      "Technology stack selection",
      "Data governance framework",
      "Roadmap development",
    ],
  },
  {
    title: "Data Engineering & Integration",
    steps: [
      "Data source identification",
      "ETL/ELT pipeline development",
      "Data quality validation",
      "Master data management",
      "Real-time data processing",
    ],
  },
  {
    title: "Analytics & Insights",
    steps: [
      "Exploratory data analysis",
      "Statistical modeling",
      "Dashboard development",
      "Automated reporting",
      "Self-service analytics",
    ],
  },
  {
    title: "Advanced Analytics & ML",
    steps: [
      "Feature engineering",
      "Model development & training",
      "Model validation & testing",
      "MLOps implementation",
      "Continuous model improvement",
    ],
  },
];

export default function BigDataAnalytics() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Big Data Analytics Services | Enterprise Data Solutions | Digitrans"
        description="Transform your raw data into actionable insights with our advanced big data analytics solutions powered by cutting-edge technology and industry expertise."
        canonicalUrl="/services/big-data-analytics"
        keywords={[
          "big data analytics",
          "data processing",
          "business intelligence",
          "data visualization",
          "predictive analytics",
          "real-time analytics",
          "data warehousing",
          "data lake",
          "ETL pipeline",
          "data integration",
        ]}
      />
      <ServiceSchema
        serviceType="Big Data Analytics"
        description="Transform your raw data into actionable insights with our advanced analytics solutions powered by cutting-edge technology and industry expertise."
      />
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
          <source src="/videos/bigdata.mp4" type="video/mp4" />
        </video>
        <UniverseLights />

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Big Data Analytics
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl"
          >
            Transform your raw data into actionable insights with our advanced
            analytics solutions powered by cutting-edge technology and industry
            expertise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <GradientButton
              size="lg"
              onClick={() => (window.location.href = "/contact")}
              rightIcon={<ArrowRight className="h-5 w-5" />}
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
                Transform Your Data into Actionable Insights
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                In today's data-driven world, organizations generate
                unprecedented volumes of data. The true value lies in extracting
                meaningful insights from this data.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our Big Data Analytics solutions help you harness your data's
                full potential, enabling informed decisions, identifying new
                opportunities, and gaining a competitive edge.
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
                src="/images/bigdata.jpg"
                alt="Data analytics dashboard with business insights"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>

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
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
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
              Our Big Data Analytics solutions deliver tangible business value
              across your organization
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
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">{benefit.description}</p>
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
              Real-world examples of how our Big Data Analytics solutions have
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
              We leverage best-in-class technologies to build scalable,
              future-proof data solutions
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
              A proven approach to delivering successful big data analytics
              projects
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

      {/* Industry Trends Section */}
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
              Industry Trends & Insights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead of the curve with the latest developments in big data
              analytics
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
                  Key Trends Shaping the Future of Big Data Analytics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-blue-400">
                      Data Mesh Architecture
                    </h4>
                    <p className="text-gray-300 mb-4">
                      The shift from centralized data lakes to domain-oriented,
                      distributed data ownership models is revolutionizing how
                      enterprises organize and access their data assets. Data
                      mesh architectures treat data as a product, with domain
                      teams taking full ownership of their data pipelines and
                      quality.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-blue-400">
                      Real-time Analytics
                    </h4>
                    <p className="text-gray-300 mb-4">
                      The demand for real-time insights continues to grow as
                      businesses seek to make decisions based on the most
                      current data available. Stream processing technologies
                      like Apache Kafka, Apache Flink, and cloud-native services
                      are enabling organizations to process and analyze data in
                      motion with sub-second latency.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-blue-400">
                      LLM-Augmented Analytics
                    </h4>
                    <p className="text-gray-300 mb-4">
                      The integration of large language models into analytics workflows 
                      is democratizing data science, allowing business users to query and 
                      analyze data using natural language. RAG-powered analytics systems 
                      combine the reasoning capabilities of LLMs with your enterprise data, 
                      uncovering hidden patterns and generating insights that might 
                      otherwise require teams of data scientists.
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
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Multi-Agent Analytics Systems
                </h3>
                <p className="text-gray-300 mb-4">
                  Multi-agent AI systems are transforming big data analytics by breaking down complex 
                  analytical tasks into specialized roles. These orchestrated systems use specialized 
                  agents for data cleaning, exploration, visualization, and insight generation, working 
                  together to process and analyze data at unprecedented scale and speed. This approach 
                  enables organizations to handle increasingly complex analytical challenges with greater 
                  automation and intelligence.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    Agent Orchestration
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    CrewAI
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    LangGraph
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    AutoGPT
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
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Data Governance & Privacy
                </h3>
                <p className="text-gray-300 mb-4">
                  With increasing regulatory requirements like GDPR, CCPA, and
                  industry-specific regulations, organizations must implement
                  robust data governance frameworks. Modern data platforms now
                  incorporate privacy-by-design principles, automated data
                  classification, and lineage tracking to ensure compliance
                  while enabling innovation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    GDPR
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    CCPA
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    Data Lineage
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    Data Catalogs
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
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Cloud-Native Analytics
                </h3>
                <p className="text-gray-300 mb-4">
                  The adoption of cloud-native analytics platforms continues to
                  accelerate, offering unprecedented scalability, elasticity,
                  and cost-efficiency. Organizations are increasingly leveraging
                  serverless architectures, containerization, and managed
                  services to reduce operational overhead and focus on
                  extracting value from their data.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    Serverless
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    Kubernetes
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    Microservices
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    Multi-cloud
                  </span>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  DataOps & MLOps
                </h3>
                <p className="text-gray-300 mb-4">
                  The application of DevOps principles to data and machine
                  learning workflows is transforming how organizations deliver
                  analytics solutions. DataOps and MLOps practices enable
                  continuous integration and delivery of data pipelines and ML
                  models, reducing time-to-insight and ensuring production
                  reliability.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    CI/CD
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    Monitoring
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    Version Control
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    Automation
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
              Common questions about our Big Data Analytics services
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
                  How long does it typically take to implement a big data
                  analytics solution?
                </h3>
                <p className="text-gray-300">
                  Implementation timelines vary based on project scope, data
                  complexity, and organizational readiness. A proof of concept
                  can be delivered in 4-8 weeks, while full enterprise
                  implementations typically range from 3-12 months. We follow an
                  agile approach, delivering value incrementally rather than
                  waiting for the entire solution to be complete.
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
                  What kind of ROI can we expect from investing in big data
                  analytics?
                </h3>
                <p className="text-gray-300">
                  ROI varies by industry and use case, but our clients typically
                  see returns in three key areas: revenue growth (through
                  improved customer insights and personalization), cost
                  reduction (through operational efficiencies and process
                  optimization), and risk mitigation (through improved fraud
                  detection and compliance). Many clients achieve ROI within
                  6-12 months of implementation.
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
                  How do you handle data security and compliance requirements?
                </h3>
                <p className="text-gray-300">
                  Security and compliance are foundational to our approach. We
                  implement comprehensive security measures including encryption
                  (at rest and in transit), access controls, audit logging, and
                  data masking. Our solutions are designed to comply with
                  relevant regulations such as GDPR, HIPAA, PCI DSS, and
                  industry-specific requirements. We conduct regular security
                  assessments and can work with your compliance teams to ensure
                  all requirements are met.
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
                  Do we need to replace our existing systems to implement big
                  data analytics?
                </h3>
                <p className="text-gray-300">
                  Not necessarily. Our approach is to integrate with and enhance
                  your existing systems rather than replace them entirely. We
                  can implement modern data architectures that connect to legacy
                  systems, gradually modernizing your infrastructure while
                  preserving your investments. This hybrid approach allows you
                  to realize value quickly while planning for long-term
                  transformation.
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
              Ready to Transform Your Data into Business Value?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our Big Data Analytics solutions can help you
              achieve your business goals.
            </p>
            <GradientButton
              size="lg"
              onClick={() => (window.location.href = "/contact")}
              rightIcon={<ArrowRight className="h-5 w-5" />}
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
