/**
 * Clients Page - Redesigned
 * 
 * Showcases client success stories and testimonials with a modern design
 * matching the product pages style.
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Building2, 
  Landmark, 
  Rocket, 
  Star, 
  Quote, 
  TrendingUp,
  Users,
  Calendar,
  ArrowRight,
  Check
} from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { GlassCard } from "../ui/glass-card";
import { GradientButton } from "../ui/gradient-button";
import { SectionHeader } from "../ui/section-header";
import { AnimatedWrapper } from "../ui/animated-wrapper";
import { TypewriterGradientText } from "../ui/typewriter-text";

// Case studies data
const caseStudies = [
  {
    title: "Global Bank Digital Transformation",
    industry: "Financial Services",
    challenge: "Legacy systems causing 40% operational inefficiency",
    solution: "End-to-end digital transformation with AI-powered automation",
    results: [
      { metric: "$250M", label: "Cost Savings" },
      { metric: "35%", label: "Efficiency Gain" },
      { metric: "99.9%", label: "Uptime" },
    ],
    icon: "Landmark",
  },
  {
    title: "Healthcare Provider Cloud Migration",
    industry: "Healthcare",
    challenge: "On-premise infrastructure limiting scalability and compliance",
    solution: "HIPAA-compliant cloud migration with real-time data access",
    results: [
      { metric: "40%", label: "Cost Reduction" },
      { metric: "10x", label: "Faster Access" },
      { metric: "100%", label: "Compliance" },
    ],
    icon: "Building2",
  },
  {
    title: "Retail AI Personalization",
    industry: "Retail",
    challenge: "Generic customer experience leading to low conversion",
    solution: "AI-powered personalization engine across all touchpoints",
    results: [
      { metric: "70%", label: "Revenue Increase" },
      { metric: "45%", label: "Higher LTV" },
      { metric: "3x", label: "Engagement" },
    ],
    icon: "TrendingUp",
  },
];

// Client categories
const clientCategories = [
  {
    icon: Building2,
    title: "Fortune 500",
    count: "50+",
    description: "Enterprise clients across finance, healthcare, and manufacturing",
  },
  {
    icon: Landmark,
    title: "Government",
    count: "15+",
    description: "Federal and state agencies with FedRAMP compliance",
  },
  {
    icon: Rocket,
    title: "Startups",
    count: "100+",
    description: "High-growth startups from seed to Series C",
  },
];

// Testimonials
const testimonials = [
  {
    quote: "DigiTransLab transformed our security operations. What used to take hours now happens in seconds. The ROI was visible within the first month.",
    name: "Sarah Chen",
    title: "CISO",
    company: "Global Financial Corp",
    rating: 5,
  },
  {
    quote: "Their AI expertise helped us build a personalization engine that increased our conversion rate by 70%. They're true partners, not just vendors.",
    name: "Marcus Weber",
    title: "CTO",
    company: "RetailTech Inc",
    rating: 5,
  },
  {
    quote: "The team delivered our MVP in 10 weeks. We secured €2M in funding based on what they built. Couldn't have done it without them.",
    name: "Sophie Laurent",
    title: "Founder",
    company: "DataSync Pro",
    rating: 5,
  },
];

// Industry logos
const industryLogos = [
  "/images/1.svg", "/images/2.svg", "/images/3.svg", "/images/4.svg",
  "/images/5.svg", "/images/6.svg", "/images/7.svg", "/images/8.svg",
];

export default function Clients() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedWrapper animation="fade-up-slow" className="max-w-4xl mx-auto text-center">
              <span className="inline-block mb-4 px-4 py-1.5 bg-blue-900/40 text-blue-300 text-sm rounded-full border border-blue-500/30">
                Client Success Stories
              </span>
              
              <TypewriterGradientText 
                text="Trusted by Industry Leaders"
                className="text-4xl md:text-6xl font-bold mb-6"
                gradientClassName="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
                duration={1.8}
              />
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                We've helped organizations across industries achieve measurable results through AI, automation, and digital transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientButton size="lg" onClick={() => navigate('/contact')}>
                  <Calendar className="w-5 h-5 mr-2" />
                  Start Your Success Story
                </GradientButton>
              </div>
            </AnimatedWrapper>
          </div>
        </section>

        {/* Client Categories */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Our Clients"
              title="Who We Work With"
              description="From Fortune 500 enterprises to high-growth startups."
              alignment="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {clientCategories.map((category, index) => (
                <AnimatedWrapper key={category.title} animation="scale-up-bounce" delay={index * 0.12}>
                  <GlassCard variant="gradient" className="h-full p-6 text-center hover:scale-105 transition-transform duration-300">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400 mb-4">
                      <category.icon className="w-8 h-8" />
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                      {category.count}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-400 text-sm">{category.description}</p>
                  </GlassCard>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Logo Cloud */}
        <section className="py-16 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <p className="text-center text-gray-400 mb-8">Trusted by leading organizations worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {industryLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="w-16 h-16 md:w-20 md:h-20 opacity-60 hover:opacity-100 transition-opacity"
                >
                  <img src={logo} alt={`Client ${index + 1}`} className="w-full h-full object-contain" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Case Studies"
              title="Real Results, Real Impact"
              description="See how we've helped organizations transform their operations."
              alignment="center"
            />
            
            <div className="space-y-8 mt-12">
              {caseStudies.map((study, index) => (
                <AnimatedWrapper key={study.title} animation="slide-up" delay={index * 0.15}>
                  <GlassCard className="p-8 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full mb-4">
                          {study.industry}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                        
                        <div className="space-y-4 mb-6">
                          <div>
                            <span className="text-red-400 font-medium">Challenge: </span>
                            <span className="text-gray-400">{study.challenge}</span>
                          </div>
                          <div>
                            <span className="text-blue-400 font-medium">Solution: </span>
                            <span className="text-gray-400">{study.solution}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col justify-center">
                        <p className="text-green-400 font-medium mb-4">Results:</p>
                        <div className="grid grid-cols-3 gap-4">
                          {study.results.map((result) => (
                            <div key={result.label} className="text-center">
                              <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                                {result.metric}
                              </div>
                              <div className="text-xs text-gray-400">{result.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Testimonials"
              title="What Our Clients Say"
              description="Hear from the leaders who've partnered with us."
              alignment="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {testimonials.map((testimonial, index) => (
                <AnimatedWrapper key={testimonial.name} animation="float-up" delay={index * 0.12}>
                  <GlassCard className="h-full p-6 min-h-[280px] hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                    <Quote className="w-8 h-8 text-purple-400/30 mb-4" />
                    <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                    <div className="mt-auto">
                      <div className="flex mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                      <p className="font-bold text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.title}, {testimonial.company}</p>
                    </div>
                  </GlassCard>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AnimatedWrapper animation="zoom-in" className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Ready to Join Our Success Stories?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help you achieve similar results.
              </p>
              <GradientButton size="lg" onClick={() => navigate('/contact')}>
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Consultation
              </GradientButton>
            </AnimatedWrapper>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
