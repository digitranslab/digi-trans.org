import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { GradientButton } from "../ui/gradient-button";

const saasTestimonials = [
  {
    name: "Marcus Weber",
    position: "CEO & Founder",
    company: "TechFlow SaaS",
    logo: "/images/1.svg",
    image: "/images/testimonials/ayoub.jpeg",
    quote: "Digitrans transformed our MVP idea into a market-ready SaaS platform in just 10 weeks. We've already secured €2M in funding and onboarded 500+ customers. Their team didn't just build our product - they became our strategic partner in scaling the business.",
    rating: 5,
    industry: "Project Management",
    results: ["€2M Funding", "500+ Customers", "10 Weeks MVP"],
    location: "Berlin, Germany"
  },
  {
    name: "Sophie Laurent",
    position: "Co-founder & CTO",
    company: "DataSync Pro",
    logo: "/images/2.svg",
    image: "/images/testimonials/ben-amarti.jpeg",
    quote: "Their product strategy expertise helped us pivot early and find our product-market fit. Revenue grew 400% in our first year thanks to their guidance. They understand both the technical and business sides perfectly.",
    rating: 5,
    industry: "Data Integration",
    results: ["400% Revenue Growth", "Perfect PMF", "Zero Tech Debt"],
    location: "Paris, France"
  },
  {
    name: "James Mitchell",
    position: "CTO",
    company: "CloudOps Solutions",
    logo: "/images/3.svg",
    image: "/images/testimonials/ayoub.jpeg",
    quote: "Working with Digitrans was like having a world-class engineering team from day one. They built our entire infrastructure to scale from 100 to 100,000 users seamlessly. Their DevOps expertise is unmatched in the EMEA market.",
    rating: 5,
    industry: "DevOps & Infrastructure",
    results: ["99.99% Uptime", "100K+ Users", "Auto-Scaling"],
    location: "London, UK"
  },
  {
    name: "Lisa Chen",
    position: "Founder & CEO",
    company: "MedCare Connect",
    logo: "/images/4.svg",
    image: "/images/testimonials/ben-amarti.jpeg",
    quote: "From concept to production in 12 weeks. Their full-stack development team delivered a HIPAA-compliant platform that now serves 50+ healthcare providers. The security and compliance knowledge saved us months of work.",
    rating: 5,
    industry: "HealthTech",
    results: ["HIPAA Compliant", "50+ Providers", "12 Weeks Build"],
    location: "Amsterdam, Netherlands"
  },
  {
    name: "Roberto Silva",
    position: "CEO & Founder",
    company: "FinanceFlow",
    logo: "/images/5.svg",
    image: "/images/testimonials/ayoub.jpeg",
    quote: "Digitrans didn't just build our product - they became our technology partner. Their ongoing support helped us scale to €5M ARR in 18 months. Every technical decision was made with long-term scalability in mind.",
    rating: 5,
    industry: "FinTech",
    results: ["€5M ARR", "18 Months Scale", "SOC 2 Certified"],
    location: "Madrid, Spain"
  },
  {
    name: "Ahmed Hassan",
    position: "Founder",
    company: "EduFlow",
    logo: "/images/6.svg",
    image: "/images/testimonials/ben-amarti.jpeg",
    quote: "As a non-technical founder, I was worried about the complexity of building a SaaS platform. Digitrans made the entire process transparent and stress-free. They delivered exactly what we needed, when we needed it.",
    rating: 5,
    industry: "EdTech",
    results: ["Non-Tech Founder", "Stress-Free Process", "On-Time Delivery"],
    location: "Dubai, UAE"
  }
];

export default function SaaSTestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % saasTestimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + saasTestimonials.length) % saasTestimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white relative overflow-hidden">
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
          <span className="inline-block mb-3 px-4 py-1 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30">Success Stories</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-400">
            SaaS Founders Love Working With Us
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Real stories from founders who've built successful SaaS businesses with our help.
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
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                {/* Founder Info & Company */}
                <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
                  {/* Company Logo */}
                  <div className="w-20 h-20 bg-gray-800/60 rounded-xl border border-gray-700 p-3 mb-4 flex items-center justify-center">
                    <img 
                      src={saasTestimonials[activeTestimonial].logo} 
                      alt={saasTestimonials[activeTestimonial].company} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Founder Photo */}
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-purple-500/30">
                    <img 
                      src={saasTestimonials[activeTestimonial].image} 
                      alt={saasTestimonials[activeTestimonial].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="text-center lg:text-left mb-4">
                    <h4 className="text-lg font-bold text-white mb-1">
                      {saasTestimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-purple-300 text-sm mb-1">
                      {saasTestimonials[activeTestimonial].position}
                    </p>
                    <p className="text-gray-400 text-sm font-medium">
                      {saasTestimonials[activeTestimonial].company}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      {saasTestimonials[activeTestimonial].location}
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg px-3 py-1 mb-3 text-sm text-gray-300">
                    {saasTestimonials[activeTestimonial].industry}
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(saasTestimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
                
                {/* Testimonial Content */}
                <div className="lg:col-span-3">
                  <motion.blockquote
                    key={activeTestimonial}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl md:text-2xl text-white mb-8 font-light leading-relaxed"
                  >
                    "{saasTestimonials[activeTestimonial].quote}"
                  </motion.blockquote>
                  
                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {saasTestimonials[activeTestimonial].results.map((result, index) => (
                      <div 
                        key={index}
                        className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-lg p-4 text-center border border-blue-500/10"
                      >
                        <p className="text-purple-300 font-bold text-sm">{result}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Navigation and CTA */}
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
                    
                    <GradientButton
                      rightIcon={<ArrowRight className="h-4 w-4" />}
                      onClick={() => window.open("/contact", "_self")}
                    >
                      Start Your Success Story
                    </GradientButton>
                  </div>
                </div>
              </div>
              
              {/* Testimonial Indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {saasTestimonials.map((_, index) => (
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
        </motion.div>

        {/* Success Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm">SaaS Products Launched</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">€45M+</div>
              <div className="text-gray-300 text-sm">Total Funding Raised</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-2">80%</div>
              <div className="text-gray-300 text-sm">Successful Funding Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
              <div className="text-gray-300 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Join These Success Stories?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a free consultation to discuss how we can help you build and scale your SaaS product.
          </p>
          <GradientButton
            size="lg"
            rightIcon={<ArrowRight className="h-5 w-5" />}
            onClick={() => window.open("/contact", "_self")}
          >
            Get Your Free Consultation
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
}