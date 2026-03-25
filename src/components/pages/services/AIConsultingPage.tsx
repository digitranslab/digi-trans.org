import { useEffect } from "react";
import { ServicePageTemplate } from "./ServicePageTemplate";
import { newServicesData } from "@/data/services-new";

export default function AIConsultingPage() {
  useEffect(() => {
    document.title = "AI Consulting Services — Strategy to Autonomous Agents | Digitrans";
    document.querySelector('meta[name="description"]')?.setAttribute("content",
      "End-to-end AI consulting from strategy to autonomous agent deployment. Digitrans Lab helps organizations implement AI they own, control, and trust."
    );
  }, []);

  return <ServicePageTemplate service={newServicesData["ai-consulting"]} />;
}
