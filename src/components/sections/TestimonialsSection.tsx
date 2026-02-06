/**
 * TestimonialsSection Component
 * 
 * Displays client testimonials in a carousel format.
 * Shows quote, client name, title, and company.
 * Supports placeholder data format for future integration with real client data.
 * Animates testimonial cards with entrance effects when in view.
 * 
 * Requirements: 7.1, 7.2, 7.3, 7.4
 */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

// Default testimonials for backward compatibility
const defaultTestimonials = [
  {
    name: "Marcus Weber",
    position: "CEO & Founder",
    company: "TechFlow SaaS",
    image: "/images/testimonials/ayoub.jpeg",
    quote: "Digitrans transformed our MVP idea into a market-ready SaaS platform in just 10 weeks. We've already secured €2M in funding and onboarded 500+ customers. Their team didn't just build our product - they became our strategic partner.",
    rating: 5,
    industry: "SaaS Platform",
    results: ["€2M Funding Raised", "500+ Customers", "10 Week Delivery"],
  },
  {
    name: "Sophie Laurent",
    position: "Co-founder",
    company: "DataSync Pro",
    image: "/images/testimonials/ben-amarti.jpeg",
    quote: "Their product strategy expertise helped us pivot early and find our product-market fit. Revenue grew 400% in our first year thanks to their guidance. They understand both the technical and business sides perfectly.",
    rating: 5,
    industry: "Data Integration",
    results: ["400% Revenue Growth", "Perfect PMF", "Zero Technical Debt"],
  },
  {
    name: "James Mitchell",
    position: "CTO",
    company: "CloudOps Solutions",
    image: "/images/testimonials/ayoub.jpeg",
    quote: "Working with Digitrans was like having a world-class engineering team from day one. They built our entire infrastructure to scale from 100 to 100,000 users seamlessly. Their DevOps expertise is unmatched.",
    rating: 5,
    industry: "DevOps SaaS",
    results: ["99.99% Uptime", "Auto-Scaling", "100K+ Users"],
  },
];

// Extended testimonial type that includes optional fields for backward compatibility
interface ExtendedTestimonial {
  quote: string;
  name?: string;
  author?: string;
  position?: string;
  title?: string;
  company: string;
  image?: string;
  avatar?: string;
  rating?: number;
  industry?: string;
  results?: string[];
}

interface TestimonialsSectionProps {
  /** Custom testimonials data - supports both old and new formats */
  testimonials?: ExtendedTestimonial[];
  /** Section title */
  title?: string;
  /** Section description */
  description?: string;
  /** Section badge text */
  badge?: string;
}

export default function TestimonialsSection({
  testimonials,
  title = "What Our Clients Say",
  description = "Hear from the teams and founders who have transformed their businesses with our solutions.",
  badge = "Client Success",
}: TestimonialsSectionProps) {
  // Use provided testimonials or fall back to defaults
  const displayTestimonials = testimonials || defaultTestimonials;
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % displayTestimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + displayTestimonials.length) % displayTestimonials.length);
  };

  // Helper to get name from either format
  const getName = (t: ExtendedTestimonial) => t.name || t.author || "Anonymous";
  const getTitle = (t: ExtendedTestimonial) => t.position || t.title || "";
  const getImage = (t: ExtendedTestimonial) => t.image || t.avatar;
  const currentTestimonial = displayTestimonials[activeTestimonial];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-purple-900/10 rounded-full filter blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-blue-900/10 rounded-full filter blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-3 px-4 py-1 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30">{badge}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-400">
            {title}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Main Testimonial Card */}
          <div className="relative rounded-3xl overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-purple-600/10 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent"></div>
            
            <div className="p-8 md:p-12 relative z-10">
              <div className="absolute top-8 right-12 text-purple-500/20">
                <Quote size={120} strokeWidth={1} />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Founder Info */}
                <div className="flex flex-col items-center lg:items-start">
                  {getImage(currentTestimonial) && (
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-purple-500/30">
                      <img 
                        src={getImage(currentTestimonial)} 
                        alt={getName(currentTestimonial)} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  {!getImage(currentTestimonial) && (
                    <div className="w-24 h-24 rounded-full mb-4 border-2 border-purple-500/30 bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center">
                      <span className="text-3xl font-bold text-purple-300">
                        {getName(currentTestimonial).charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="text-center lg:text-left mb-4">
                    <h4 className="text-xl font-bold text-white mb-1">
                      {getName(currentTestimonial)}
                    </h4>
                    <p className="text-purple-300 mb-1">
                      {getTitle(currentTestimonial)}
                    </p>
                    <p className="text-gray-400">
                      {currentTestimonial.company}
                    </p>
                  </div>
                  {currentTestimonial.industry && (
                    <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg px-3 py-1 mb-3 text-sm text-gray-300">
                      {currentTestimonial.industry}
                    </div>
                  )}
                  {currentTestimonial.rating && (
                    <div className="flex">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Testimonial Content */}
                <div className="lg:col-span-2">
                  <motion.blockquote
                    key={activeTestimonial}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl md:text-2xl text-white mb-8 font-light leading-relaxed"
                  >
                    "{currentTestimonial.quote}"
                  </motion.blockquote>
                  
                  {/* Results - only show if available */}
                  {currentTestimonial.results && currentTestimonial.results.length > 0 && (
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {currentTestimonial.results.map((result, index) => (
                        <div 
                          key={index}
                          className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-lg p-3 text-center border border-blue-500/10"
                        >
                          <p className="text-purple-300 font-bold text-sm">{result}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Navigation */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      <button 
                        onClick={prevTestimonial}
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800/50 hover:bg-gray-700/80 border border-gray-700 transition-colors"
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextTestimonial}
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800/50 hover:bg-gray-700/80 border border-gray-700 transition-colors"
                        aria-label="Next testimonial"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                    
                    {/* Indicators */}
                    <div className="flex space-x-2">
                      {displayTestimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveTestimonial(index)}
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            index === activeTestimonial ? 'bg-blue-500 w-8' : 'bg-gray-600'
                          }`}
                          aria-label={`Go to testimonial ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
}