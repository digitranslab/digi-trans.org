import React, { useState } from "react";
import type { Map as LeafletMap } from "leaflet";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import RegistrationModal from "../RegistrationModal";
import { AnimatedWrapper } from "../ui/animated-wrapper";
import { GlassCard } from "../ui/glass-card";
import { TypewriterGradientText } from "../ui/typewriter-text";
import { GradientButton } from "../ui/gradient-button";

const locations = [
  {
    city: "Dubai",
    country: "UAE",
    address: "Downtown Dubai, Business Center",
    phone: "+971 4 123 4567",
    email: "dubai@digitrans.ai",
    coordinates: { lat: 25.2048, lng: 55.2708 },
  },
  {
    city: "Paris",
    country: "France",
    address: "15 Avenue des Champs-Élysées",
    phone: "+33 1 23 45 67 89",
    email: "paris@digitrans.ai",
    coordinates: { lat: 48.8566, lng: 2.3522 },
  },
  {
    city: "London",
    country: "UK",
    address: "30 St Mary Axe",
    phone: "+44 20 7123 4567",
    email: "london@digitrans.ai",
    coordinates: { lat: 51.5074, lng: -0.1278 },
  },
  {
    city: "Casablanca",
    country: "Morocco",
    address: "Marina Business District",
    phone: "+212 5 2234 5678",
    email: "casablanca@digitrans.ai",
    coordinates: { lat: 33.5731, lng: -7.5898 },
  },
];

export default function Locations() {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const mapRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!mapRef.current || typeof window === "undefined") return;

    // @ts-ignore
    const L = window.L;
    const map: LeafletMap = L.map(mapRef.current).setView([30, 0], 2);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    locations.forEach((location) => {
      L.marker([location.coordinates.lat, location.coordinates.lng])
        .bindPopup(`${location.city}, ${location.country}`)
        .addTo(map);
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedWrapper animation="fade-up-slow" className="max-w-3xl mx-auto text-center">
            <span className="inline-block mb-4 px-4 py-1.5 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30">
              Global Presence
            </span>
            <TypewriterGradientText 
              text="Our Global Presence"
              className="text-4xl md:text-5xl font-bold mb-6"
              duration={1.8}
            />
            <p className="text-xl text-gray-300 mb-8">
              With offices across multiple continents, we're ready to serve your business needs wherever you are.
            </p>
            <GradientButton size="lg" onClick={() => setShowRegistrationModal(true)}>
              Get in Touch
            </GradientButton>
          </AnimatedWrapper>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Map */}
          <AnimatedWrapper animation="fade-up-slow">
            <div className="w-full h-[400px] rounded-xl overflow-hidden mb-16 shadow-lg">
              <div ref={mapRef} className="w-full h-full relative z-0" />
            </div>
          </AnimatedWrapper>

          {/* Location Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locations.map((location, index) => (
              <AnimatedWrapper
                key={location.city}
                animation="float-up"
                delay={index * 0.1}
              >
                <GlassCard variant="gradient" className="p-6 h-full hover:scale-[1.03] transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <MapPin className="h-5 w-5 text-blue-500 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-white">
                        {location.city}, {location.country}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {location.address}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-400">
                        {location.phone}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-400">
                        {location.email}
                      </span>
                    </div>
                  </div>
                  <Button
                    onClick={() => setShowRegistrationModal(true)}
                    className="w-full"
                    variant="outline"
                  >
                    Get in Touch
                  </Button>
                </GlassCard>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <RegistrationModal
        open={showRegistrationModal}
        onOpenChange={setShowRegistrationModal}
      />
    </div>
  );
}
