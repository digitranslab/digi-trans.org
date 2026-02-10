/**
 * CalendarWindow Component
 * 
 * Deprecated - Cal.com has been removed.
 * This component now redirects to the Contact page.
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, MessageCircle, X } from "lucide-react";
import { GradientButton } from "./ui/gradient-button";

interface CalendarWindowProps {
  open: boolean;
  onClose: () => void;
}

export default function CalendarWindow({ open, onClose }: CalendarWindowProps) {
  const navigate = useNavigate();

  if (!open) return null;

  const handleContactClick = () => {
    onClose();
    navigate("/contact");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative bg-gray-900 rounded-2xl border border-gray-800 p-8 max-w-md w-full mx-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 w-fit mx-auto mb-6">
            <Calendar className="w-12 h-12 text-purple-400" />
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2">
            Schedule a Consultation
          </h3>
          <p className="text-gray-400 mb-6">
            Fill out our contact form and we'll get back to you within 24 hours 
            to schedule a consultation at your convenience.
          </p>

          <GradientButton onClick={handleContactClick} className="w-full">
            <MessageCircle className="w-5 h-5 mr-2" />
            Go to Contact Form
          </GradientButton>
        </div>
      </div>
    </div>
  );
}
