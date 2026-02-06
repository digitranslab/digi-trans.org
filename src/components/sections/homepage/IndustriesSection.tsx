/**
 * IndustriesSection Component
 * 
 * Displays five industry verticals:
 * - Financial Services
 * - Healthcare
 * - Technology
 * - Retail
 * - Government
 * 
 * Each card shows an industry-specific icon and value proposition.
 * Links to corresponding solution pages with responsive grid layout.
 * 
 * Requirements: 5.1, 5.2, 5.3, 5.4
 */

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Building2, 
  Heart, 
  Cpu, 
  ShoppingCart, 
  Landmark, 
  ArrowRight 
} from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { industriesData, type IndustryData } from "@/data/homepage";

interface IndustriesSectionProps {
  data?: IndustryData[];
}

// Icon mapping for dynamic icon rendering
const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-8 h-8" />,
  Heart: <Heart className="w-8 h-8" />,
  Cpu: <Cpu className="w-8 h-8" />,
  ShoppingCart: <ShoppingCart className="w-8 h-8" />,
  Landmark: <Landmark className="w-8 h-8" />,
};

const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  data = industriesData,
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

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 right-1/4 w-1/2 h-1/2 bg-purple-900/10 rounded-full filter blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-blue-900/10 rounded-full filter blur-[120px] -z-10" />

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
            badge="Industries We Serve"
            title="Solutions for Every Sector"
            description="Deep expertise across industries with tailored solutions that address sector-specific challenges and compliance requirements."
            alignment="center"
          />
        </motion.div>

        {/* Industries Grid - Responsive layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto"
        >
          {data.map((industry, index) => (
            <motion.div key={industry.name} variants={itemVariants}>
              <Link to={industry.href} className="block h-full group">
                <GlassCard
                  variant="hover"
                  className="h-full flex flex-col items-center text-center cursor-pointer p-6"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-purple-500/30 group-hover:border-purple-400/50 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300">
                    <motion.div
                      className="text-purple-300 group-hover:text-purple-200 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {iconMap[industry.icon] || <Building2 className="w-8 h-8" />}
                    </motion.div>
                  </div>

                  {/* Industry Name */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {industry.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-4 flex-grow group-hover:text-gray-300 transition-colors">
                    {industry.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors mt-auto">
                    <span>Explore</span>
                    <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">
            Don't see your industry? We work with businesses across all sectors.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors"
          >
            <span>Contact us to discuss your needs</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
