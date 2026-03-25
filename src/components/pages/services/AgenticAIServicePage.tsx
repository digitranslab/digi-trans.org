import { useEffect } from "react";
import { ServicePageTemplate } from "./ServicePageTemplate";
import { newServicesData } from "@/data/services-new";

export default function AgenticAIServicePage() {
  useEffect(() => {
    document.title = "Agentic AI & Workflow Automation | Digitrans";
    document.querySelector('meta[name="description"]')?.setAttribute("content",
      "Transform knowledge work with autonomous AI agents. Agentic AI systems that handle complex tasks for hours — research, analysis, automation — without supervision."
    );
  }, []);

  return <ServicePageTemplate service={newServicesData["agentic-ai"]} />;
}
