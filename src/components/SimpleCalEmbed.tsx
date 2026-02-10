/**
 * SimpleCalEmbed Component
 * 
 * Deprecated - Cal.com has been removed.
 * This component now redirects to the Contact page.
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, MessageCircle } from "lucide-react";
import { GradientButton } from "./ui/gradient-button";
import { GlassCard } from "./ui/glass-card";

export default function SimpleCalEmbed() {
  const navigate = useNavigate();

  return (
    <GlassCard className="p-8 text-center">
      <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 w-fit mx-auto mb-6">
        <Calendar className="w-12 h-12 text-purple-400" />
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2">
        Schedule a Consultation
      </h3>
      <p className="text-gray-400 mb-6 max-w-md mx-auto">
        Fill out our contact form and we'll get back to you within 24 hours 
        to schedule a consultation at your convenience.
      </p>

      <GradientButton onClick={() => navigate("/contact")}>
        <MessageCircle className="w-5 h-5 mr-2" />
        Contact Us
      </GradientButton>
    </GlassCard>
  );
}
