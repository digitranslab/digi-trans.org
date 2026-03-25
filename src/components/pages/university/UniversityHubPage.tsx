/**
 * UniversityHubPage Component — Premium Redesign
 * 
 * Main landing page for the University learning hub.
 * Premium visual language matching MegamindPage/ServicePageTemplate.
 */

import { useState } from "react";
import { Link } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import { Search, ArrowRight, Youtube, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GradientButton } from "@/components/ui/gradient-button";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { ContentCard } from "@/components/ui/content-card";
import { Input } from "@/components/ui/input";
import { TypewriterGradientText } from "@/components/ui/typewriter-text";
import { categories, getFeaturedContent, searchContent } from "@/data/university";

const getIcon = (iconName: string) => {
  const Icon = (LucideIcons as any)[iconName];
  return Icon ? <Icon className="w-6 h-6" /> : null;
};

const UniversityHubPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const featuredContent = getFeaturedContent();
  const searchResults = searchQuery ? searchContent(searchQuery) : [];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main>
        {/* ═══════════════════════════════════════════
            HERO — Immersive gradient with floating orbs
            ═══════════════════════════════════════════ */}
        <section className="relative pt-36 pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-950/40 via-black/80 to-black" />
            <div className="absolute top-20 left-[10%] w-72 h-72 bg-purple-600/15 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute top-40 right-[15%] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1.5s" }} />
            <div className="absolute bottom-20 left-[30%] w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "3s" }} />
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: "linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }} />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedWrapper animation="fade-up-slow" className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" />
                Digitrans University
              </span>
              <TypewriterGradientText text="Learn AI & Security Automation" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" duration={1.8} />
              <p className="text-lg md:text-xl text-gray-300/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Free tutorials, demos, and tech talks to help you master modern security operations and data engineering.
              </p>
              <GradientButton size="lg" asChild>
                <a href="https://youtube.com/@digitrans" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-5 h-5 mr-2" />
                  Subscribe on YouTube
                </a>
              </GradientButton>
            </AnimatedWrapper>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
        </section>

        {/* Search Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <Input
                type="text"
                placeholder="Search tutorials, demos, and talks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-gray-900/50 border-gray-800 text-white placeholder:text-gray-600 rounded-xl"
              />
            </div>
            
            {searchQuery && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-white mb-4">
                  {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} for "{searchQuery}"
                </h3>
                {searchResults.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {searchResults.map((content) => (
                      <ContentCard key={content.id} content={content} />
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No content found. Try a different search term.</p>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Featured Content */}
        {!searchQuery && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <SectionHeader badge="Featured" title="Popular Content" description="Our most watched tutorials and talks." alignment="center" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
                {featuredContent.map((content, i) => (
                  <AnimatedWrapper key={content.id} animation="float-up" delay={i * 0.08}>
                    <ContentCard content={content} />
                  </AnimatedWrapper>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Categories */}
        {!searchQuery && (
          <section className="py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-transparent" />
            <div className="container mx-auto px-4 relative z-10">
              <SectionHeader badge="Browse" title="Content Categories" description="Explore content by type." alignment="center" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
                {categories.map((category, i) => (
                  <AnimatedWrapper key={category.slug} animation="scale-in" delay={i * 0.06}>
                    <Link to={`/university/${category.slug}`} className="group block">
                      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 text-center h-full">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-400 mx-auto mb-4">
                          {getIcon(category.icon)}
                        </div>
                        <h3 className="text-base font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{category.title}</h3>
                        <p className="text-sm text-gray-500 mb-4">{category.description}</p>
                        <span className="text-purple-400 text-sm flex items-center justify-center gap-1.5">
                          Browse <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </Link>
                  </AnimatedWrapper>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/30 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-[20%] w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-[20%] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedWrapper animation="fade-up-slow" className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
                Want to Learn More?
              </h2>
              <p className="text-lg text-gray-400 mb-10">Subscribe to our YouTube channel for weekly tutorials and tech talks.</p>
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
