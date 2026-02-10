/**
 * CalPopup Component
 * 
 * Deprecated - Cal.com has been removed.
 * This component now redirects to the Contact page.
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, MessageCircle } from "lucide-react";
import { GradientButton } from "./ui/gradient-button";

interface CalPopupProps {
  buttonText?: string;
  className?: string;
}

export default function CalPopup({ 
  buttonText = "Book a Consultation",
  className = ""
}: CalPopupProps) {
  const navigate = useNavigate();

  return (
    <GradientButton 
      onClick={() => navigate("/contact")}
      className={className}
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      {buttonText}
    </GradientButton>
  );
}
