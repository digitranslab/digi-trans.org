import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * GlassCard Component
 * 
 * A card component with glass morphism effect using backdrop-blur and gradient borders.
 * Supports multiple variants for different visual styles.
 * 
 * Requirements: 17.4
 */

const glassCardVariants = cva(
  // Base styles for all glass cards
  "relative rounded-xl border transition-all duration-300",
  {
    variants: {
      variant: {
        // Default glass card with subtle blur and border
        default: [
          "bg-gray-900/50 backdrop-blur-md",
          "border-gray-800/50",
        ].join(" "),
        // Gradient variant with purple/blue gradient border
        gradient: [
          "bg-gray-900/50 backdrop-blur-md",
          "border-transparent",
          // Gradient border using pseudo-element
          "before:absolute before:inset-0 before:rounded-xl before:p-[1px]",
          "before:bg-gradient-to-br before:from-purple-500/50 before:to-blue-500/50",
          "before:-z-10 before:content-['']",
        ].join(" "),
        // Hover variant with enhanced effects on hover
        hover: [
          "bg-gray-900/50 backdrop-blur-md",
          "border-gray-800/50",
          "hover:border-purple-500/50",
          "hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]",
          "hover:scale-[1.02]",
        ].join(" "),
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface GlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassCardVariants> {
  /** Whether to add padding to the card content */
  noPadding?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant, noPadding = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          glassCardVariants({ variant }),
          !noPadding && "p-6",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

// Additional sub-components for structured content
const GlassCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 pb-4", className)}
    {...props}
  />
));
GlassCardHeader.displayName = "GlassCardHeader";

const GlassCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-xl font-semibold leading-none tracking-tight text-white",
      className
    )}
    {...props}
  />
));
GlassCardTitle.displayName = "GlassCardTitle";

const GlassCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-400", className)}
    {...props}
  />
));
GlassCardDescription.displayName = "GlassCardDescription";

const GlassCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
GlassCardContent.displayName = "GlassCardContent";

const GlassCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-4", className)}
    {...props}
  />
));
GlassCardFooter.displayName = "GlassCardFooter";

export {
  GlassCard,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
  GlassCardContent,
  GlassCardFooter,
  glassCardVariants,
};
