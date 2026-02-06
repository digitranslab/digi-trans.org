/**
 * NavDropdown Component
 * 
 * A hover-triggered dropdown menu for navigation items with glass morphism styling.
 * Supports keyboard navigation for accessibility.
 * 
 * Requirements: 1.2
 */

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/data/navigation";
import { isNavItemActive } from "@/data/navigation";

interface NavDropdownProps {
  item: NavItem;
  className?: string;
}

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: {
      duration: 0.15,
      ease: "easeIn",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.2,
    },
  }),
};

export function NavDropdown({ item, className }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const location = useLocation();
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isActive = isNavItemActive(item, location.pathname);
  const hasChildren = item.children && item.children.length > 0;

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    // Add a small delay before closing to allow moving to dropdown
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setFocusedIndex(-1);
    }, 150);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!hasChildren) return;

      switch (e.key) {
        case "Enter":
        case " ":
          e.preventDefault();
          setIsOpen((prev) => !prev);
          if (!isOpen) {
            setFocusedIndex(0);
          }
          break;
        case "ArrowDown":
          e.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
            setFocusedIndex(0);
          } else if (item.children) {
            setFocusedIndex((prev) =>
              prev < item.children!.length - 1 ? prev + 1 : 0
            );
          }
          break;
        case "ArrowUp":
          e.preventDefault();
          if (isOpen && item.children) {
            setFocusedIndex((prev) =>
              prev > 0 ? prev - 1 : item.children!.length - 1
            );
          }
          break;
        case "Escape":
          e.preventDefault();
          setIsOpen(false);
          setFocusedIndex(-1);
          triggerRef.current?.focus();
          break;
        case "Tab":
          setIsOpen(false);
          setFocusedIndex(-1);
          break;
      }
    },
    [hasChildren, isOpen, item.children]
  );

  // Focus management for dropdown items
  useEffect(() => {
    if (focusedIndex >= 0 && itemRefs.current[focusedIndex]) {
      itemRefs.current[focusedIndex]?.focus();
    }
  }, [focusedIndex]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // If no children, render as a simple link
  if (!hasChildren) {
    return (
      <Link
        to={item.href}
        className={cn(
          "block select-none rounded-md px-3 py-2 text-sm font-medium text-white",
          "hover:bg-white/10 transition-colors",
          isActive && "bg-white/10 text-purple-300",
          className
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      ref={dropdownRef}
      className={cn("relative", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Button */}
      <button
        ref={triggerRef}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={cn(
          "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white",
          "hover:bg-white/10 transition-colors",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
          isActive && "bg-white/10 text-purple-300",
          isOpen && "bg-white/10"
        )}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={cn(
              "absolute left-0 top-full mt-2 min-w-[280px] z-50",
              "rounded-xl overflow-hidden",
              // Glass morphism effect
              "bg-gray-900/95 backdrop-blur-xl",
              "border border-gray-800/50",
              "shadow-xl shadow-black/20"
            )}
          >
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-xl p-[1px] -z-10">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
            </div>

            <div className="p-2">
              {item.children?.map((child, index) => (
                <motion.div
                  key={child.href}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    ref={(el) => (itemRefs.current[index] = el)}
                    to={child.href}
                    onClick={() => {
                      setIsOpen(false);
                      setFocusedIndex(-1);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Escape") {
                        e.preventDefault();
                        setIsOpen(false);
                        setFocusedIndex(-1);
                        triggerRef.current?.focus();
                      }
                    }}
                    className={cn(
                      "block rounded-lg p-3 transition-colors",
                      "hover:bg-white/10",
                      "focus:outline-none focus-visible:bg-white/10",
                      location.pathname === child.href && "bg-purple-500/20"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-white">
                        {child.label}
                      </span>
                      {child.badge && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          {child.badge}
                        </span>
                      )}
                    </div>
                    {child.description && (
                      <p className="mt-1 text-xs text-gray-400 line-clamp-2">
                        {child.description}
                      </p>
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>


          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NavDropdown;
