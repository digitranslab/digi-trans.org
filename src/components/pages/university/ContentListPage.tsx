/**
 * ContentListPage Component
 * 
 * Template for category-specific content listing pages.
 * Shows filtered content with search functionality.
 * 
 * Requirements: 13.4, 13.5
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/sections/shared/PageHero";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { ContentCard } from "@/components/ui/content-card";
import { Input } from "@/components/ui/input";
import { GradientButton } from "@/components/ui/gradient-button";
import { 
  getContentByCategory, 
  searchContent, 
  type ContentCategory, 
  type ContentItem,
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
        {/* Hero Section */}
        <PageHero
          badge="University"
          title={categoryInfo?.title || "Content"}
          description={categoryInfo?.description}
        >
          <div className="mt-6">
            <Link to="/university" className="text-purple-400 hover:text-purple-300 flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to University
            </Link>
          </div>
        </PageHero>

        {/* Search and Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Search */}
            <div className="max-w-xl mb-12 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder={`Search ${categoryInfo?.title.toLowerCase()}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500"
              />
            </div>

            {/* Results count */}
            <p className="text-gray-400 mb-6">
              {filteredContent.length} {filteredContent.length === 1 ? "item" : "items"}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>

            {/* Content Grid */}
            {filteredContent.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredContent.map((content, index) => (
                  <AnimatedWrapper key={content.id} animation="fade-up" delay={index * 0.05}>
                    <ContentCard content={content} />
                  </AnimatedWrapper>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400 mb-4">No content found.</p>
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
