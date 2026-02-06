import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { GradientButton } from "../ui/gradient-button";
import {
  ArrowRight,
  Database,
  Cloud,
  Bot,
  Shield,
  LineChart,
  Zap,
} from "lucide-react";
import UniverseLights from "../UniverseLights";

const solutions = [
  {
    title: "Big Data Analytics",
    description:
      "Transform your data into actionable insights with our enterprise-grade analytics solutions designed for massive scale and performance.",
    icon: <Database className="w-12 h-12 text-blue-500" />,
    link: "/services/big-data-analytics",
  },
  {
    title: "Cloud Computing",
    description:
      "Accelerate your digital transformation with secure, scalable, and cost-effective cloud solutions tailored to your business needs.",
    icon: <Cloud className="w-12 h-12 text-blue-500" />,
    link: "/services/cloud-computing",
  },
  {
    title: "AI Solutions",
    description:
      "Leverage the power of artificial intelligence and machine learning to automate processes, enhance decision-making, and create new business opportunities.",
    icon: <Bot className="w-12 h-12 text-blue-500" />,
    link: "/services/ai-solutions",
  },
  {
    title: "Data Security",
    description:
      "Protect your valuable data assets with our comprehensive security solutions designed for the modern threat landscape.",
    icon: <Shield className="w-12 h-12 text-blue-500" />,
    link: "/services/data-security",
  },
  {
    title: "Digital Transformation",
    description:
      "Transform your business with cutting-edge digital solutions and strategies that drive innovation, efficiency, and competitive advantage.",
    icon: <Zap className="w-12 h-12 text-blue-500" />,
    link: "/solutions/digital-transformation",
  },
  {
    title: "Enterprise Solutions",
    description:
      "Streamline operations, enhance collaboration, and drive growth with our custom enterprise software solutions built for your specific business challenges.",
    icon: <LineChart className="w-12 h-12 text-blue-500" />,
    link: "/solutions/enterprise-solutions",
  },
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="relative w-full h-[600px] bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInLine
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/videos/services.mp4" type="video/mp4" />
        </video>
        <UniverseLights />

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Our Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl"
          >
            Comprehensive enterprise technology solutions designed to solve your
            most complex business challenges
          </motion.p>
        </div>
      </div>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 flex flex-col">
                  <div className="mb-6">{solution.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white text-left">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 mb-6 flex-grow text-left">
                    {solution.description}
                  </p>
                  <GradientButton
                    className="w-full"
                    onClick={() => (window.location.href = solution.link)}
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                  >
                    Learn More
                  </GradientButton>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Not Sure Which Solution You Need?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-center">
              Our experts can help you identify the right solutions for your
              specific business challenges. Schedule a consultation to discuss
              your needs.
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
    </div>
  );
}
