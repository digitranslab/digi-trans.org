import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { GradientButton } from "./ui/gradient-button";
import { AnimatedWrapper } from "./ui/animated-wrapper";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface HeroProps {
  headline?: string;
  subheadline?: string;
  videoUrl?: string;
  onRegisterInterest?: () => void;
  showCards?: boolean;
  showBookCallButton?: boolean;
}

const Hero = ({
  videoUrl = "/videos/financial-ai.mp4",
  showBookCallButton = false,
}: HeroProps) => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <div className="relative w-full h-[800px] bg-black overflow-hidden pt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source
          src={
            videoUrl ||
            "https://cdn.coverr.co/videos/coverr-an-aerial-view-of-a-business-district-1573/1080p.mp4"
          }
          type="video/mp4"
        />
      </video>

      {/* Animated Hero Title */}
      <div className="relative z-20 w-full text-center pt-8 pb-0">
        <AnimatedWrapper animation="slide-down" delay={0} duration={0.8}>
          <span className="inline-block px-4 py-1.5 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30 backdrop-blur-sm mb-4">
            Enterprise AI &amp; Data Solutions
          </span>
        </AnimatedWrapper>

        <div className="overflow-hidden">
          <AnimatedWrapper animation="fade-up" delay={0.2} duration={0.8}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              <span className={`bg-clip-text text-transparent ${theme === "dark" ? "bg-gradient-to-r from-white via-purple-200 to-white" : "bg-gradient-to-r from-gray-900 via-purple-700 to-gray-900"}`}>
                Turn Data Into
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Competitive Advantage
              </span>
            </h1>
          </AnimatedWrapper>
        </div>

        {/* Animated underline */}
        <AnimatedWrapper animation="scale-up" delay={1} duration={0.8}>
          <div className="mx-auto w-32 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 rounded-full" />
        </AnimatedWrapper>
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-start items-center text-center pt-6">
        {/* Subheadline */}
        <AnimatedWrapper animation="fade-up" delay={0.4} duration={0.8}>
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl leading-relaxed">
            Creating digital capabilities for you, that last beyond us.
          </p>
        </AnimatedWrapper>

        {/* Consultancy Services */}
        <AnimatedWrapper animation="fade-up" delay={0.6} duration={0.8}>
          <div className="mb-8">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">Consultancy services we offer</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Software engineering", "Digital product design", "Data science", "AI engineering"].map((service) => (
                <span key={service} className="px-4 py-1.5 text-sm text-gray-300 bg-gray-800/50 border border-gray-700/50 rounded-full backdrop-blur-sm">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </AnimatedWrapper>

        {/* CTA buttons */}
        <AnimatedWrapper animation="fade-up" delay={0.8} duration={0.8}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <GradientButton
              size="lg"
              onClick={() => navigate("/services")}
              rightIcon={<ArrowRight className="h-5 w-5" />}
            >
              Explore Services
            </GradientButton>

            <GradientButton
              size="lg"
              variant="secondary"
              onClick={() => navigate("/products")}
              rightIcon={<ArrowRight className="h-5 w-5" />}
            >
              View Products
            </GradientButton>
          </div>
        </AnimatedWrapper>

        {/* Client logos - Animated scrolling (framer-motion retained for infinite loop) */}
        <AnimatedWrapper animation="fade-up" delay={1} duration={0.8}>
          <div className="w-full overflow-hidden">
            <p className="text-gray-400 text-sm mb-4 text-center">Trusted by data-driven enterprises worldwide</p>
            <div className="relative">
              <motion.div
                className="flex gap-4 items-center"
                animate={{ x: [0, -1800] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {[
                  { name: "Renault", logo: "/images/1.svg" },
                  { name: "BPI France", logo: "/images/2.svg" },
                  { name: "Dr. Martens", logo: "/images/3.svg" },
                  { name: "Direct Line", logo: "/images/4.svg" },
                  { name: "Thales", logo: "/images/5.svg" },
                  { name: "RATP", logo: "/images/6.svg" },
                  { name: "Renault", logo: "/images/1.svg" },
                  { name: "BPI France", logo: "/images/2.svg" },
                  { name: "Dr. Martens", logo: "/images/3.svg" },
                  { name: "Direct Line", logo: "/images/4.svg" },
                  { name: "Thales", logo: "/images/5.svg" },
                  { name: "RATP", logo: "/images/6.svg" },
                  { name: "Renault", logo: "/images/1.svg" },
                  { name: "BPI France", logo: "/images/2.svg" },
                  { name: "Dr. Martens", logo: "/images/3.svg" },
                  { name: "Direct Line", logo: "/images/4.svg" },
                  { name: "Thales", logo: "/images/5.svg" },
                  { name: "RATP", logo: "/images/6.svg" },
                ].map((client, index) => (
                  <div
                    key={`${client.name}-${index}`}
                    className="flex-shrink-0 px-8 py-4 rounded-xl bg-gray-900/60 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer hover:bg-gray-800/50 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="h-10 w-auto object-contain brightness-0 invert"
                      />
                      <span className="text-white font-medium whitespace-nowrap group-hover:text-purple-400 transition-colors text-lg">
                        {client.name}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </AnimatedWrapper>

        {showBookCallButton && (
          <AnimatedWrapper animation="fade-up" delay={0.6} duration={0.8}>
            <div className="mt-12">
              <GradientButton
                size="lg"
                onClick={() => navigate("/contact")}
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                <span className="animate-pulse bg-white rounded-full w-2 h-2 mr-2"></span>
                Book a 30-min Call with our CEO
              </GradientButton>
            </div>
          </AnimatedWrapper>
        )}
      </div>
    </div>
  );
};

export default Hero;
