/**
 * MainNav Component
 * 
 * Primary navigation component for desktop viewports.
 * Renders navigation items with dropdown menus and active state highlighting.
 * 
 * Requirements: 1.1, 1.4
 */

import React from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { NavDropdown } from "./NavDropdown";
import { navigationItems, type NavItem } from "@/data/navigation";

interface MainNavProps {
  /** Custom navigation items (defaults to navigationItems from data) */
  items?: NavItem[];
  /** Additional CSS classes */
  className?: string;
}

export function MainNav({ items = navigationItems, className }: MainNavProps) {
  const location = useLocation();

  return (
    <nav
      className={cn("hidden lg:flex items-center gap-1", className)}
      aria-label="Main navigation"
    >
      {items.map((item) => (
        <NavDropdown
          key={item.href}
          item={item}
        />
      ))}
    </nav>
  );
}

export default MainNav;
