/**
 * MobileNav Component
 * 
 * Mobile navigation with hamburger menu toggle and slide-out panel.
 * Supports nested navigation items with accordion-style expansion.
 * 
 * Requirements: 18.2
 */

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { navigationItems, isNavItemActive, type NavItem } from "@/data/navigation";
import { GradientButton } from "@/components/ui/gradient-button";

interface MobileNavProps {
  /** Custom navigation items (defaults to navigationItems from data) */
  items?: NavItem[];
  /** CTA button configuration */
  cta?: {
    label: string;
    onClick?: () => void;
  };
  /** Additional CSS classes */
  className?: string;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const panelVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 300,
    },
  },
  exit: {
    x: "100%",
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 300,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05 + 0.1,
      duration: 0.3,
    },
  }),
};

interface MobileNavItemProps {
  item: NavItem;
  index: number;
  onClose: () => void;
}

function MobileNavItem({ item, index, onClose }: MobileNavItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();
  const isActive = isNavItemActive(item, location.pathname);
  const hasChildren = item.children && item.children.length > 0;

  // Close expanded items when navigating
  useEffect(() => {
    setIsExpanded(false);
  }, [location.pathname]);

  if (!hasChildren) {
    return (
      <motion.div custom={index} variants={itemVariants}>
        <Link
          to={item.href}
          onClick={onClose}
          className={cn(
            "flex items-center justify-between py-3 px-4 rounded-lg",
            "text-base font-medium text-white",
            "hover:bg-white/10 transition-colors",
            isActive && "bg-purple-500/20 text-purple-300"
          )}
        >
          {item.label}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div custom={index} variants={itemVariants}>
      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        className={cn(
          "flex items-center justify-between w-full py-3 px-4 rounded-lg",
          "text-base font-medium text-white",
          "hover:bg-white/10 transition-colors",
          isActive && "bg-purple-500/20 text-purple-300"
        )}
        aria-expanded={isExpanded}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-5 w-5 transition-transform duration-200",
            isExpanded && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-4 py-2 space-y-1">
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  to={child.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center justify-between py-2.5 px-4 rounded-lg",
                    "text-sm text-gray-300",
                    "hover:bg-white/10 hover:text-white transition-colors",
                    location.pathname === child.href && "bg-purple-500/20 text-purple-300"
                  )}
                >
                  <div>
                    <span className="block">{child.label}</span>
                    {child.description && (
                      <span className="block text-xs text-gray-500 mt-0.5">
                        {child.description}
                      </span>
                    )}
                  </div>
                  {child.badge && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {child.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function MobileNav({
  items = navigationItems,
  cta,
  className,
}: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className={cn("lg:hidden", className)}>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "p-2 rounded-lg text-white",
          "hover:bg-white/10 transition-colors",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
        )}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-out Panel */}
            <motion.div
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={cn(
                "fixed top-0 right-0 bottom-0 w-full max-w-sm z-50",
                "bg-gray-900/95 backdrop-blur-xl",
                "border-l border-gray-800/50",
                "shadow-2xl shadow-black/50",
                "flex flex-col"
              )}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-800/50">
                <span className="text-lg font-semibold text-white">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "p-2 rounded-lg text-white",
                    "hover:bg-white/10 transition-colors",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                  )}
                  aria-label="Close navigation menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Items */}
              <motion.nav
                className="flex-1 overflow-y-auto p-4 space-y-1"
                initial="hidden"
                animate="visible"
                aria-label="Mobile navigation"
              >
                {items.map((item, index) => (
                  <MobileNavItem
                    key={item.href}
                    item={item}
                    index={index}
                    onClose={() => setIsOpen(false)}
                  />
                ))}
              </motion.nav>

              {/* CTA Button */}
              {cta && (
                <div className="p-4 border-t border-gray-800/50">
                  <GradientButton
                    variant="primary"
                    size="lg"
                    className="w-full"
                    onClick={() => {
                      setIsOpen(false);
                      cta.onClick?.();
                    }}
                  >
                    {cta.label}
                  </GradientButton>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileNav;
