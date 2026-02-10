/**
 * WhyDigitransSection Component
 * 
 * Displays five key differentiators with supporting proof points:
 * - AI-Native Approach
 * - Security-First Architecture
 * - Expert Team
 * - Open Source Foundation
 * - Rapid Time-to-Value
 * 
 * Each differentiator includes a metric/statistic where applicable.
 * Uses visual elements to highlight key numbers and achievements.
 * Maintains dark theme with purple/blue gradient accents.
 * 
 * Requirements: 6.1, 6.2, 6.3, 6.4
 */

import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  Shield, 
  Users, 
  GitBranch, 
  Clock,
  TrendingUp
} from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { differentiatorsData, type DifferentiatorData } from "@/data/homepage";

interface WhyDigitransSectionProps {
  data?: DifferentiatorData[];
}

// Icon mapping for dynamic icon rendering
const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  GitBranch: <GitBranch className="w-6 h-6" />,
  Clock: <Clock className="w-6 h-6" />,
};

const WhyDigitransSection: React.FC<WhyDigitransSectionProps> = ({
  data = differentiatorsData,
}) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const metricVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900/30 to-black text-white relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-1/3 left-0 w-1/2 h-1/2 bg-purple-900/15 rounded-full filter blur-[150px] -z-10" />
      <div className="absolute bottom-1/3 right-0 w-1/2 h-1/2 bg-blue-900/15 rounded-full filter blur-[150px] -z-10" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionHeader
            badge="Why Choose Us"
            title="The Digitrans Difference"
            description="We combine deep technical expertise with a proven methodology to deliver transformative results for our clients."
            alignment="center"
          />
        </motion.div>

        {/* Differentiators Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {data.map((differentiator, index) => (
            <motion.div 
              key={differentiator.title} 
              variants={itemVariants}
              className={index === data.length - 1 && data.length % 3 === 1 ? "lg:col-start-2" : ""}
            >
              <GlassCard
                variant="default"
                className="h-full flex flex-col group hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-purple-500/30 flex-shrink-0 group-hover:border-purple-400/50 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all duration-300">
                    <div className="text-purple-300 group-hover:text-purple-200 transition-colors">
                      {iconMap[differentiator.icon] || <Zap className="w-6 h-6" />}
                    </div>
                  </div>

                  {/* Metric Badge (if available) */}
                  {differentiator.metric && (
                    <motion.div
                      variants={metricVariants}
                      className="ml-auto flex flex-col items-end"
                    >
                      <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        {differentiator.metric.value}
                      </span>
                      <span className="text-xs text-gray-500">
                        {differentiator.metric.label}
                      </span>
                    </motion.div>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {differentiator.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 flex-grow group-hover:text-gray-300 transition-colors">
                  {differentiator.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Summary Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="max-w-4xl mx-auto">
            <GlassCard variant="gradient" className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="w-5 h-5 text-purple-400 mr-2" />
                    <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      300%
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">Average ROI</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-5 h-5 text-purple-400 mr-2" />
                    <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      50+
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">Enterprise Clients</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Zap className="w-5 h-5 text-purple-400 mr-2" />
                    <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      200+
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">AI Models Deployed</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Shield className="w-5 h-5 text-purple-400 mr-2" />
                    <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      99.9%
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">Uptime SLA</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyDigitransSection;
