/**
 * Enhanced Breadcrumbs Component
 * 
 * Generates breadcrumb navigation from the current route.
 * Integrates with the navigation data structure for consistent labeling.
 * Excludes breadcrumbs on the homepage as per requirements.
 * 
 * Requirements: 1.5
 */

import React from "react";
import { useLocation, Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { BreadcrumbSchema } from "./JsonLd";
import { generateBreadcrumbs, findNavItemByHref } from "@/data/navigation";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  /** Custom path labels to override auto-generated labels */
  customPaths?: { [key: string]: string };
  /** Whether to omit the home link */
  omitHome?: boolean;
  /** Custom breadcrumb items (overrides auto-generation) */
  items?: BreadcrumbItem[];
  /** Additional CSS classes */
  className?: string;
}

/**
 * Format a path segment into a readable label
 */
function formatPathSegment(segment: string): string {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function Breadcrumbs({
  customPaths = {},
  omitHome = false,
  items: customItems,
  className,
}: BreadcrumbsProps) {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Don't render breadcrumbs on homepage
  if (location.pathname === "/" || location.pathname === "") {
    return null;
  }

  // Use custom items if provided, otherwise generate from path
  let breadcrumbItems: BreadcrumbItem[];

  if (customItems) {
    breadcrumbItems = customItems;
  } else {
    // Generate breadcrumbs using navigation data
    const generatedBreadcrumbs = generateBreadcrumbs(location.pathname);
    
    // Apply custom path overrides
    breadcrumbItems = generatedBreadcrumbs.map((item) => {
      const segment = item.href.split("/").pop() || "";
      const customLabel = customPaths[segment];
      return {
        label: customLabel || item.label,
        href: item.href,
      };
    });
  }

  // Generate schema items for SEO
  const schemaItems: { name: string; url: string }[] = [];
  if (!omitHome) {
    schemaItems.push({ name: "Home", url: "/" });
  }
  breadcrumbItems.forEach((item) => {
    schemaItems.push({
      name: item.label,
      url: item.href || location.pathname,
    });
  });

  // Don't render if no breadcrumb items
  if (breadcrumbItems.length === 0 && omitHome) {
    return null;
  }

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <nav
        aria-label="Breadcrumb"
        className={cn("py-4", className)}
      >
        <ol className="flex flex-wrap items-center gap-1 text-sm">
          {/* Home Link */}
          {!omitHome && (
            <li className="flex items-center">
              <Link
                to="/"
                className={cn(
                  "flex items-center gap-1 px-2 py-1 rounded-md",
                  "text-gray-400 hover:text-white",
                  "hover:bg-white/5 transition-colors"
                )}
              >
                <Home className="h-4 w-4" />
                <span className="sr-only sm:not-sr-only">Home</span>
              </Link>
            </li>
          )}

          {/* Breadcrumb Items */}
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;

            return (
              <li key={item.href || index} className="flex items-center">
                {/* Separator */}
                {(index > 0 || !omitHome) && (
                  <ChevronRight
                    className="h-4 w-4 mx-1 text-gray-600 flex-shrink-0"
                    aria-hidden="true"
                  />
                )}

                {/* Breadcrumb Link or Text */}
                {isLast ? (
                  <span
                    className={cn(
                      "px-2 py-1 rounded-md",
                      "text-white font-medium",
                      "bg-white/5"
                    )}
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.href || "#"}
                    className={cn(
                      "px-2 py-1 rounded-md",
                      "text-gray-400 hover:text-white",
                      "hover:bg-white/5 transition-colors"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

/**
 * Inline Breadcrumbs variant for use within page headers
 */
export function InlineBreadcrumbs({
  customPaths = {},
  omitHome = false,
  items: customItems,
  className,
}: BreadcrumbsProps) {
  const location = useLocation();

  // Don't render breadcrumbs on homepage
  if (location.pathname === "/" || location.pathname === "") {
    return null;
  }

  // Use custom items if provided, otherwise generate from path
  let breadcrumbItems: BreadcrumbItem[];

  if (customItems) {
    breadcrumbItems = customItems;
  } else {
    const generatedBreadcrumbs = generateBreadcrumbs(location.pathname);
    breadcrumbItems = generatedBreadcrumbs.map((item) => {
      const segment = item.href.split("/").pop() || "";
      const customLabel = customPaths[segment];
      return {
        label: customLabel || item.label,
        href: item.href,
      };
    });
  }

  if (breadcrumbItems.length === 0 && omitHome) {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("inline-flex items-center gap-1 text-sm", className)}
    >
      {!omitHome && (
        <>
          <Link
            to="/"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-gray-600" aria-hidden="true" />
        </>
      )}
      {breadcrumbItems.map((item, index) => {
        const isLast = index === breadcrumbItems.length - 1;
        return (
          <React.Fragment key={item.href || index}>
            {index > 0 && (
              <ChevronRight className="h-3 w-3 text-gray-600" aria-hidden="true" />
            )}
            {isLast ? (
              <span className="text-purple-400" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.href || "#"}
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
