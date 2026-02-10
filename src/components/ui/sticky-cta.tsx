import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowRight, X, MessageCircle } from "lucide-react";

interface StickyCTAProps {
  /** Scroll distance in px before the bar appears */
  scrollThreshold?: number;
  /** Hide on the contact page itself */
  hideOnContact?: boolean;
}

export const StickyCTA: React.FC<StickyCTAProps> = ({
  scrollThreshold = 600,
  hideOnContact = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Don't show on contact page
  const isContactPage = location.pathname === "/contact";

  const handleScroll = useCallback(() => {
    if (isDismissed) return;

    const scrollY = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const nearBottom = scrollY + winHeight > docHeight - 300;

    // Show after threshold, hide near footer
    setIsVisible(scrollY > scrollThreshold && !nearBottom);
  }, [isDismissed, scrollThreshold]);

  useEffect(() => {
    // Check sessionStorage for dismissal
    const dismissed = sessionStorage.getItem("sticky-cta-dismissed");
    if (dismissed === "true") {
      setIsDismissed(true);
      return;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    sessionStorage.setItem("sticky-cta-dismissed", "true");
  };

  const handleClick = () => {
    navigate("/contact");
  };

  if ((hideOnContact && isContactPage) || isDismissed) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="container mx-auto px-4 pb-4 pointer-events-auto">
            <div className="relative max-w-2xl mx-auto">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 rounded-2xl blur-lg" />

              {/* Main bar */}
              <div className="relative flex items-center justify-between gap-4 px-5 py-3.5 bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 shadow-[0_0_30px_rgba(139,92,246,0.15)]">
                {/* Left: icon + text */}
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                    <MessageCircle className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-white truncate">
                      Free AI & Data Strategy Session
                    </p>
                    <p className="text-xs text-gray-400 hidden sm:block">
                      30-min consultation · No commitment
                    </p>
                  </div>
                </div>

                {/* Right: CTA button + dismiss */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={handleClick}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-[1.03] active:scale-100"
                  >
                    Book Now
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handleDismiss}
                    className="p-1.5 text-gray-500 hover:text-gray-300 rounded-lg hover:bg-gray-800/50 transition-colors"
                    aria-label="Dismiss"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
