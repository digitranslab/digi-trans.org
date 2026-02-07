import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UniverseLights from "./UniverseLights";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { GradientButton } from "./ui/gradient-button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { BarChart, Cloud, Bot, AppWindow, ArrowRight } from "lucide-react";

interface ServiceCardStory {
  title: string;
  description: string;
  metrics: string[];
}

interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  story?: ServiceCardStory;
}

interface HeroProps {
  headline?: string;
  subheadline?: string;
  serviceCards?: ServiceCard[];
  videoUrl?: string;
  onRegisterInterest?: () => void;
  showCards?: boolean;
  showBookCallButton?: boolean;
}

const defaultServiceCards: ServiceCard[] = [
  {
    title: "Big Data Architecture",
    description: "Medallion architecture, lakehouses, and real-time streaming",
    icon: <BarChart className="w-12 h-12 text-white" />,
    story: {
      title: "Modern Data Platform Excellence",
      description:
        "We design and implement enterprise-grade data platforms using medallion architecture (Bronze-Silver-Gold), data lakehouses, and real-time streaming. Our solutions process petabytes of data with sub-second query performance.",
      metrics: [
        "10x Faster Queries",
        "45% Cost Reduction",
        "99.9% Uptime",
      ],
    },
  },
  {
    title: "Agentic AI for Data",
    description: "Autonomous AI agents for self-healing data pipelines",
    icon: <Bot className="w-12 h-12 text-white" />,
    story: {
      title: "Intelligent Data Operations",
      description:
        "Deploy AI agents that autonomously monitor, diagnose, and repair data pipelines. Our agentic systems handle 90% of incidents without human intervention, continuously improving data quality and metadata management.",
      metrics: [
        "90% Auto-Resolution",
        "70% Ops Reduction",
        "24/7 Autonomous",
      ],
    },
  },
  {
    title: "AI & Data Consulting",
    description: "Strategic advisory for data-driven transformation",
    icon: <Cloud className="w-12 h-12 text-white" />,
    story: {
      title: "Strategic Data Leadership",
      description:
        "Expert guidance on enterprise data strategy, AI roadmaps, governance frameworks, and organizational transformation. We help you turn data into competitive advantage with measurable ROI.",
      metrics: [
        "3-5x ROI",
        "200+ Engagements",
        "98% Satisfaction",
      ],
    },
  },
  {
    title: "Products & Platforms",
    description: "Allama AI automation and DBLOCK data platform",
    icon: <AppWindow className="w-12 h-12 text-white" />,
    story: {
      title: "Enterprise AI Products",
      description:
        "Our flagship products—Allama for AI workflow automation and DBLOCK for next-gen data applications—accelerate your AI journey with production-ready platforms built on open standards.",
      metrics: [
        "Open Source",
        "Enterprise Ready",
        "Rapid Deployment",
      ],
    },
  },
];

const Hero = ({
  headline:
    initialHeadline = "Enterprise Data & AI Platform Solutions",
  subheadline = "Transform your data infrastructure with modern architecture, autonomous AI agents, and strategic consulting. We build intelligent data platforms that scale from gigabytes to petabytes.",
  serviceCards = defaultServiceCards,
  videoUrl = "/videos/financial-ai.mp4",
  onRegisterInterest = () => {},
  showCards = true,
  showBookCallButton = false,
}: HeroProps) => {
  const navigate = useNavigate();
  const [headline, setHeadline] = React.useState<string | JSX.Element>(
    initialHeadline,
  );
  const [selectedCard, setSelectedCard] = React.useState<ServiceCard | null>(
    null,
  );

  React.useEffect(() => {
    // Only run the headline animation on the home page
    if (
      initialHeadline ===
      "Enterprise Data & AI Solutions for Digital Transformation"
    ) {
      const interval = setInterval(() => {
        setHeadline((current) => {
          if (
            typeof current === "string" &&
            current ===
              "On-demand Technical Team for SaaS Products and Midsize Businesses"
          ) {
            return (
              <>
                Not just a Vendor.{" "}
                <span className="relative">
                  <span className="text-yellow-400">Your Partner</span>
                  <svg
                    className="absolute w-full -bottom-6 left-0"
                    viewBox="0 0 100 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,12 Q50,0 100,12"
                      stroke="rgba(252, 211, 77, 0.5)"
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                </span>
              </>
            );
          }
          return "On-demand Technical Team for SaaS Products and Midsize Businesses";
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [initialHeadline]);

  return (
    <div className="relative w-full h-[800px] bg-black overflow-hidden pt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source
          src={
            videoUrl ||
            "https://cdn.coverr.co/videos/coverr-an-aerial-view-of-a-business-district-1573/1080p.mp4"
          }
          type="video/mp4"
        />
      </video>
      <UniverseLights />

      {/* Add subtle particle effects */}
      <div className="absolute inset-0 z-5 opacity-40 pointer-events-none">
        <div className="absolute h-3 w-3 rounded-full bg-purple-500 animate-float-slow left-[10%] top-[20%]"></div>
        <div className="absolute h-4 w-4 rounded-full bg-blue-500 animate-float-medium left-[20%] top-[50%]"></div>
        <div className="absolute h-2 w-2 rounded-full bg-indigo-500 animate-float-fast left-[30%] top-[70%]"></div>
        <div className="absolute h-5 w-5 rounded-full bg-purple-500/50 animate-float-slow left-[70%] top-[15%]"></div>
        <div className="absolute h-2 w-2 rounded-full bg-blue-500/50 animate-float-medium left-[80%] top-[35%]"></div>
        <div className="absolute h-3 w-3 rounded-full bg-indigo-500/50 animate-float-fast left-[90%] top-[60%]"></div>
      </div>

      {/* Financial AI tagline - repositioned and enlarged */}
      <div className="relative z-20 w-full text-center pt-12 pb-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl lg:text-6xl tracking-wider text-violet-300 font-bold uppercase leading-tight mb-2"
        >
          Modern Data Platforms<br />
          Powered by AI
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-start items-center text-center pt-3">
        {/* Remove headline and divider - directly show paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-200 mb-6 max-w-3xl leading-relaxed"
        >
          {subheadline}
        </motion.p>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-6 mb-8 text-sm text-gray-300"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>ISO 27001 Certified</span>
          </div>
          <div className="w-px h-4 bg-gray-600"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>SOC 2 Compliant</span>
          </div>
          <div className="w-px h-4 bg-gray-600"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>GDPR Ready</span>
          </div>
          <div className="w-px h-4 bg-gray-600"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>AWS Partner</span>
          </div>
        </motion.div>

        {/* CTA buttons with improved styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <GradientButton
            size="lg"
            onClick={() => window.open("/contact", "_self")}
            rightIcon={<ArrowRight className="h-5 w-5" />}
          >
            Start Your Project
          </GradientButton>
          
          <GradientButton
            size="lg"
            variant="secondary"
            onClick={() => navigate("/contact")}
            rightIcon={<ArrowRight className="h-5 w-5" />}
          >
            Schedule a Demo
          </GradientButton>
        </motion.div>

        {showCards && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-full max-w-7xl"
          >
            {serviceCards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full"
              >
                <Card
                  className="py-3 px-4 bg-gradient-to-br from-purple-900/40 to-indigo-950/30 backdrop-blur-md border border-purple-500/25 hover:border-purple-400/40 transition-all duration-300 ease-in-out cursor-pointer transform hover:shadow-[0_5px_15px_-5px_rgba(167,139,250,0.3)] group"
                  onClick={() => setSelectedCard(card)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-br from-purple-700/30 to-violet-800/30 p-2.5 rounded-lg">
                        {card.icon}
                      </div>
                      <h3 className="text-base font-medium text-white ml-3">
                        {card.title}
                      </h3>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-300/80 group-hover:text-purple-300 transition-colors" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {showBookCallButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <GradientButton
              size="lg"
              onClick={() => navigate("/contact")}
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              <span className="animate-pulse bg-white rounded-full w-2 h-2 mr-2"></span>
              Book a 30-min Call with our CEO
            </GradientButton>
          </motion.div>
        )}
      </div>

      {/* Enhanced dialog styling */}
      <Dialog open={!!selectedCard} onOpenChange={() => setSelectedCard(null)}>
        <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-gray-900 to-gray-950 text-white border border-blue-800/30 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
          {selectedCard?.story && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  {selectedCard.story.title}
                </DialogTitle>
                <DialogDescription className="text-gray-300 mt-4 text-base">
                  {selectedCard.story.description}
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-3 gap-4 mt-6">
                {selectedCard.story.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-lg border border-blue-800/30"
                  >
                    <p className="text-purple-300 font-bold">{metric}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-purple-500/20">
                <GradientButton
                  className="w-full"
                  onClick={() => {
                    setSelectedCard(null);
                    window.open("/contact", "_self");
                  }}
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Learn More About This Solution
                </GradientButton>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Hero;
