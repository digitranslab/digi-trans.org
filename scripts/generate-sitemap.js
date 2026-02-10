import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define all routes in the application
const routes = [
  "/",
  "/about",
  "/services",
  "/services/big-data-architecture",
  "/services/agentic-ai-data",
  "/services/ai-data-consulting",
  "/services/mvp-development",
  "/services/product-strategy",
  "/services/full-stack-development",
  "/services/devops-scaling",
  "/services/ai-consultancy",
  "/services/ai-accounting",
  "/solutions",
  "/solutions/financial-services",
  "/solutions/healthcare",
  "/solutions/technology",
  "/solutions/retail",
  "/solutions/manufacturing",
  "/solutions/government",
  "/solutions/technical-cofounder",
  "/solutions/saas-consulting",
  "/solutions/legacy-modernization",
  "/products",
  "/products/allama",
  "/products/dblock",
  "/products/ledger",
  "/products/utrack",
  "/products/ember",
  "/products/godash",
  "/products/bigbytes",
  "/products/kozmo-ai",
  "/clients",
  "/clients/fortune-500-companies",
  "/clients/gov-agencies",
  "/clients/tech-startups",
  "/portfolio",
  "/blog",
  "/blog/enabling-our-client-to-maximise-the-business-value-from-it",
  "/blog/building-enterprise-data-lakes",
  "/blog/mlops-best-practices",
  "/blog/cloud-native-architecture-patterns",
  "/blog/real-time-analytics-kafka",
  "/blog/digital-transformation-banking-success-story",
  "/blog/cloud-migration-healthcare-case-study",
  "/blog/ai-retail-personalization-case-study",
  "/blog/multi-agent-orchestration-big-data-analytics",
  "/university",
  "/university/tutorials",
  "/university/live-demos",
  "/university/tech-talks",
  "/university/webinars",
  "/solutions-hub",
  "/solutions-hub/iot-accelerator",
  "/solutions-hub/ai-assistant",
  "/solutions-hub/container-optimizer",
  "/solutions-hub/devops-accelerator",
  "/contact",
  "/locations",
  "/ceo-profile",
  "/applications",
  "/privacy",
  "/terms",
  "/cookies",
  "/security",
];

const domain = "https://digi-trans.org";
const today = new Date().toISOString().split("T")[0];

// Create the main sitemap
let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
sitemap +=
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';

routes.forEach((route) => {
  sitemap += "  <url>\n";
  sitemap += `    <loc>${domain}${route}</loc>\n`;
  sitemap += `    <lastmod>${today}</lastmod>\n`;

  const changefreq = route.includes("/blog/")
    ? "monthly"
    : route === "/" || route === "/services" || route === "/solutions"
      ? "weekly"
      : "monthly";

  sitemap += `    <changefreq>${changefreq}</changefreq>\n`;

  let priority = "0.5";
  if (route === "/") {
    priority = "1.0";
  } else if (
    route === "/services" ||
    route === "/solutions" ||
    route === "/contact"
  ) {
    priority = "0.9";
  } else if (
    route.startsWith("/services/") ||
    route.startsWith("/solutions/") ||
    route.startsWith("/products/")
  ) {
    priority = "0.8";
  } else if (route === "/blog" || route === "/university") {
    priority = "0.7";
  } else if (route.startsWith("/blog/") || route.startsWith("/university/")) {
    priority = "0.6";
  }

  sitemap += `    <priority>${priority}</priority>\n`;

  if (
    route === "/" ||
    route.startsWith("/services/") ||
    route.startsWith("/products/")
  ) {
    sitemap += `    <image:image>\n`;
    sitemap += `      <image:loc>${domain}/images/og-image.jpg</image:loc>\n`;
    sitemap += `      <image:caption>Digitrans - AI &amp; Data Solutions</image:caption>\n`;
    sitemap += `    </image:image>\n`;
  }

  sitemap += "  </url>\n";
});

sitemap += "</urlset>";

const publicDir = path.join(__dirname, "..", "public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
console.log("Sitemap generated successfully!");

let urlList = "";
routes.forEach((route) => {
  urlList += `${domain}${route}\n`;
});

fs.writeFileSync(path.join(publicDir, "urls-for-submission.txt"), urlList);
console.log("URL list for search engine submission generated successfully!");
