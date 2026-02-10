import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Your website domain
const domain = "https://digi-trans.org";

// Search engine submission URLs
const searchEngines = [
  {
    name: "Google",
    url: `https://www.google.com/ping?sitemap=${domain}/sitemap.xml`,
  },
  {
    name: "Bing",
    url: `https://www.bing.com/ping?sitemap=${domain}/sitemap.xml`,
  },
  {
    name: "Yandex",
    url: `https://webmaster.yandex.com/ping?sitemap=${domain}/sitemap.xml`,
  },
  {
    name: "Baidu",
    url: `https://www.baidu.com/ping?sitemap=${domain}/sitemap.xml`,
  },
];

// Function to submit sitemap to search engines
function submitSitemap(engine) {
  return new Promise((resolve, reject) => {
    console.log(`🔄 Submitting sitemap to ${engine.name}...`);

    const request = https
      .get(engine.url, (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          console.log(
            `✅ Submitted sitemap to ${engine.name}. Status: ${res.statusCode}`,
          );
          resolve({
            engine: engine.name,
            status: res.statusCode,
            success: res.statusCode >= 200 && res.statusCode < 300,
            data: data,
            timestamp: new Date().toISOString(),
          });
        });
      })
      .on("error", (err) => {
        console.error(`❌ Error submitting to ${engine.name}:`, err.message);
        reject(err);
      });

    // Set a timeout to prevent hanging requests
    request.setTimeout(10000, () => {
      request.destroy();
      const timeoutError = new Error(
        `Request to ${engine.name} timed out after 10 seconds`,
      );
      reject(timeoutError);
    });
  });
}

// Submit to all search engines
async function submitToAllEngines() {
  console.log("🚀 Starting sitemap submission to search engines...");
  console.log(`📋 Sitemap URL: ${domain}/sitemap.xml`);

  const results = [];

  for (const engine of searchEngines) {
    try {
      const result = await submitSitemap(engine);
      results.push(result);
    } catch (error) {
      console.error(`❌ Failed to submit to ${engine.name}:`, error.message);
      results.push({
        engine: engine.name,
        status: "Error",
        success: false,
        error: error.message,
        timestamp: new Date().toISOString(),
      });
    }

    // Add a small delay between requests to avoid rate limiting
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  // Save results to a log file
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const logFile = path.join(
    __dirname,
    "..",
    "logs",
    `sitemap-submission-${timestamp}.json`,
  );

  // Create logs directory if it doesn't exist
  const logsDir = path.join(__dirname, "..", "logs");
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
  }

  fs.writeFileSync(logFile, JSON.stringify(results, null, 2));
  console.log(`📝 Submission results saved to ${logFile}`);

  console.log("\n📊 Submission Summary:");
  results.forEach((result) => {
    console.log(
      `${result.engine}: ${result.success ? "✅ Success" : "❌ Failed"}`,
    );
  });

  // Calculate success rate
  const successCount = results.filter((r) => r.success).length;
  const totalCount = results.length;
  const successRate = (successCount / totalCount) * 100;
  console.log(
    `\n🎯 Success Rate: ${successRate.toFixed(1)}% (${successCount}/${totalCount})`,
  );

  console.log("\n🔍 Next steps:");
  console.log(
    "1. Verify your site in Google Search Console: https://search.google.com/search-console",
  );
  console.log(
    "2. Verify your site in Bing Webmaster Tools: https://www.bing.com/webmasters",
  );
  console.log(
    "3. Verify your site in Yandex Webmaster: https://webmaster.yandex.com",
  );
  console.log(
    "4. Monitor your search performance and indexing status in these tools",
  );
  console.log(
    "5. Consider running this script periodically (weekly or after major content updates)",
  );
}

// Run the submission
submitToAllEngines().catch((error) => {
  console.error("Error in submission process:", error);
  process.exit(1);
});
