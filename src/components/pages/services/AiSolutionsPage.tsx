/**
 * AiSolutionsPage Component
 * 
 * Service page for AI Solutions using ServicePageTemplate.
 */

import React from "react";
import { ServicePageTemplate } from "./ServicePageTemplate";
import { allServicesData } from "@/data/services";

const AiSolutionsPage: React.FC = () => {
  return <ServicePageTemplate service={allServicesData["ai-solutions"]} />;
};

export default AiSolutionsPage;
