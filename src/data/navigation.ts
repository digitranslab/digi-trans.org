/**
 * Navigation Data Structure
 * 
 * Defines the navigation items and structure for the DigitransLab website.
 * This includes all primary sections and their sub-pages.
 * 
 * Requirements: 1.1
 */

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
  external?: boolean;
  badge?: string;
}

export interface NavigationConfig {
  items: NavItem[];
  cta?: {
    label: string;
    href: string;
  };
}

/**
 * Main navigation items for the website
 * Structured according to the information architecture requirements
 * 
 * Services consolidated into 3 categories:
 * 1. Big Data Architecture & Engineering
 * 2. Agentic AI for Data Processing & Enrichment
 * 3. AI & Data Consulting and Strategy
 */
export const navigationItems: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    description: "Data engineering, AI, and strategic consulting",
    children: [
      {
        label: "Big Data Architecture & Engineering",
        href: "/services/big-data-architecture",
        description: "Medallion architecture, lakehouses, and real-time streaming",
      },
      {
        label: "Agentic AI for Data",
        href: "/services/agentic-ai-data",
        description: "Autonomous AI agents for data processing and enrichment",
      },
      {
        label: "AI & Data Consulting",
        href: "/services/ai-data-consulting",
        description: "Strategic advisory, roadmaps, and governance",
      },
    ],
  },
  {
    label: "Products",
    href: "/products",
    description: "Our innovative product offerings",
    children: [
      {
        label: "Allama",
        href: "/products/allama",
        description: "Open-source AI workflow automation platform",
      },
      {
        label: "DBLOCK",
        href: "/products/dblock",
        description: "Next-generation AI application platform",
        badge: "Coming Soon",
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    description: "Industry-specific solutions",
    children: [
      {
        label: "Financial Services",
        href: "/solutions/financial-services",
        description: "AI solutions for banking and finance",
      },
      {
        label: "Healthcare",
        href: "/solutions/healthcare",
        description: "Secure healthcare data automation",
      },
      {
        label: "Technology",
        href: "/solutions/technology",
        description: "Solutions for tech companies",
      },
    ],
  },
  {
    label: "University",
    href: "/university",
    description: "Learning resources and educational content",
    children: [
      {
        label: "Tutorials",
        href: "/university/tutorials",
        description: "Step-by-step guides and video tutorials",
      },
      {
        label: "Live Demos",
        href: "/university/live-demos",
        description: "Recorded product demonstrations",
      },
      {
        label: "Tech Talks",
        href: "/university/tech-talks",
        description: "AI trends and architecture discussions",
      },
      {
        label: "Webinars",
        href: "/university/webinars",
        description: "Upcoming and past webinar recordings",
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    description: "Blog, case studies, and documentation",
    children: [
      {
        label: "Blog",
        href: "/blog",
        description: "Latest insights and articles",
      },
      {
        label: "Case Studies",
        href: "/clients",
        description: "Client success stories",
      },
    ],
  },
  {
    label: "About",
    href: "/about",
    description: "Our mission, vision, and story",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Get in touch with us",
  },
];

/**
 * Full navigation configuration including CTA
 */
export const navigationConfig: NavigationConfig = {
  items: navigationItems,
  cta: {
    label: "Schedule a Demo",
    href: "/contact",
  },
};

/**
 * Helper function to find a navigation item by href
 */
export function findNavItemByHref(href: string, items: NavItem[] = navigationItems): NavItem | undefined {
  for (const item of items) {
    if (item.href === href) {
      return item;
    }
    if (item.children) {
      const found = findNavItemByHref(href, item.children);
      if (found) return found;
    }
  }
  return undefined;
}

/**
 * Helper function to get the parent navigation item for a given href
 */
export function getParentNavItem(href: string, items: NavItem[] = navigationItems): NavItem | undefined {
  for (const item of items) {
    if (item.children) {
      for (const child of item.children) {
        if (child.href === href) {
          return item;
        }
      }
    }
  }
  return undefined;
}

/**
 * Helper function to check if a path is active (matches or is a child of the nav item)
 */
export function isNavItemActive(navItem: NavItem, currentPath: string): boolean {
  // Exact match
  if (navItem.href === currentPath) {
    return true;
  }
  
  // Check if current path starts with nav item href (for parent items)
  if (currentPath.startsWith(navItem.href + '/')) {
    return true;
  }
  
  // Check children
  if (navItem.children) {
    return navItem.children.some(child => isNavItemActive(child, currentPath));
  }
  
  return false;
}

/**
 * Generate breadcrumb items from a path
 */
export function generateBreadcrumbs(path: string): { label: string; href: string }[] {
  const breadcrumbs: { label: string; href: string }[] = [];
  const segments = path.split('/').filter(Boolean);
  
  let currentPath = '';
  for (const segment of segments) {
    currentPath += `/${segment}`;
    const navItem = findNavItemByHref(currentPath);
    
    if (navItem) {
      breadcrumbs.push({
        label: navItem.label,
        href: navItem.href,
      });
    } else {
      // Fallback: format the segment as a label
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      breadcrumbs.push({
        label,
        href: currentPath,
      });
    }
  }
  
  return breadcrumbs;
}

export default navigationItems;
