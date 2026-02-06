/**
 * CloudSolutionsPage Component
 * 
 * Service page for Cloud Solutions using ServicePageTemplate.
 * 
 * Requirements: 11.1, 11.4
 */

import React from "react";
import { ServicePageTemplate } from "./ServicePageTemplate";
import { servicesData } from "@/data/services";

const CloudSolutionsPage: React.FC = () => {
  return <ServicePageTemplate service={servicesData["cloud-solutions"]} />;
};

export default CloudSolutionsPage;
