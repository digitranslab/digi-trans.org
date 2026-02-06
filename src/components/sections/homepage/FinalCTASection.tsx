/**
 * FinalCTASection Component
 * 
 * The final call-to-action section at the end of the homepage:
 * - Compelling headline encouraging engagement
 * - Two CTAs: "Schedule Consultation" and "Explore Products"
 * - "Schedule Consultation" navigates to /contact
 * - "Explore Products" navigates to /products/allama
 * 
 * Requirements: 8.1, 8.2, 8.3, 8.4
 */

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Package } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { finalCTAData } from "@/data/homepage";

interface FinalCTASectionProps {
  headline?: string;
  subheadline?: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
}

const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  headline = finalCTAData.headline,
  subheadline = finalCTAData.subheadline,
  primaryCTA = finalCTAData.primaryCTA,
  secondaryCTA = finalCTAData.secondaryCTA,
}) => {
  const navigate = useNavigate();

  const handlePrimaryCTA = () => {
    navigate("/contact");
  };

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-black to-black" />
      <div className="absolute top-0 left-1/4 w-1/2 h-full bg-purple-900/20 rounded-full filter blur-[200px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-1/2 h-full bg-blue-900/20 rounded-full filter blur-[200px] -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-600/30 to-blue-600/30 border border-purple-500/30 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse" />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {headline}
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            {subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <GradientButton
              size="lg"
              onClick={handlePrimaryCTA}
              leftIcon={<Calendar className="h-5 w-5" />}
              rightIcon={<ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />}
              className="group"
            >
              {primaryCTA.label}
            </GradientButton>

            <Link to={secondaryCTA.href}>
              <GradientButton
                variant="secondary"
                size="lg"
                leftIcon={<Package className="h-5 w-5" />}
                rightIcon={<ArrowRight className="h-5 w-5" />}
              >
                {secondaryCTA.label}
              </GradientButton>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500"
          >
            <span>✓ Free consultation</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ No commitment required</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ Response within 24 hours</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
