import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, UserCheck, Database, Globe, Mail } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400">
                <Shield className="w-8 h-8" />
              </div>
              <span className="text-purple-400 text-sm font-medium">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-gray-400">Last updated: February 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-12"
            >
              {/* Introduction */}
              <div className="bg-gray-900/50 rounded-2xl border border-gray-800 p-8">
                <p className="text-gray-300 text-lg leading-relaxed">
                  At DigiTransLab, we are committed to protecting your privacy and ensuring the security 
                  of your personal information. This Privacy Policy explains how we collect, use, disclose, 
                  and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              {/* Section 1 */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                    <Database className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
                </div>
                <div className="pl-10 space-y-4">
                  <p className="text-gray-300">We collect information that you provide directly to us, including:</p>
                  <ul className="space-y-3">
                    {[
                      "Name, email address, and contact information",
                      "Company name and job title",
                      "Project requirements and technical specifications",
                      "Communication preferences and correspondence",
                      "Payment and billing information (processed securely via third-party providers)"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-300 mt-4">We also automatically collect certain information when you visit our website:</p>
                  <ul className="space-y-3">
                    {[
                      "IP address and browser type",
                      "Device information and operating system",
                      "Pages visited and time spent on our website",
                      "Referring website and search terms"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-green-500/20 text-green-400">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">2. How We Use Your Information</h2>
                </div>
                <div className="pl-10 space-y-4">
                  <p className="text-gray-300">We use the information we collect to:</p>
                  <ul className="space-y-3">
                    {[
                      "Provide, maintain, and improve our services",
                      "Process transactions and send related information",
                      "Respond to your enquiries and provide customer support",
                      "Send you technical notices, updates, and security alerts",
                      "Communicate about products, services, and events",
                      "Monitor and analyse trends, usage, and activities",
                      "Detect, investigate, and prevent fraudulent transactions",
                      "Comply with legal obligations"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-orange-500/20 text-orange-400">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">3. Data Security</h2>
                </div>
                <div className="pl-10 space-y-4">
                  <p className="text-gray-300">
                    We implement appropriate technical and organisational measures to protect your personal 
                    information against unauthorised access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Encryption of data in transit and at rest",
                      "Regular security assessments and penetration testing",
                      "Access controls and authentication mechanisms",
                      "Employee training on data protection practices",
                      "Incident response procedures"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">4. Your Rights</h2>
                </div>
                <div className="pl-10 space-y-4">
                  <p className="text-gray-300">Under applicable data protection laws, you have the right to:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {[
                      { title: "Access", desc: "Request a copy of your personal data" },
                      { title: "Rectification", desc: "Request correction of inaccurate data" },
                      { title: "Erasure", desc: "Request deletion of your personal data" },
                      { title: "Restriction", desc: "Request limitation of processing" },
                      { title: "Portability", desc: "Receive your data in a portable format" },
                      { title: "Objection", desc: "Object to certain processing activities" }
                    ].map((right, i) => (
                      <div key={i} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                        <h4 className="font-semibold text-white mb-1">{right.title}</h4>
                        <p className="text-sm text-gray-400">{right.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-pink-500/20 text-pink-400">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">5. International Transfers</h2>
                </div>
                <div className="pl-10">
                  <p className="text-gray-300">
                    Your information may be transferred to and processed in countries other than your country of residence. 
                    We ensure appropriate safeguards are in place to protect your information in accordance with this 
                    Privacy Policy and applicable law, including Standard Contractual Clauses approved by the European Commission.
                  </p>
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl border border-purple-500/20 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Contact Us</h2>
                </div>
                <p className="text-gray-300 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please get in touch:
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors font-medium"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
