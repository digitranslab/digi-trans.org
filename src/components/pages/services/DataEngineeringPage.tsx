/**
 * DataEngineeringPage Component
 * 
 * Service page for Data Engineering using ServicePageTemplate.
 * 
 * Requirements: 11.1, 11.4
 */

import React from "react";
import { ServicePageTemplate } from "./ServicePageTemplate";
import { servicesData } from "@/data/services";

const DataEngineeringPage: React.FC = () => {
  return <ServicePageTemplate service={servicesData["data-engineering"]} />;
};

export default DataEngineeringPage;
