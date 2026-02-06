/**
 * AIConsultingPage Component
 * 
 * Service page for AI Consulting using ServicePageTemplate.
 * 
 * Requirements: 11.1, 11.4
 */

import React from "react";
import { ServicePageTemplate } from "./ServicePageTemplate";
import { servicesData } from "@/data/services";

const AIConsultingPage: React.FC = () => {
  return <ServicePageTemplate service={servicesData["ai-consulting"]} />;
};

export default AIConsultingPage;
