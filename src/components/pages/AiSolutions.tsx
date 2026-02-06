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
  Brain,
  Cpu,
  Network,
  Zap,
  CheckCircle,
  ArrowRight,
  FileText,
  Users,
  TrendingUp,
  MessageSquare,
  Eye,
  Layers,
  BarChart,
  Bot,
  Code,
  Database,
  LineChart,
  GitMerge,
} from "lucide-react";

const features = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Machine Learning",
    description:
      "Custom ML models for predictive analytics, recommendation systems, and pattern recognition, deployed at scale with enterprise-grade MLOps practices.",
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Natural Language Processing",
    description:
      "Advanced NLP solutions for text analysis, sentiment analysis, document processing, and conversational AI using state-of-the-art language models.",
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Computer Vision",
    description:
      "Image and video processing solutions for object detection, facial recognition, quality control, and visual inspection using cutting-edge deep learning techniques.",
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "Generative AI",
    description:
      "Leverage the power of large language models (LLMs) and generative AI for content creation, summarization, code generation, and intelligent automation.",
  },
  {
    icon: <GitMerge className="w-8 h-8" />,
    title: "Multi-Agent Orchestration",
    description:
      "Create sophisticated AI systems with multiple specialized agents working together to solve complex problems, communicate seamlessly, and handle multi-step tasks autonomously.",
  },
];

const technologies = [
  {
    category: "Machine Learning",
    tools: [
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "XGBoost",
      "MLflow",
      "Kubeflow",
      "Amazon SageMaker",
      "Azure ML",
    ],
  },
  {
    category: "Natural Language Processing",
    tools: [
      "GPT-4",
      "BERT",
      "LangChain",
      "Hugging Face",
      "spaCy",
      "NLTK",
      "LlamaIndex",
      "Anthropic Claude",
    ],
  },
  {
    category: "Computer Vision",
    tools: [
      "OpenCV",
      "YOLO",
      "TensorFlow Object Detection",
      "MediaPipe",
      "Detectron2",
      "Roboflow",
      "Azure Computer Vision",
      "Google Vision AI",
    ],
  },
  {
    category: "MLOps & Infrastructure",
    tools: [
      "Docker",
      "Kubernetes",
      "Ray",
      "Airflow",
      "Weights & Biases",
      "DVC",
      "Seldon Core",
      "CrewAI",
    ],
  },
];

const caseStudies = [
  {
    industry: "Financial Services",
    title: "AI-Powered Fraud Detection",
    description:
      "Developed a real-time fraud detection system for a global payment processor using advanced machine learning algorithms. The solution analyzes millions of transactions per second to identify fraudulent patterns with high accuracy.",
    metrics: [
      "85% reduction in false positives",
      "$200M+ annual fraud prevention",
      "<10ms detection latency",
      "99.7% accuracy rate",
    ],
    icon: <Shield className="w-8 h-8" />,
  },
  {
    industry: "Healthcare",
    title: "Medical Imaging Diagnostics",
    description:
      "Created an AI-powered diagnostic tool for radiologists that analyzes medical images to detect abnormalities. The system helps prioritize urgent cases and provides decision support for healthcare professionals.",
    metrics: [
      "96% diagnostic accuracy",
      "40% reduction in diagnosis time",
      "30% increase in early detection",
      "HIPAA compliant architecture",
    ],
    icon: <Eye className="w-8 h-8" />,
  },
  {
    industry: "Retail",
    title: "Intelligent Customer Experience",
    description:
      "Implemented a comprehensive AI solution for a retail chain that includes personalized recommendations, intelligent search, and conversational shopping assistants. The platform has significantly improved customer engagement and sales.",
    metrics: [
      "32% increase in conversion rate",
      "45% improvement in search relevance",
      "28% higher average order value",
      "4.8/5 customer satisfaction",
    ],
    icon: <Users className="w-8 h-8" />,
  },
];

const benefits = [
  {
    title: "Enhanced Decision Making",
    description:
      "Leverage AI-driven insights to make faster, more accurate decisions based on data rather than intuition.",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: "Operational Efficiency",
    description:
      "Automate routine tasks and optimize complex processes to reduce costs and improve productivity.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Personalized Experiences",
    description:
      "Deliver tailored interactions and recommendations that increase customer satisfaction and loyalty.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Predictive Capabilities",
    description:
      "Anticipate trends, behaviors, and potential issues before they impact your business.",
    icon: <LineChart className="w-6 h-6" />,
  },
  {
    title: "Scalable Intelligence",
    description:
      "Deploy AI solutions that grow with your business and continuously improve over time.",
    icon: <Layers className="w-6 h-6" />,
  },
  {
    title: "Competitive Advantage",
    description:
      "Stay ahead of the competition by leveraging cutting-edge AI technologies that drive innovation.",
    icon: <TrendingUp className="w-6 h-6" />,
  },
];

const methodologies = [
  {
    title: "Discovery & Strategy",
    steps: [
      "Business requirements analysis",
      "AI opportunity assessment",
      "Data readiness evaluation",
      "Solution architecture design",
      "ROI projection",
    ],
  },
  {
    title: "Data Preparation & Engineering",
    steps: [
      "Data collection and integration",
      "Data cleaning and preprocessing",
      "Feature engineering",
      "Data labeling and annotation",
      "Data pipeline development",
    ],
  },
  {
    title: "Model Development & Training",
    steps: [
      "Algorithm selection",
      "Model architecture design",
      "Training and validation",
      "Hyperparameter optimization",
      "Performance evaluation",
    ],
  },
  {
    title: "Deployment & MLOps",
    steps: [
      "Infrastructure setup",
      "Model deployment",
      "Monitoring and observability",
      "Continuous integration/deployment",
      "Model retraining and versioning",
    ],
  },
];

function Shield(props) {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}

export default function AiSolutions() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="AI Solutions | Enterprise Machine Learning & AI Services | Digitrans"
        description="Transform your business with cutting-edge artificial intelligence and machine learning solutions designed for enterprise needs."
        canonicalUrl="/services/ai-solutions"
        keywords={[
          "AI solutions",
          "machine learning",
          "artificial intelligence",
          "enterprise AI",
          "natural language processing",
          "computer vision",
          "generative AI",
          "AI agents",
          "ML development",
          "AI orchestration",
        ]}
      />
      <ServiceSchema
        serviceType="AI Solutions"
        description="Transform your business with cutting-edge artificial intelligence and machine learning solutions designed for enterprise needs."
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
          <source src="/videos/ai.mp4" type="video/mp4" />
        </video>
        <UniverseLights />

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            AI Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl"
          >
            Transform your business with cutting-edge artificial intelligence
            and machine learning solutions designed for enterprise needs.
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
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-2xl order-2 md:order-1"
            >
              <img
                src="/images/ai.png"
                alt="AI technology visualization with neural networks"
                className="w-full h-auto object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-left order-1 md:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Enterprise AI for Real-World Impact
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Artificial Intelligence is no longer just a buzzword—it's a
                transformative technology reshaping industries and creating
                unprecedented innovation opportunities. Our AI solutions deliver
                tangible business outcomes that drive growth, efficiency, and
                competitive advantage.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We combine expertise in machine learning, NLP, computer vision,
                and generative AI with industry knowledge to address your unique
                business challenges, ensuring seamless integration with your
                existing systems.
              </p>
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
              Our AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI solutions for enterprise needs
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
              Our AI solutions deliver measurable value across your organization
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
              Real-world examples of how our AI solutions have transformed
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
              We leverage cutting-edge AI technologies and tools
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
              A proven approach to delivering successful AI projects
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
              Stay ahead of the curve with the latest developments in AI
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
                  Key Trends Shaping the Future of AI
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-blue-400">
                      Generative AI Revolution
                    </h4>
                    <p className="text-gray-300 mb-4">
                      The rapid advancement of generative AI models like GPT-4,
                      Claude, and Stable Diffusion is transforming how
                      businesses create content, write code, and automate
                      complex tasks. These models are becoming increasingly
                      multimodal, capable of understanding and generating text,
                      images, audio, and video, opening up new possibilities for
                      creative and knowledge work.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-blue-400">
                      AI Governance & Responsible AI
                    </h4>
                    <p className="text-gray-300 mb-4">
                      As AI becomes more pervasive, organizations are focusing
                      on implementing robust governance frameworks to ensure
                      responsible use. This includes addressing bias and
                      fairness, ensuring transparency and explainability, and
                      complying with emerging regulations like the EU AI Act.
                      Responsible AI practices are becoming a competitive
                      differentiator and a business necessity.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-blue-400">
                      AI-Human Collaboration
                    </h4>
                    <p className="text-gray-300 mb-4">
                      The most effective AI implementations are those that
                      enhance human capabilities rather than replace them. We're
                      seeing a shift toward collaborative intelligence, where AI
                      systems work alongside humans, augmenting their skills and
                      enabling them to focus on higher-value tasks. This
                      human-in-the-loop approach combines the creativity and
                      judgment of humans with the speed and pattern recognition
                      of AI.
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
                  Multimodal AI
                </h3>
                <p className="text-gray-300 mb-4">
                  The next generation of AI systems can process and generate
                  multiple types of data—text, images, audio, and
                  video—simultaneously. This multimodal capability enables more
                  natural and comprehensive interactions, opening up new
                  applications in areas like virtual assistants, content
                  creation, and immersive experiences. Companies are leveraging
                  these capabilities to create more intuitive and engaging user
                  experiences.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    GPT-4V
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    DALL-E 3
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    Gemini
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    Sora
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
                  Enterprise RAG & Multi-Agent Systems
                </h3>
                <p className="text-gray-300 mb-4">
                  Retrieval-Augmented Generation (RAG) is becoming a cornerstone
                  of enterprise AI strategies, allowing organizations to
                  leverage their proprietary data with large language models
                  while maintaining accuracy and security. Multi-agent AI systems
                  that coordinate specialized agents for complex tasks are transforming
                  business processes with unprecedented levels of automation and
                  intelligence. These systems can reason, plan, and execute multi-step
                  workflows with minimal human intervention.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    RAG
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    Vector DBs
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    AI Agents
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    Orchestration
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    CrewAI
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    LangGraph
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
                  Edge AI & Federated Learning
                </h3>
                <p className="text-gray-300 mb-4">
                  As AI moves closer to the edge—running on devices rather than
                  in the cloud—we're seeing new applications that require low
                  latency, privacy, and offline capabilities. Federated
                  learning, which allows models to be trained across multiple
                  devices without sharing the underlying data, is enabling
                  privacy-preserving AI applications in healthcare, finance, and
                  other sensitive domains.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    TinyML
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    IoT
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    Privacy
                  </span>
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                    Real-time
                  </span>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Use Cases Section */}
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
              Industry-Specific AI Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How different sectors are leveraging AI to transform their
              operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20">
                <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                  <BarChart className="w-5 h-5 text-blue-500" /> Financial
                  Services
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">
                        Fraud Detection & Prevention:
                      </span>
                      <p className="text-gray-300">
                        Real-time anomaly detection systems that identify
                        suspicious transactions with high accuracy and low false
                        positives.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">
                        Algorithmic Trading:
                      </span>
                      <p className="text-gray-300">
                        Advanced ML models that analyze market data and execute
                        trades at optimal times based on complex patterns.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">
                        Risk Assessment:
                      </span>
                      <p className="text-gray-300">
                        AI-powered credit scoring and risk models that consider
                        a broader range of factors for more accurate lending
                        decisions.
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
                <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                  <Bot className="w-5 h-5 text-blue-500" /> Healthcare
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">
                        Medical Imaging Analysis:
                      </span>
                      <p className="text-gray-300">
                        AI systems that assist radiologists in detecting
                        abnormalities in X-rays, MRIs, and CT scans with high
                        accuracy.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">
                        Predictive Analytics:
                      </span>
                      <p className="text-gray-300">
                        Models that identify patients at risk of readmission or
                        disease progression, enabling proactive interventions.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">
                        Drug Discovery:
                      </span>
                      <p className="text-gray-300">
                        AI-accelerated pharmaceutical research that can identify
                        potential drug candidates and predict their efficacy.
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
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20">
                <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                  <Database className="w-5 h-5 text-blue-500" /> Manufacturing
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">
                        Predictive Maintenance:
                      </span>
                      <p className="text-gray-300">
                        AI systems that monitor equipment health and predict
                        failures before they occur, reducing downtime and
                        maintenance costs.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">
                        Quality Control:
                      </span>
                      <p className="text-gray-300">
                        Computer vision systems that inspect products at scale,
                        detecting defects with greater accuracy than manual
                        inspection.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">
                        Supply Chain Optimization:
                      </span>
                      <p className="text-gray-300">
                        AI-driven demand forecasting and inventory management
                        that reduce costs and improve resilience.
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
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20">
                <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-500" /> Retail & E-commerce
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">
                        Personalized Recommendations:
                      </span>
                      <p className="text-gray-300">
                        AI engines that analyze customer behavior to deliver
                        highly relevant product suggestions, increasing
                        conversion rates.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">
                        Inventory Management:
                      </span>
                      <p className="text-gray-300">
                        Predictive models that optimize stock levels based on
                        seasonal trends, promotions, and external factors.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-white">
                        Visual Search:
                      </span>
                      <p className="text-gray-300">
                        Computer vision technology that allows customers to
                        search for products using images rather than text.
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
              Common questions about our AI solutions
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
                  How do you ensure the ethical use of AI in your solutions?
                </h3>
                <p className="text-gray-300">
                  Ethics is central to our AI development process. We follow a
                  comprehensive responsible AI framework that includes bias
                  detection and mitigation, fairness assessments, transparency
                  in model decisions, and privacy protection. We work closely
                  with clients to establish ethical guidelines specific to their
                  use cases and industry regulations, and we conduct regular
                  audits to ensure compliance with these standards throughout
                  the AI lifecycle.
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
                  What kind of data do we need to implement AI solutions?
                </h3>
                <p className="text-gray-300">
                  The data requirements depend on the specific AI application,
                  but generally, you need relevant, representative, and
                  sufficient data for the problem you're trying to solve. This
                  could include historical transaction data, customer
                  interactions, sensor readings, images, or text. We can work
                  with structured and unstructured data, and we have strategies
                  for scenarios with limited data, including transfer learning,
                  synthetic data generation, and leveraging pre-trained models
                  that can be fine-tuned with smaller datasets.
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
                  How do you measure the success of AI implementations?
                </h3>
                <p className="text-gray-300">
                  We establish clear, measurable KPIs at the beginning of each
                  project, aligned with your business objectives. These
                  typically include technical metrics (model accuracy,
                  precision, recall) and business metrics (ROI, cost savings,
                  revenue increase, customer satisfaction). We implement robust
                  monitoring systems to track these metrics in production and
                  provide regular performance reports. Our approach focuses on
                  continuous improvement, with models being regularly evaluated
                  and refined based on real-world performance.
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
                  How do you handle the integration of AI with existing systems?
                </h3>
                <p className="text-gray-300">
                  We design AI solutions with integration in mind from the
                  start. Our approach includes thorough assessment of your
                  existing architecture, development of APIs and connectors for
                  seamless data flow, and implementation of microservices
                  architectures that allow for modular integration. We work
                  closely with your IT teams to ensure compatibility with
                  existing security protocols and governance frameworks, and we
                  provide comprehensive documentation and knowledge transfer to
                  enable your team to maintain and evolve the integrated
                  systems.
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
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI solutions can help you achieve your
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
