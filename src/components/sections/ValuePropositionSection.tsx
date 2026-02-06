import React from "react";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { GradientButton } from "../ui/gradient-button";
import { ArrowRight, CheckCircle, Clock, Users, Shield, Zap } from "lucide-react";

const valueProps = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "8-12 Week Delivery",
    description: "From concept to market-ready MVP in record time",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Dedicated Team",
    description: "Senior developers, designers, and product strategists",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enterprise Security",
    description: "SOC 2, ISO 27001, and GDPR compliant from day one",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Proven Process",
    description: "Battle-tested methodology with 50+ successful launches",
  },
];

const guarantees = [
  "Fixed-price project guarantee",
  "Weekly progress demos",
  "Post-launch support included",
  "Source code ownership",
  "Scalable architecture from day one",
];

export default function ValuePropositionSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-1/4 w-1/2 h-1/2 bg-blue-900/10 rounded-full filter blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-purple-900/10 rounded-full filter blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block mb-3 px-4 py-1 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30">
                Why Choose Digitrans
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-400">
                Your Success is Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We're not just another development agency. We're your strategic partner in building a SaaS that scales, 
                succeeds, and stands the test of time.
              </p>
            </div>

            {/* Value Props Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {valueProps.map((prop, index) => (
                <motion.div
                  key={prop.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-blue-800/30"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600/30 to-blue-600/30 flex items-center justify-center text-purple-300">
                    {prop.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{prop.title}</h4>
                    <p className="text-sm text-gray-300">{prop.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <GradientButton
                size="lg"
                rightIcon={<ArrowRight className="h-5 w-5" />}
                onClick={() => window.open("/contact", "_self")}
              >
                Start Your Project Today
              </GradientButton>
            </motion.div>
          </motion.div>

          {/* Right Content - Guarantees Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Guarantee to You
                </h3>
                <p className="text-gray-300">
                  We stand behind our work with these commitments
                </p>
              </div>

              <div className="space-y-4">
                {guarantees.map((guarantee, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-500/30 to-emerald-500/30 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-gray-200">{guarantee}</span>
                  </motion.div>
                ))}
              </div>


            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}