/**
 * AnimatedDataViz Component — Premium Redesign
 * 
 * Animated data visualization section with counters, charts, and metrics.
 * Redesigned to match the premium visual language used across the site.
 */

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Activity, Layers, Sparkles, Zap, BarChart3, PieChart } from "lucide-react";

function AnimatedCounter({ value, suffix = "", prefix = "", duration = 2 }: { value: number; suffix?: string; prefix?: string; duration?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);
  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (t: number) => {
        if (!startTime) startTime = t;
        const p = Math.min((t - startTime) / (duration * 1000), 1);
        setDisplayValue(Math.floor((1 - Math.pow(1 - p, 3)) * value));
        if (p < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);
  return <span ref={ref}>{prefix}{displayValue.toLocaleString()}{suffix}</span>;
}

function AnimatedBarChart({ isInView }: { isInView: boolean }) {
  const bars = [
    { label: "Q1", value: 65, color: "from-purple-500 to-purple-400" },
    { label: "Q2", value: 85, color: "from-blue-500 to-blue-400" },
    { label: "Q3", value: 75, color: "from-cyan-500 to-cyan-400" },
    { label: "Q4", value: 95, color: "from-emerald-500 to-emerald-400" },
  ];
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 flex items-end gap-3">
        {bars.map((bar, i) => (
          <div key={bar.label} className="flex-1 flex flex-col items-center h-full justify-end">
            <motion.span initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: i * 0.15 + 0.8 }} className="text-xs font-semibold text-gray-300 mb-1.5">{bar.value}%</motion.span>
            <motion.div
              initial={{ height: 0 }} animate={isInView ? { height: `${bar.value}%` } : {}} transition={{ duration: 0.8, delay: i * 0.12, ease: "easeOut" }}
              className={`w-full rounded-t-md bg-gradient-to-t ${bar.color} relative overflow-hidden`} style={{ minHeight: isInView ? "16px" : "0" }}
            >
              <div className="absolute inset-y-0 left-0 w-1/3 bg-white/10" />
            </motion.div>
          </div>
        ))}
      </div>
      <div className="flex gap-3 pt-2 border-t border-gray-800/40 mt-2">
        {bars.map((b) => <div key={b.label} className="flex-1 text-center text-xs text-gray-600">{b.label}</div>)}
      </div>
    </div>
  );
}

function AnimatedDonutChart({ isInView }: { isInView: boolean }) {
  const segments = [
    { value: 35, color: "#8B5CF6", label: "AI/ML" },
    { value: 25, color: "#3B82F6", label: "Data Eng" },
    { value: 20, color: "#06B6D4", label: "Cloud" },
    { value: 20, color: "#10B981", label: "Consulting" },
  ];
  const r = 54, c = 2 * Math.PI * r;
  let cumulative = 0;
  const segs = segments.map((s) => {
    const len = (s.value / 100) * c;
    const off = -cumulative;
    cumulative += len;
    return { ...s, len, off };
  });
  return (
    <div className="relative w-36 h-36 mx-auto">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 140 140">
        {segs.map((s, i) => (
          <motion.circle key={s.label} cx="70" cy="70" r={r} fill="none" stroke={s.color} strokeWidth="16" strokeLinecap="butt"
            style={{ strokeDasharray: `${s.len} ${c}`, strokeDashoffset: s.off }}
            initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.4, delay: i * 0.12 }}
          />
        ))}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl font-bold text-white"><AnimatedCounter value={100} suffix="%" /></div>
          <div className="text-[10px] text-gray-500">Coverage</div>
        </div>
      </div>
    </div>
  );
}

function AnimatedAreaChart({ isInView }: { isInView: boolean }) {
  const pts = [{ x: 0, y: 30 }, { x: 50, y: 48 }, { x: 100, y: 38 }, { x: 150, y: 62 }, { x: 200, y: 52 }, { x: 250, y: 72 }, { x: 300, y: 58 }, { x: 350, y: 82 }, { x: 400, y: 68 }];
  const line = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${100 - p.y}`).join(" ");
  const area = `${line} L 400 100 L 0 100 Z`;
  return (
    <div className="relative h-20">
      <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="areaFill" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" /><stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.02" /></linearGradient>
          <linearGradient id="lineStroke" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#8B5CF6" /><stop offset="50%" stopColor="#3B82F6" /><stop offset="100%" stopColor="#06B6D4" /></linearGradient>
        </defs>
        <motion.path d={area} fill="url(#areaFill)" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.4 }} />
        <motion.path d={line} fill="none" stroke="url(#lineStroke)" strokeWidth="2.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 1.2, ease: "easeOut" }} />
        {pts.map((p, i) => (
          <motion.circle key={i} cx={p.x} cy={100 - p.y} r="3" fill="#8B5CF6" stroke="#111" strokeWidth="1.5"
            initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ duration: 0.2, delay: 0.08 * i + 0.4 }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function AnimatedDataViz() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-14">
          <span className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full border border-purple-500/20 uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5" /> Live Data Insights
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Data Intelligence at Scale
          </h2>
          <p className="text-sm text-gray-500 max-w-lg mx-auto">Real-time analytics and AI-powered insights driving business transformation</p>
        </motion.div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {/* Data Processed */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 flex flex-col"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-purple-500/15 flex items-center justify-center text-purple-400"><Layers className="w-4 h-4" /></div>
              <span className="text-sm font-medium text-gray-300">Data Processed</span>
            </div>
            <div className="text-4xl font-bold text-white mb-1"><AnimatedCounter value={50} suffix=" PB+" /></div>
            <div className="text-xs text-gray-500 mb-4">Petabytes across all platforms</div>
            <div className="flex-1 min-h-[80px]"><AnimatedAreaChart isInView={isInView} /></div>
          </motion.div>

          {/* Quarterly Growth */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-400"><BarChart3 className="w-4 h-4" /></div>
                <span className="text-sm font-medium text-gray-300">Quarterly Growth</span>
              </div>
              <span className="text-xs text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">+45% YoY</span>
            </div>
            <div className="flex-1 min-h-[160px]"><AnimatedBarChart isInView={isInView} /></div>
          </motion.div>

          {/* AI Models */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 flex flex-col"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/15 flex items-center justify-center text-cyan-400"><Sparkles className="w-4 h-4" /></div>
              <span className="text-sm font-medium text-gray-300">AI Models in Production</span>
            </div>
            <div className="text-4xl font-bold text-white mb-1"><AnimatedCounter value={200} suffix="+" /></div>
            <div className="text-xs text-gray-500 mb-5">Deployed across client environments</div>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[{ v: "98%", l: "Accuracy", c: "text-blue-400 bg-blue-500/10" }, { v: "15ms", l: "Latency", c: "text-cyan-400 bg-cyan-500/10" }, { v: "24/7", l: "Uptime", c: "text-purple-400 bg-purple-500/10" }].map((s) => (
                <div key={s.l} className={`text-center p-2.5 rounded-lg ${s.c}`}>
                  <div className="text-base font-bold">{s.v}</div>
                  <div className="text-[10px] text-gray-500">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="space-y-2 mt-auto">
              {[{ name: "Sovereign", w: "85%" }, { name: "Cloud", w: "72%" }].map((m) => (
                <div key={m.name} className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 w-16">{m.name}</span>
                  <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" initial={{ width: 0 }} animate={isInView ? { width: m.w } : {}} transition={{ duration: 0.8, delay: 0.6 }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Service Distribution */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 flex flex-col"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400"><PieChart className="w-4 h-4" /></div>
              <span className="text-sm font-medium text-gray-300">Service Distribution</span>
            </div>
            <div className="flex-1 flex items-center justify-center py-2">
              <AnimatedDonutChart isInView={isInView} />
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {[{ c: "bg-purple-500", l: "AI/ML", v: "35%" }, { c: "bg-blue-500", l: "Data Eng", v: "25%" }, { c: "bg-cyan-500", l: "Cloud", v: "20%" }, { c: "bg-emerald-500", l: "Consulting", v: "20%" }].map((s) => (
                <div key={s.l} className="flex items-center justify-between text-xs text-gray-400 bg-gray-800/30 px-2.5 py-1.5 rounded-lg">
                  <div className="flex items-center gap-1.5"><div className={`w-2 h-2 rounded-full ${s.c}`} />{s.l}</div>
                  <span className="text-white font-medium">{s.v}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
