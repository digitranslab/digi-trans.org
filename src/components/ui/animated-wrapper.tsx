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

// Animation variant definitions
const animationVariants: Record<string, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  },
  "slide-left": {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  },
  "slide-right": {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  },
  "scale-up": {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
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

export type AnimationVariant = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up" | "none";

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
