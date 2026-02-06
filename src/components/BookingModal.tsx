/**
 * BookingModal Component
 * 
 * Uses Cal.com free tier for calendar booking.
 * Falls back to direct link if embed fails.
 */

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Calendar, ExternalLink, Loader2 } from "lucide-react";
import { GradientButton } from "./ui/gradient-button";

// Cal.com configuration
const CAL_LINK = "digitransinc/consultation-digitrans";
const CAL_URL = `https://cal.com/${CAL_LINK}`;

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
  const [isLoading, setIsLoading] = useState(true);
  const [embedError, setEmbedError] = useState(false);
  const [CalComponent, setCalComponent] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    if (!open) return;

    let isMounted = true;
    setIsLoading(true);
    setEmbedError(false);

    const loadCalEmbed = async () => {
      try {
        const calModule = await import("@calcom/embed-react");
        const { getCalApi } = calModule;
        
        if (!isMounted) return;
        
        setCalComponent(() => calModule.default);
        
        const cal = await getCalApi();
        if (cal) {
          cal("ui", {
            theme: "dark",
            styles: { branding: { brandColor: "#8b5cf6" } },
            hideEventTypeDetails: false,
            layout: "month_view",
          });
        }
        
        if (isMounted) setIsLoading(false);
      } catch (err) {
        console.error("Failed to load Cal.com embed:", err);
        if (isMounted) {
          setEmbedError(true);
          setIsLoading(false);
        }
      }
    };

    const timer = setTimeout(loadCalEmbed, 100);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] bg-gray-900 text-white border-gray-800 z-[100]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            {title}
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 min-h-[500px] relative">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900">
              <Loader2 className="w-8 h-8 text-purple-500 animate-spin mb-4" />
              <p className="text-gray-400">Loading calendar...</p>
            </div>
          )}

          {embedError ? (
            <div className="flex flex-col items-center justify-center h-full py-12">
              <Calendar className="w-16 h-16 text-purple-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">
                Book Your Consultation
              </h3>
              <p className="text-gray-400 text-center mb-6 max-w-md">
                Click the button below to open our scheduling page.
              </p>
              <GradientButton asChild>
                <a href={CAL_URL} target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-4 h-4 mr-2" />
                  Open Scheduling Page
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </GradientButton>
            </div>
          ) : (
            CalComponent && open && (
              <CalComponent
                calLink={CAL_LINK}
                style={{ width: "100%", height: "500px", overflow: "auto" }}
                config={{
                  layout: "month_view",
                  theme: "dark",
                  hideEventTypeDetails: false,
                }}
              />
            )
          )}
        </div>

        <div className="mt-4 pt-4 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            Having trouble?{" "}
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              Open calendar in new tab
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
