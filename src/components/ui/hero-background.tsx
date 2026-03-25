/**
 * HeroBackground — Theme-aware hero section background.
 * Renders floating gradient orbs, grid overlay, and gradient backdrop.
 * Automatically switches between dark and light variants.
 */

import { useTheme } from "@/contexts/ThemeContext";

interface HeroBackgroundProps {
  /** Primary accent color: "purple" | "blue" */
  accent?: "purple" | "blue";
}

export function HeroBackground({ accent = "purple" }: HeroBackgroundProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const gradientBg = isDark
    ? accent === "blue"
      ? "linear-gradient(to bottom, rgba(30,58,138,0.4), rgba(0,0,0,0.8), #000)"
      : "linear-gradient(to bottom, rgba(88,28,135,0.4), rgba(0,0,0,0.8), #000)"
    : accent === "blue"
      ? "linear-gradient(to bottom, rgba(37,99,235,0.04), rgba(255,255,255,0.95), #fff)"
      : "linear-gradient(to bottom, rgba(124,58,237,0.04), rgba(255,255,255,0.95), #fff)";

  const orbOpacity = isDark ? 0.15 : 0.04;
  const gridOpacity = isDark ? 0.03 : 0.015;
  const gridColor = accent === "blue" ? "59,130,246" : "139,92,246";

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0" style={{ background: gradientBg }} />
      <div className="absolute top-0 left-0 w-full h-full">
        <div
          className="absolute top-20 left-[10%] w-72 h-72 rounded-full blur-[100px] animate-pulse"
          style={{ backgroundColor: accent === "blue" ? `rgba(37,99,235,${orbOpacity})` : `rgba(124,58,237,${orbOpacity})` }}
        />
        <div
          className="absolute top-40 right-[15%] w-96 h-96 rounded-full blur-[120px] animate-pulse"
          style={{ backgroundColor: `rgba(37,99,235,${orbOpacity * 0.67})`, animationDelay: "1.5s" }}
        />
        <div
          className="absolute bottom-20 left-[30%] w-80 h-80 rounded-full blur-[100px] animate-pulse"
          style={{ backgroundColor: `rgba(79,70,229,${orbOpacity * 0.67})`, animationDelay: "3s" }}
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          opacity: gridOpacity,
          backgroundImage: `linear-gradient(rgba(${gridColor},0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(${gridColor},0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

/** Theme-aware bottom fade gradient */
export function HeroBottomFade() {
  const { theme } = useTheme();
  return (
    <div
      className="absolute bottom-0 left-0 right-0 h-24"
      style={{ background: `linear-gradient(to top, ${theme === "dark" ? "#000" : "#fff"}, transparent)` }}
    />
  );
}

/** Theme-aware CTA section background */
export function CTABackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0"
        style={{ background: isDark
          ? "linear-gradient(to top, rgba(88,28,135,0.3), transparent, transparent)"
          : "linear-gradient(to top, rgba(124,58,237,0.03), transparent, transparent)"
        }}
      />
      <div
        className="absolute bottom-0 left-[20%] w-96 h-96 rounded-full blur-[120px]"
        style={{ backgroundColor: isDark ? "rgba(124,58,237,0.1)" : "rgba(124,58,237,0.03)" }}
      />
      <div
        className="absolute bottom-0 right-[20%] w-96 h-96 rounded-full blur-[120px]"
        style={{ backgroundColor: isDark ? "rgba(37,99,235,0.1)" : "rgba(37,99,235,0.03)" }}
      />
    </div>
  );
}
