/**
 * TechStackShowcase Component
 * 
 * Animated technology stack showcase with platform logos
 * and interactive hover effects. Shows the technologies
 * and platforms we work with.
 */

import { motion } from "framer-motion";

// Platform icons as inline SVGs - Visible on dark background
const PlatformIcons: Record<string, JSX.Element> = {
  Databricks: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FF3621">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L18 7l-6 3-6-3 6-2.5zM4 8.5l6 3v7l-6-3v-7zm16 0v7l-6 3v-7l6-3z"/>
    </svg>
  ),
  Snowflake: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#29B5E8">
      <path d="M12 2v4m0 12v4M2 12h4m12 0h4M5.64 5.64l2.83 2.83m7.07 7.07l2.82 2.82M5.64 18.36l2.83-2.83m7.07-7.07l2.82-2.82"/>
      <circle cx="12" cy="12" r="3" fill="#29B5E8"/>
      <path d="M12 2v4m0 12v4M2 12h4m12 0h4" stroke="#29B5E8" strokeWidth="2" strokeLinecap="round"/>
      <path d="M5.64 5.64l2.83 2.83m7.07 7.07l2.82 2.82M5.64 18.36l2.83-2.83m7.07-7.07l2.82-2.82" stroke="#29B5E8" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  "Apache Spark": (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#E25A1C">
      <path d="M12 2C8.5 2 5.5 4 4 7l4 2c.8-1.5 2.3-2.5 4-2.5s3.2 1 4 2.5l4-2c-1.5-3-4.5-5-8-5z"/>
      <path d="M4 7v6c0 4.4 3.6 8 8 8s8-3.6 8-8V7l-4 2v4c0 2.2-1.8 4-4 4s-4-1.8-4-4V9L4 7z"/>
    </svg>
  ),
  "Delta Lake": (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#00ADD8">
      <path d="M12 3L3 21h18L12 3zm0 4l6 12H6l6-12z"/>
    </svg>
  ),
  AWS: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FF9900">
      <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z"/>
    </svg>
  ),
  Azure: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#0078D4">
      <path d="M13.05 4.24L6.56 18.05a.5.5 0 0 1-.47.31H2.5a.5.5 0 0 1-.45-.72L8.17 4.24a.5.5 0 0 1 .45-.28h4a.5.5 0 0 1 .43.28zm8.45 12.01l-4.28 1.96a.5.5 0 0 1-.22.05H9.5a.25.25 0 0 1-.17-.43l6.14-5.97a.5.5 0 0 1 .35-.14h5.68a.5.5 0 0 1 .35.85l-4.35 4.23a.5.5 0 0 0 .35.85h4.5a.5.5 0 0 1 .35.85l-.85.75z"/>
    </svg>
  ),
  GCP: (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path fill="#EA4335" d="M12 7l1.6 3H17l-2.5 2 1 3.5L12 13l-3.5 2.5 1-3.5L7 10h3.4z"/>
      <path fill="#4285F4" d="M19.5 12c0-.3 0-.6-.1-.9l-1.9.7c0 .1.1.2.1.2 0 1.9-1.6 3.5-3.5 3.5-.2 0-.3 0-.5-.1l-.7 1.9c.4.1.8.1 1.2.1 3 0 5.4-2.4 5.4-5.4z"/>
      <path fill="#FBBC05" d="M12 17.5c-1.9 0-3.5-1.6-3.5-3.5 0-.2 0-.3.1-.5l-1.9-.7c-.1.4-.1.8-.1 1.2 0 3 2.4 5.4 5.4 5.4.3 0 .6 0 .9-.1l-.7-1.9c-.1.1-.2.1-.2.1z"/>
      <path fill="#34A853" d="M8.5 12c0-1.9 1.6-3.5 3.5-3.5.2 0 .3 0 .5.1l.7-1.9c-.4-.1-.8-.1-1.2-.1-3 0-5.4 2.4-5.4 5.4 0 .3 0 .6.1.9l1.9-.7c-.1-.1-.1-.2-.1-.2z"/>
    </svg>
  ),
  OpenAI: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#00A67E">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
    </svg>
  ),
  LangChain: (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <circle cx="12" cy="12" r="10" fill="none" stroke="#10B981" strokeWidth="2"/>
      <path d="M8 12h8M12 8v8" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="8" cy="12" r="2" fill="#10B981"/>
      <circle cx="16" cy="12" r="2" fill="#10B981"/>
      <circle cx="12" cy="8" r="2" fill="#10B981"/>
      <circle cx="12" cy="16" r="2" fill="#10B981"/>
    </svg>
  ),
  "Hugging Face": (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FFD21E">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8.5 8C9.33 8 10 8.67 10 9.5S9.33 11 8.5 11 7 10.33 7 9.5 7.67 8 8.5 8zm7 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-3.5 9c-2.33 0-4.32-1.45-5.12-3.5h1.67c.69 1.19 1.97 2 3.45 2s2.76-.81 3.45-2h1.67c-.8 2.05-2.79 3.5-5.12 3.5z"/>
    </svg>
  ),
  "Apache Kafka": (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <circle cx="12" cy="5" r="2.5" fill="#FFFFFF"/>
      <circle cx="6" cy="12" r="2.5" fill="#FFFFFF"/>
      <circle cx="18" cy="12" r="2.5" fill="#FFFFFF"/>
      <circle cx="12" cy="19" r="2.5" fill="#FFFFFF"/>
      <path d="M12 7.5v4M9 10l2 1.5M15 10l-2 1.5M12 16.5v-4M9 14l2-1.5M15 14l-2-1.5" stroke="#FFFFFF" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  "Apache Flink": (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path d="M4 8l8-4 8 4" stroke="#E6526F" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M4 12l8 4 8-4" stroke="#E6526F" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M4 16l8 4 8-4" stroke="#E6526F" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    </svg>
  ),
};

// Default icon for platforms without specific icons
const DefaultIcon = ({ color }: { color: string }) => (
  <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: color }}>
    <span className="text-white text-xs font-bold">●</span>
  </div>
);

const technologies = [
  // Data Platforms
  { name: "Databricks", category: "Data Platform", color: "#FF3621" },
  { name: "Snowflake", category: "Data Platform", color: "#29B5E8" },
  { name: "Apache Spark", category: "Processing", color: "#E25A1C" },
  { name: "Delta Lake", category: "Storage", color: "#00ADD8" },
  
  // Cloud
  { name: "AWS", category: "Cloud", color: "#FF9900" },
  { name: "Azure", category: "Cloud", color: "#0078D4" },
  { name: "GCP", category: "Cloud", color: "#4285F4" },
  
  // AI/ML
  { name: "OpenAI", category: "AI", color: "#00A67E" },
  { name: "LangChain", category: "AI", color: "#10B981" },
  { name: "Hugging Face", category: "AI", color: "#FFD21E" },
  
  // Streaming
  { name: "Apache Kafka", category: "Streaming", color: "#FFFFFF" },
  { name: "Apache Flink", category: "Streaming", color: "#E6526F" },
];

// Create a copy for reverse row to avoid mutation issues
const technologiesReversed = [...technologies].reverse();

export default function TechStackShowcase() {
  const renderIcon = (tech: typeof technologies[0]) => {
    // Use inline SVG icons for reliable rendering
    const Icon = PlatformIcons[tech.name];
    if (Icon) {
      return Icon;
    }
    return <DefaultIcon color={tech.color} />;
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
      
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block mb-4 px-4 py-1.5 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-700">
            Technology Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Built on Industry-Leading Platforms
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We leverage the best technologies to deliver enterprise-grade solutions
          </p>
        </motion.div>
      </div>

      {/* Scrolling logos - Row 1 */}
      <div className="relative mb-8">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...technologies, ...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 px-5 py-3 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer hover:bg-gray-800/50"
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 opacity-90 group-hover:opacity-100 transition-opacity">
                  {renderIcon(tech)}
                </div>
                <span className="text-white font-medium whitespace-nowrap group-hover:text-purple-400 transition-colors">
                  {tech.name}
                </span>
                <span className="text-xs text-gray-500 whitespace-nowrap px-2 py-0.5 bg-gray-800/50 rounded">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scrolling logos - Row 2 (reverse direction) */}
      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [-1920, 0] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
        >
          {[...technologiesReversed, ...technologiesReversed, ...technologiesReversed].map((tech, index) => (
            <div
              key={`${tech.name}-rev-${index}`}
              className="flex-shrink-0 px-5 py-3 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer hover:bg-gray-800/50"
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 opacity-90 group-hover:opacity-100 transition-opacity">
                  {renderIcon(tech)}
                </div>
                <span className="text-white font-medium whitespace-nowrap group-hover:text-blue-400 transition-colors">
                  {tech.name}
                </span>
                <span className="text-xs text-gray-500 whitespace-nowrap px-2 py-0.5 bg-gray-800/50 rounded">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
