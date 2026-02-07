/**
 * CloudComputingPage Component
 * 
 * Service page for Cloud Computing using ServicePageTemplate.
 */

import React from "react";
import { ServicePageTemplate } from "./ServicePageTemplate";
import { allServicesData } from "@/data/services";

const CloudComputingPage: React.FC = () => {
  return <ServicePageTemplate service={allServicesData["cloud-computing"]} />;
};

export default CloudComputingPage;
