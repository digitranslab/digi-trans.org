import React, { useEffect } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { Heart, Users, Shield, AlertTriangle, MessageCircle, Eye, Ban } from "lucide-react";

export default function CodeOfConduct() {
  useEffect(() => {
    document.title = "Code of Conduct | Digitrans";
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
              <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400"><Heart className="w-8 h-8" /></div>
              <span className="text-purple-400 text-sm font-medium">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Code of Conduct</h1>
            <p className="text-gray-400">Effective: January 2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-10">

            <div className="bg-gray-900/50 rounded-2xl border border-gray-800 p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Our Commitment</h3>
              <p className="text-gray-300 leading-relaxed">Digitrans is committed to providing a welcoming, inclusive, and harassment-free environment for everyone — regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation. This code applies to all Digitrans spaces: offices, events, conferences, meetups, workshops, open-source repositories, and digital channels.</p>
            </div>

            {/* Expected Behaviour */}
            <div>
              <div className="flex items-center gap-3 mb-4"><Users className="w-5 h-5 text-purple-400" /><h2 className="text-2xl font-bold text-white">Expected Behaviour</h2></div>
              <div className="space-y-3">
                {[
                  "Be respectful, considerate, and collaborative in all interactions",
                  "Welcome diverse perspectives, experiences, and backgrounds",
                  "Give and receive constructive feedback gracefully — focus on the work, not the person",
                  "Exercise empathy and kindness towards other community members",
                  "Respect the privacy and boundaries of others",
                  "Use welcoming and inclusive language in all communications",
                  "Focus on what is best for the community and the project",
                  "Acknowledge and credit the contributions of others",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Unacceptable Behaviour */}
            <div>
              <div className="flex items-center gap-3 mb-4"><Ban className="w-5 h-5 text-red-400" /><h2 className="text-2xl font-bold text-white">Unacceptable Behaviour</h2></div>
              <div className="space-y-3">
                {[
                  "Harassment, intimidation, or discrimination in any form",
                  "Offensive verbal or written comments related to gender, identity, orientation, disability, appearance, race, or religion",
                  "Unwelcome sexual attention, advances, or inappropriate physical contact",
                  "Deliberate disruption of talks, events, presentations, or discussions",
                  "Publishing others' private information (physical or electronic) without explicit consent",
                  "Sustained disruption of community events or online discussions",
                  "Advocating for or encouraging any of the above behaviours",
                  "Retaliation against anyone who reports a violation of this code",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scope */}
            <div>
              <div className="flex items-center gap-3 mb-4"><Eye className="w-5 h-5 text-purple-400" /><h2 className="text-2xl font-bold text-white">Scope</h2></div>
              <p className="text-gray-300 leading-relaxed">This Code of Conduct applies to all Digitrans community spaces, including but not limited to: company offices and co-working spaces, conferences and meetups organised or sponsored by Digitrans, online forums, Slack/Discord channels, GitHub repositories and issue trackers, social media accounts representing Digitrans, and any other space where Digitrans community members interact.</p>
            </div>

            {/* Open Source */}
            <div>
              <div className="flex items-center gap-3 mb-4"><MessageCircle className="w-5 h-5 text-purple-400" /><h2 className="text-2xl font-bold text-white">Open Source Community</h2></div>
              <p className="text-gray-300 leading-relaxed mb-3">For our open-source projects (Megamind, Allama, Dblock), additional guidelines apply:</p>
              <ul className="space-y-2 ml-4 text-gray-300">
                <li className="flex items-start gap-2"><span className="text-green-400 mt-1 flex-shrink-0">•</span>Be patient with new contributors — everyone starts somewhere</li>
                <li className="flex items-start gap-2"><span className="text-green-400 mt-1 flex-shrink-0">•</span>Provide constructive code review feedback focused on improvement</li>
                <li className="flex items-start gap-2"><span className="text-green-400 mt-1 flex-shrink-0">•</span>Respect maintainer decisions on project direction and scope</li>
                <li className="flex items-start gap-2"><span className="text-green-400 mt-1 flex-shrink-0">•</span>Report security vulnerabilities responsibly via our security policy</li>
              </ul>
            </div>

            {/* Reporting */}
            <div>
              <div className="flex items-center gap-3 mb-4"><Shield className="w-5 h-5 text-purple-400" /><h2 className="text-2xl font-bold text-white">Reporting & Enforcement</h2></div>
              <div className="text-gray-300 leading-relaxed space-y-3">
                <p>If you experience or witness unacceptable behaviour, or have any other concerns, please report it by contacting <a href="mailto:conduct@digitrans.ai" className="text-purple-400 hover:text-purple-300">conduct@digitrans.ai</a>. All reports will be reviewed and investigated promptly and fairly.</p>
                <p>All community leaders and event organisers are obligated to respect the privacy and security of the reporter. Reports are treated with strict confidentiality.</p>
                <div className="bg-gray-900/30 rounded-xl border border-gray-800/50 p-5 mt-4">
                  <h4 className="font-semibold text-white mb-2">Enforcement Actions</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-yellow-400 font-medium">Warning:</span> A private written warning with clarity on the nature of the violation.</p>
                    <p><span className="text-orange-400 font-medium">Temporary Ban:</span> Temporary exclusion from community spaces and events.</p>
                    <p><span className="text-red-400 font-medium">Permanent Ban:</span> Permanent exclusion from all Digitrans community spaces.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Attribution */}
            <div className="bg-gray-900/30 rounded-xl border border-gray-800/50 p-6">
              <p className="text-gray-500 text-sm">This Code of Conduct is adapted from the Contributor Covenant, version 2.1. For questions about this policy, contact <a href="mailto:conduct@digitrans.ai" className="text-purple-400 hover:text-purple-300">conduct@digitrans.ai</a>.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
