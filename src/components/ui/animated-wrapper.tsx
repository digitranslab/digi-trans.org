import * as React from "react";
import { motion, useReducedMotion as useFramerReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * AnimatedWrapper Component
 * 
 * A wrapper component that provides Framer Motion viewport animations.
 * Supports multiple animation variants and respects user's reduced motion preferences.
 * 
 * Requirements: 20.1, 20.4
 */

// Custom hook for detecting reduced motion preference
export const useReducedMotion = (): boolean => {
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    // Check if window is available (SSR safety)
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };

    // Use addEventListener for modern browsers
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return reducedMotion;
};

// Custom easing curves for smoother animations
const smoothEasing = [0.25, 0.1, 0.25, 1]; // cubic-bezier
const bounceEasing = [0.68, -0.55, 0.265, 1.55];
const springConfig = { type: "spring", stiffness: 100, damping: 15 };

// Animation variant definitions
const animationVariants: Record<string, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: smoothEasing }
    },
  },
  "fade-up-slow": {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: smoothEasing }
    },
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  },
  "fade-in-blur": {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { 
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: smoothEasing }
    },
  },
  "slide-left": {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: smoothEasing }
    },
  },
  "slide-right": {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: smoothEasing }
    },
  },
  "slide-up": {
    hidden: { opacity: 0, y: 80 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: smoothEasing }
    },
  },
  "slide-down": {
    hidden: { opacity: 0, y: -60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: smoothEasing }
    },
  },
  "scale-up": {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: smoothEasing }
    },
  },
  "scale-up-bounce": {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: springConfig
    },
  },
  "scale-in": {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4, ease: smoothEasing }
    },
  },
  "rotate-in": {
    hidden: { opacity: 0, rotate: -5, scale: 0.95 },
    visible: { 
      opacity: 1, 
      rotate: 0,
      scale: 1,
      transition: { duration: 0.6, ease: smoothEasing }
    },
  },
  "flip-up": {
    hidden: { opacity: 0, rotateX: 20, y: 30 },
    visible: { 
      opacity: 1, 
      rotateX: 0,
      y: 0,
      transition: { duration: 0.6, ease: smoothEasing }
    },
  },
  "zoom-in": {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: bounceEasing }
    },
  },
  "bounce-in": {
    hidden: { opacity: 0, scale: 0.3, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: springConfig
    },
  },
  "float-up": {
    hidden: { opacity: 0, y: 100, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  },
  "none": {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  },
};

// Reduced motion variants (instant transitions)
const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0 }
  },
};

export type AnimationVariant = "fade-up" | "fade-up-slow" | "fade-in" | "fade-in-blur" | "slide-left" | "slide-right" | "slide-up" | "slide-down" | "scale-up" | "scale-up-bounce" | "scale-in" | "rotate-in" | "flip-up" | "zoom-in" | "bounce-in" | "float-up" | "none";

export interface AnimatedWrapperProps {
  children: React.ReactNode;
  /** Animation variant to use */
  animation?: AnimationVariant;
  /** Delay before animation starts (in seconds) */
  delay?: number;
  /** Duration of the animation (in seconds) */
  duration?: number;
  /** Additional CSS classes */
  className?: string;
  /** Whether to animate only once when entering viewport */
  once?: boolean;
  /** Amount of element that needs to be in view to trigger animation (0-1) */
  amount?: number;
  /** Custom variants to override default animations */
  customVariants?: Variants;
  /** HTML element to render as */
  as?: keyof JSX.IntrinsicElements;
}

const AnimatedWrapper = React.forwardRef<HTMLDivElement, AnimatedWrapperProps>(
  (
    {
      children,
      animation = "fade-up",
      delay = 0,
      duration,
      className,
      once = true,
      amount = 0.2,
      customVariants,
      as = "div",
    },
    ref
  ) => {
    // Use Framer Motion's built-in reduced motion hook as primary
    const prefersReducedMotion = useFramerReducedMotion();
    // Also use our custom hook as fallback
    const customReducedMotion = useReducedMotion();
    
    // Combine both checks
    const shouldReduceMotion = prefersReducedMotion || customReducedMotion;

    // Select appropriate variants based on reduced motion preference
    const variants = React.useMemo(() => {
      if (shouldReduceMotion) {
        return reducedMotionVariants;
      }
      
      if (customVariants) {
        return customVariants;
      }
      
      const baseVariants = animationVariants[animation] || animationVariants["fade-up"];
      
      // Apply custom delay and duration if provided
      if (delay > 0 || duration !== undefined) {
        return {
          hidden: baseVariants.hidden,
          visible: {
            ...baseVariants.visible,
            transition: {
              ...(typeof baseVariants.visible === "object" && "transition" in baseVariants.visible
                ? baseVariants.visible.transition
                : {}),
              delay,
              ...(duration !== undefined && { duration }),
            },
          },
        };
      }
      
      return baseVariants;
    }, [animation, delay, duration, customVariants, shouldReduceMotion]);

    // Create the motion component dynamically based on the 'as' prop
    const MotionComponent = motion[as as keyof typeof motion] || motion.div;

    return (
      <MotionComponent
        ref={ref}
        className={cn(className)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount }}
        variants={variants}
      >
        {children}
      </MotionComponent>
    );
  }
);

AnimatedWrapper.displayName = "AnimatedWrapper";

// Stagger container for animating children with staggered delays
export interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  /** Delay between each child animation (in seconds) */
  staggerDelay?: number;
  /** Initial delay before first child animates (in seconds) */
  delayChildren?: number;
  /** Whether to animate only once */
  once?: boolean;
  /** Amount of element that needs to be in view */
  amount?: number;
}

const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const StaggerContainer = React.forwardRef<HTMLDivElement, StaggerContainerProps>(
  (
    {
      children,
      className,
      staggerDelay = 0.1,
      delayChildren = 0.2,
      once = true,
      amount = 0.2,
    },
    ref
  ) => {
    const prefersReducedMotion = useFramerReducedMotion();
    const customReducedMotion = useReducedMotion();
    const shouldReduceMotion = prefersReducedMotion || customReducedMotion;

    const variants: Variants = shouldReduceMotion
      ? {
          hidden: { opacity: 1 },
          visible: { opacity: 1 },
        }
      : {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: staggerDelay,
              delayChildren,
            },
          },
        };

    return (
      <motion.div
        ref={ref}
        className={cn(className)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount }}
        variants={variants}
      >
        {children}
      </motion.div>
    );
  }
);

StaggerContainer.displayName = "StaggerContainer";

// Stagger item for use within StaggerContainer
export interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  /** Animation variant for the item */
  animation?: AnimationVariant;
}

const StaggerItem = React.forwardRef<HTMLDivElement, StaggerItemProps>(
  ({ children, className, animation = "fade-up" }, ref) => {
    const prefersReducedMotion = useFramerReducedMotion();
    const customReducedMotion = useReducedMotion();
    const shouldReduceMotion = prefersReducedMotion || customReducedMotion;

    const variants = shouldReduceMotion
      ? reducedMotionVariants
      : animationVariants[animation] || animationVariants["fade-up"];

    return (
      <motion.div ref={ref} className={cn(className)} variants={variants}>
        {children}
      </motion.div>
    );
  }
);

StaggerItem.displayName = "StaggerItem";

export {
  AnimatedWrapper,
  StaggerContainer,
  StaggerItem,
  animationVariants,
  reducedMotionVariants,
};
