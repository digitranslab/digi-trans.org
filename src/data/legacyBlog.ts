/**
 * Legacy Blog Posts Data
 *
 * Blog post entries extracted from the legacy DigiTransLab WordPress site.
 * Each entry contains the article metadata and a content summary for display.
 */

export interface LegacyBlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  content: string;
  image?: string;
}

export const legacyBlogPosts: LegacyBlogPost[] = [
  {
    slug: "the-power-of-llm-in-the-industry",
    title: "Unleashing the power of LLM in the industry: a guide for business leaders",
    excerpt:
      "Explore the transformative potential of Large Language Models in the industrial sector. This article discusses applications, challenges, and the significance of personalized AI strategies for thriving amidst industry-specific dynamics.",
    category: "AI/ML",
    date: "June 15, 2023",
    content: `In an era where digital acceleration has become the new normal, few innovations have the transformative potential that large language models, such as ChatGPT, hold. Mastering the vast and intricate domain of human language, these models stand as impressive flag bearers of the next wave of AI innovation — poised to unlock unprecedented business value and reshape industrial landscapes.

Generative AI, a subfield of AI, uses machine learning to create data mimicking human output. Foundation models are the cornerstone of generative AI — versatile machine learning models trained on diverse data, acting as an adaptable base for various tasks. Large Language Models are foundation models specifically trained on extensive text data, capable of creating accurate, contextually relevant, human-like text.

LLMs adapt to a variety of tasks including question answering, text summarization, text generation, translation, text classification, and named entity recognition. In industrial settings, LLMs can revolutionize maintenance assistance, health safety and environment analysis, risk management, compliance monitoring, complex project management, collaboration, and resource allocation.

While generalized LLMs can be effective, relying exclusively on them has drawbacks for complex enterprise operations. Domain-specific knowledge, proprietary data alignment, and privacy concerns must be addressed. Business leaders must cultivate a culture of data, align AI strategies with broader business objectives, and engage in continuous learning and adaptation.

Digitrans offers services including framing and roadmap development, technology strategy framing, technical enablement, use case delivery, and usage monitoring and compliance to help enterprises harness the power of LLMs.`,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
  {
    slug: "seeing-through-computer-vision-convolution-101",
    title: "Seeing through Computer Vision: Convolution 101",
    excerpt:
      "A deep dive into convolution — the key building block behind modern computer vision applications, from object detection to segmentation and image generation models.",
    category: "AI/ML",
    date: "April 18, 2023",
    content: `Convolution is one of the most popular operations in signal and image processing, and is often encountered as a first step in computer vision processing pipelines. It is a mathematical transformation that consists in multiplying two signals, forming the backbone of many impressive applications from edge detection to segmentation and image generation.

A 2D convolution is controlled by four key parameters: kernel size (the dimension of the convolving window), stride (how much the kernel moves between computations), dilation (how far apart values are within the kernel), and padding (how to handle empty values at borders).

Convolution is useful for altering images (e.g., Gaussian blurring), selecting regions (e.g., edge detection), and learning generic representations as layers in neural networks. Convolutional neural networks (CNNs) chain together multiple convolutional layers to learn increasingly complex patterns.

Implementations range from naive loop-based approaches in NumPy, to vectorized scipy implementations, to GPU-boosted PyTorch implementations using CUDA and CUDNN for optimal performance. FFT-based implementations can be even faster for larger kernels.

At Digitrans, we applied these techniques in a smart city project for Suez, designing a CNN to detect defects in sewage pipes. By chaining multiple convolutional layers, the model accurately identified cracks and other defects, helping operators improve maintenance and repair processes.`,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
  },
  {
    slug: "crunching-the-numbers-covid19-agriculture",
    title: "Crunching the numbers: Covid19 challenges in agriculture and the food industry",
    excerpt:
      "An analysis of how the Covid-19 pandemic disrupted agriculture and the food industry, and how data analytics and AI can help navigate the crisis.",
    category: "Data Engineering",
    date: "April 22, 2020",
    content: `Border closures, quarantines, and sanitary measures restrict access to food sources, especially in countries hit hard by the virus. Food production faces unprecedented challenges: falling wholesale demand from hotels and restaurants, flight to quality with high demand for branded food, difficulties maintaining production capacity due to worker shortages, and disrupted global supply chains.

Food and beverage companies are taking action to maintain production levels. Big data technologies and predictive algorithms can help better manage stockpiles in industries used to just-in-time delivery, especially for perishable goods. Machine-learning technology for replenishment has shown reductions of up to 80 percent in out-of-stock rates and gross-margin increases of up to 9 percent.

Agriculture faces a bigger challenge for the years to come: how can food demand cope with 2 billion more people while preserving the environment? Data analysis can help — farmers are becoming process experts who need to account for weather, soil moisture, nutrient content, and crop health threats. Companies like John Deere have invested heavily in data capabilities.

Better data management and analytics models are a game changer for navigating the crisis. Advanced analytics can quickly identify opportunities and inefficiencies across sites, driving significant savings in manufacturing and R&D functions.`,
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
  },
  {
    slug: "computer-vision-with-pytorch",
    title: "New book unveiled: Computer Vision with PyTorch",
    excerpt:
      "An exclusive interview with Mohamed BenChaliah, data scientist and ML engineer at Digitrans, about his new book covering end-to-end computer vision applications with PyTorch.",
    category: "AI/ML",
    date: "February 22, 2024",
    content: `In the rapidly evolving technological landscape, the field of computer vision stands out, pushing back the boundaries of how machines can interpret and understand the visual world. At Digitrans, we are at the forefront of transforming industrial operations through the power of computer vision.

Mohamed BenChaliah, an experienced data scientist and machine learning engineer with advanced expertise in computer vision applications, shares details of his new book "Computer Vision with PyTorch." Industrial computer vision demands high precision and robustness in challenging conditions, often operating with limited datasets and leveraging transfer learning to improve outcomes.

At Digitrans, notable projects include deploying a robot with advanced depth estimation capabilities for dangerous environments using monocular depth models, and automating equipment defect detection using instance segmentation with Mask-RCNN. Both projects produced concrete and tangible benefits.

The book is a hands-on answer to questions a data scientist might ask when working with machine learning applications, covering everything from model training to production deployment. Looking ahead, two particularly interesting areas are generative computer vision models (especially diffusion models for synthetic data generation) and computer vision for robots with 3D vision models and few-shot object manipulation.

The synergy between computer vision and language models, exemplified by multimodal models like LLAVA, promises further advances bridging how machines see the world and how they understand and communicate about it.`,
    image: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=800&q=80",
  },
  {
    slug: "rag-llm-on-azure",
    title: "Unlock knowledge faster: set up your first RAG LLM on Azure today",
    excerpt:
      "A practical guide to setting up a Retrieval Augmented Generation chatbot on Azure, from initial setup to evaluation and performance enhancement strategies.",
    category: "AI/ML",
    date: "October 14, 2024",
    content: `Almost every company relies on a wide range of documents to operate effectively. Large Language Models such as ChatGPT can be leveraged along with Information Retrieval approaches to create a Retrieval Augmented Generation (RAG) chatbot. Azure provides a comprehensive suite of services to set up a RAG chatbot quickly and easily.

RAG enriches information retrieval with LLM capabilities by integrating retrieval-based and generation-based models. The core steps include creating an embedding of the query, comparing it to the document index, selecting top documents, aggregating them in a templated prompt, and providing this to an LLM for the final answer.

The solution uses Azure AI Search for document indexing and query processing, Azure OpenAI Service for natural language understanding and generation, with a React frontend and Python/Quart backend. Setup involves configuring Azure permissions, deploying with Azure Developer CLI, and creating the embedding database from proprietary documents.

Evaluation uses manually created test questions across categories: basic retrieval, conditional retrieval, aggregation, and semantic retrieval. Metrics include retrieval score, final answer score, and hallucination score. Initial results showed over two-thirds satisfactory retrieval and answer scores.

Enhancement strategies include improving index design, document search with cognitive search, prompt engineering with re-ranking, query routing across domain-specific databases, and exploring advanced techniques like GraphRAG. Open-source frameworks like LlamaIndex and LangChain complement Azure services.`,
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80",
  },
  {
    slug: "ai-strategy-enterprise-readiness-2026",
    title: "AI Strategy for Enterprise: From Readiness Assessment to Production Deployment",
    excerpt: "How organizations can move from AI experimentation to production with a structured strategy covering readiness, use cases, and ROI.",
    category: "AI Strategy",
    date: "March 10, 2026",
    content: `Most enterprises have experimented with AI, but few have moved beyond proof-of-concept. The gap between experimentation and production deployment is where most AI initiatives fail — 85% of AI projects never make it past PoC. A structured AI strategy bridges this gap by aligning technology choices with business outcomes.

An effective AI strategy starts with a readiness assessment: evaluating data maturity, infrastructure capabilities, and workforce preparedness. Organizations need to honestly assess where they stand before committing to ambitious AI roadmaps. This includes mapping existing data assets, identifying integration points, and understanding regulatory constraints specific to their industry.

The next phase is use case identification and prioritization. Not every process benefits equally from AI automation. The highest-impact opportunities typically involve repetitive knowledge work — the 60% of time workers spend on "work about work" like searching for information, chasing updates, and switching between applications. Agentic AI systems, like those built on the Megamind platform, can autonomously handle these tasks for hours without supervision, freeing teams to focus on high-value creative and strategic work.`,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    slug: "agentic-ai-autonomous-agents-enterprise",
    title: "Agentic AI: Building Autonomous Agents That Work for Hours Without Supervision",
    excerpt: "Explore how agentic AI systems using MCP can autonomously handle complex research, analysis, and automation tasks.",
    category: "Agentic AI",
    date: "March 5, 2026",
    content: `Agentic AI represents a fundamental shift from conversational AI to autonomous AI. Instead of answering questions, agentic systems plan, reason, and execute complex multi-step tasks independently. Give an agent a research task, and it will run for hours — searching, analyzing, synthesizing, and producing results without human intervention.

The enabling technology behind this shift is the Model Context Protocol (MCP) — an open standard that connects AI models to external tools through a standardized interface. MCP solves the M×N integration problem: instead of building custom integrations for every combination of AI model and tool, one protocol works with any compliant tool. This includes browser automation, code execution sandboxes, search engines, project management tools, and design platforms.

Digitrans Lab's Megamind platform implements MCP natively, supporting six integration categories: Browser Automation (BrowserBase), Data Analysis (E2B, Jupyter), Search & Research (Serper, Exa), Deep Research (Octagon), Design (Canva), and Productivity (Linear, Todoist). Combined with workflow orchestration via n8n and developer tools like Continue.dev and Tabby, organizations can build comprehensive automation pipelines that handle everything from market research to code review to report generation.`,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
  {
    slug: "workflow-automation-ai-agents-n8n",
    title: "Workflow Automation with AI Agents: Connecting Megamind to Your Tool Stack via n8n",
    excerpt: "A practical guide to building AI-powered workflow automations using Megamind's local API and n8n orchestration.",
    category: "Workflow Automation",
    date: "February 28, 2026",
    content: `Knowledge workers spend an average of 60% of their time on "work about work" — searching for information, chasing status updates, switching between applications, and managing communications. AI-powered workflow automation eliminates this waste by connecting intelligent agents to your existing tool stack through standardized protocols.

Megamind's local API server exposes an OpenAI-compatible REST API at localhost:1337, making it a drop-in replacement for cloud AI services. This means any tool that integrates with OpenAI's API — including n8n, the popular workflow automation platform — works seamlessly with Megamind. The key difference: all processing happens locally, with zero data leaving your infrastructure.

Building an automated workflow typically follows a pattern: trigger (email received, document uploaded, scheduled time), process (AI analyzes content, extracts information, makes decisions), and action (update CRM, generate report, send notification). With n8n orchestrating these steps and Megamind providing the AI intelligence, organizations can automate complex multi-step processes that previously required hours of manual work. Real-world implementations have shown 70-90% reduction in time spent on routine knowledge work tasks.`,
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80",
  },
  {
    slug: "sovereign-ai-data-residency-compliance",
    title: "Sovereign AI: Why Data Residency and On-Premise Deployment Matter More Than Ever",
    excerpt: "Understanding sovereign AI and why organizations in regulated industries need complete control over their AI infrastructure.",
    category: "Sovereign AI",
    date: "February 20, 2026",
    content: `As AI adoption accelerates across industries, a critical question emerges: who controls the data that flows through AI systems? For organizations in government, healthcare, finance, defense, and legal sectors, the answer must be unequivocal — the organization itself. This is the premise of sovereign AI: complete organizational control over data, models, infrastructure, and code.

Sovereign AI is not about rejecting cloud technology — it is about ensuring that sensitive data never leaves organizational boundaries. When a government analyst uses ChatGPT to summarize classified documents, that data flows to external servers. When a hospital uses cloud AI for patient records, HIPAA compliance becomes a complex legal question. Sovereign AI eliminates these concerns by running everything locally: the AI models, the inference engine, the data storage, and the API server.

Megamind, the open-source AI platform by digitranslab, makes sovereign AI practical. It runs on consumer hardware (starting from 4GB RAM for the Lucy model) and supports fully air-gapped deployment. The platform includes local model management, an OpenAI-compatible API server, and MCP tool integrations — all operating within the organization's boundary. For compliance-heavy environments, this architecture satisfies GDPR, HIPAA, SOC2, and FedRAMP requirements by design, not by policy.`,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80",
  },
  {
    slug: "fine-tuning-compact-ai-models-enterprise",
    title: "Fine-Tuning Compact AI Models: How 4B Parameters Can Outperform 70B on Targeted Tasks",
    excerpt: "How Digitrans Lab trains small, efficient models that outperform much larger models on specific benchmarks.",
    category: "AI Models",
    date: "February 12, 2026",
    content: `The conventional wisdom in AI has been that bigger models are better. But Digitrans Lab's model training lab proves otherwise: their Jan-v1 model, with just 4 billion parameters, achieves 91.1% accuracy on SimpleQA — outperforming Perplexity's 70B model on the same benchmark. The secret is not size, but focus.

Fine-tuning compact models for specific tasks — reasoning, tool calling, deep research — produces models that excel where it matters. Instead of trying to know everything, these models are optimized for how agents actually work: planning what to do, calling the right tools, and synthesizing results. The Jan-Nano-128k model demonstrates this philosophy with its native 128k context window (approximately 300 pages of text), architecturally rewired from the ground up rather than retrofitted with techniques like YaRN or PI.

The practical implications are significant. A 4B parameter model runs on consumer hardware — 8GB RAM minimum for Jan-v1, 4GB for Lucy (1.7B). This means organizations can deploy AI on existing infrastructure without expensive GPU clusters. Training costs are equally accessible: Digitrans Lab trains models for under $100 on RunPod H200 hardware, using internal A6000 clusters for production workloads. For enterprises, this translates to custom domain-specific models at a fraction of the cost of training or fine-tuning larger models.`,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
  },
  {
    slug: "ai-operations-monitoring-model-lifecycle",
    title: "AI Operations: Monitoring, Security, and Model Lifecycle Management in Production",
    excerpt: "Best practices for running AI systems in production — from monitoring and security hardening to model updates and team training.",
    category: "AI Operations",
    date: "February 5, 2026",
    content: `Deploying AI is only half the challenge. Running AI systems reliably in production requires a disciplined approach to operations: monitoring, security hardening, model lifecycle management, and team enablement. Without proper AI operations (AIOps), even well-designed AI systems degrade over time as data distributions shift and models become stale.

Effective AI monitoring goes beyond uptime checks. It includes tracking inference latency, model accuracy on production data, resource utilization (GPU memory, CPU load), and user satisfaction metrics. For Megamind deployments, this means monitoring the llama.cpp engine performance, API response times at localhost:1337, and model-specific metrics like context utilization and token throughput. Security hardening covers API key management, CORS configuration, trusted host lists, SSL/TLS setup, and HTTPS proxy configuration for corporate environments.

Model lifecycle management ensures AI systems improve over time rather than degrade. This includes version control for models, A/B testing frameworks for comparing model performance, rollback procedures for failed updates, and continuous evaluation against production data. Digitrans Lab's approach combines automated monitoring with human-in-the-loop review for critical decisions, ensuring that AI systems remain accurate, secure, and aligned with organizational objectives. Team training and enablement complete the picture — ensuring that internal teams can manage Megamind platform usage, create custom assistants, configure MCP integrations, and handle routine model management tasks independently.`,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
  },
];
