import React, { useEffect } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { FileCheck, Shield, Globe, Lock, Server, Users, AlertTriangle, Clock } from "lucide-react";

export default function DataProtectionAddendum() {
  useEffect(() => {
    document.title = "Data Protection Addendum | Digitrans";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400"><FileCheck className="w-8 h-8" /></div>
              <span className="text-purple-400 text-sm font-medium">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Data Protection Addendum</h1>
            <p className="text-gray-400">Effective: January 2026 · Version 2.1</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-10">

            <div className="bg-gray-900/50 rounded-2xl border border-gray-800 p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Overview</h3>
              <p className="text-gray-300 leading-relaxed">This Data Protection Addendum ("DPA") supplements the Master Services Agreement between Digitrans and its clients ("Controller"). It governs the processing of personal data by Digitrans ("Processor") on behalf of the Controller, ensuring compliance with the General Data Protection Regulation (EU) 2016/679 ("GDPR"), UK GDPR, and other applicable data protection legislation.</p>
            </div>

            {/* 1. Definitions */}
            <div>
              <div className="flex items-center gap-3 mb-4"><FileCheck className="w-5 h-5 text-purple-400" /><h2 className="text-2xl font-bold text-white">1. Definitions & Scope</h2></div>
              <div className="text-gray-300 leading-relaxed space-y-3">
                <p>"Personal Data", "Data Subject", "Processing", "Controller", "Processor", and "Sub-processor" have the meanings given in the GDPR. This DPA applies to all personal data processed by Digitrans in connection with the provision of data engineering, AI consulting, and software development services.</p>
                <p>The categories of data subjects typically include: client employees, end users of client applications, and individuals whose data is contained in datasets processed during engagements. The types of personal data may include names, email addresses, IP addresses, usage data, and any other personal data contained in client datasets.</p>
              </div>
            </div>

            {/* 2. Roles */}
            <div>
              <div className="flex items-center gap-3 mb-4"><Users className="w-5 h-5 text-purple-400" /><h2 className="text-2xl font-bold text-white">2. Controller & Processor Obligations</h2></div>
              <div className="text-gray-300 leading-relaxed space-y-3">
                <p>The Client acts as Data Controller and determines the purposes and means of processing. Digitrans acts as Data Processor and processes personal data only on documented instructions from the Controller, unless required by applicable law.</p>
                <p>Digitrans shall:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-1 flex-shrink-0">•</span>Process personal data only in accordance with the Controller's documented instructions</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-1 flex-shrink-0">•</span>Ensure that persons authorised to process personal data are bound by confidentiality obligations</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-1 flex-shrink-0">•</span>Implement appropriate technical and organisational security measures</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-1 flex-shrink-0">•</span>Assist the Controller in responding to data subject requests within 72 hours</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-1 flex-shrink-0">•</span>Delete or return all personal data upon termination of the engagement</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-1 flex-shrink-0">•</span>Make available all information necessary to demonstrate compliance</li>
                </ul>
              </div>
            </div>

            {/* 3. Security */}
            <div>
              <div className="flex items-center gap-3 mb-4"><Lock className="w-5 h-5 text-purple-400" /><h2 className="text-2xl font-bold text-white">3. Security Measures</h2></div>
              <div className="text-gray-300 leading-relaxed space-y-3">
                <p>Digitrans maintains ISO 27001 certification and implements the following technical and organisational measures:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {[
                    { icon: <Lock className="w-4 h-4" />, title: "Encryption", desc: "AES-256 at rest, TLS 1.3 in transit for all personal data" },
                    { icon: <Shield className="w-4 h-4" />, title: "Access Control", desc: "Role-based access, MFA enforced, principle of least privilege" },
                    { icon: <Server className="w-4 h-4" />, title: "Infrastructure", desc: "SOC 2 Type II compliant hosting, regular penetration testing" },
                    { icon: <AlertTriangle className="w-4 h-4" />, title: "Incident Response", desc: "24-hour detection, 72-hour notification to Controller" },
                    { icon: <Clock className="w-4 h-4" />, title: "Backup & Recovery", desc: "Encrypted backups with tested disaster recovery procedures" },
                    { icon: <Users className="w-4 h-4" />, title: "Personnel", desc: "Background checks, annual security training, NDAs for all staff" },
                  ].map((m) => (
                    <div key={m.title} className="bg-gray-900/30 rounded-xl border border-gray-800/50 p-4">
                      <div className="flex items-center gap-2 mb-1 text-purple-400">{m.icon}<span className="text-sm font-semibold text-white">{m.title}</span></div>
                      <p className="text-xs text-gray-500">{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Sub-processors */}
            <div>
              <div className="flex items-center gap-3 mb-4"><Server className="w-5 h-5 text-purple-400" /><h2 className="text-2xl font-bold text-white">4. Sub-Processors</h2></div>
              <div className="text-gray-300 leading-relaxed space-y-3">
                <p>Digitrans may engage sub-processors to assist in providing services. The Controller grants general authorisation for the use of sub-processors, subject to the following conditions:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-1 flex-shrink-0">•</span>Digitrans will maintain an up-to-date list of sub-processors available upon request</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-1 flex-shrink-0">•</span>The Controller will be notified at least 30 days before any new sub-processor is engaged</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-1 flex-shrink-0">•</span>The Controller may object to a new sub-processor within 14 days of notification</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-1 flex-shrink-0">•</span>All sub-processors are bound by data protection obligations no less protective than this DPA</li>
                </ul>
              </div>
            </div>

            {/* 5. International Transfers */}
            <div>
              <div className="flex items-center gap-3 mb-4"><Globe className="w-5 h-5 text-purple-400" /><h2 className="text-2xl font-bold text-white">5. International Data Transfers</h2></div>
              <div className="text-gray-300 leading-relaxed space-y-3">
                <p>Where personal data is transferred outside the European Economic Area or the United Kingdom, Digitrans ensures appropriate safeguards are in place:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-1 flex-shrink-0">•</span>Standard Contractual Clauses (SCCs) as approved by the European Commission (Decision 2021/914)</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-1 flex-shrink-0">•</span>UK International Data Transfer Agreement or Addendum where applicable</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-1 flex-shrink-0">•</span>Transfer Impact Assessments conducted for each transfer destination</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-1 flex-shrink-0">•</span>Supplementary measures including encryption and pseudonymisation where required</li>
                </ul>
                <p>For sovereign AI engagements, Digitrans offers fully on-premise deployment with zero data transfer outside the client's infrastructure.</p>
              </div>
            </div>

            {/* 6. Data Breach */}
            <div>
              <div className="flex items-center gap-3 mb-4"><AlertTriangle className="w-5 h-5 text-purple-400" /><h2 className="text-2xl font-bold text-white">6. Data Breach Notification</h2></div>
              <div className="text-gray-300 leading-relaxed space-y-3">
                <p>In the event of a personal data breach, Digitrans shall notify the Controller without undue delay and in any event within 72 hours of becoming aware of the breach. The notification shall include the nature of the breach, categories and approximate number of data subjects affected, likely consequences, and measures taken or proposed to address the breach.</p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gray-900/30 rounded-xl border border-gray-800/50 p-6">
              <p className="text-gray-400 text-sm">For a signed copy of this DPA, to request the current sub-processor list, or to discuss specific data protection requirements, contact our Data Protection Officer at <a href="mailto:dpo@digitrans.ai" className="text-purple-400 hover:text-purple-300">dpo@digitrans.ai</a>.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
