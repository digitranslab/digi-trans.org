import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { motion } from "framer-motion";
import { Clock, Database, Trash2, Shield } from "lucide-react";

export default function DataRetention() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400"><Clock className="w-8 h-8" /></div>
              <span className="text-purple-400 text-sm font-medium">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Data-Retention Policy</h1>
            <p className="text-gray-400">Last updated: January 2026</p>
          </motion.div>
        </div>
      </section>
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-10">
              <div className="bg-gray-900/50 rounded-2xl border border-gray-800 p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Overview</h3>
                <p className="text-gray-300 leading-relaxed">Digitrans retains personal data only for as long as necessary to fulfil the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce agreements. This policy outlines our retention periods and deletion practices.</p>
              </div>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-3"><Database className="w-5 h-5 text-purple-400" /><h2 className="text-2xl font-bold text-white">Retention Periods</h2></div>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <div className="bg-gray-900/30 rounded-xl border border-gray-800/50 p-5">
                      <h4 className="font-semibold text-white mb-2">Client Project Data</h4>
                      <p>Retained for the duration of the engagement plus 3 years after project completion, unless a longer period is required by contract or regulation.</p>
                    </div>
                    <div className="bg-gray-900/30 rounded-xl border border-gray-800/50 p-5">
                      <h4 className="font-semibold text-white mb-2">Employee & Contractor Data</h4>
                      <p>Retained for the duration of employment plus 7 years to comply with tax and employment law requirements.</p>
                    </div>
                    <div className="bg-gray-900/30 rounded-xl border border-gray-800/50 p-5">
                      <h4 className="font-semibold text-white mb-2">Marketing & Contact Data</h4>
                      <p>Retained until consent is withdrawn or for 2 years from last interaction, whichever comes first.</p>
                    </div>
                    <div className="bg-gray-900/30 rounded-xl border border-gray-800/50 p-5">
                      <h4 className="font-semibold text-white mb-2">Website Analytics</h4>
                      <p>Anonymised analytics data is retained for 26 months. IP addresses are anonymised within 24 hours of collection.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3"><Trash2 className="w-5 h-5 text-purple-400" /><h2 className="text-2xl font-bold text-white">Deletion & Disposal</h2></div>
                  <p className="text-gray-300 leading-relaxed">When data reaches the end of its retention period, it is securely deleted or anonymised. Electronic data is purged using industry-standard methods. Physical records are cross-shredded. Deletion is logged and auditable.</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3"><Shield className="w-5 h-5 text-purple-400" /><h2 className="text-2xl font-bold text-white">Your Rights</h2></div>
                  <p className="text-gray-300 leading-relaxed">You may request deletion of your personal data at any time by contacting us at <a href="mailto:privacy@digitrans.ai" className="text-purple-400 hover:text-purple-300">privacy@digitrans.ai</a>. We will respond within 30 days and comply unless a legal obligation requires continued retention.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
