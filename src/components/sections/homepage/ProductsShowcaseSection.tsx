/**
 * ProductsShowcaseSection Component
 * 
 * Displays product cards for Allama and DBLOCK:
 * - Allama: Live product with tagline, features, and "Learn More" CTA
 * - DBLOCK: Coming soon with badge and teaser description
 * 
 * Uses gradient borders and glass morphism styling.
 * 
 * Requirements: 4.1, 4.2, 4.3, 4.4, 4.5
 */

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Sparkles, Shield, Clock } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { SectionHeader } from "@/components/ui/section-header";
import { productsData, type ProductData } from "@/data/homepage";

interface ProductsShowcaseSectionProps {
  data?: ProductData[];
}

const ProductsShowcaseSection: React.FC<ProductsShowcaseSectionProps> = ({
  data = productsData,
}) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900/30 to-black text-white relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-1/4 left-0 w-1/3 h-1/2 bg-purple-900/15 rounded-full filter blur-[150px] -z-10" />
      <div className="absolute bottom-1/4 right-0 w-1/3 h-1/2 bg-blue-900/15 rounded-full filter blur-[150px] -z-10" />

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
            badge="Our Products"
            title="Enterprise-Grade Solutions"
            description="Purpose-built products for security automation and data management, designed for the AI era with open-source foundations."
            alignment="center"
          />
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {data.map((product) => (
            <motion.div key={product.name} variants={itemVariants}>
              <div className="relative h-full group">
                {/* Gradient border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-30 group-hover:opacity-50 blur transition-opacity duration-300" />
                
                <GlassCard
                  variant="default"
                  className="relative h-full flex flex-col bg-gray-900/80"
                >
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {product.status === "live" ? (
                        <Sparkles className="w-5 h-5 text-purple-400" />
                      ) : (
                        <Clock className="w-5 h-5 text-blue-400" />
                      )}
                      <span className="text-sm font-medium text-gray-400">
                        {product.status === "live" ? "Available Now" : "Coming Soon"}
                      </span>
                    </div>
                    {product.status === "coming-soon" && (
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        Coming Soon
                      </span>
                    )}
                  </div>

                  {/* Product Name */}
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {product.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-lg text-purple-400 mb-4 font-medium">
                    {product.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                    {product.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-300"
                      >
                        <div className="w-6 h-6 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-purple-400" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link to={product.href}>
                    <GradientButton
                      variant={product.status === "live" ? "primary" : "secondary"}
                      size="lg"
                      className="w-full"
                      rightIcon={<ArrowRight className="h-5 w-5" />}
                    >
                      {product.ctaLabel}
                    </GradientButton>
                  </Link>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Open Source Foundation</span>
            </div>
            <div className="w-px h-4 bg-gray-700 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Enterprise Support Available</span>
            </div>
            <div className="w-px h-4 bg-gray-700 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Self-Hosted or Cloud</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsShowcaseSection;
