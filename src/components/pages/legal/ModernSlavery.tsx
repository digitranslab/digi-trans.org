import React, { useEffect } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { Scale, Search, Users, FileCheck, Globe, Shield, AlertTriangle } from "lucide-react";

export default function ModernSlavery() {
  useEffect(() => {
    document.title = "Modern Slavery Statement | Digitrans";
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
              <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400"><Scale className="w-8 h-8" /></div>
              <span className="text-purple-400 text-sm font-medium">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Modern Slavery Statement</h1>
            <p className="text-gray-400">Financial year ending December 2025</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-10">

            <div className="bg-gray-900/50 rounded-2xl border border-gray-800 p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Our Position</h3>
              <p className="text-gray-300 leading-relaxed">Digitrans is committed to preventing modern slavery and human trafficking in all its forms. This statement is made pursuant to Section 54 of the UK Modern Slavery Act 2015 and sets out the steps we have taken during the financial year ending December 2025 to ensure that slavery and human trafficking are not taking place in our business or supply chains.</p>
            </div>

            {/* Our Business */}
            <div>
              <div className="flex items-center gap-3 mb-4"><Globe className="w-5 h-5 text-purple-400" /><h2 className="text-2xl font-bold text-white">Our Business</h2></div>
              <div className="text-gray-300 leading-relaxed space-y-3">
                <p>Digitrans is a technology consultancy specialising in software engineering, data engineering, AI strategy, and sovereign AI deployment. We operate from offices in Dubai (HQ), London, and Casablanca, serving enterprise clients across financial services, government, manufacturing, energy, and other sectors.</p>
                <p>Our workforce consists of approximately 80 salaried employees and a network of vetted specialist contractors. We are a knowledge-based business where our people are our primary asset.</p>
              </div>
            </div>

            {/* Supply Chain */}
            <div>
              <div className="flex items-center gap-3 mb-4"><Search className="w-5 h-5 text-purple-400" /><h2 className="text-2xl font-bold text-white">Our Supply Chain</h2></div>
              <div className="text-gray-300 leading-relaxed space-y-3">
                <p>Our supply chain is primarily composed of:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-1 flex-shrink-0">•</span>Cloud infrastructure providers (AWS, Google Cloud, Microsoft Azure)</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-1 flex-shrink-0">•</span>Software and SaaS vendors for development tools and platforms</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-1 flex-shrink-0">•</span>Professional services firms for specialist consulting engagements</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-1 flex-shrink-0">•</span>Office facilities management and equipment suppliers</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-1 flex-shrink-0">•</span>Recruitment agencies for permanent and contract hires</li>
                </ul>
                <p>We assess our supply chain as low-risk for modern slavery given its composition of established technology companies and professional services firms. However, we remain vigilant and apply due diligence proportionate to the risk.</p>
              </div>
            </div>

            {/* Policies */}
            <div>
              <div className="flex items-center gap-3 mb-4"><Shield className="w-5 h-5 text-purple-400" /><h2 className="text-2xl font-bold text-white">Our Policies</h2></div>
              <div className="text-gray-300 leading-relaxed space-y-3">
                <p>We maintain the following policies relevant to modern slavery prevention:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {[
                    { title: "Anti-Slavery Policy", desc: "Explicit prohibition of modern slavery in all forms, with clear definitions and responsibilities." },
                    { title: "Whistleblowing Policy", desc: "Confidential reporting channels for employees and contractors to raise concerns without fear of retaliation." },
                    { title: "Recruitment Policy", desc: "Right-to-work verification, fair pay practices, and prohibition of recruitment fees charged to workers." },
                    { title: "Supplier Code of Conduct", desc: "Requires all suppliers to confirm compliance with anti-slavery legislation and ethical labour practices." },
                  ].map((p) => (
                    <div key={p.title} className="bg-gray-900/30 rounded-xl border border-gray-800/50 p-4">
                      <h4 className="font-semibold text-white text-sm mb-1">{p.title}</h4>
                      <p className="text-xs text-gray-500">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Due Diligence */}
            <div>
              <div className="flex items-center gap-3 mb-4"><Users className="w-5 h-5 text-purple-400" /><h2 className="text-2xl font-bold text-white">Due Diligence & Risk Assessment</h2></div>
              <div className="text-gray-300 leading-relaxed space-y-3">
                <p>During the reporting period, we have taken the following steps:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-1 flex-shrink-0">•</span>Conducted right-to-work checks for 100% of new employees and contractors</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-1 flex-shrink-0">•</span>Verified that all employees are paid at or above market rates with transparent, written contracts</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-1 flex-shrink-0">•</span>Assessed key suppliers against modern slavery risk criteria</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-1 flex-shrink-0">•</span>Included anti-slavery clauses in all new supplier contracts</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-1 flex-shrink-0">•</span>Provided modern slavery awareness training to recruitment and procurement staff</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-1 flex-shrink-0">•</span>Reviewed and updated our whistleblowing procedures</li>
                </ul>
              </div>
            </div>

            {/* Training */}
            <div>
              <div className="flex items-center gap-3 mb-4"><FileCheck className="w-5 h-5 text-purple-400" /><h2 className="text-2xl font-bold text-white">Training & Awareness</h2></div>
              <p className="text-gray-300 leading-relaxed">Key staff involved in recruitment, procurement, and supplier management receive training on identifying indicators of modern slavery and human trafficking. All employees are made aware of our anti-slavery policy during onboarding and through annual refresher communications.</p>
            </div>

            {/* Reporting */}
            <div>
              <div className="flex items-center gap-3 mb-4"><AlertTriangle className="w-5 h-5 text-purple-400" /><h2 className="text-2xl font-bold text-white">Reporting Concerns</h2></div>
              <p className="text-gray-300 leading-relaxed">We encourage anyone — employees, contractors, suppliers, or members of the public — to report concerns about modern slavery in any part of our business or supply chain. Reports can be made confidentially to <a href="mailto:compliance@digitrans.ai" className="text-purple-400 hover:text-purple-300">compliance@digitrans.ai</a>. We maintain a zero-tolerance approach and will not retaliate against anyone who raises a genuine concern.</p>
            </div>

            {/* Approval */}
            <div className="bg-gray-900/30 rounded-xl border border-gray-800/50 p-6">
              <p className="text-gray-400 text-sm">This statement was approved by the Board of Directors of Digitrans and signed by the CEO on behalf of the company. It will be reviewed and updated annually. For questions, contact <a href="mailto:compliance@digitrans.ai" className="text-purple-400 hover:text-purple-300">compliance@digitrans.ai</a>.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
