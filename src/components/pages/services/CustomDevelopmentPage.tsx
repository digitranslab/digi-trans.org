/**
 * CustomDevelopmentPage Component
 * 
 * Service page for Custom Development using ServicePageTemplate.
 * 
 * Requirements: 11.1, 11.4
 */

import React from "react";
import { ServicePageTemplate } from "./ServicePageTemplate";
import { servicesData } from "@/data/services";

const CustomDevelopmentPage: React.FC = () => {
  return <ServicePageTemplate service={servicesData["custom-development"]} />;
};

export default CustomDevelopmentPage;
