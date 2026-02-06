/**
 * PageHero Component
 * 
 * Reusable hero section for inner pages.
 * Supports headline, subheadline, badge, and optional breadcrumbs.
 * Applies consistent styling with the design system.
 * 
 * Requirements: 11.2
 */

import React from "react";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import Breadcrumbs from "@/components/Breadcrumbs";

interface PageHeroProps {
  badge?: string;
  title: string;
  description?: string;
  showBreadcrumbs?: boolean;
  children?: React.ReactNode;
}

export function PageHero({ 
  badge, 
  title, 
  description, 
  showBreadcrumbs = true,
  children 
}: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {showBreadcrumbs && (
          <div className="mb-6">
            <Breadcrumbs />
          </div>
        )}
        
        <AnimatedWrapper animation="fade-up" className="max-w-4xl">
          {badge && (
            <span className="inline-block mb-4 px-4 py-1.5 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30">
              {badge}
            </span>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            {title}
          </h1>
          
          {description && (
            <p className="text-xl text-gray-300 max-w-2xl">
              {description}
            </p>
          )}
          
          {children}
        </AnimatedWrapper>
      </div>
    </section>
  );
}

export default PageHero;
