/**
 * Blog Page - Redesigned
 * 
 * Displays blog posts and articles with a modern design
 * matching the product pages style.
 */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Clock, 
  Calendar, 
  Tag, 
  ArrowRight,
  BookOpen,
  Search
} from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { GlassCard } from "../ui/glass-card";
import { GradientButton } from "../ui/gradient-button";
import { SectionHeader } from "../ui/section-header";
import { AnimatedWrapper } from "../ui/animated-wrapper";
import SEO from "../SEO";
import { TypewriterGradientText } from "../ui/typewriter-text";

const blogPosts = [
  {
    title: "Digital Transformation in Banking: A $250M Success Story",
    description: "Learn how we helped a global banking leader transform their legacy systems, resulting in $250M in operational savings and a 35% increase in customer satisfaction.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    date: "February 25, 2025",
    readTime: "7 min read",
    slug: "digital-transformation-banking-success-story",
    category: "Case Study",
    featured: true,
  },
  {
    title: "Cloud Migration for Healthcare: Improving Patient Care",
    description: "Learn how we helped a major healthcare provider migrate to the cloud, resulting in 40% cost savings and improved patient care through real-time data access.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    date: "February 18, 2025",
    readTime: "6 min read",
    slug: "cloud-migration-healthcare-case-study",
    category: "Case Study",
  },
  {
    title: "AI-Powered Retail Personalization: 70% Revenue Growth",
    description: "Learn how we helped a global retailer implement AI-powered personalization that increased online revenue by 70% and customer lifetime value by 45%.",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80",
    date: "February 10, 2025",
    readTime: "8 min read",
    slug: "ai-retail-personalization-case-study",
    category: "Case Study",
  },
  {
    title: "How We Helped a $3.5B Retailer Transform Their IT",
    description: "Learn how our strategic IT assessment unlocked $16M+ in value and created a technology roadmap that became a competitive advantage.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    date: "February 3, 2025",
    readTime: "5 min read",
    slug: "enabling-our-client-to-maximise-the-business-value-from-it",
    category: "Case Study",
  },
  {
    title: "Building Enterprise Data Lakes: A Complete Guide",
    description: "Learn how to design and implement scalable data lakes that process petabytes of data with real-time analytics capabilities.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    date: "January 28, 2025",
    readTime: "15 min read",
    slug: "building-enterprise-data-lakes",
    category: "Data Engineering",
  },
  {
    title: "MLOps Best Practices for Production AI Systems",
    description: "A comprehensive guide to implementing MLOps in enterprise environments, from model training to production deployment.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800",
    date: "January 21, 2025",
    readTime: "12 min read",
    slug: "mlops-best-practices",
    category: "AI/ML",
  },
  {
    title: "Cloud-Native Architecture Patterns",
    description: "Explore modern architecture patterns for building scalable, resilient cloud-native applications.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    date: "January 14, 2025",
    readTime: "10 min read",
    slug: "cloud-native-architecture-patterns",
    category: "Cloud Computing",
  },
  {
    title: "Real-time Analytics with Apache Kafka",
    description: "Building real-time analytics pipelines processing millions of events per second using Apache Kafka.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800",
    date: "January 7, 2025",
    readTime: "8 min read",
    slug: "real-time-analytics-kafka",
    category: "Big Data",
  },
];

const categories = ["All", "Case Study", "AI/ML", "Data Engineering", "Cloud Computing", "Big Data"];

export default function Blog() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);
  
  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Blog | Insights on Big Data, AI & Cloud Computing | Digitrans"
        description="Discover the latest in Big Data, Cloud Computing, and AI through our expert insights and in-depth analysis."
        canonicalUrl="/blog"
        ogType="website"
      />
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedWrapper animation="fade-up-slow" className="max-w-4xl mx-auto text-center">
              <span className="inline-block mb-4 px-4 py-1.5 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30">
                Insights & Expertise
              </span>
              
              <TypewriterGradientText 
                text="Blog & Resources"
                className="text-4xl md:text-6xl font-bold mb-6"
                duration={1.8}
              />
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Expert insights on AI, data engineering, cloud computing, and digital transformation from our team.
              </p>
            </AnimatedWrapper>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <AnimatedWrapper animation="slide-up">
                <a href={`/blog/${featuredPost.slug}`} className="block group">
                  <GlassCard className="overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="relative h-64 lg:h-auto overflow-hidden">
                        <img 
                          src={featuredPost.image} 
                          alt={featuredPost.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:hidden" />
                      </div>
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <span className="inline-block w-fit px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full mb-4">
                          Featured
                        </span>
                        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                          {featuredPost.title}
                        </h2>
                        <p className="text-gray-400 mb-6">{featuredPost.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {featuredPost.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {featuredPost.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </a>
              </AnimatedWrapper>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                      : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <AnimatedWrapper key={post.slug} animation="float-up" delay={index * 0.08}>
                  <a href={`/blog/${post.slug}`} className="block group h-full">
                    <GlassCard className="h-full overflow-hidden flex flex-col min-h-[420px] hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <span className="absolute bottom-3 left-3 px-2 py-1 bg-gray-900/80 text-xs text-gray-300 rounded">
                          {post.category}
                        </span>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-3">
                          {post.description}
                        </p>
                        <div className="flex items-center text-purple-400 text-sm font-medium mt-auto">
                          Read Article
                          <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-2" />
                        </div>
                      </div>
                    </GlassCard>
                  </a>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <AnimatedWrapper animation="zoom-in" className="max-w-2xl mx-auto text-center">
              <BookOpen className="w-12 h-12 text-purple-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Stay Updated
              </h2>
              <p className="text-gray-400 mb-8">
                Get the latest insights on AI, data engineering, and cloud computing delivered to your inbox.
              </p>
              <GradientButton size="lg" onClick={() => navigate('/contact')}>
                Subscribe to Updates
              </GradientButton>
            </AnimatedWrapper>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
