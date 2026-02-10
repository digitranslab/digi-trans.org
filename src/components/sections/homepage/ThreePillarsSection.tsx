/**
 * ThreePillarsSection Component
 * 
 * Displays the three core pillars of Digitrans:
 * - Consulting
 * - Engineering
 * - Products
 * 
 * Each pillar shows an icon, title, description, features, and link.
 * Uses GlassCard styling with hover effects.
 * 
 * Requirements: 3.1, 3.2, 3.3, 3.4
 */

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Lightbulb, Code, Package, ArrowRight, CheckCircle } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { pillarsData, type PillarData } from "@/data/homepage";

interface ThreePillarsSectionProps {
  data?: PillarData[];
}

// Icon mapping for dynamic icon rendering
const iconMap: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb className="w-8 h-8" />,
  Code: <Code className="w-8 h-8" />,
  Package: <Package className="w-8 h-8" />,
};

const ThreePillarsSection: React.FC<ThreePillarsSectionProps> = ({ 
  data = pillarsData 
}) => {
  // Animation variants
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
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-purple-900/10 rounded-full filter blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-blue-900/10 rounded-full filter blur-[120px] -z-10" />

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
            badge="What We Do"
            title="Three Pillars of Excellence"
            description="From strategic consulting to hands-on engineering and enterprise products, we provide end-to-end solutions for your AI and data transformation journey."
            alignment="center"
          />
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {data.map((pillar, index) => (
            <motion.div key={pillar.title} variants={itemVariants}>
              <Link to={pillar.href} className="block h-full group">
                <GlassCard
                  variant="hover"
                  className="h-full flex flex-col cursor-pointer"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-purple-500/30 group-hover:border-purple-400/50 transition-colors">
                    <motion.div
                      className="text-purple-300 group-hover:text-purple-200 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {iconMap[pillar.icon] || <Lightbulb className="w-8 h-8" />}
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 flex-grow group-hover:text-gray-300 transition-colors">
                    {pillar.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {pillar.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
                      >
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors mt-auto">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ThreePillarsSection;
