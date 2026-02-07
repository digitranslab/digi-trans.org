/**
 * Contact Page Component
 * 
 * Implements Netlify Forms according to official documentation:
 * - https://docs.netlify.com/manage/forms/setup/
 * - https://docs.netlify.com/manage/forms/spam-filters/
 * 
 * Features:
 * - Netlify Forms for contact submissions (free tier: 100/month)
 * - Honeypot field for spam prevention
 * - AJAX submission with proper encoding
 */

import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { 
  Send, 
  Calendar, 
  MessageCircle, 
  CheckCircle,
  Loader2,
  Clock,
  Users,
  Globe,
  AlertCircle
} from "lucide-react";
import { GlassCard } from "../ui/glass-card";
import { GradientButton } from "../ui/gradient-button";
import { SectionHeader } from "../ui/section-header";
import { AnimatedWrapper } from "../ui/animated-wrapper";
import SEO from "../SEO";
import { TypewriterGradientText } from "../ui/typewriter-text";

// Form state type - matches hidden HTML form in index.html
interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
  "bot-field": string; // Honeypot field for spam prevention
}

/**
 * Encode form data for Netlify Forms submission
 * Per Netlify docs: Use application/x-www-form-urlencoded content type
 */
const encode = (data: Record<string, string>) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    "bot-field": "", // Must be empty for real users
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  /**
   * Handle form submission via AJAX
   * Per Netlify docs for JavaScript-rendered forms:
   * - POST to any path on the site
   * - Include form-name in body
   * - Use application/x-www-form-urlencoded
   * - Include honeypot field in body
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...formData,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: "",
          "bot-field": "",
        });
      } else {
        throw new Error(`Form submission failed: ${response.status}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setErrorMessage(
        "Something went wrong. Please try again or email us directly at info@digi-trans.org"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Contact DigitransLab | AI & Data Consulting"
        description="Get in touch with DigitransLab for AI consulting, data engineering, and custom software development. Book a free consultation today."
        canonicalUrl="/contact"
        keywords={["AI consulting contact", "data engineering services", "book consultation", "DigitransLab contact"]}
      />
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedWrapper animation="fade-up-slow" className="max-w-3xl mx-auto text-center">
              <span className="inline-block mb-4 px-4 py-1.5 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30">
                Let's Connect
              </span>
              <TypewriterGradientText 
                text="Start Your AI & Data Journey"
                className="text-4xl md:text-5xl font-bold mb-6"
                duration={1.8}
              />
              <p className="text-xl text-gray-300 mb-8">
                Whether you need strategic consulting, engineering expertise, or want to explore our products, 
                we're here to help transform your business.
              </p>
            </AnimatedWrapper>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* Contact Form */}
              <AnimatedWrapper animation="slide-right">
                <GlassCard variant="gradient" className="p-6 h-full hover:scale-[1.01] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Send a Message</h2>
                  </div>

                  {submitStatus === "success" ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-green-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                      <p className="text-gray-400 mb-6">We'll get back to you within 24 hours.</p>
                      <GradientButton 
                        variant="secondary" 
                        onClick={() => setSubmitStatus("idle")}
                      >
                        Send Another Message
                      </GradientButton>
                    </div>
                  ) : (
                    <form 
                      name="contact" 
                      method="POST"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      {/* 
                        Hidden field for form-name (required for JS forms)
                        Per Netlify docs: "you need to add a hidden input with name='form-name'"
                      */}
                      <input type="hidden" name="form-name" value="contact" />
                      
                      {/* 
                        Honeypot field for spam prevention
                        Per Netlify docs: "hidden form fields that lure bot users"
                        Must be hidden via CSS, included in POST body
                      */}
                      <p className="hidden" aria-hidden="true">
                        <label>
                          Don't fill this out if you're human:
                          <input 
                            name="bot-field" 
                            value={formData["bot-field"]}
                            onChange={handleChange}
                            tabIndex={-1}
                            autoComplete="off"
                          />
                        </label>
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm text-gray-400 mb-1">
                            Name <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          {/* 
                            Email field named "email" for Reply-to functionality
                            Per Netlify docs: "add an <input> with name='email' to set Reply-to"
                          */}
                          <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
                            Email <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="company" className="block text-sm text-gray-400 mb-1">Company</label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                            placeholder="Company name"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm text-gray-400 mb-1">Phone</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                            placeholder="+1 234 567 890"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm text-gray-400 mb-1">
                          Subject <span className="text-red-400">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                        >
                          <option value="">Select a topic</option>
                          <option value="AI Consulting">AI Consulting</option>
                          <option value="Data Engineering">Data Engineering</option>
                          <option value="Custom Development">Custom Development</option>
                          <option value="Product Inquiry - Allama">Product Inquiry - Allama</option>
                          <option value="Product Inquiry - DBLOCK">Product Inquiry - DBLOCK</option>
                          <option value="Partnership">Partnership Opportunity</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm text-gray-400 mb-1">
                          Message <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                          placeholder="Tell us about your project or question..."
                        />
                      </div>

                      {submitStatus === "error" && (
                        <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg flex items-start gap-2">
                          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                          <p className="text-red-400 text-sm">{errorMessage}</p>
                        </div>
                      )}

                      <GradientButton 
                        type="submit" 
                        className="w-full" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </GradientButton>
                    </form>
                  )}
                </GlassCard>
              </AnimatedWrapper>

              {/* Book a Call */}
              <AnimatedWrapper animation="slide-left">
                <GlassCard variant="gradient" className="p-6 h-full hover:scale-[1.01] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Book a Consultation</h2>
                  </div>

                  <p className="text-gray-400 mb-6">
                    Schedule a free 30-minute consultation to discuss your AI and data transformation needs.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-gray-300">
                      <Clock className="w-5 h-5 text-purple-400" />
                      <span>30-minute video call</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Users className="w-5 h-5 text-purple-400" />
                      <span>Meet with our experts</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Globe className="w-5 h-5 text-purple-400" />
                      <span>Available worldwide</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-400 text-center">
                    Fill out the contact form and we'll schedule a consultation with you.
                  </p>
                </GlassCard>
              </AnimatedWrapper>
            </div>
          </div>
        </section>

        {/* Quick Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <SectionHeader
                badge="Quick Info"
                title="What to Expect"
                alignment="center"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <AnimatedWrapper animation="float-up" delay={0.1}>
                  <GlassCard className="p-5 hover:scale-[1.03] transition-all duration-300">
                    <h3 className="font-bold text-white mb-2">Response Time</h3>
                    <p className="text-gray-400 text-sm">
                      We typically respond to inquiries within 24 hours during business days.
                    </p>
                  </GlassCard>
                </AnimatedWrapper>
                <AnimatedWrapper animation="float-up" delay={0.2}>
                  <GlassCard className="p-5 hover:scale-[1.03] transition-all duration-300">
                    <h3 className="font-bold text-white mb-2">Consultation</h3>
                    <p className="text-gray-400 text-sm">
                      Initial consultations are free. We'll discuss your needs and provide recommendations.
                    </p>
                  </GlassCard>
                </AnimatedWrapper>
                <AnimatedWrapper animation="float-up" delay={0.3}>
                  <GlassCard className="p-5 hover:scale-[1.03] transition-all duration-300">
                    <h3 className="font-bold text-white mb-2">Project Scope</h3>
                    <p className="text-gray-400 text-sm">
                      We work with projects of all sizes, from startups to enterprise transformations.
                    </p>
                  </GlassCard>
                </AnimatedWrapper>
                <AnimatedWrapper animation="float-up" delay={0.4}>
                  <GlassCard className="p-5 hover:scale-[1.03] transition-all duration-300">
                    <h3 className="font-bold text-white mb-2">Open Source</h3>
                    <p className="text-gray-400 text-sm">
                      Our products are open-source. Check our GitHub for documentation and community support.
                    </p>
                  </GlassCard>
                </AnimatedWrapper>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
