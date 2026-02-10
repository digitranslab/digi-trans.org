/**
 * UniversityHubPage Component
 * 
 * Main landing page for the University learning hub.
 * Shows featured content and category navigation.
 * 
 * Requirements: 13.1, 13.2, 13.5
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import { Search, ArrowRight, Youtube } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/sections/shared/PageHero";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { ContentCard } from "@/components/ui/content-card";
import { Input } from "@/components/ui/input";
import { categories, getFeaturedContent, searchContent, type ContentItem } from "@/data/university";

// Helper to get Lucide icon by name
const getIcon = (iconName: string) => {
  const Icon = (LucideIcons as any)[iconName];
  return Icon ? <Icon className="w-6 h-6" /> : null;
};

const UniversityHubPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const featuredContent = getFeaturedContent();
  const searchResults = searchQuery ? searchContent(searchQuery) : [];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <PageHero
          badge="Digitrans University"
          title="Learn AI & Security Automation"
          description="Free tutorials, demos, and tech talks to help you master modern security operations and data engineering."
        >
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <GradientButton size="lg" asChild>
              <a href="https://youtube.com/@digitrans" target="_blank" rel="noopener noreferrer">
                <Youtube className="w-5 h-5 mr-2" />
                Subscribe on YouTube
              </a>
            </GradientButton>
          </div>
        </PageHero>

        {/* Search Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search tutorials, demos, and talks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500"
              />
            </div>
            
            {/* Search Results */}
            {searchQuery && (
              <div className="mt-8">
                <h3 className="text-lg font-bold text-white mb-4">
                  {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} for "{searchQuery}"
                </h3>
                {searchResults.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {searchResults.map((content) => (
                      <ContentCard key={content.id} content={content} />
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400">No content found. Try a different search term.</p>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Featured Content Section */}
        {!searchQuery && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <SectionHeader
                badge="Featured"
                title="Popular Content"
                description="Our most watched tutorials and talks."
                alignment="center"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {featuredContent.map((content, index) => (
                  <AnimatedWrapper key={content.id} animation="fade-up" delay={index * 0.1}>
                    <ContentCard content={content} />
                  </AnimatedWrapper>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Categories Section */}
        {!searchQuery && (
          <section className="py-16 bg-gray-900/30">
            <div className="container mx-auto px-4">
              <SectionHeader
                badge="Browse"
                title="Content Categories"
                description="Explore content by type."
                alignment="center"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {categories.map((category, index) => (
                  <AnimatedWrapper key={category.slug} animation="fade-up" delay={index * 0.1}>
                    <Link to={`/university/${category.slug}`}>
                      <GlassCard variant="hover" className="h-full p-6 text-center">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400 inline-block mb-4">
                          {getIcon(category.icon)}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{category.title}</h3>
                        <p className="text-sm text-gray-400 mb-4">{category.description}</p>
                        <span className="text-purple-400 text-sm flex items-center justify-center gap-1">
                          Browse <ArrowRight className="w-4 h-4" />
                        </span>
                      </GlassCard>
                    </Link>
                  </AnimatedWrapper>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AnimatedWrapper animation="fade-up" className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Want to Learn More?
              </h2>
              <p className="text-gray-400 mb-8">
                Subscribe to our YouTube channel for weekly tutorials and tech talks.
              </p>
              <GradientButton size="lg" asChild>
                <a href="https://youtube.com/@digitrans" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-5 h-5 mr-2" />
                  Subscribe Now
                </a>
              </GradientButton>
            </AnimatedWrapper>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default UniversityHubPage;
