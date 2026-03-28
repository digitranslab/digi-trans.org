/**
 * LiveDemosPage — Shows both Tutorials and Live Demos merged.
 */

import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowLeft, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { ContentCard } from "@/components/ui/content-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { TypewriterGradientText } from "@/components/ui/typewriter-text";
import { HeroBackground } from "@/components/ui/hero-background";
import { contentItems, searchContent } from "@/data/university";

const LiveDemosPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const allContent = contentItems.filter(
    (item) => item.category === "tutorials" || item.category === "live-demos"
  );

  const filteredContent = searchQuery
    ? searchContent(searchQuery).filter(
        (item) => item.category === "tutorials" || item.category === "live-demos"
      )
    : allContent;

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <section className="relative pt-36 pb-24 overflow-hidden">
          <HeroBackground />
          <div className="relative container mx-auto px-4">
            <AnimatedWrapper animation="fade-up-slow" className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" />
                University
              </span>
              <TypewriterGradientText text="Tutorials & Live Demos" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" duration={1.8} />
              <p className="text-xl text-gray-300/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Step-by-step guides, video tutorials, and recorded product demonstrations.
              </p>
              <Link to="/university" className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-2 text-sm transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to University
              </Link>
            </AnimatedWrapper>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <AnimatedWrapper animation="fade-up" delay={0.1}>
              <div className="max-w-xl mb-12 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search tutorials and demos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-11 pl-12 pr-4 bg-gray-900/50 border border-gray-800/50 text-white placeholder:text-gray-600 rounded-xl focus:outline-none focus:border-purple-500/50 transition-colors"
                />
              </div>
            </AnimatedWrapper>

            <p className="text-gray-500 mb-6 text-sm">
              {filteredContent.length} {filteredContent.length === 1 ? "item" : "items"}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>

            {filteredContent.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredContent.map((content, i) => (
                  <AnimatedWrapper key={content.id} animation="fade-up" delay={i * 0.05}>
                    <ContentCard content={content} />
                  </AnimatedWrapper>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-500 mb-6">No content found.</p>
                <GradientButton variant="secondary" asChild>
                  <Link to="/university">Browse All Content</Link>
                </GradientButton>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LiveDemosPage;
