/**
 * HeroSection Component
 * 
 * The main hero section for the homepage displaying:
 * - Headline "AI & Data Solutions That Transform Business"
 * - Two CTAs: "Schedule Consultation" and "Explore Products"
 * - Trust badges with key metrics
 * - Staggered entrance animations using Framer Motion
 * 
 * Requirements: 2.1, 2.2, 2.3, 2.4, 2.5
 */

import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { heroData, type HeroData, type TrustBadge } from "@/data/homepage";

interface HeroSectionProps {
  data?: HeroData;
}

const HeroSection: React.FC<HeroSectionProps> = ({ data = heroData }) => {
  const navigate = useNavigate();

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handlePrimaryCTA = () => {
    navigate("/contact");
  };

  return (
    <section className="relative min-h-[90vh] bg-black overflow-hidden flex items-center">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-purple-900/20 rounded-full filter blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-blue-900/20 rounded-full filter blur-[150px]" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute h-3 w-3 rounded-full bg-purple-500 animate-pulse left-[10%] top-[20%]" />
        <div className="absolute h-4 w-4 rounded-full bg-blue-500 animate-pulse left-[20%] top-[50%]" style={{ animationDelay: "0.5s" }} />
        <div className="absolute h-2 w-2 rounded-full bg-indigo-500 animate-pulse left-[30%] top-[70%]" style={{ animationDelay: "1s" }} />
        <div className="absolute h-5 w-5 rounded-full bg-purple-500/50 animate-pulse left-[70%] top-[15%]" style={{ animationDelay: "0.3s" }} />
        <div className="absolute h-2 w-2 rounded-full bg-blue-500/50 animate-pulse left-[80%] top-[35%]" style={{ animationDelay: "0.7s" }} />
        <div className="absolute h-3 w-3 rounded-full bg-indigo-500/50 animate-pulse left-[90%] top-[60%]" style={{ animationDelay: "1.2s" }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              AI-Powered Enterprise Solutions
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {data.headline}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            {data.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <GradientButton
              size="lg"
              onClick={handlePrimaryCTA}
              rightIcon={<ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />}
              className="group"
            >
              {data.primaryCTA.label}
            </GradientButton>
            
            <Link to={data.secondaryCTA.href}>
              <GradientButton
                variant="secondary"
                size="lg"
                rightIcon={<ArrowRight className="h-5 w-5" />}
              >
                {data.secondaryCTA.label}
              </GradientButton>
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-6 md:gap-10"
          >
            {data.trustBadges.map((badge: TrustBadge, index: number) => (
              <div
                key={index}
                className="flex flex-col items-center"
              >
                <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {badge.value}
                </span>
                <span className="text-sm text-gray-400">{badge.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Trust signals row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-6 mt-12 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="w-px h-4 bg-gray-700 hidden sm:block" />
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>SOC 2 Compliant</span>
            </div>
            <div className="w-px h-4 bg-gray-700 hidden sm:block" />
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>GDPR Ready</span>
            </div>
            <div className="w-px h-4 bg-gray-700 hidden sm:block" />
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>AWS Partner</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
