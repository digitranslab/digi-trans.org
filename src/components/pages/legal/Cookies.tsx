import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { motion } from "framer-motion";
import { Cookie, Settings, BarChart3, Target, Shield, Mail, CheckCircle } from "lucide-react";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/20 via-black to-black" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-orange-500/20 text-orange-400">
                <Cookie className="w-8 h-8" />
              </div>
              <span className="text-orange-400 text-sm font-medium">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Cookie Policy
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
                  This Cookie Policy explains how DigiTransLab uses cookies and similar tracking technologies 
                  when you visit our website. We use cookies to enhance your browsing experience, analyse 
                  website traffic, and understand where our visitors come from.
                </p>
              </div>

              {/* What are Cookies */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-orange-500/20 text-orange-400">
                    <Cookie className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">What Are Cookies?</h2>
                </div>
                <div className="pl-10">
                  <p className="text-gray-300">
                    Cookies are small text files that are stored on your device when you visit a website. 
                    They help websites remember your preferences and understand how you interact with the site. 
                    Cookies can be "persistent" (remaining on your device until deleted) or "session" 
                    (deleted when you close your browser).
                  </p>
                </div>
              </div>

              {/* Types of Cookies */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                    <Settings className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Types of Cookies We Use</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: <Shield className="w-6 h-6" />,
                      title: "Essential Cookies",
                      description: "Required for the website to function properly. They enable basic features like page navigation and access to secure areas.",
                      color: "green",
                      required: true
                    },
                    {
                      icon: <Settings className="w-6 h-6" />,
                      title: "Preference Cookies",
                      description: "Remember your settings and preferences, such as language selection and display options.",
                      color: "blue",
                      required: false
                    },
                    {
                      icon: <BarChart3 className="w-6 h-6" />,
                      title: "Analytics Cookies",
                      description: "Help us understand how visitors interact with our website by collecting anonymous usage data.",
                      color: "purple",
                      required: false
                    },
                    {
                      icon: <Target className="w-6 h-6" />,
                      title: "Marketing Cookies",
                      description: "Used to track visitors across websites to display relevant advertisements.",
                      color: "orange",
                      required: false
                    }
                  ].map((cookie, i) => (
                    <div key={i} className={`bg-gray-900/50 rounded-xl border border-gray-800 p-6 hover:border-${cookie.color}-500/30 transition-colors`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-2 rounded-lg bg-${cookie.color}-500/20 text-${cookie.color}-400`}>
                          {cookie.icon}
                        </div>
                        {cookie.required && (
                          <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">Required</span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{cookie.title}</h3>
                      <p className="text-sm text-gray-400">{cookie.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Third-Party Cookies */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Third-Party Services</h2>
                </div>
                <div className="pl-10 space-y-4">
                  <p className="text-gray-300">We use the following third-party services that may set cookies:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { name: "Google Analytics", purpose: "Website analytics" },
                      { name: "LinkedIn", purpose: "Social sharing" },
                      { name: "HubSpot", purpose: "Marketing automation" }
                    ].map((service, i) => (
                      <div key={i} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                        <h4 className="font-semibold text-white mb-1">{service.name}</h4>
                        <p className="text-sm text-gray-400">{service.purpose}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Managing Cookies */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                    <Settings className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Managing Your Cookie Preferences</h2>
                </div>
                <div className="pl-10 space-y-4">
                  <p className="text-gray-300">
                    You can control and manage cookies in several ways. Most browsers allow you to:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "View and delete cookies stored on your device",
                      "Block all cookies or only third-party cookies",
                      "Set preferences for specific websites",
                      "Receive notifications when cookies are set"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 mt-4">
                    <p className="text-sm text-gray-400">
                      <strong className="text-white">Note:</strong> Blocking certain cookies may impact your 
                      experience on our website and limit the functionality of some features.
                    </p>
                  </div>
                </div>
              </div>

              {/* Browser Settings */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-pink-500/20 text-pink-400">
                    <Settings className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Browser Cookie Settings</h2>
                </div>
                <div className="pl-10">
                  <p className="text-gray-300 mb-4">
                    You can manage cookies through your browser settings. Here are links to cookie management 
                    instructions for popular browsers:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { name: "Chrome", url: "https://support.google.com/chrome/answer/95647" },
                      { name: "Firefox", url: "https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" },
                      { name: "Safari", url: "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" },
                      { name: "Edge", url: "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" }
                    ].map((browser, i) => (
                      <a 
                        key={i}
                        href={browser.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 text-center hover:border-pink-500/30 transition-colors"
                      >
                        <span className="text-white font-medium">{browser.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-gradient-to-br from-orange-900/30 to-amber-900/30 rounded-2xl border border-orange-500/20 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-orange-500/20 text-orange-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Questions?</h2>
                </div>
                <p className="text-gray-300 mb-4">
                  If you have any questions about our use of cookies, please get in touch:
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-lg transition-colors font-medium"
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
