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
];
