import { Suspense } from "react";
import GridBackground from "./components/GridBackground";
import PromoBanner from "./components/PromoBanner";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Services from "./components/pages/Services";
import Solutions from "./components/pages/Solutions";
import Clients from "./components/pages/Clients";
import Portfolio from "./components/pages/Portfolio";
import Careers from "./components/pages/Careers";
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
import BigDataAnalytics from "./components/pages/BigDataAnalytics";
import CeoProfile from "./components/pages/CeoProfile";
import AiSolutions from "./components/pages/AiSolutions";
import CloudComputing from "./components/pages/CloudComputing";
import DigitalTransformation from "./components/pages/DigitalTransformation";
import DataSecurity from "./components/pages/DataSecurity";
import EnterpriseSolutions from "./components/pages/EnterpriseSolutions";
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
import CalendarPage from "./components/pages/CalendarPage";
import SimpleCalendarTest from "./components/pages/SimpleCalendarTest";
import SeniorDataEngineer from "./components/pages/careers/SeniorDataEngineer";
import MachineLearningEngineer from "./components/pages/careers/MachineLearningEngineer";
import CloudSolutionsArchitect from "./components/pages/careers/CloudSolutionsArchitect";
import FullStackDeveloper from "./components/pages/careers/FullStackDeveloper";
import DevOpsEngineer from "./components/pages/careers/DevOpsEngineer";
import DataScientist from "./components/pages/careers/DataScientist";
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

// New Service Pages (redesign)
import AIConsultingPage from "./components/pages/services/AIConsultingPage";
import DataEngineeringPage from "./components/pages/services/DataEngineeringPage";
import CloudSolutionsPage from "./components/pages/services/CloudSolutionsPage";
import CustomDevelopmentPage from "./components/pages/services/CustomDevelopmentPage";

// New Solution Pages (redesign)
import FinancialServicesPage from "./components/pages/solutions/FinancialServicesPage";
import HealthcarePage from "./components/pages/solutions/HealthcarePage";
import TechnologyPage from "./components/pages/solutions/TechnologyPage";

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
      <GridBackground />
      <PromoBanner />
      {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/careers" element={<Careers />} />
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
          element={<BigDataAnalytics />}
        />
        <Route path="/services/ai-solutions" element={<AiSolutions />} />
        <Route path="/services/cloud-computing" element={<CloudComputing />} />
        <Route path="/services/mvp-development" element={<MvpDevelopment />} />
        <Route path="/services/product-strategy" element={<ProductStrategy />} />
        <Route path="/services/full-stack-development" element={<FullStackDevelopment />} />
        <Route path="/services/devops-scaling" element={<DevOpsScaling />} />
        
        {/* New AI Service Routes */}
        <Route path="/services/ai-consultancy" element={<AIConsultancy />} />
        <Route path="/services/ai-accounting" element={<AIAccounting />} />
        <Route
          path="/solutions/digital-transformation"
          element={<DigitalTransformation />}
        />
        <Route path="/solutions/data-security" element={<DataSecurity />} />
        <Route
          path="/solutions/enterprise-solutions"
          element={<EnterpriseSolutions />}
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
        <Route path="/products/allama" element={<AllamaPage />} />
        <Route path="/products/dblock" element={<DBlockPage />} />
        
        {/* New Service Routes (redesign) */}
        <Route path="/services/ai-consulting" element={<AIConsultingPage />} />
        <Route path="/services/data-engineering" element={<DataEngineeringPage />} />
        <Route path="/services/cloud-solutions" element={<CloudSolutionsPage />} />
        <Route path="/services/custom-development" element={<CustomDevelopmentPage />} />
        
        {/* New Solution Routes (redesign) */}
        <Route path="/solutions/financial-services" element={<FinancialServicesPage />} />
        <Route path="/solutions/healthcare" element={<HealthcarePage />} />
        <Route path="/solutions/technology" element={<TechnologyPage />} />
        
        {/* University Routes */}
        <Route path="/university" element={<UniversityHubPage />} />
        <Route path="/university/tutorials" element={<TutorialsPage />} />
        <Route path="/university/live-demos" element={<LiveDemosPage />} />
        <Route path="/university/tech-talks" element={<TechTalksPage />} />
        <Route path="/university/webinars" element={<WebinarsPage />} />
        
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/simple-calendar" element={<SimpleCalendarTest />} />
        <Route
          path="/careers/senior-data-engineer"
          element={<SeniorDataEngineer />}
        />
        <Route
          path="/careers/machine-learning-engineer"
          element={<MachineLearningEngineer />}
        />
        <Route
          path="/careers/cloud-solutions-architect"
          element={<CloudSolutionsArchitect />}
        />
        <Route
          path="/careers/full-stack-developer"
          element={<FullStackDeveloper />}
        />
        <Route path="/careers/devops-engineer" element={<DevOpsEngineer />} />
        <Route path="/careers/data-scientist" element={<DataScientist />} />
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
