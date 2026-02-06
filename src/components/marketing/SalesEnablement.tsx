import React from "react";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { GradientButton } from "../ui/gradient-button";
import { Star, TrendingUp, Users, DollarSign, ArrowRight, Download, Share2 } from "lucide-react";

const salesAssets = [
  {
    id: "case-study-techflow",
    title: "TechFlow SaaS Case Study",
    description: "How we helped TechFlow raise €2M and onboard 500+ customers",
    type: "case-study",
    metrics: ["€2M Funding", "500+ Customers", "10 Weeks", "99.9% Uptime"],
    downloadUrl: "/assets/case-studies/techflow-case-study.pdf"
  },
  {
    id: "roi-calculator",
    title: "SaaS Development ROI Calculator",
    description: "Interactive tool showing potential returns on SaaS investment",
    type: "tool",
    metrics: ["80% Funding Success", "8-12 Week Delivery", "98% Satisfaction"],
    downloadUrl: "/assets/tools/saas-roi-calculator.xlsx"
  },
  {
    id: "security-whitepaper",
    title: "Enterprise Security Framework",
    description: "Comprehensive guide to SaaS security and compliance",
    type: "whitepaper",
    metrics: ["SOC 2 Certified", "GDPR Compliant", "HIPAA Ready"],
    downloadUrl: "/assets/whitepapers/saas-security-framework.pdf"
  }
];

const testimonialCards = [
  {
    name: "Marcus Weber",
    title: "CEO & Founder",
    company: "TechFlow SaaS",
    logo: "/images/1.svg",
    image: "/images/testimonials/ayoub.jpeg",
    quote: "Digitrans transformed our MVP idea into a market-ready SaaS platform in just 10 weeks. We've already secured €2M in funding and onboarded 500+ customers.",
    metrics: ["€2M Funding", "500+ Customers", "10 Weeks"],
    industry: "Project Management",
    useCase: "MVP Development"
  },
  {
    name: "Sophie Laurent",
    title: "Co-founder & CTO", 
    company: "DataSync Pro",
    logo: "/images/2.svg",
    image: "/images/testimonials/ben-amarti.jpeg",
    quote: "Their product strategy expertise helped us pivot early and find our product-market fit. Revenue grew 400% in our first year thanks to their guidance.",
    metrics: ["400% Growth", "Perfect PMF", "Zero Debt"],
    industry: "Data Integration",
    useCase: "Product Strategy"
  },
  {
    name: "James Mitchell",
    title: "CTO & Co-founder",
    company: "CloudOps Solutions", 
    logo: "/images/5.svg",
    image: "/images/testimonials/ayoub.jpeg",
    quote: "Working with Digitrans was like having a world-class engineering team from day one. They built our infrastructure to scale from 100 to 100,000 users seamlessly.",
    metrics: ["100K+ Users", "99.99% Uptime", "50% Cost Reduction"],
    industry: "DevOps",
    useCase: "Infrastructure Scaling"
  }
];

export default function SalesEnablement() {
  return (
    <div className="p-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Sales Enablement Hub
          </h1>
          <p className="text-xl text-gray-300">
            Proven assets, testimonials, and tools to help you showcase our SaaS development expertise
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-blue-800/30 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-gray-300 text-sm">SaaS Products Launched</div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">€45M+</div>
            <div className="text-gray-300 text-sm">Total Funding Raised</div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-indigo-900/20 to-green-900/20 border border-indigo-500/20 text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">80%</div>
            <div className="text-gray-300 text-sm">Funding Success Rate</div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-green-900/20 to-purple-900/20 border border-green-500/20 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
            <div className="text-gray-300 text-sm">Client Satisfaction</div>
          </Card>
        </div>

        {/* Sales Assets */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Download className="w-6 h-6 text-purple-400" />
            Sales Assets & Collateral
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {salesAssets.map((asset, index) => (
              <motion.div
                key={asset.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 transition-all duration-300">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-purple-600/30 rounded-lg flex items-center justify-center mb-4">
                      <Download className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{asset.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{asset.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {asset.metrics.map((metric, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-purple-900/30 text-purple-300 rounded-md border border-blue-800/30">
                        {metric}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <GradientButton 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(asset.downloadUrl, '_blank')}
                      rightIcon={<Download className="w-4 h-4" />}
                    >
                      Download
                    </GradientButton>
                    <Button size="sm" variant="outline" className="border-purple-500/20">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonial Cards */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Star className="w-6 h-6 text-yellow-400" />
            Client Testimonial Cards
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonialCards.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.company}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg p-2 flex items-center justify-center">
                      <img src={testimonial.logo} alt={`${testimonial.company} logo`} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{testimonial.company}</h3>
                      <p className="text-blue-300 text-sm">{testimonial.industry}</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-300 italic mb-4 text-sm leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Founder */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                      <div className="text-gray-400 text-xs">{testimonial.title}</div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {testimonial.metrics.map((metric, i) => (
                      <div key={i} className="bg-black/30 rounded p-2 text-center">
                        <div className="text-blue-300 font-semibold text-xs">{metric}</div>
                      </div>
                    ))}
                  </div>

                  {/* Use Case */}
                  <div className="text-center">
                    <span className="inline-block bg-blue-900/30 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-500/20">
                      {testimonial.useCase}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="mb-12">
          <Card className="p-8 bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-500/20">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-green-400" />
              SaaS Development ROI Calculator
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-300 mb-6">
                  Show prospects the potential return on investment for their SaaS development project. 
                  Based on real data from 50+ successful launches.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center p-3 bg-black/30 rounded">
                    <span className="text-gray-300">Average funding raised:</span>
                    <span className="text-green-400 font-bold">€900K</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-black/30 rounded">
                    <span className="text-gray-300">Development cost:</span>
                    <span className="text-white font-bold">€75K</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-900/20 rounded border border-green-500/20">
                    <span className="text-white font-bold">ROI:</span>
                    <span className="text-green-400 font-bold text-xl">1200%</span>
                  </div>
                </div>
                
                <GradientButton rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Use ROI Calculator
                </GradientButton>
              </div>
              
              <div className="bg-black/30 rounded-lg p-6">
                <h4 className="text-xl font-bold text-white mb-4">Success Metrics</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">80% achieve funding within 12 months</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Average 8-12 week MVP delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">99.9% average uptime achieved</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-300">98% client satisfaction rate</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Competitive Advantages */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Key Selling Points</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-blue-800/30">
              <h3 className="text-xl font-bold text-white mb-4">Speed to Market</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 8-12 week MVP delivery (vs industry 16-20 weeks)</li>
                <li>• Proven development methodology</li>
                <li>• Weekly progress demos and feedback</li>
                <li>• Agile development with rapid iteration</li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Funding Success</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 80% of our MVPs raise funding (vs 20-30% industry)</li>
                <li>• €45M+ total funding raised by clients</li>
                <li>• Investor-ready technical architecture</li>
                <li>• Proven business model guidance</li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-indigo-900/20 to-green-900/20 border border-indigo-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• SOC 2, GDPR, HIPAA compliance from day one</li>
                <li>• Enterprise-grade security architecture</li>
                <li>• Zero security incidents track record</li>
                <li>• Comprehensive audit trail and monitoring</li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-green-900/20 to-purple-900/20 border border-green-500/20">
              <h3 className="text-xl font-bold text-white mb-4">EMEA Expertise</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Local presence in 4 countries</li>
                <li>• Deep understanding of EMEA markets</li>
                <li>• Regulatory compliance expertise</li>
                <li>• Cultural and business context knowledge</li>
              </ul>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}