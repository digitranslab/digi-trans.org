/**
 * TypewriterText Component
 * 
 * Animates text with a left-to-right reveal effect like AI code generation.
 * Uses CSS clip-path animation for smooth character-by-character reveal.
 */

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  showCursor?: boolean;
  onComplete?: () => void;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  className,
  delay = 0,
  duration = 1.5,
  as: Component = "h1",
  showCursor = true,
  onComplete,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsComplete(true);
        onComplete?.();
      }, (delay + duration) * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay, duration, onComplete]);

  return (
    <div ref={ref} className="relative inline-block w-full">
      <Component className={cn("relative", className)}>
        {/* Hidden text for layout */}
        <span className="invisible">{text}</span>
        
        {/* Animated text overlay */}
        <motion.span
          className="absolute inset-0"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
          transition={{
            duration,
            delay,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {text}
        </motion.span>
        
        {/* Cursor */}
        {showCursor && (
          <motion.span
            className="absolute top-0 h-full w-[3px] bg-gradient-to-b from-purple-400 to-blue-400"
            initial={{ left: "0%" }}
            animate={isInView ? { 
              left: isComplete ? "100%" : ["0%", "100%"],
              opacity: isComplete ? 0 : 1
            } : {}}
            transition={{
              left: {
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
              },
              opacity: {
                duration: 0.3,
                delay: delay + duration,
              }
            }}
            style={{
              boxShadow: "0 0 10px rgba(168, 85, 247, 0.8), 0 0 20px rgba(59, 130, 246, 0.5)",
            }}
          />
        )}
      </Component>
    </div>
  );
};

/**
 * TypewriterGradientText Component
 * 
 * Same as TypewriterText but with gradient text support.
 */
interface TypewriterGradientTextProps extends Omit<TypewriterTextProps, "as"> {
  gradientClassName?: string;
}

export const TypewriterGradientText: React.FC<TypewriterGradientTextProps> = ({
  text,
  className,
  gradientClassName = "bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent",
  delay = 0,
  duration = 1.5,
  showCursor = true,
  onComplete,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsComplete(true);
        onComplete?.();
      }, (delay + duration) * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay, duration, onComplete]);

  return (
    <div ref={ref} className="relative inline-block w-full">
      <h1 className={cn("relative", className)}>
        {/* Hidden text for layout */}
        <span className={cn("invisible", gradientClassName)}>{text}</span>
        
        {/* Animated text overlay */}
        <motion.span
          className={cn("absolute inset-0", gradientClassName)}
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
          transition={{
            duration,
            delay,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {text}
        </motion.span>
        
        {/* Cursor */}
        {showCursor && (
          <motion.span
            className="absolute top-0 h-full w-[3px] bg-gradient-to-b from-purple-400 to-blue-400 rounded-full"
            initial={{ left: "0%" }}
            animate={isInView ? { 
              left: isComplete ? "100%" : ["0%", "100%"],
              opacity: isComplete ? 0 : 1
            } : {}}
            transition={{
              left: {
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
              },
              opacity: {
                duration: 0.3,
                delay: delay + duration,
              }
            }}
            style={{
              boxShadow: "0 0 10px rgba(168, 85, 247, 0.8), 0 0 20px rgba(59, 130, 246, 0.5)",
            }}
          />
        )}
      </h1>
    </div>
  );
};

export default TypewriterText;
