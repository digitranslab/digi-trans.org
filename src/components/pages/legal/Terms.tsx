import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { motion } from "framer-motion";
import { FileText, Scale, AlertTriangle, Globe, Gavel, Link2, Mail } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-black to-black" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400">
                <FileText className="w-8 h-8" />
              </div>
              <span className="text-blue-400 text-sm font-medium">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Terms & Conditions
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
                  These Terms of Use ("Terms") constitute a legal agreement between you and/or the entity 
                  you represent ("you" or "your") and Digitrans ("we", "us" or "Digitrans"). 
                  By accessing or using our website and services, you agree to be bound by these Terms.
                </p>
              </div>

              {/* Section 1 */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">1. Acceptance of Terms</h2>
                </div>
                <div className="pl-10 space-y-4">
                  <p className="text-gray-300">
                    By accessing or using the Digitrans website (digi-trans.org) and any associated services, 
                    you acknowledge that you have read, understood, and agree to be bound by these Terms. 
                    If you do not agree to these Terms, you must not access or use our services.
                  </p>
                  <p className="text-gray-300">
                    We reserve the right to modify these Terms at any time. Changes will be effective immediately 
                    upon posting to our website. Your continued use of our services following any changes 
                    constitutes acceptance of those changes.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-green-500/20 text-green-400">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">2. Services Description</h2>
                </div>
                <div className="pl-10 space-y-4">
                  <p className="text-gray-300">
                    Digitrans provides data engineering, AI consulting, and software development services. 
                    Our services include but are not limited to:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Big Data Architecture & Engineering",
                      "Agentic AI for Data solutions",
                      "AI & Data Consulting services",
                      "Custom software development",
                      "Cloud infrastructure services"
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
                  <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                    <Gavel className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">3. Intellectual Property</h2>
                </div>
                <div className="pl-10 space-y-4">
                  <p className="text-gray-300">
                    All content on this website, including text, graphics, logos, images, and software, 
                    is the property of Digitrans or its content suppliers and is protected by 
                    international copyright laws.
                  </p>
                  <p className="text-gray-300">
                    You may not reproduce, distribute, modify, create derivative works of, publicly display, 
                    or exploit any content from this website without our prior written consent.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 mt-4">
                    <p className="text-sm text-gray-400">
                      <strong className="text-white">Note:</strong> Our open-source products (such as Allama) 
                      are governed by their respective open-source licences, which take precedence over these Terms 
                      for those specific products.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-orange-500/20 text-orange-400">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">4. Limitation of Liability</h2>
                </div>
                <div className="pl-10 space-y-4">
                  <p className="text-gray-300">
                    To the fullest extent permitted by applicable law, Digitrans shall not be liable for 
                    any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Loss of profits, revenue, or data",
                      "Business interruption",
                      "Loss of business opportunity",
                      "Costs of procurement of substitute services",
                      "Any other intangible losses"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-300 mt-4">
                    This limitation applies regardless of the legal theory upon which the claim is based, 
                    whether we have been advised of the possibility of such damages, and whether the 
                    remedies otherwise available are adequate.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                    <Link2 className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">5. Third-Party Links</h2>
                </div>
                <div className="pl-10">
                  <p className="text-gray-300">
                    Our website may contain links to third-party websites or services that are not owned 
                    or controlled by Digitrans. We have no control over, and assume no responsibility for, 
                    the content, privacy policies, or practices of any third-party websites or services. 
                    You acknowledge and agree that Digitrans shall not be responsible or liable for any 
                    damage or loss caused by your use of any such content, goods, or services.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-pink-500/20 text-pink-400">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">6. Governing Law</h2>
                </div>
                <div className="pl-10">
                  <p className="text-gray-300">
                    These Terms shall be governed by and construed in accordance with the laws of England and Wales, 
                    without regard to its conflict of law provisions. Any disputes arising from these Terms 
                    shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                  </p>
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-2xl border border-blue-500/20 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Contact Us</h2>
                </div>
                <p className="text-gray-300 mb-4">
                  If you have any questions about these Terms & Conditions, please get in touch:
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors font-medium"
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
