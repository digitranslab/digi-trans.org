/**
 * Design System Tokens for DigitransLab Website
 * 
 * This file defines the core design tokens including colors, spacing,
 * typography, gradients, and shadows used throughout the application.
 * 
 * Requirements: 17.1, 17.2, 17.5
 */

// Color Palette
export const colors = {
  // Primary: Purple (#8B5CF6 and variants)
  primary: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7c3aed",
    800: "#6b21a8",
    900: "#581c87",
    DEFAULT: "#8B5CF6",
  },
  // Secondary: Blue (#3B82F6 and variants)
  secondary: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    DEFAULT: "#3B82F6",
  },
  // Accent: Indigo (#6366F1 and variants)
  accent: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    DEFAULT: "#6366F1",
  },
  // Gray scale for dark backgrounds
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712",
  },
  // Dark backgrounds
  dark: {
    black: "#000000",
    background: "#111827",
    surface: "#1F2937",
  },
  // Semantic colors
  white: "#ffffff",
  black: "#000000",
} as const;

// Spacing System (4px/8px base grid)
export const spacing = {
  0: "0",
  px: "1px",
  0.5: "0.125rem",  // 2px
  1: "0.25rem",     // 4px
  1.5: "0.375rem",  // 6px
  2: "0.5rem",      // 8px
  2.5: "0.625rem",  // 10px
  3: "0.75rem",     // 12px
  3.5: "0.875rem",  // 14px
  4: "1rem",        // 16px
  5: "1.25rem",     // 20px
  6: "1.5rem",      // 24px
  7: "1.75rem",     // 28px
  8: "2rem",        // 32px
  9: "2.25rem",     // 36px
  10: "2.5rem",     // 40px
  11: "2.75rem",    // 44px
  12: "3rem",       // 48px
  14: "3.5rem",     // 56px
  16: "4rem",       // 64px
  20: "5rem",       // 80px
  24: "6rem",       // 96px
  28: "7rem",       // 112px
  32: "8rem",       // 128px
  36: "9rem",       // 144px
  40: "10rem",      // 160px
  44: "11rem",      // 176px
  48: "12rem",      // 192px
  52: "13rem",      // 208px
  56: "14rem",      // 224px
  60: "15rem",      // 240px
  64: "16rem",      // 256px
  72: "18rem",      // 288px
  80: "20rem",      // 320px
  96: "24rem",      // 384px
} as const;

// Typography Tokens
export const typography = {
  fontFamily: {
    sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
    mono: ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
  },
  fontSize: {
    xs: ["0.75rem", { lineHeight: "1rem" }],           // 12px
    sm: ["0.875rem", { lineHeight: "1.25rem" }],       // 14px
    base: ["1rem", { lineHeight: "1.5rem" }],          // 16px
    lg: ["1.125rem", { lineHeight: "1.75rem" }],       // 18px
    xl: ["1.25rem", { lineHeight: "1.75rem" }],        // 20px
    "2xl": ["1.5rem", { lineHeight: "2rem" }],         // 24px
    "3xl": ["1.875rem", { lineHeight: "2.25rem" }],    // 30px
    "4xl": ["2.25rem", { lineHeight: "2.5rem" }],      // 36px
    "5xl": ["3rem", { lineHeight: "1" }],              // 48px
    "6xl": ["3.75rem", { lineHeight: "1" }],           // 60px
    "7xl": ["4.5rem", { lineHeight: "1" }],            // 72px
    "8xl": ["6rem", { lineHeight: "1" }],              // 96px
    "9xl": ["8rem", { lineHeight: "1" }],              // 128px
  },
  fontWeight: {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
} as const;

// Gradient Tokens
export const gradients = {
  // Primary gradient (purple to blue)
  primary: "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)",
  // Secondary gradient (indigo to purple)
  secondary: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
  // Background gradient (dark)
  background: "linear-gradient(180deg, #000000 0%, #111827 100%)",
  // Card gradient (subtle)
  card: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
  // Border gradient for glass cards
  border: "linear-gradient(135deg, rgba(139, 92, 246, 0.5) 0%, rgba(59, 130, 246, 0.5) 100%)",
  // Text gradient
  text: "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 50%, #6366F1 100%)",
  // Hover gradient (brighter)
  hover: "linear-gradient(135deg, #9333EA 0%, #2563EB 100%)",
  // Radial glow
  radialPurple: "radial-gradient(circle at center, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
  radialBlue: "radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
} as const;

// Shadow Tokens
export const shadows = {
  // Glow effects
  glow: {
    purple: "0 0 40px rgba(139, 92, 246, 0.3)",
    blue: "0 0 40px rgba(59, 130, 246, 0.3)",
    accent: "0 0 40px rgba(99, 102, 241, 0.3)",
    purpleIntense: "0 0 60px rgba(139, 92, 246, 0.5)",
    blueIntense: "0 0 60px rgba(59, 130, 246, 0.5)",
  },
  // Card shadows
  card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  cardHover: "0 20px 40px rgba(139, 92, 246, 0.2)",
  cardElevated: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  // Standard shadows
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  none: "none",
} as const;

// Border Radius Tokens
export const borderRadius = {
  none: "0",
  sm: "0.125rem",    // 2px
  DEFAULT: "0.25rem", // 4px
  md: "0.375rem",    // 6px
  lg: "0.5rem",      // 8px
  xl: "0.75rem",     // 12px
  "2xl": "1rem",     // 16px
  "3xl": "1.5rem",   // 24px
  full: "9999px",
} as const;

// Breakpoints
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

// Z-Index Scale
export const zIndex = {
  auto: "auto",
  0: "0",
  10: "10",
  20: "20",
  30: "30",
  40: "40",
  50: "50",
  dropdown: "1000",
  sticky: "1020",
  fixed: "1030",
  modalBackdrop: "1040",
  modal: "1050",
  popover: "1060",
  tooltip: "1070",
} as const;

// Animation Durations
export const durations = {
  fast: "150ms",
  normal: "300ms",
  slow: "500ms",
  slower: "700ms",
} as const;

// Animation Easings
export const easings = {
  linear: "linear",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  easeOut: "cubic-bezier(0, 0, 0.2, 1)",
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
} as const;

// Glass Morphism Tokens
export const glassMorphism = {
  blur: {
    sm: "blur(4px)",
    DEFAULT: "blur(8px)",
    md: "blur(12px)",
    lg: "blur(16px)",
    xl: "blur(24px)",
  },
  background: {
    light: "rgba(255, 255, 255, 0.1)",
    dark: "rgba(0, 0, 0, 0.3)",
    purple: "rgba(139, 92, 246, 0.1)",
    blue: "rgba(59, 130, 246, 0.1)",
  },
  border: {
    light: "rgba(255, 255, 255, 0.2)",
    dark: "rgba(255, 255, 255, 0.1)",
    gradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.5) 0%, rgba(59, 130, 246, 0.5) 100%)",
  },
} as const;

// Export all tokens as a single object for convenience
export const designTokens = {
  colors,
  spacing,
  typography,
  gradients,
  shadows,
  borderRadius,
  breakpoints,
  zIndex,
  durations,
  easings,
  glassMorphism,
} as const;

export default designTokens;
