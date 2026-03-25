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
  Clock,
  Users,
  Globe,
  AlertCircle
} from "lucide-react";
import { GradientButton } from "../ui/gradient-button";
import { SectionHeader } from "../ui/section-header";
import { AnimatedWrapper } from "../ui/animated-wrapper";
import SEO from "../SEO";
import { TypewriterGradientText } from "../ui/typewriter-text";
import { HeroBackground } from "@/components/ui/hero-background";

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

  const inputClasses = "w-full px-4 py-2.5 bg-gray-900/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors";

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Contact Digitrans | AI & Data Consulting"
        description="Get in touch with Digitrans for AI consulting, data engineering, and custom software development. Book a free consultation today."
        canonicalUrl="/contact"
        keywords={["AI consulting contact", "data engineering services", "book consultation", "Digitrans contact"]}
      />
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-36 pb-24 overflow-hidden">
          {/* Animated background */}
          <HeroBackground />

          <div className="relative container mx-auto px-4">
            <AnimatedWrapper animation="fade-up-slow" className="max-w-3xl mx-auto text-center">
              <span className="inline-block mb-4 px-4 py-1.5 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30">
                Let's Connect
              </span>
              <TypewriterGradientText 
                text="Start Your AI & Data Journey"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                duration={1.8}
              />
              <p className="text-xl text-gray-300/90 mb-8">
                Whether you need strategic consulting, engineering expertise, or want to explore our products, 
                we're here to help transform your business.
              </p>
            </AnimatedWrapper>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* Contact Form */}
              <AnimatedWrapper animation="slide-right">
                <div className="relative group bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 h-full hover:border-purple-500/30 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-purple-400" />
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
                              className={inputClasses}
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
                              className={inputClasses}
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
                              className={inputClasses}
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
                              className={inputClasses}
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
                            className={inputClasses}
                          >
                            <option value="">Select a topic</option>
                            <option value="AI Consulting">AI Consulting</option>
                            <option value="Data Engineering">Data Engineering</option>
                            <option value="Custom Development">Custom Development</option>
                            <option value="Product Inquiry - Allama">Product Inquiry - Allama</option>
                            <option value="Product Inquiry - Dblock">Product Inquiry - Dblock</option>
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
                            className={`${inputClasses} resize-none`}
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
                          isLoading={isSubmitting}
                          leftIcon={!isSubmitting ? <Send className="w-4 h-4" /> : undefined}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </GradientButton>
                      </form>
                    )}
                  </div>
                </div>
              </AnimatedWrapper>

              {/* Book a Call */}
              <AnimatedWrapper animation="slide-left">
                <div className="relative group bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 h-full hover:border-purple-500/30 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-purple-400" />
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
                  </div>
                </div>
              </AnimatedWrapper>
            </div>
          </div>
        </section>

        {/* Quick Info */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <SectionHeader
                badge="Quick Info"
                title="What to Expect"
                alignment="center"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                {[
                  { title: "Response Time", desc: "We typically respond to inquiries within 24 hours during business days." },
                  { title: "Consultation", desc: "Initial consultations are free. We'll discuss your needs and provide recommendations." },
                  { title: "Project Scope", desc: "We work with projects of all sizes, from startups to enterprise transformations." },
                  { title: "Open Source", desc: "Our products are open-source. Check our GitHub for documentation and community support." },
                ].map((item, i) => (
                  <AnimatedWrapper key={i} animation="float-up" delay={i * 0.1}>
                    <div className="relative group bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-5 hover:border-purple-500/30 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                      <div className="relative">
                        <h3 className="font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </AnimatedWrapper>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
