import { useEffect } from "react";
import { ServicePageTemplate } from "./ServicePageTemplate";
import { newServicesData } from "@/data/services-new";

export default function SovereignAIPage() {
  useEffect(() => {
    document.title = "Sovereign AI Solutions — On-Premise AI Deployment | Digitrans";
    document.querySelector('meta[name="description"]')?.setAttribute("content",
      "Deploy AI entirely within your infrastructure. Sovereign AI solutions ensuring complete data residency, regulatory compliance, and operational independence."
    );
  }, []);

  return <ServicePageTemplate service={newServicesData["sovereign-ai"]} />;
}
