import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { GradientButton } from "../ui/gradient-button";
import CalendarWindow from "../CalendarWindow";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function CalendarPage() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setError("");

    const initializeCal = async () => {
      try {
        console.log("Initializing Cal.com on calendar page");
        const cal = await getCalApi();

        if (!cal) {
          console.error("Failed to load Cal API");
          if (isMounted)
            setError("Failed to load calendar. Please try again later.");
          return;
        }

        cal("ui", {
          theme: "dark",
          styles: { branding: { brandColor: "#3b82f6" } },
          hideEventTypeDetails: false,
          layout: "month_view",
        });

        // Set up webhook handler for successful bookings
        cal("on", {
          action: "bookingSuccessful",
          callback: (e) => {
            console.log("Booking successful:", e.detail);
          },
        });

        if (isMounted) setIsLoading(false);
      } catch (err) {
        console.error("Error initializing Cal.com:", err);
        if (isMounted)
          setError("Failed to initialize calendar. Please try again later.");
      }
    };

    initializeCal();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-32 pb-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Schedule a Consultation
            </h1>
            <p className="text-xl text-gray-300">
              Book a time with our experts to discuss your project requirements
              and how we can help you achieve your goals.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-blue-800/30">
            <div className="aspect-video w-full h-[600px] relative">
              {error ? (
                <div className="absolute inset-0 flex items-center justify-center text-red-400">
                  {error}
                </div>
              ) : (
                <>
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/80 z-10">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                  )}
                  <Cal
                    calLink="digitransinc/consultation-digitrans"
                    style={{
                      width: "100%",
                      height: "100%",
                      overflow: "scroll",
                    }}
                    config={{
                      layout: "month_view",
                      theme: "dark",
                      hideEventTypeDetails: false,
                    }}
                  />
                </>
              )}
            </div>
          </div>

          <div className="mt-12 text-center">
            <GradientButton
              onClick={() => setShowCalendar(true)}
            >
              Open Calendar in Modal
            </GradientButton>
          </div>
        </div>
      </section>

      <CalendarWindow
        open={showCalendar}
        onOpenChange={setShowCalendar}
        title="Book a Consultation"
        description="Schedule a time with our team to discuss your project requirements."
      />

      <Footer />
    </div>
  );
}
