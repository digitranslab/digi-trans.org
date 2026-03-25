import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./ui/logo";
import { GradientButton } from "./ui/gradient-button";
import { MainNav } from "./navigation/MainNav";
import { MobileNav } from "./navigation/MobileNav";
import { navigationItems, navigationConfig } from "@/data/navigation";
import { useTheme } from "@/contexts/ThemeContext";

interface NavbarProps {
  logo?: string;
  onBookConsultation?: () => void;
  onRegisterInterest?: () => void;
}

const Navbar = ({
  logo = "Digitrans",
  onBookConsultation = () => console.log("Book Consultation clicked"),
  onRegisterInterest = () => console.log("Register Interest clicked"),
}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCTAClick = () => {
    navigate("/contact");
  };

  return (
    <div
      className={cn(
        "fixed top-12 left-0 right-0 z-40 backdrop-blur-lg",
        "border-b py-2",
        theme === "dark"
          ? "bg-black/90 border-white/10"
          : "bg-white/90 border-gray-200",
        isScrolled ? "shadow-lg" : "",
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className={theme === "dark" ? "text-white" : "text-gray-900"}>
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-4">
          <MainNav items={navigationItems} />
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={cn(
              "hidden lg:flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-300",
              theme === "dark"
                ? "bg-gray-800/60 border border-gray-700/50 text-gray-400 hover:text-yellow-400 hover:border-yellow-500/30"
                : "bg-gray-100 border border-gray-200 text-gray-600 hover:text-emerald-600 hover:border-emerald-300"
            )}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <GradientButton
              variant="primary"
              size="md"
              onClick={handleCTAClick}
            >
              {navigationConfig.cta?.label || "Schedule a Demo"}
            </GradientButton>
          </div>

          {/* Mobile Navigation */}
          <MobileNav
            items={navigationItems}
            cta={{
              label: navigationConfig.cta?.label || "Schedule a Demo",
              onClick: handleCTAClick,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
