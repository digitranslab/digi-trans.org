/**
 * ArchitectureDiagram Component
 * 
 * Renders the Allama technical architecture visual using styled divs.
 * Shows the platform layers: Frontend, Backend, Infrastructure, Integrations.
 * 
 * Requirements: 9.6
 */

import React from "react";
import { motion } from "framer-motion";
import { 
  Monitor, 
  Server, 
  Database, 
  Plug, 
  Cpu,
  Cloud,
  Shield,
  Bot
} from "lucide-react";

interface ArchitectureLayer {
  name: string;
  icon: React.ReactNode;
  components: string[];
  color: string;
}

const layers: ArchitectureLayer[] = [
  {
    name: "Frontend",
    icon: <Monitor className="w-5 h-5" />,
    components: ["Next.js UI", "Workflow Canvas", "Case Dashboard"],
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Backend",
    icon: <Server className="w-5 h-5" />,
    components: ["FastAPI", "REST API", "WebSocket"],
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Orchestration",
    icon: <Cpu className="w-5 h-5" />,
    components: ["Temporal Server", "Workflow Engine", "Task Queue"],
    color: "from-indigo-500 to-indigo-600",
  },
  {
    name: "Infrastructure",
    icon: <Database className="w-5 h-5" />,
    components: ["PostgreSQL", "Redis Cache", "Object Storage"],
    color: "from-cyan-500 to-cyan-600",
  },
];

const integrationCategories = [
  { name: "SIEM", icon: <Shield className="w-4 h-4" /> },
  { name: "EDR", icon: <Shield className="w-4 h-4" /> },
  { name: "Identity", icon: <Shield className="w-4 h-4" /> },
  { name: "Ticketing", icon: <Shield className="w-4 h-4" /> },
  { name: "Threat Intel", icon: <Shield className="w-4 h-4" /> },
  { name: "AI/LLM", icon: <Bot className="w-4 h-4" /> },
];

export function ArchitectureDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative max-w-4xl mx-auto"
    >
      {/* Main Platform Box */}
      <div className="rounded-3xl border border-gray-700 bg-gray-900/50 backdrop-blur-sm p-6 md:p-8">
        {/* Platform Header */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Allama Platform Architecture
          </h3>
        </div>

        {/* Architecture Layers */}
        <div className="space-y-4">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700">
                {/* Layer Icon */}
                <div className={`p-2 rounded-lg bg-gradient-to-r ${layer.color} text-white`}>
                  {layer.icon}
                </div>
                
                {/* Layer Name */}
                <div className="w-28 font-medium text-white">
                  {layer.name}
                </div>
                
                {/* Components */}
                <div className="flex-1 flex flex-wrap gap-2">
                  {layer.components.map((component) => (
                    <span
                      key={component}
                      className="px-3 py-1 text-sm rounded-full bg-gray-700/50 text-gray-300 border border-gray-600"
                    >
                      {component}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Layer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-6 p-4 rounded-xl bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white">
              <Plug className="w-5 h-5" />
            </div>
            <span className="font-medium text-white">Integration Layer (80+ Tools)</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {integrationCategories.map((cat) => (
              <span
                key={cat.name}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-full bg-gray-800/50 text-gray-300 border border-gray-600"
              >
                {cat.icon}
                {cat.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
    </motion.div>
  );
}

export default ArchitectureDiagram;
