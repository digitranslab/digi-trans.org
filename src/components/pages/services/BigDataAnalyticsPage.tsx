/**
 * BigDataAnalyticsPage Component
 * 
 * Service page for Big Data Analytics using ServicePageTemplate.
 */

import React from "react";
import { ServicePageTemplate } from "./ServicePageTemplate";
import { allServicesData } from "@/data/services";

const BigDataAnalyticsPage: React.FC = () => {
  return <ServicePageTemplate service={allServicesData["big-data-analytics"]} />;
};

export default BigDataAnalyticsPage;
