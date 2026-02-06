import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Logo } from "./ui/logo";
import { GradientButton } from "./ui/gradient-button";
import { MainNav } from "./navigation/MainNav";
import { MobileNav } from "./navigation/MobileNav";
import { navigationItems, navigationConfig } from "@/data/navigation";

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
        "fixed top-12 left-0 right-0 z-40 bg-black/90 backdrop-blur-lg",
        "border-b border-white/10 py-2",
        isScrolled ? "shadow-lg" : "",
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="text-white">
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-6">
          <MainNav items={navigationItems} />
          
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
