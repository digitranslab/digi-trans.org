import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * GradientButton Component
 * 
 * A button component with gradient styling options.
 * Supports primary gradient (purple to blue), secondary outline, and size variants.
 * 
 * Requirements: 17.3
 */

const gradientButtonVariants = cva(
  // Base styles for all gradient buttons
  [
    "inline-flex items-center justify-center",
    "whitespace-nowrap rounded-lg",
    "font-medium transition-all duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900",
    "disabled:pointer-events-none disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      variant: {
        // Primary: Gradient from purple to blue with AI glow hover state
        primary: [
          "bg-gradient-to-r from-purple-600 to-blue-600",
          "text-white",
          "shadow-lg shadow-purple-500/25",
          "hover:from-purple-500 hover:to-blue-500",
          "hover:shadow-[0_0_25px_rgba(139,92,246,0.5),0_0_50px_rgba(139,92,246,0.3)]",
          "hover:scale-[1.02]",
          "active:scale-100",
        ].join(" "),
        // Secondary: Dark filled style with AI glow border
        secondary: [
          "bg-gray-900/80",
          "text-white",
          "border border-purple-500/40",
          "shadow-md shadow-purple-500/10",
          "hover:bg-gray-800/90",
          "hover:border-purple-400/80",
          "hover:shadow-[0_0_20px_rgba(139,92,246,0.4),0_0_40px_rgba(139,92,246,0.2)]",
          "hover:scale-[1.02]",
          "active:scale-100",
        ].join(" "),
        // Outline: Similar to secondary but with gradient border effect
        outline: [
          "relative bg-transparent",
          "text-white",
          "border border-transparent",
          // Gradient border using background-clip
          "before:absolute before:inset-0 before:rounded-lg before:p-[1px]",
          "before:bg-gradient-to-r before:from-purple-500 before:to-blue-500",
          "before:-z-10 before:content-['']",
          "hover:bg-purple-500/10",
          "hover:shadow-[0_0_20px_rgba(139,92,246,0.4),0_0_40px_rgba(139,92,246,0.2)]",
        ].join(" "),
        // Ghost: Minimal styling with subtle AI glow
        ghost: [
          "bg-transparent",
          "text-gray-300",
          "hover:text-white",
          "hover:bg-gray-800/50",
          "hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]",
        ].join(" "),
        // Link: Text-only with underline on hover
        link: [
          "bg-transparent",
          "text-purple-400",
          "underline-offset-4",
          "hover:text-purple-300",
          "hover:underline",
        ].join(" "),
      },
      size: {
        sm: "h-8 px-3 text-xs gap-1.5",
        md: "h-10 px-5 text-sm gap-2",
        lg: "h-12 px-8 text-base gap-2.5",
        xl: "h-14 px-10 text-lg gap-3",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gradientButtonVariants> {
  /** If true, the button will render as a child component (useful for Link components) */
  asChild?: boolean;
  /** Optional icon to display before the text */
  leftIcon?: React.ReactNode;
  /** Optional icon to display after the text */
  rightIcon?: React.ReactNode;
  /** Loading state */
  isLoading?: boolean;
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      leftIcon,
      rightIcon,
      isLoading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(gradientButtonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Loading...</span>
          </>
        ) : (
          <>
            {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
          </>
        )}
      </Comp>
    );
  }
);

GradientButton.displayName = "GradientButton";

export { GradientButton, gradientButtonVariants };
