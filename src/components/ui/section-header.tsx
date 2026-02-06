import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * SectionHeader Component
 * 
 * A reusable section header component with badge, title, and description.
 * Supports left and center alignment with gradient text styling for titles.
 * 
 * Requirements: 17.2
 */

const sectionHeaderVariants = cva("flex flex-col", {
  variants: {
    alignment: {
      left: "items-start text-left",
      center: "items-center text-center",
    },
  },
  defaultVariants: {
    alignment: "center",
  },
});

export interface SectionHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionHeaderVariants> {
  /** Optional badge text displayed above the title */
  badge?: string;
  /** The main title text */
  title: string;
  /** Optional description text displayed below the title */
  description?: string;
  /** Whether to apply gradient styling to the title */
  gradientTitle?: boolean;
  /** Custom title element (h1, h2, h3, etc.) */
  titleAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  (
    {
      className,
      alignment,
      badge,
      title,
      description,
      gradientTitle = true,
      titleAs: TitleTag = "h2",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(sectionHeaderVariants({ alignment }), className)}
        {...props}
      >
        {badge && (
          <span
            className={cn(
              "inline-flex items-center px-3 py-1 mb-4",
              "text-xs font-medium uppercase tracking-wider",
              "rounded-full",
              "bg-purple-500/10 text-purple-400",
              "border border-purple-500/20"
            )}
          >
            {badge}
          </span>
        )}
        <TitleTag
          className={cn(
            "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight",
            gradientTitle
              ? "bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent"
              : "text-white",
            alignment === "center" && "max-w-4xl"
          )}
        >
          {title}
        </TitleTag>
        {description && (
          <p
            className={cn(
              "mt-4 text-lg text-gray-400",
              alignment === "center" && "max-w-2xl"
            )}
          >
            {description}
          </p>
        )}
      </div>
    );
  }
);

SectionHeader.displayName = "SectionHeader";

// Badge component for standalone use
const SectionBadge = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, children, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "inline-flex items-center px-3 py-1",
      "text-xs font-medium uppercase tracking-wider",
      "rounded-full",
      "bg-purple-500/10 text-purple-400",
      "border border-purple-500/20",
      className
    )}
    {...props}
  >
    {children}
  </span>
));
SectionBadge.displayName = "SectionBadge";

// Gradient title component for standalone use
const GradientTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  }
>(({ className, as: Tag = "h2", children, ...props }, ref) => (
  <Tag
    ref={ref}
    className={cn(
      "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight",
      "bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent",
      className
    )}
    {...props}
  >
    {children}
  </Tag>
));
GradientTitle.displayName = "GradientTitle";

export { SectionHeader, SectionBadge, GradientTitle, sectionHeaderVariants };
