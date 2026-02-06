/**
 * FinancialServicesPage Component
 * 
 * Solution page for Financial Services using SolutionPageTemplate.
 * Includes compliance section for PCI-DSS, SOX, etc.
 * 
 * Requirements: 12.1, 12.3, 12.4
 */

import React from "react";
import { SolutionPageTemplate } from "./SolutionPageTemplate";
import { solutionsData } from "@/data/solutions";

const FinancialServicesPage: React.FC = () => {
  return <SolutionPageTemplate solution={solutionsData["financial-services"]} />;
};

export default FinancialServicesPage;
