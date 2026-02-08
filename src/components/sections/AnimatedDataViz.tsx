/**
 * AnimatedDataViz Component
 * 
 * Animated data visualization section showcasing AI/Data capabilities
 * with animated counters, progress bars, and visual elements.
 * 
 * Inspired by modern data visualization tools like Infogram and LottieFiles
 */

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Database, 
  Zap, 
  BarChart3,
  PieChart,
  Activity,
  Layers,
  Bot,
  Sparkles
} from "lucide-react";

// Animated counter component
function AnimatedCounter({ 
  value, 
  suffix = "", 
  prefix = "",
  duration = 2 
}: { 
  value: number; 
  suffix?: string; 
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.floor(easeOut * value));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
}

// Animated bar chart with proper visualization
function AnimatedBarChart() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const bars = [
    { label: "Q1", value: 65, color: "#8B5CF6" },
    { label: "Q2", value: 85, color: "#3B82F6" },
    { label: "Q3", value: 75, color: "#06B6D4" },
    { label: "Q4", value: 95, color: "#10B981" },
  ];

  return (
    <div ref={ref} className="h-full flex flex-col">
      {/* Chart container with fixed height for bars */}
      <div className="flex-1 flex items-end gap-4 pb-2">
        {bars.map((bar, index) => (
          <div key={bar.label} className="flex-1 flex flex-col items-center h-full">
            {/* Value label above bar */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.8 }}
              className="text-sm font-bold text-white mb-2"
            >
              {bar.value}%
            </motion.span>
            
            {/* Bar container - takes remaining height */}
            <div className="flex-1 w-full flex items-end">
              <motion.div
                initial={{ height: 0 }}
                animate={isInView ? { height: `${bar.value}%` } : { height: 0 }}
                transition={{ duration: 1, delay: index * 0.15, ease: "easeOut" }}
                className="w-full rounded-t-lg relative overflow-hidden"
                style={{ 
                  backgroundColor: bar.color,
                  minHeight: isInView ? '20px' : '0px'
                }}
              >
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                {/* Shine effect */}
                <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/20 to-transparent" />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
      
      {/* X-axis labels */}
      <div className="flex gap-4 pt-3 border-t border-gray-700/50">
        {bars.map((bar) => (
          <div key={bar.label} className="flex-1 text-center">
            <span className="text-xs text-gray-400 font-medium">{bar.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Animated donut chart
function AnimatedDonutChart() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const segments = [
    { value: 35, color: "#8B5CF6", label: "AI/ML" },
    { value: 25, color: "#3B82F6", label: "Data Eng" },
    { value: 20, color: "#06B6D4", label: "Cloud" },
    { value: 20, color: "#10B981", label: "Consulting" },
  ];

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  
  // Pre-calculate all segment positions
  const segmentsWithOffsets = segments.reduce((acc, segment, index) => {
    const prevCumulative = index === 0 ? 0 : acc[index - 1].cumulativeEnd;
    const segmentLength = (segment.value / 100) * circumference;
    
    acc.push({
      ...segment,
      segmentLength,
      // Offset from the start (top of circle after -90deg rotation)
      offset: -prevCumulative,
      cumulativeEnd: prevCumulative + segmentLength
    });
    
    return acc;
  }, [] as Array<{ value: number; color: string; label: string; segmentLength: number; offset: number; cumulativeEnd: number }>);

  return (
    <div ref={ref} className="relative w-40 h-40 mx-auto">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
        {segmentsWithOffsets.map((segment, index) => (
          <motion.circle
            key={segment.label}
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke={segment.color}
            strokeWidth="20"
            strokeLinecap="butt"
            style={{
              strokeDasharray: `${segment.segmentLength} ${circumference}`,
              strokeDashoffset: segment.offset,
            }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
        ))}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-white">
            <AnimatedCounter value={100} suffix="%" />
          </div>
          <div className="text-xs text-gray-400">Coverage</div>
        </div>
      </div>
    </div>
  );
}

// Animated area chart for data processed
function AnimatedAreaChart() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Data points for the area chart
  const dataPoints = [
    { x: 0, y: 30 },
    { x: 50, y: 45 },
    { x: 100, y: 35 },
    { x: 150, y: 60 },
    { x: 200, y: 50 },
    { x: 250, y: 70 },
    { x: 300, y: 55 },
    { x: 350, y: 80 },
    { x: 400, y: 65 },
  ];
  
  // Create path string
  const linePath = dataPoints.map((p, i) => 
    `${i === 0 ? 'M' : 'L'} ${p.x} ${100 - p.y}`
  ).join(' ');
  
  const areaPath = `${linePath} L 400 100 L 0 100 Z`;

  return (
    <div ref={ref} className="relative h-24 mt-4">
      <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        
        {/* Area fill */}
        <motion.path
          d={areaPath}
          fill="url(#areaGradient)"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        {/* Line */}
        <motion.path
          d={linePath}
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        {/* Data points */}
        {dataPoints.map((point, index) => (
          <motion.circle
            key={index}
            cx={point.x}
            cy={100 - point.y}
            r="4"
            fill="#8B5CF6"
            stroke="#1f2937"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.1 * index + 0.5 }}
          />
        ))}
      </svg>
      
      {/* X-axis labels */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 px-1">
        <span>Jan</span>
        <span>Mar</span>
        <span>May</span>
        <span>Jul</span>
        <span>Sep</span>
      </div>
    </div>
  );
}


// Main component
export default function AnimatedDataViz() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-black relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30">
            <Activity className="w-4 h-4" />
            Live Data Insights
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Data Intelligence at Scale
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-time analytics and AI-powered insights driving business transformation
          </p>
        </motion.div>

        {/* Main Grid - 2x2 layout with equal sized boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Box 1: Data Processed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/30 to-blue-900/20 border border-purple-500/20 backdrop-blur-sm h-[320px] flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-500/20">
                <Layers className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-gray-300 font-medium">Data Processed</span>
            </div>
            <div className="text-5xl font-bold text-white mb-2">
              <AnimatedCounter value={50} suffix=" PB+" />
            </div>
            <div className="text-sm text-gray-400 mb-4">Petabytes across all platforms</div>
            <div className="flex-1">
              <AnimatedAreaChart />
            </div>
          </motion.div>

          {/* Box 2: Quarterly Growth */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm h-[320px] flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300 font-medium">Quarterly Growth</span>
              </div>
              <span className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded-full">
                +45% YoY
              </span>
            </div>
            <div className="flex-1">
              <AnimatedBarChart />
            </div>
          </motion.div>

          {/* Box 3: AI Models Active */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/30 to-cyan-900/20 border border-blue-500/20 backdrop-blur-sm h-[320px] flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <Sparkles className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-gray-300 font-medium">AI Models Active</span>
            </div>
            <div className="text-5xl font-bold text-white mb-2">
              <AnimatedCounter value={200} suffix="+" />
            </div>
            <div className="text-sm text-gray-400 mb-4">Production ML models</div>
            
            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-3 mt-auto">
              <div className="text-center p-3 bg-blue-500/10 rounded-lg">
                <div className="text-xl font-bold text-blue-400">98%</div>
                <div className="text-xs text-gray-500">Accuracy</div>
              </div>
              <div className="text-center p-3 bg-cyan-500/10 rounded-lg">
                <div className="text-xl font-bold text-cyan-400">15ms</div>
                <div className="text-xs text-gray-500">Latency</div>
              </div>
              <div className="text-center p-3 bg-purple-500/10 rounded-lg">
                <div className="text-xl font-bold text-purple-400">24/7</div>
                <div className="text-xs text-gray-500">Uptime</div>
              </div>
            </div>
            
            {/* Mini progress bars */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 w-16">GPT-4</span>
                <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "85%" } : {}}
                    transition={{ duration: 1, delay: 0.6 }}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 w-16">Claude</span>
                <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "72%" } : {}}
                    transition={{ duration: 1, delay: 0.7 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Box 4: Service Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm h-[320px] flex flex-col"
          >
            <div className="flex items-center gap-2 mb-4">
              <PieChart className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300 font-medium">Service Distribution</span>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <AnimatedDonutChart />
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {[
                { color: "bg-purple-500", label: "AI/ML", value: "35%" },
                { color: "bg-blue-500", label: "Data Eng", value: "25%" },
                { color: "bg-cyan-500", label: "Cloud", value: "20%" },
                { color: "bg-green-500", label: "Consulting", value: "20%" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between text-xs text-gray-400 bg-gray-800/30 px-2 py-1.5 rounded">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${item.color}`} />
                    <span>{item.label}</span>
                  </div>
                  <span className="text-white font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-5xl mx-auto"
        >
          {[
            { value: "99.9%", label: "Uptime SLA", icon: <Zap className="w-4 h-4" /> },
            { value: "<100ms", label: "Latency", icon: <Activity className="w-4 h-4" /> },
            { value: "150+", label: "Clients", icon: <Database className="w-4 h-4" /> },
            { value: "24/7", label: "Support", icon: <Bot className="w-4 h-4" /> },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              className="p-4 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/10 text-center"
            >
              <div className="inline-flex p-2 rounded-lg bg-purple-500/10 text-purple-400 mb-2">
                {stat.icon}
              </div>
              <div className="text-xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-4">
            See how we can transform your data infrastructure
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105"
          >
            Get Your Data Assessment
            <Zap className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
