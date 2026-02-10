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
  RefreshCw,
  Laptop,
  Zap,
  LineChart,
  CheckCircle,
  ArrowRight,
  FileText,
  Users,
  TrendingUp,
  Layers,
  Code,
  Database,
  Network,
  BarChart,
} from "lucide-react";

const features = [
  {
    icon: <RefreshCw className="w-8 h-8" />,
    title: "Process Automation",
    description: "Streamline operations with intelligent automation solutions.",
  },
  {
    icon: <Laptop className="w-8 h-8" />,
    title: "Digital Workplace",
    description: "Modern tools and platforms for enhanced collaboration.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Agile Transformation",
    description: "Adopt agile methodologies for faster delivery.",
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Performance Analytics",
    description: "Track and optimize digital transformation metrics.",
  },
];

export default function DigitalTransformation() {
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
          <source src="/videos/digital.mp4" type="video/mp4" />
        </video>
        <UniverseLights />

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Digital Transformation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl"
          >
            Transform your business with cutting-edge digital solutions and
            strategies that drive innovation, efficiency, and competitive
            advantage.
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
                  .getElementById("understanding")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More
            </GradientButton>
          </motion.div>
        </div>
      </div>

      {/* Understanding Digital Transformation Section */}
      <section id="understanding" className="py-20 bg-black scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Understanding Digital Transformation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8">
              <div>
                <p className="text-xl text-gray-300 leading-relaxed mb-6 text-left">
                  Digital transformation represents a fundamental reimagining of
                  how an organization uses technology, people, and processes to
                  radically improve business performance. It's not merely about
                  implementing new technologies—it's about leveraging these
                  technologies to transform business models, enhance customer
                  experiences, and create new value propositions in an
                  increasingly digital world.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
                  alt="Digital transformation visualization"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed mb-6 text-left">
              In today's rapidly evolving business landscape, digital
              transformation has become an imperative rather than an option.
              Organizations that fail to embrace digital transformation risk
              being disrupted by more agile competitors who can better meet
              changing customer expectations and market demands. The COVID-19
              pandemic has only accelerated this trend, forcing businesses to
              rapidly digitize operations and customer interactions.
            </p>

            <p className="text-xl text-gray-300 leading-relaxed mb-6 text-left">
              At Digitrans, we view digital transformation as a continuous
              journey rather than a one-time project. This journey involves the
              integration of digital technology into all areas of a business,
              fundamentally changing how you operate and deliver value to
              customers. It also requires a cultural change that challenges
              organizations to experiment, become comfortable with failure, and
              continually question the status quo.
            </p>

            <p className="text-xl text-gray-300 leading-relaxed text-left">
              Our approach to digital transformation is holistic, addressing the
              four key dimensions that must be aligned for successful
              transformation: technology, data, process, and organizational
              change. By addressing all these dimensions simultaneously, we help
              organizations achieve sustainable transformation that delivers
              lasting business value.
            </p>
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

      {/* The Digital Transformation Imperative */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              The Digital Transformation Imperative
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8">
              <div>
                <p className="text-xl text-gray-300 leading-relaxed mb-6 text-left">
                  The business landscape is undergoing a profound shift driven
                  by technological innovation, changing customer expectations,
                  and disruptive business models. According to McKinsey, the
                  COVID-19 pandemic accelerated digital adoption by seven years,
                  with companies digitizing customer and supply-chain
                  interactions and internal operations by three to four years.
                  This acceleration has created both opportunities and
                  challenges for businesses across all industries.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80"
                  alt="Digital transformation business landscape visualization"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8">
              <div className="rounded-xl overflow-hidden shadow-2xl order-2 md:order-1">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="Digital business analytics and competitive advantage"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-xl text-gray-300 leading-relaxed mb-6 text-left">
                  Organizations that successfully navigate digital
                  transformation can achieve significant competitive advantages.
                  Research by the MIT Center for Digital Business found that
                  digitally mature companies are 26% more profitable than their
                  industry peers. They also generate 9% more revenue from their
                  physical assets and achieve significantly higher market
                  valuations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8">
              <div>
                <p className="text-xl text-gray-300 leading-relaxed mb-6 text-left">
                  However, digital transformation is not without challenges.
                  According to Boston Consulting Group, 70% of digital
                  transformations fall short of their objectives. Common
                  obstacles include resistance to change, lack of digital
                  skills, siloed organizational structures, legacy technology
                  constraints, and unclear transformation strategy. Overcoming
                  these challenges requires a comprehensive approach that
                  addresses both the technological and human aspects of
                  transformation.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team collaborating on digital transformation challenges"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="rounded-xl overflow-hidden shadow-2xl order-2 md:order-1">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                  alt="Strategic digital transformation planning"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-xl text-gray-300 leading-relaxed text-left">
                  At Digitrans, we help organisations navigate these challenges
                  by providing a structured yet flexible approach to digital
                  transformation. Our methodology combines strategic vision with
                  practical implementation, ensuring that transformation
                  initiatives deliver tangible business outcomes while building
                  the capabilities needed for long-term success in the digital
                  economy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Digital Transformation Framework */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Our Digital Transformation Framework
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-4xl mx-auto text-center">
              Successful digital transformation requires a structured approach
              that balances strategic vision with practical implementation. Our
              comprehensive framework guides organizations through the
              transformation journey, from initial assessment to continuous
              evolution.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 z-0"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-400 mb-6 transform transition-transform group-hover:rotate-6">
                      <LineChart className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
                      <span className="text-blue-400 font-bold">01.</span>{" "}
                      Digital Maturity Assessment
                    </h3>
                    <p className="text-gray-300">
                      We assess your organization's digital capabilities across
                      strategy, culture, customer experience, operations,
                      technology, and data. Our proprietary Digital Maturity
                      Model benchmarks your organization against industry peers,
                      identifying strengths and opportunities.
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -mr-16 -mt-16 z-0"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-400 mb-6 transform transition-transform group-hover:rotate-6">
                      <Laptop className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
                      <span className="text-purple-400 font-bold">02.</span>{" "}
                      Vision & Strategy Development
                    </h3>
                    <p className="text-gray-300">
                      We collaborate with your leadership to develop a
                      compelling digital vision and strategy. This includes
                      defining your desired future state, articulating
                      transformation value, and establishing clear strategic
                      objectives with measurable KPIs.
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full -mr-16 -mt-16 z-0"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-indigo-900/30 rounded-2xl flex items-center justify-center text-indigo-400 mb-6 transform transition-transform group-hover:rotate-6">
                      <BarChart className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
                      <span className="text-indigo-400 font-bold">03.</span>{" "}
                      Roadmap & Implementation Planning
                    </h3>
                    <p className="text-gray-300">
                      We create a detailed transformation roadmap outlining
                      initiatives, timelines, resources, and dependencies. The
                      roadmap typically spans 18-36 months with waves of
                      initiatives that deliver incremental business value while
                      building toward your vision.
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full -mr-16 -mt-16 z-0"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-cyan-900/30 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 transform transition-transform group-hover:rotate-6">
                      <Code className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
                      <span className="text-cyan-400 font-bold">04.</span> Agile
                      Delivery & Implementation
                    </h3>
                    <p className="text-gray-300">
                      We employ agile methodologies for rapid value delivery and
                      continuous adaptation. Our approach combines
                      cross-functional teams, iterative development, and CI/CD
                      to accelerate time-to-market while establishing solid
                      technical foundations.
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Card 5 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -mr-16 -mt-16 z-0"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-green-900/30 rounded-2xl flex items-center justify-center text-green-400 mb-6 transform transition-transform group-hover:rotate-6">
                      <Users className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
                      <span className="text-green-400 font-bold">05.</span>{" "}
                      Organizational Change & Capability Building
                    </h3>
                    <p className="text-gray-300">
                      We help redesign organizational structures, processes, and
                      ways of working to support digital transformation. Our
                      change management approach ensures employees at all levels
                      understand, support, and actively contribute to the
                      transformation.
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Card 6 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -mr-16 -mt-16 z-0"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-amber-900/30 rounded-2xl flex items-center justify-center text-amber-400 mb-6 transform transition-transform group-hover:rotate-6">
                      <RefreshCw className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
                      <span className="text-amber-400 font-bold">06.</span>{" "}
                      Continuous Evolution & Optimization
                    </h3>
                    <p className="text-gray-300">
                      We establish mechanisms for monitoring progress, measuring
                      outcomes, and continuously improving your digital
                      capabilities. This includes data-driven decision-making,
                      experimentation culture, and regular strategy
                      reassessment.
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Key Focus Areas
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-4xl mx-auto text-center">
              Our digital transformation services address several key focus
              areas that are critical for success in the digital economy. While
              the specific priorities vary by organization and industry, these
              areas represent common themes across successful digital
              transformations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Card 1 - Customer Experience */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full -mr-16 -mt-16 z-0"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-pink-900/30 rounded-2xl flex items-center justify-center text-pink-400 mb-6 transform transition-transform group-hover:rotate-6">
                      <Users className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">
                      Customer Experience Transformation
                    </h3>
                    <p className="text-gray-300 mb-4">
                      We help organizations reimagine customer journeys to
                      deliver seamless, personalized experiences across all
                      touchpoints.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-pink-900/30 text-pink-400 rounded-full text-sm">
                        Journey Mapping
                      </span>
                      <span className="px-3 py-1 bg-pink-900/30 text-pink-400 rounded-full text-sm">
                        Personalization
                      </span>
                      <span className="px-3 py-1 bg-pink-900/30 text-pink-400 rounded-full text-sm">
                        Omnichannel
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Card 2 - Operational Excellence */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full -mr-16 -mt-16 z-0"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-orange-900/30 rounded-2xl flex items-center justify-center text-orange-400 mb-6 transform transition-transform group-hover:rotate-6">
                      <Zap className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">
                      Operational Excellence & Automation
                    </h3>
                    <p className="text-gray-300 mb-4">
                      We enhance operational efficiency through process
                      optimization and intelligent automation technologies.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-orange-900/30 text-orange-400 rounded-full text-sm">
                        RPA
                      </span>
                      <span className="px-3 py-1 bg-orange-900/30 text-orange-400 rounded-full text-sm">
                        Workflow Automation
                      </span>
                      <span className="px-3 py-1 bg-orange-900/30 text-orange-400 rounded-full text-sm">
                        Process Optimization
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Card 3 - Data-Driven Decision Making */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 z-0"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-400 mb-6 transform transition-transform group-hover:rotate-6">
                      <Database className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">
                      Data-Driven Decision Making
                    </h3>
                    <p className="text-gray-300 mb-4">
                      We develop comprehensive data strategies that transform
                      raw data into actionable insights for strategic advantage.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                        Data Governance
                      </span>
                      <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                        Analytics
                      </span>
                      <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm">
                        AI/ML
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Card 4 - Digital Workplace */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -mr-16 -mt-16 z-0"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-green-900/30 rounded-2xl flex items-center justify-center text-green-400 mb-6 transform transition-transform group-hover:rotate-6">
                      <Laptop className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">
                      Digital Workplace & Collaboration
                    </h3>
                    <p className="text-gray-300 mb-4">
                      We create digital workplaces that enhance productivity,
                      collaboration, and engagement for remote and hybrid teams.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm">
                        Collaboration Tools
                      </span>
                      <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm">
                        Knowledge Management
                      </span>
                      <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm">
                        Employee Experience
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Card 5 - Technology Modernization */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -mr-16 -mt-16 z-0"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-400 mb-6 transform transition-transform group-hover:rotate-6">
                      <Code className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">
                      Technology Modernization
                    </h3>
                    <p className="text-gray-300 mb-4">
                      We modernize technology landscapes to create the
                      foundation for digital innovation and business agility.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-sm">
                        Microservices
                      </span>
                      <span className="px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-sm">
                        Cloud Migration
                      </span>
                      <span className="px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-sm">
                        DevOps
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Card 6 - Innovation & New Business Models */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full -mr-16 -mt-16 z-0"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-cyan-900/30 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 transform transition-transform group-hover:rotate-6">
                      <TrendingUp className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">
                      Innovation & New Business Models
                    </h3>
                    <p className="text-gray-300 mb-4">
                      We help organizations explore and implement new digital
                      business models and revenue streams.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-cyan-900/30 text-cyan-400 rounded-full text-sm">
                        Digital Products
                      </span>
                      <span className="px-3 py-1 bg-cyan-900/30 text-cyan-400 rounded-full text-sm">
                        Ecosystem Strategy
                      </span>
                      <span className="px-3 py-1 bg-cyan-900/30 text-cyan-400 rounded-full text-sm">
                        Venture Building
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry-Specific Digital Transformation */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Industry-Specific Digital Transformation
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-4xl mx-auto text-center">
              While digital transformation shares common principles across
              industries, the specific opportunities, challenges, and priorities
              vary significantly by sector. Our industry-specific approaches
              combine deep domain knowledge with digital expertise.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {/* Financial Services Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 z-0"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-400 transform transition-transform group-hover:rotate-6">
                        <LineChart className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-semibold text-white">
                        Financial Services
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                      The financial services industry is experiencing profound
                      disruption from fintech startups, changing customer
                      expectations, and regulatory pressures. We help financial
                      institutions enhance customer experience and modernize
                      core systems.
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          Digital banking platforms & omnichannel engagement
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          Intelligent automation for middle and back-office
                          processes
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          Advanced analytics for risk management and customer
                          insights
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          Blockchain, AI, and open banking integration
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Healthcare Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -mr-16 -mt-16 z-0"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-green-900/30 rounded-2xl flex items-center justify-center text-green-400 transform transition-transform group-hover:rotate-6">
                        <Users className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-semibold text-white">
                        Healthcare & Life Sciences
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Healthcare organizations face increasing pressure to
                      improve patient outcomes, enhance access to care, and
                      reduce costs. We focus on creating connected health
                      ecosystems that integrate data and workflows across the
                      care continuum.
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          Patient engagement platforms & telehealth solutions
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          Clinical decision support systems & healthcare
                          analytics
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          Population health management & value-based care
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          AI for diagnostics & secure health information
                          exchange
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Manufacturing Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -mr-16 -mt-16 z-0"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-amber-900/30 rounded-2xl flex items-center justify-center text-amber-400 transform transition-transform group-hover:rotate-6">
                        <Layers className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-semibold text-white">
                        Manufacturing & Supply Chain
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Manufacturing companies are embracing digital technologies
                      to enhance operational efficiency, product quality, and
                      supply chain resilience. We implement Industry 4.0
                      capabilities and integrate OT with IT systems.
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          Industrial IoT platforms & smart factories
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          Digital twins for products and processes
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          Advanced analytics for quality and yield optimization
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          Product-as-a-service & outcome-based business models
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Retail Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -mr-16 -mt-16 z-0"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-400 transform transition-transform group-hover:rotate-6">
                        <Zap className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-semibold text-white">
                        Retail & Consumer Goods
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Retail and consumer goods companies face intense
                      competition from digital-native players. We focus on
                      creating seamless omnichannel experiences, personalizing
                      customer interactions, and optimizing supply chains.
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          Unified commerce platforms & e-commerce solutions
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          Personalization engines & customer data platforms
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          Demand forecasting & inventory optimization
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          Computer vision for cashierless checkout & AR for
                          virtual try-on
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Digital Transformation Success Factors */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Digital Transformation Success Factors
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-4xl mx-auto text-center">
              Based on our experience helping organizations across industries
              navigate their digital transformation journeys, we have identified
              several critical success factors that differentiate successful
              transformations from those that fall short of expectations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Card 1 - Vision and Strategy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full -mr-16 -mt-16 z-0"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-indigo-900/30 rounded-2xl flex items-center justify-center text-indigo-400 mb-6 transform transition-transform group-hover:rotate-6">
                      <LineChart className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">
                      Clear Vision & Strategy
                    </h3>
                    <p className="text-gray-300">
                      Successful transformations start with a clear vision of
                      the desired future state and a well-defined strategy. This
                      vision articulates how digital technologies will create
                      value for customers, employees, and shareholders.
                    </p>
                    <div className="mt-6 pt-6 border-t border-purple-500/20">
                      <div className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-indigo-400" />
                        <span className="text-gray-300">
                          Specific business outcomes
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <ArrowRight className="w-4 h-4 text-indigo-400" />
                        <span className="text-gray-300">
                          Prioritized initiatives
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <ArrowRight className="w-4 h-4 text-indigo-400" />
                        <span className="text-gray-300">
                          Clear success metrics
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Card 2 - Leadership */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 z-0"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-400 mb-6 transform transition-transform group-hover:rotate-6">
                      <Users className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">
                      Leadership Commitment
                    </h3>
                    <p className="text-gray-300">
                      Digital transformation requires strong leadership
                      commitment and alignment across the executive team.
                      Leaders must provide resources, remove obstacles, and
                      model the behaviors needed for successful transformation.
                    </p>
                    <div className="mt-6 pt-6 border-t border-purple-500/20">
                      <div className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-blue-400" />
                        <span className="text-gray-300">
                          Executive alignment
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <ArrowRight className="w-4 h-4 text-blue-400" />
                        <span className="text-gray-300">
                          Embracing experimentation
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <ArrowRight className="w-4 h-4 text-blue-400" />
                        <span className="text-gray-300">
                          Resilience during setbacks
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Card 3 - Customer-Centric */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full -mr-16 -mt-16 z-0"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-pink-900/30 rounded-2xl flex items-center justify-center text-pink-400 mb-6 transform transition-transform group-hover:rotate-6">
                      <Users className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">
                      Customer-Centric Approach
                    </h3>
                    <p className="text-gray-300">
                      Successful transformations maintain a relentless focus on
                      customer needs. This involves deeply understanding
                      customer journeys, pain points, and unmet needs, and
                      designing solutions that address these effectively.
                    </p>
                    <div className="mt-6 pt-6 border-t border-purple-500/20">
                      <div className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-pink-400" />
                        <span className="text-gray-300">Journey mapping</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <ArrowRight className="w-4 h-4 text-pink-400" />
                        <span className="text-gray-300">
                          Customer-driven priorities
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <ArrowRight className="w-4 h-4 text-pink-400" />
                        <span className="text-gray-300">
                          Satisfaction metrics
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Card 4 - Agile Approach */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -mr-16 -mt-16 z-0"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-green-900/30 rounded-2xl flex items-center justify-center text-green-400 mb-6 transform transition-transform group-hover:rotate-6">
                      <RefreshCw className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">
                      Agile & Iterative Approach
                    </h3>
                    <p className="text-gray-300">
                      Successful transformations adopt agile approaches that
                      enable rapid experimentation, continuous learning, and
                      frequent delivery of value. This helps manage risk through
                      early feedback and course corrections.
                    </p>
                    <div className="mt-6 pt-6 border-t border-purple-500/20">
                      <div className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">
                          Rapid experimentation
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <ArrowRight className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">Feedback loops</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <ArrowRight className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">
                          Incremental delivery
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Card 5 - Talent and Culture */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -mr-16 -mt-16 z-0"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-amber-900/30 rounded-2xl flex items-center justify-center text-amber-400 mb-6 transform transition-transform group-hover:rotate-6">
                      <Users className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">
                      Talent & Culture
                    </h3>
                    <p className="text-gray-300">
                      Digital transformation requires new skills and ways of
                      working. Successful transformations invest in building
                      capabilities and fostering a culture that enables change
                      and innovation.
                    </p>
                    <div className="mt-6 pt-6 border-t border-purple-500/20">
                      <div className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-amber-400" />
                        <span className="text-gray-300">
                          Skills development
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <ArrowRight className="w-4 h-4 text-amber-400" />
                        <span className="text-gray-300">
                          Cultural transformation
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <ArrowRight className="w-4 h-4 text-amber-400" />
                        <span className="text-gray-300">
                          Continuous learning
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Card 6 - Technology Foundation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full -mr-16 -mt-16 z-0"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-cyan-900/30 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 transform transition-transform group-hover:rotate-6">
                      <Code className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">
                      Technology Foundation
                    </h3>
                    <p className="text-gray-300">
                      A solid technology foundation is essential for success.
                      This includes modern architecture patterns, cloud
                      infrastructure, data platforms, and development practices
                      that enable rapid innovation.
                    </p>
                    <div className="mt-6 pt-6 border-t border-purple-500/20">
                      <div className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-cyan-400" />
                        <span className="text-gray-300">
                          Modern architecture
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <ArrowRight className="w-4 h-4 text-cyan-400" />
                        <span className="text-gray-300">
                          Technical debt reduction
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <ArrowRight className="w-4 h-4 text-cyan-400" />
                        <span className="text-gray-300">
                          Security & compliance
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Getting Started with Digital Transformation */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Getting Started with Digital Transformation
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-4xl mx-auto text-center">
              Embarking on a digital transformation journey can seem daunting,
              especially for organizations with limited digital experience or
              resources. We offer several engagement models to help you get
              started, regardless of your current digital maturity or
              transformation ambitions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Card 1 - Digital Maturity Assessment */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 z-0"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-400 transform transition-transform group-hover:rotate-6">
                        <BarChart className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white">
                          Digital Maturity Assessment
                        </h3>
                        <p className="text-blue-400 font-medium">4-6 weeks</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6">
                      A comprehensive evaluation of your organization's digital
                      capabilities across key dimensions: strategy, culture,
                      customer experience, operations, technology, and data.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          Stakeholder interviews & process reviews
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          Technology assessment & industry benchmarking
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          Detailed maturity report & improvement roadmap
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Card 2 - Digital Transformation Strategy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -mr-16 -mt-16 z-0"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-400 transform transition-transform group-hover:rotate-6">
                        <LineChart className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white">
                          Digital Transformation Strategy
                        </h3>
                        <p className="text-purple-400 font-medium">
                          8-12 weeks
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6">
                      A comprehensive strategy and roadmap for your
                      transformation journey, building on insights from the
                      Digital Maturity Assessment.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          Digital vision & strategic priorities definition
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          Business case development for key initiatives
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          Phased implementation roadmap & governance model
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Card 3 - Digital Quick Wins */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -mr-16 -mt-16 z-0"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-green-900/30 rounded-2xl flex items-center justify-center text-green-400 transform transition-transform group-hover:rotate-6">
                        <Zap className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white">
                          Digital Quick Wins
                        </h3>
                        <p className="text-green-400 font-medium">3-6 months</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6">
                      Identify and implement high-impact, low-complexity digital
                      initiatives that deliver value quickly and build momentum
                      for transformation.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          Opportunity identification & prioritization
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          Agile implementation of selected initiatives
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          Tangible business value & capability building
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Card 4 - Digital Innovation Workshop */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -mr-16 -mt-16 z-0"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-amber-900/30 rounded-2xl flex items-center justify-center text-amber-400 transform transition-transform group-hover:rotate-6">
                        <Laptop className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white">
                          Digital Innovation Workshop
                        </h3>
                        <p className="text-amber-400 font-medium">2-3 days</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6">
                      A facilitated session that helps you explore digital
                      opportunities and develop innovative solutions to business
                      challenges.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          Cross-functional collaboration & design thinking
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          Pain point identification & solution ideation
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          Prioritized concepts & implementation roadmap
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center mt-16"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Digital Transformation Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us to discuss how we can help you navigate the
              complexities of digital transformation and unlock new value for
              your business.
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
