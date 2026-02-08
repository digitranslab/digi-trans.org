import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { motion } from "framer-motion";
import { Shield, Lock, Server, Eye, AlertTriangle, CheckCircle, Mail, Award } from "lucide-react";

export default function Security() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 via-black to-black" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-green-500/20 text-green-400">
                <Shield className="w-8 h-8" />
              </div>
              <span className="text-green-400 text-sm font-medium">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Security Policy
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
                  At DigiTransLab, security is at the core of everything we do. We implement comprehensive 
                  security measures to protect our systems, our clients' data, and the integrity of our services. 
                  This policy outlines our commitment to maintaining the highest security standards.
                </p>
              </div>

              {/* Certifications */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-green-500/20 text-green-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Certifications & Compliance</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "ISO 27001",
                      description: "Information Security Management System certification",
                      status: "Certified"
                    },
                    {
                      title: "SOC 2 Type II",
                      description: "Service Organisation Control audit compliance",
                      status: "Compliant"
                    },
                    {
                      title: "GDPR",
                      description: "General Data Protection Regulation compliance",
                      status: "Compliant"
                    }
                  ].map((cert, i) => (
                    <div key={i} className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                        <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">
                          {cert.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">{cert.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Protection */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Data Protection</h2>
                </div>
                <div className="pl-10 space-y-4">
                  <p className="text-gray-300">
                    We implement industry-leading security measures to protect your data:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: "Encryption at Rest", desc: "AES-256 encryption for all stored data" },
                      { title: "Encryption in Transit", desc: "TLS 1.3 for all data transmission" },
                      { title: "Key Management", desc: "Hardware Security Modules (HSM) for key storage" },
                      { title: "Data Backup", desc: "Encrypted backups with geo-redundancy" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-white">{item.title}</h4>
                          <p className="text-sm text-gray-400">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Infrastructure Security */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                    <Server className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Infrastructure Security</h2>
                </div>
                <div className="pl-10 space-y-4">
                  <p className="text-gray-300">
                    Our infrastructure is designed with security as a foundational principle:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Multi-layer DDoS protection and mitigation",
                      "Web Application Firewall (WAF) with custom rules",
                      "Network segmentation and micro-segmentation",
                      "Intrusion Detection and Prevention Systems (IDS/IPS)",
                      "Regular vulnerability scanning and penetration testing",
                      "24/7 Security Operations Centre (SOC) monitoring"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400">
                        <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Access Control */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-orange-500/20 text-orange-400">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Access Control</h2>
                </div>
                <div className="pl-10 space-y-4">
                  <p className="text-gray-300">
                    We enforce strict access control measures across our organisation:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Role-Based Access Control (RBAC) with least privilege principle",
                      "Multi-Factor Authentication (MFA) required for all systems",
                      "Single Sign-On (SSO) with enterprise identity providers",
                      "Regular access reviews and privilege audits",
                      "Automated deprovisioning for departing employees",
                      "Privileged Access Management (PAM) for sensitive systems"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400">
                        <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Incident Response */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-red-500/20 text-red-400">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Incident Response</h2>
                </div>
                <div className="pl-10 space-y-4">
                  <p className="text-gray-300">
                    We maintain a comprehensive incident response programme:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: "24/7 Response Team", desc: "Dedicated security team available around the clock" },
                      { title: "Incident Playbooks", desc: "Documented procedures for common incident types" },
                      { title: "Communication Plan", desc: "Clear escalation and notification procedures" },
                      { title: "Post-Incident Review", desc: "Root cause analysis and continuous improvement" }
                    ].map((item, i) => (
                      <div key={i} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                        <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Vulnerability Disclosure */}
              <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-2xl border border-green-500/20 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-green-500/20 text-green-400">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Responsible Disclosure</h2>
                </div>
                <p className="text-gray-300 mb-4">
                  We welcome responsible disclosure of security vulnerabilities. If you discover a security issue, 
                  please report it to us privately so we can address it before public disclosure.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700 mb-4">
                  <p className="text-sm text-gray-400">
                    <strong className="text-white">What to include:</strong> Description of the vulnerability, 
                    steps to reproduce, potential impact, and any suggested remediation.
                  </p>
                </div>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors font-medium"
                >
                  Report a Vulnerability
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
