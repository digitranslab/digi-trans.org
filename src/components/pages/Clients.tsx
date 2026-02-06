import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "../Hero";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { GradientButton } from "../ui/gradient-button";
import { ArrowRight, Building2, Landmark, Rocket, Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const clientCategories = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Fortune 500 Companies",
    description: "Enterprise solutions for industry leaders",
    href: "/clients/fortune-500-companies",
    features: [
      "Global Data Platforms",
      "Enterprise AI Solutions",
      "Cloud Transformation",
      "Digital Innovation",
    ],
  },
  {
    icon: <Landmark className="w-8 h-8" />,
    title: "Government Agencies",
    description: "Secure solutions for public sector",
    href: "/clients/gov-agencies",
    features: [
      "FedRAMP Solutions",
      "Secure Infrastructure",
      "Data Analytics",
      "Compliance Systems",
    ],
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Tech Startups",
    description: "Agile solutions for rapid growth",
    href: "/clients/tech-startups",
    features: [
      "MVP Development",
      "Scalable Architecture",
      "Cloud Solutions",
      "DevOps Automation",
    ],
  },
];

// Featured clients with logos and testimonials
const clientTestimonials = [
  {
    name: "Marcus Weber",
    position: "CEO & Founder",
    company: "TechFlow SaaS",
    logo: "/images/1.svg",
    quote: "Digitrans transformed our MVP idea into a market-ready SaaS platform in just 10 weeks. We've already secured €2M in funding and onboarded 500+ customers.",
    rating: 5,
    industry: "SaaS Platform",
  },
  {
    name: "Sophie Laurent",
    position: "Co-founder",
    company: "DataSync Pro",
    logo: "/images/2.svg",
    quote: "Their product strategy expertise helped us pivot early and find our product-market fit. Revenue grew 400% in our first year thanks to their guidance.",
    rating: 5,
    industry: "Data Integration",
  },
  {
    name: "James Mitchell",
    position: "CTO",
    company: "CloudOps Solutions",
    logo: "/images/3.svg",
    quote: "Working with Digitrans was like having a world-class engineering team from day one. They built our entire infrastructure to scale from 100 to 100,000 users seamlessly.",
    rating: 5,
    industry: "DevOps SaaS",
  },
  {
    name: "Lisa Chen",
    position: "Founder",
    company: "MedCare Connect",
    logo: "/images/4.svg",
    quote: "From concept to production in 12 weeks. Their full-stack development team delivered a HIPAA-compliant platform that now serves 50+ healthcare providers.",
    rating: 5,
    industry: "HealthTech",
  },
  {
    name: "Roberto Silva",
    position: "CEO",
    company: "FinanceFlow",
    logo: "/images/5.svg",
    quote: "Digitrans didn't just build our product - they became our technology partner. Their ongoing support helped us scale to €5M ARR in 18 months.",
    rating: 5,
    industry: "FinTech",
  },
];

// Industry logos for the logo showcase
const industryLogos = [
  { url: "/images/1.svg", alt: "Client 1" },
  { url: "/images/2.svg", alt: "Client 2" },
  { url: "/images/3.svg", alt: "Client 3" },
  { url: "/images/4.svg", alt: "Client 4" },
  { url: "/images/5.svg", alt: "Client 5" },
  { url: "/images/6.svg", alt: "Client 6" },
  { url: "/images/7.svg", alt: "Client 7" },
  { url: "/images/8.svg", alt: "Client 8" },
  { url: "/images/9.svg", alt: "Client 9" },
  { url: "/images/10.svg", alt: "Client 10" },
  { url: "/images/11.svg", alt: "Client 11" },
];

export default function Clients() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => 
      prev === clientTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => 
      prev === 0 ? clientTestimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero
        headline="Our Clients"
        subheadline="Trusted by leading organizations across industries, from Fortune 500 companies to innovative startups."
        showCards={false}
        videoUrl="/videos/clients.mp4"
      />

      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur-sm backdrop-blur-sm border border-blue-800/30 hover:border-purple-400/40">
                  <div className="text-blue-500 mb-6">{category.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{category.description}</p>
                  <div className="space-y-3 mb-6">
                    {category.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        <span className="text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a href={category.href}>
                    <Button variant="outline" className="w-full group">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Modern Trust Section with Logo Grid and Testimonials */}
          <section className="py-24">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative max-w-7xl mx-auto"
            >
              {/* Section Header */}
              <div className="text-center mb-16 relative z-10">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                    Trusted by Industry Leaders
                  </h2>
                  <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    We've helped organizations across industries achieve their digital transformation goals with custom solutions that drive growth and innovation.
                  </p>
                </motion.div>
              </div>

              {/* Logo Showcase */}
              <div className="mb-20 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl backdrop-blur-sm -z-10" />
                
                <div className="py-12 px-4 overflow-hidden relative">
                  {/* Gradient fades at edges */}
                  <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
                  <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
                  
                  {/* First row of logos - moves left */}
                  <motion.div
                    className="flex items-center gap-16 mb-12"
                    animate={{ x: [0, -1000] }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "linear",
                    }}
                  >
                    {[...industryLogos, ...industryLogos].map((logo, index) => (
                      <div 
                        key={`logo1-${index}`}
                        className="flex-shrink-0 w-36 h-36 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-blue-800/30 flex items-center justify-center p-4 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:scale-105"
                      >
                        <img src={logo.url} alt={logo.alt} className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </motion.div>
                  
                  {/* Second row of logos - moves right */}
                  <motion.div
                    className="flex items-center gap-16"
                    animate={{ x: [-1000, 0] }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "linear",
                    }}
                  >
                    {[...industryLogos, ...industryLogos].map((logo, index) => (
                      <div 
                        key={`logo2-${index}`}
                        className="flex-shrink-0 w-36 h-36 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-blue-800/30 flex items-center justify-center p-4 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 transform hover:scale-105"
                      >
                        <img src={logo.url} alt={logo.alt} className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Testimonial Carousel */}
              <div className="relative rounded-3xl overflow-hidden bg-gray-900/50 backdrop-blur-sm backdrop-blur-sm border border-blue-800/30 shadow-xl">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-purple-600/10 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent"></div>
                
                <div className="p-8 md:p-12 relative z-10">
                  <div className="absolute top-8 right-12 text-purple-500/30">
                    <Quote size={120} strokeWidth={1} />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                    {/* Client logo and info */}
                    <div className="md:col-span-1 flex flex-col items-center md:items-start">
                      <div className="w-32 h-32 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-blue-800/30 p-4 mb-4 flex items-center justify-center">
                        <img 
                          src={clientTestimonials[activeTestimonial].logo} 
                          alt={clientTestimonials[activeTestimonial].company} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg px-3 py-1 mb-2 text-sm text-gray-300">
                        {clientTestimonials[activeTestimonial].industry}
                      </div>
                      <div className="flex">
                        {[...Array(clientTestimonials[activeTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                    
                    {/* Testimonial content */}
                    <div className="md:col-span-4">
                      <div className="relative">
                        <motion.blockquote
                          key={activeTestimonial}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5 }}
                          className="text-xl md:text-2xl text-white mb-8 font-light leading-relaxed"
                        >
                          "{clientTestimonials[activeTestimonial].quote}"
                        </motion.blockquote>
                        
                        <div className="mb-6">
                          <p className="text-white font-medium text-lg">
                            {clientTestimonials[activeTestimonial].name}
                          </p>
                          <p className="text-gray-400">
                            {clientTestimonials[activeTestimonial].position}, {clientTestimonials[activeTestimonial].company}
                          </p>
                        </div>
                        
                        {/* Navigation controls */}
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
                      </div>
                    </div>
                  </div>
                  
                  {/* Testimonial indicators */}
                  <div className="flex justify-center mt-8 space-x-2">
                    {clientTestimonials.map((_, index) => (
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
              
              {/* Call to action */}
              <div className="mt-16 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-xl text-gray-400 mb-8">
                    Join our growing network of satisfied clients and experience the difference of working with a dedicated team of technology experts.
                  </p>
                  <GradientButton size="lg">
                    Contact Us for a Free Consultation
                  </GradientButton>
                </motion.div>
              </div>
            </motion.div>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
}
