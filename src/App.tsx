import { Suspense } from "react";
import GridBackground from "./components/GridBackground";
import PromoBanner from "./components/PromoBanner";
import ScrollToTop from "./components/ScrollToTop";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Services from "./components/pages/Services";
import Solutions from "./components/pages/Solutions";
import Clients from "./components/pages/Clients";
import Portfolio from "./components/pages/Portfolio";
// Careers page removed - routes redirect to /contact
import Blog from "./components/pages/Blog";
import BlogPost from "./components/pages/BlogPost";
import EnablingClientMaximizeIT from "./components/pages/blog/EnablingClientMaximizeIT";
import BuildingEnterpriseDataLakes from "./components/pages/blog/BuildingEnterpriseDataLakes";
import MLOpsBestPractices from "./components/pages/blog/MLOpsBestPractices";
import CloudNativeArchitecturePatterns from "./components/pages/blog/CloudNativeArchitecturePatterns";
import RealTimeAnalyticsKafka from "./components/pages/blog/RealTimeAnalyticsKafka";
import DigitalTransformationBanking from "./components/pages/blog/DigitalTransformationBanking";
import CloudMigrationHealthcare from "./components/pages/blog/CloudMigrationHealthcare";
import AIRetailPersonalization from "./components/pages/blog/AIRetailPersonalization";
import MultiAgentOrchestration from "./components/pages/blog/MultiAgentOrchestration";
import Locations from "./components/pages/Locations";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import CeoProfile from "./components/pages/CeoProfile";

// Legacy imports removed - these pages now redirect via <Navigate>

// Legacy solution pages - now redirect to new equivalents
import { Navigate } from "react-router-dom";
import Fortune500 from "./components/pages/clients/Fortune500";
import GovAgencies from "./components/pages/clients/GovAgencies";
import TechStartups from "./components/pages/clients/TechStartups";
import routes from "tempo-routes";
import Privacy from "./components/pages/legal/Privacy";
import Terms from "./components/pages/legal/Terms";
import Cookies from "./components/pages/legal/Cookies";
import Security from "./components/pages/legal/Security";
import Ledger from "./components/pages/products/Ledger";
import UTrack from "./components/pages/products/uTrack";
import Ember from "./components/pages/products/Ember";
import GoDash from "./components/pages/products/GoDash";
import BigBytes from "./components/pages/products/BigBytes";
import KozmoAI from "./components/pages/products/KozmoAI";
// Calendar pages removed - Cal.com replaced with Contact page
// Career sub-page imports removed - routes redirect to /contact
import Applications from "./components/pages/Applications";

// Solutions Hub Pages
import SolutionsHub from "./components/pages/SolutionsHub";
import IoTAccelerator from "./components/pages/solutions-hub/IoTAccelerator";
import AIAssistant from "./components/pages/solutions-hub/AIAssistant";
import ContainerOptimizer from "./components/pages/solutions-hub/ContainerOptimizer";
import DevOpsAccelerator from "./components/pages/solutions-hub/DevOpsAccelerator";

// Service Pages
import MvpDevelopment from "./components/pages/services/MvpDevelopment";
import ProductStrategy from "./components/pages/services/ProductStrategy";
import FullStackDevelopment from "./components/pages/services/FullStackDevelopment";
import DevOpsScaling from "./components/pages/services/DevOpsScaling";

// New AI Service Pages
import AIConsultancy from "./components/pages/services/AIConsultancy";
import AIAccounting from "./components/pages/services/AIAccounting";

// Solution Pages
import TechnicalCofounder from "./components/pages/solutions/TechnicalCofounder";
import SaaSConsulting from "./components/pages/solutions/SaaSConsulting";
import LegacyModernization from "./components/pages/solutions/LegacyModernization";

// New Product Pages
import AllamaPage from "./components/pages/products/AllamaPage";
import DBlockPage from "./components/pages/products/DBlockPage";
import Products from "./components/pages/Products";

// New Consolidated Service Pages (3 categories)
import BigDataArchitecturePage from "./components/pages/services/BigDataArchitecturePage";
import AgenticAIDataPage from "./components/pages/services/AgenticAIDataPage";
import AIDataConsultingPage from "./components/pages/services/AIDataConsultingPage";

// New Solution Pages (redesign)
import FinancialServicesPage from "./components/pages/solutions/FinancialServicesPage";
import HealthcarePage from "./components/pages/solutions/HealthcarePage";
import TechnologyPage from "./components/pages/solutions/TechnologyPage";
import RetailPage from "./components/pages/solutions/RetailPage";
import ManufacturingPage from "./components/pages/solutions/ManufacturingPage";
import GovernmentPage from "./components/pages/solutions/GovernmentPage";

// New Homepage
import HomePage from "./components/pages/HomePage";

// University Pages
import UniversityHubPage from "./components/pages/university/UniversityHubPage";
import TutorialsPage from "./components/pages/university/TutorialsPage";
import LiveDemosPage from "./components/pages/university/LiveDemosPage";
import TechTalksPage from "./components/pages/university/TechTalksPage";
import WebinarsPage from "./components/pages/university/WebinarsPage";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ScrollToTop />
      <GridBackground />
      <PromoBanner />
      {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/careers" element={<Navigate to="/contact" replace />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route
          path="/blog/enabling-our-client-to-maximise-the-business-value-from-it"
          element={<EnablingClientMaximizeIT />}
        />
        <Route
          path="/blog/building-enterprise-data-lakes"
          element={<BuildingEnterpriseDataLakes />}
        />
        <Route
          path="/blog/mlops-best-practices"
          element={<MLOpsBestPractices />}
        />
        <Route
          path="/blog/cloud-native-architecture-patterns"
          element={<CloudNativeArchitecturePatterns />}
        />
        <Route
          path="/blog/real-time-analytics-kafka"
          element={<RealTimeAnalyticsKafka />}
        />
        <Route
          path="/blog/digital-transformation-banking-success-story"
          element={<DigitalTransformationBanking />}
        />
        <Route
          path="/blog/cloud-migration-healthcare-case-study"
          element={<CloudMigrationHealthcare />}
        />
        <Route
          path="/blog/ai-retail-personalization-case-study"
          element={<AIRetailPersonalization />}
        />
        <Route
          path="/blog/multi-agent-orchestration-big-data-analytics"
          element={<MultiAgentOrchestration />}
        />
        <Route path="/locations" element={<Locations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/ceo-profile" element={<CeoProfile />} />
        <Route
          path="/services/big-data-analytics"
          element={<Navigate to="/services/big-data-architecture" replace />}
        />
        <Route path="/services/ai-solutions" element={<Navigate to="/services/agentic-ai-data" replace />} />
        <Route path="/services/cloud-computing" element={<Navigate to="/services/big-data-architecture" replace />} />
        <Route path="/services/mvp-development" element={<MvpDevelopment />} />
        <Route path="/services/product-strategy" element={<ProductStrategy />} />
        <Route path="/services/full-stack-development" element={<FullStackDevelopment />} />
        <Route path="/services/devops-scaling" element={<DevOpsScaling />} />
        
        {/* New AI Service Routes */}
        <Route path="/services/ai-consultancy" element={<AIConsultancy />} />
        <Route path="/services/ai-accounting" element={<AIAccounting />} />
        <Route
          path="/solutions/digital-transformation"
          element={<Navigate to="/solutions/technology" replace />}
        />
        <Route path="/solutions/data-security" element={<Navigate to="/services/big-data-architecture" replace />} />
        <Route
          path="/solutions/enterprise-solutions"
          element={<Navigate to="/services" replace />}
        />
        <Route path="/solutions/technical-cofounder" element={<TechnicalCofounder />} />
        <Route path="/solutions/saas-consulting" element={<SaaSConsulting />} />
        <Route path="/solutions/legacy-modernization" element={<LegacyModernization />} />
        <Route path="/clients/fortune-500-companies" element={<Fortune500 />} />
        <Route path="/clients/gov-agencies" element={<GovAgencies />} />
        <Route path="/clients/tech-startups" element={<TechStartups />} />
        <Route path="/products/ledger" element={<Ledger />} />
        <Route path="/products/utrack" element={<UTrack />} />
        <Route path="/products/ember" element={<Ember />} />
        <Route path="/products/godash" element={<GoDash />} />
        <Route path="/products/bigbytes" element={<BigBytes />} />
        <Route path="/products/kozmo-ai" element={<KozmoAI />} />
        
        {/* New Product Routes (redesign) */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/allama" element={<AllamaPage />} />
        <Route path="/products/dblock" element={<DBlockPage />} />
        
        {/* Legacy Service Redirects - old 4-service structure to new 3-service */}
        <Route path="/services/ai-consulting" element={<Navigate to="/services/ai-data-consulting" replace />} />
        <Route path="/services/data-engineering" element={<Navigate to="/services/big-data-architecture" replace />} />
        <Route path="/services/cloud-solutions" element={<Navigate to="/services/big-data-architecture" replace />} />
        <Route path="/services/custom-development" element={<Navigate to="/services/agentic-ai-data" replace />} />
        
        {/* New Consolidated Service Routes (3 categories) */}
        <Route path="/services/big-data-architecture" element={<BigDataArchitecturePage />} />
        <Route path="/services/agentic-ai-data" element={<AgenticAIDataPage />} />
        <Route path="/services/ai-data-consulting" element={<AIDataConsultingPage />} />
        
        {/* New Solution Routes (redesign) */}
        <Route path="/solutions/financial-services" element={<FinancialServicesPage />} />
        <Route path="/solutions/healthcare" element={<HealthcarePage />} />
        <Route path="/solutions/technology" element={<TechnologyPage />} />
        <Route path="/solutions/retail" element={<RetailPage />} />
        <Route path="/solutions/manufacturing" element={<ManufacturingPage />} />
        <Route path="/solutions/government" element={<GovernmentPage />} />
        
        {/* University Routes */}
        <Route path="/university" element={<UniversityHubPage />} />
        <Route path="/university/tutorials" element={<TutorialsPage />} />
        <Route path="/university/live-demos" element={<LiveDemosPage />} />
        <Route path="/university/tech-talks" element={<TechTalksPage />} />
        <Route path="/university/webinars" element={<WebinarsPage />} />
        
        <Route path="/calendar" element={<Navigate to="/contact" replace />} />
        <Route path="/simple-calendar" element={<Navigate to="/contact" replace />} />
        {/* Career routes redirect to contact */}
        <Route path="/careers/senior-data-engineer" element={<Navigate to="/contact" replace />} />
        <Route path="/careers/machine-learning-engineer" element={<Navigate to="/contact" replace />} />
        <Route path="/careers/cloud-solutions-architect" element={<Navigate to="/contact" replace />} />
        <Route path="/careers/full-stack-developer" element={<Navigate to="/contact" replace />} />
        <Route path="/careers/devops-engineer" element={<Navigate to="/contact" replace />} />
        <Route path="/careers/data-scientist" element={<Navigate to="/contact" replace />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/security" element={<Security />} />
        <Route path="/applications" element={<Applications />} />
        
        {/* Solutions Hub Routes */}
        <Route path="/solutions-hub" element={<SolutionsHub />} />
        <Route path="/solutions-hub/iot-accelerator" element={<IoTAccelerator />} />
        <Route path="/solutions-hub/ai-assistant" element={<AIAssistant />} />
        <Route path="/solutions-hub/container-optimizer" element={<ContainerOptimizer />} />
        <Route path="/solutions-hub/devops-accelerator" element={<DevOpsAccelerator />} />
        
        {import.meta.env.VITE_TEMPO === "true" && <Route path="/tempobook/*" />}
      </Routes>
    </Suspense>
  );
}

export default App;
