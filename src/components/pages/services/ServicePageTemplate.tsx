/**
 * ServicePageTemplate Component - Redesigned
 * 
 * Modern, rich template for service pages matching product page style.
 * Includes:
 * - Hero section with gradient effects
 * - Value propositions
 * - Key deliverables grid
 * - Process timeline
 * - Technologies section
 * - Case study highlights
 * - FAQ section
 * - Contact CTA
 * 
 * Requirements: 11.2, 11.3
 */

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import { ArrowRight, Check, Calendar, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { TypewriterGradientText } from "@/components/ui/typewriter-text";
import type { ServiceData } from "@/data/services";
import type { ServiceData as NewServiceData } from "@/data/services-new";

interface ServicePageTemplateProps {
  service: ServiceData | NewServiceData;
}

// Helper to get Lucide icon by name
const getIcon = (iconName: string, className: string = "w-6 h-6") => {
  const Icon = (LucideIcons as any)[iconName];
  return Icon ? <Icon className={className} /> : null;
};

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black">
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
                {service.hero.badge}
              </span>
              
              <TypewriterGradientText 
                text={service.hero.title}
                className="text-4xl md:text-6xl font-bold mb-6"
                duration={1.8}
              />
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                {service.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientButton size="lg" onClick={() => navigate('/contact')}>
                  <Calendar className="w-5 h-5 mr-2" />
                  {service.ctaText}
                </GradientButton>
              </div>
            </AnimatedWrapper>
          </div>
        </section>

        {/* Value Propositions */}
        {service.valueProps && (
          <section className="py-20 relative">
            <div className="container mx-auto px-4">
              <SectionHeader
                badge="Why Choose Us"
                title={service.valuePropsTitle || "The DigiTransLab Advantage"}
                description={service.valuePropsDescription || "What sets our service apart from the competition."}
                alignment="center"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {service.valueProps.map((prop, index) => (
                  <AnimatedWrapper key={prop.title} animation="scale-up-bounce" delay={index * 0.1}>
                    <GlassCard variant="gradient" className="h-full p-6 text-center min-h-[200px] hover:scale-105 transition-transform duration-300">
                      <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400 mb-4">
                        {getIcon(prop.icon)}
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                        {prop.metric}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{prop.title}</h3>
                      <p className="text-gray-400 text-sm">{prop.description}</p>
                    </GlassCard>
                  </AnimatedWrapper>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Overview Section */}
        <section className="py-16 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedWrapper animation="fade-in-blur">
                <p className="text-xl text-gray-300 leading-relaxed text-center">
                  {service.overview}
                </p>
                
                {/* Key Benefits */}
                {'keyBenefits' in service && service.keyBenefits && (
                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    {service.keyBenefits.map((benefit, index) => (
                      <span 
                        key={index}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-300 text-sm rounded-full border border-purple-500/20"
                      >
                        <Check className="w-4 h-4 text-green-400" />
                        {benefit}
                      </span>
                    ))}
                  </div>
                )}
              </AnimatedWrapper>
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="What We Deliver"
              title="Key Deliverables"
              description="Tangible outcomes you can expect from our engagement."
              alignment="center"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {service.deliverables.map((deliverable, index) => (
                <AnimatedWrapper key={deliverable.title} animation="float-up" delay={index * 0.08}>
                  <GlassCard className="h-full p-6 min-h-[200px] hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400 w-fit mb-4">
                      {getIcon(deliverable.icon)}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{deliverable.title}</h3>
                    <p className="text-gray-400 text-sm">{deliverable.description}</p>
                  </GlassCard>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        {'useCases' in service && service.useCases && service.useCases.length > 0 && (
          <section className="py-20 bg-gray-900/30">
            <div className="container mx-auto px-4">
              <SectionHeader
                badge="Applications"
                title="Real-World Use Cases"
                description="How organizations are applying these capabilities."
                alignment="center"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
                {service.useCases.map((useCase, index) => (
                  <AnimatedWrapper key={useCase.title} animation="slide-up" delay={index * 0.12}>
                    <GlassCard className="h-full p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                      <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{useCase.description}</p>
                      <div className="space-y-2">
                        {useCase.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </GlassCard>
                  </AnimatedWrapper>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Process Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              badge="Our Approach"
              title="How We Work"
              description="A proven methodology that delivers results."
              alignment="center"
            />
            
            <div className="max-w-5xl mx-auto mt-12">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {service.process.map((step, index) => (
                  <AnimatedWrapper key={step.step} animation="bounce-in" delay={index * 0.15}>
                    <div className="relative">
                      {/* Connector line */}
                      {index < service.process.length - 1 && (
                        <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500" />
                      )}
                      <div className="relative z-10 text-center">
                        <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl mb-4 hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/30">
                          {step.step}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-gray-400 text-sm">{step.description}</p>
                      </div>
                    </div>
                  </AnimatedWrapper>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        {service.technologies && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <SectionHeader
                badge="Technologies"
                title="Tools & Technologies"
                description="Industry-leading technologies we work with."
                alignment="center"
              />
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
                {service.technologies.map((tech, index) => (
                  <AnimatedWrapper key={tech.category} animation="scale-in" delay={index * 0.1}>
                    <GlassCard className="p-4 h-full min-h-[160px] hover:scale-105 transition-transform duration-300">
                      <h4 className="font-bold text-purple-400 mb-3">{tech.category}</h4>
                      <ul className="space-y-1">
                        {tech.items.map((item) => (
                          <li key={item} className="text-sm text-gray-400 flex items-center gap-2">
                            <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </AnimatedWrapper>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Case Study Highlights */}
        {service.caseStudies && service.caseStudies.length > 0 && (
          <section className="py-20 bg-gray-900/30">
            <div className="container mx-auto px-4">
              <SectionHeader
                badge="Results"
                title="Client Success Stories"
                description="Real results from real engagements."
                alignment="center"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
                {service.caseStudies.map((study, index) => (
                  <AnimatedWrapper key={study.title} animation="slide-up" delay={index * 0.15}>
                    <GlassCard className="p-6 h-full hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                      <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full mb-4">
                        {study.industry}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{study.description}</p>
                      <div className="grid grid-cols-3 gap-4">
                        {study.metrics.map((metric) => (
                          <div key={metric.label} className="text-center">
                            <div className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                              {metric.value}
                            </div>
                            <div className="text-xs text-gray-500">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </GlassCard>
                  </AnimatedWrapper>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <SectionHeader
                badge="FAQ"
                title="Frequently Asked Questions"
                description="Common questions about our service."
                alignment="center"
              />
              
              <div className="max-w-3xl mx-auto mt-12 space-y-4">
                {service.faqs.map((faq, index) => (
                  <AnimatedWrapper key={index} animation="slide-right" delay={index * 0.08}>
                    <GlassCard className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full p-6 text-left flex items-center justify-between"
                      >
                        <span className="font-bold text-white">{faq.question}</span>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                      </button>
                      {openFaq === index && (
                        <div className="px-6 pb-6 text-gray-400 animate-in slide-in-from-top-2 duration-300">
                          {faq.answer}
                        </div>
                      )}
                    </GlassCard>
                  </AnimatedWrapper>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Content Section */}
        {service.relatedContent && service.relatedContent.length > 0 && (
          <section className="py-16 bg-gray-900/30">
            <div className="container mx-auto px-4">
              <SectionHeader
                badge="Related"
                title="Explore More"
                description="Discover related products and solutions."
                alignment="center"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
                {service.relatedContent.map((content, index) => (
                  <AnimatedWrapper key={content.title} animation="flip-up" delay={index * 0.12}>
                    <Link to={content.href}>
                      <GlassCard variant="hover" className="p-6 h-full min-h-[120px] group hover:scale-105 transition-transform duration-300">
                        <span className="text-xs text-purple-400 uppercase tracking-wider">
                          {content.type.replace("-", " ")}
                        </span>
                        <h3 className="text-lg font-bold text-white mt-2 group-hover:text-purple-400 transition-colors">
                          {content.title}
                        </h3>
                        <ArrowRight className="w-5 h-5 text-gray-400 mt-4 group-hover:translate-x-2 transition-transform duration-300" />
                      </GlassCard>
                    </Link>
                  </AnimatedWrapper>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <AnimatedWrapper animation="zoom-in" className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help transform your business.
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

export default ServicePageTemplate;
