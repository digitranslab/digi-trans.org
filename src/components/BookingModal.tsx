/**
 * BookingModal Component
 * 
 * Redirects users to the Contact page with Netlify Forms.
 * Cal.com has been removed in favour of the contact form.
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Calendar, MessageCircle, Clock, Users, Globe } from "lucide-react";
import { GradientButton } from "./ui/gradient-button";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
}

export default function BookingModal({
  open,
  onOpenChange,
  title = "Book a Consultation",
  description = "Schedule a free consultation to discuss your needs.",
}: BookingModalProps) {
  const navigate = useNavigate();

  const handleContactClick = () => {
    onOpenChange(false);
    navigate("/contact");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-gray-900 text-white border-gray-800 z-[100]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            {title}
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6">
          <div className="flex flex-col items-center text-center py-6">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 mb-6">
              <Calendar className="w-12 h-12 text-purple-400" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">
              Let's Schedule a Call
            </h3>
            <p className="text-gray-400 mb-6 max-w-sm">
              Fill out our contact form and we'll get back to you within 24 hours 
              to schedule a consultation at your convenience.
            </p>

            <div className="space-y-3 w-full mb-6">
              <div className="flex items-center gap-3 text-gray-300 justify-center">
                <Clock className="w-5 h-5 text-purple-400" />
                <span>30-minute video call</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 justify-center">
                <Users className="w-5 h-5 text-purple-400" />
                <span>Meet with our experts</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 justify-center">
                <Globe className="w-5 h-5 text-purple-400" />
                <span>Available worldwide</span>
              </div>
            </div>

            <GradientButton size="lg" onClick={handleContactClick}>
              <MessageCircle className="w-5 h-5 mr-2" />
              Go to Contact Form
            </GradientButton>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            We typically respond within 24 hours during business days.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
