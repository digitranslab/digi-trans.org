/**
 * ContentListPage Component — Premium Redesign
 * 
 * Template for category-specific content listing pages.
 * Premium visual language matching the rest of the site.
 */

import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowLeft, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { ContentCard } from "@/components/ui/content-card";
import { Input } from "@/components/ui/input";
import { GradientButton } from "@/components/ui/gradient-button";
import { TypewriterGradientText } from "@/components/ui/typewriter-text";
import { 
  getContentByCategory, 
  searchContent, 
  type ContentCategory, 
  categories 
} from "@/data/university";

interface ContentListPageProps {
  category: ContentCategory;
}

export function ContentListPage({ category }: ContentListPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const categoryInfo = categories.find((c) => c.slug === category);
  const allContent = getContentByCategory(category);
  
  const filteredContent = searchQuery
    ? searchContent(searchQuery).filter((item) => item.category === category)
    : allContent;

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main>
        {/* ═══════════════════════════════════════════
            HERO — Compact with floating orbs
            ═══════════════════════════════════════════ */}
        <section className="relative pt-36 pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-950/40 via-black/80 to-black" />
            <div className="absolute top-20 left-[10%] w-72 h-72 bg-purple-600/15 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute top-40 right-[15%] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1.5s" }} />
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: "linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }} />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedWrapper animation="fade-up-slow" className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" />
                University
              </span>
              <TypewriterGradientText text={categoryInfo?.title || "Content"} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" duration={1.8} />
              {categoryInfo?.description && (
                <p className="text-lg text-gray-300/90 mb-8 max-w-3xl mx-auto leading-relaxed">{categoryInfo.description}</p>
              )}
              <Link to="/university" className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-2 text-sm transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to University
              </Link>
            </AnimatedWrapper>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
        </section>

        {/* Search and Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mb-12 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <Input
                type="text"
                placeholder={`Search ${categoryInfo?.title.toLowerCase()}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-gray-900/50 border-gray-800 text-white placeholder:text-gray-600 rounded-xl"
              />
            </div>

            <p className="text-gray-500 mb-6 text-sm">
              {filteredContent.length} {filteredContent.length === 1 ? "item" : "items"}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>

            {filteredContent.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredContent.map((content, i) => (
                  <AnimatedWrapper key={content.id} animation="float-up" delay={i * 0.04}>
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
}

export default ContentListPage;
