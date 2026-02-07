import Navbar from "../Navbar";
import Footer from "../Footer";
import { Clock } from "lucide-react";
import { useParams } from "react-router-dom";
import { AnimatedWrapper } from "../ui/animated-wrapper";
import { TypewriterGradientText } from "../ui/typewriter-text";

interface BlogPostProps {
  post: {
    title: string;
    description: string;
    image: string;
    date: string;
    readTime: string;
    content?: string;
  };
}

export default function BlogPost() {
  const { slug } = useParams();

  // Blog post content mapping
  const blogPosts = {
    "real-time-analytics-kafka": {
      title: "Real-time Analytics with Apache Kafka",
      description:
        "Building real-time analytics pipelines processing millions of events per second using Apache Kafka and modern streaming technologies.",
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800",
      date: "March 1, 2024",
      readTime: "8 min read",
      content: `
        <div class="prose prose-invert max-w-none">
          <h2>Introduction to Real-time Analytics</h2>
          <p>Modern businesses require real-time insights from their data streams. This guide explores how to build scalable real-time analytics pipelines using Apache Kafka and complementary technologies.</p>
          
          <h2>Architecture Overview</h2>
          <ul>
            <li><strong>Data Ingestion:</strong> Apache Kafka for high-throughput event streaming</li>
            <li><strong>Stream Processing:</strong> Kafka Streams or Apache Flink for real-time computations</li>
            <li><strong>Storage:</strong> Time-series databases for efficient analytics</li>
            <li><strong>Visualization:</strong> Real-time dashboards with Grafana or custom UIs</li>
          </ul>

          <h2>Implementation Steps</h2>
          <h3>1. Event Collection</h3>
          <pre><code>// Kafka Producer Configuration
Properties props = new Properties();
props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class);

// Send events
Producer<String, JsonNode> producer = new KafkaProducer<>(props);
ProducerRecord<String, JsonNode> record = 
    new ProducerRecord<>("events", event);
producer.send(record);</code></pre>

          <h3>2. Stream Processing</h3>
          <pre><code>// Kafka Streams Topology
StreamsBuilder builder = new StreamsBuilder();

builder.stream("events")
    .groupByKey()
    .windowedBy(TimeWindows.of(Duration.ofMinutes(5)))
    .aggregate(
        () -> new MetricsAggregator(),
        (key, value, aggregate) -> aggregate.add(value),
        MaterializedAs("metrics-store")
    )
    .toStream()
    .to("aggregated-metrics");</code></pre>

          <h2>Performance Optimization</h2>
          <ol>
            <li><strong>Partitioning Strategy:</strong> Design optimal partition schemes for parallelism</li>
            <li><strong>Consumer Groups:</strong> Scale processing with consumer group patterns</li>
            <li><strong>Batch Processing:</strong> Configure batch sizes and compression</li>
            <li><strong>Monitoring:</strong> Track lag and throughput metrics</li>
          </ol>

          <h2>Case Study: E-commerce Platform</h2>
          <p>We implemented this architecture for a major e-commerce platform, achieving:</p>
          <ul>
            <li>Processing 1M+ events per second</li>
            <li>Sub-second latency for real-time analytics</li>
            <li>99.99% uptime for the pipeline</li>
            <li>50% reduction in infrastructure costs</li>
          </ul>

          <h2>Best Practices</h2>
          <ul>
            <li>Implement proper error handling and dead letter queues</li>
            <li>Use schema registry for data consistency</li>
            <li>Set up comprehensive monitoring and alerting</li>
            <li>Plan for disaster recovery and data replication</li>
          </ul>
        </div>
      `,
    },

    "cloud-native-architecture-patterns": {
      title: "Cloud-Native Architecture Patterns",
      description:
        "Explore modern architecture patterns for building scalable, resilient cloud-native applications.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
      date: "March 5, 2024",
      readTime: "10 min read",
      content: `
        <div class="prose prose-invert max-w-none">
          <h2>Introduction to Cloud-Native Architecture</h2>
          <p>Cloud-native architecture represents a modern approach to designing and building applications that fully leverage cloud computing capabilities. This guide explores key patterns and best practices for creating scalable, resilient systems.</p>
          
          <h2>Core Patterns</h2>
          <h3>1. Microservices Architecture</h3>
          <ul>
            <li><strong>Service Decomposition:</strong> Breaking monoliths into focused, independently deployable services</li>
            <li><strong>API Gateway Pattern:</strong> Centralized entry point for client-service communication</li>
            <li><strong>Service Mesh:</strong> Infrastructure layer for service-to-service communication</li>
          </ul>

          <h3>2. Event-Driven Architecture</h3>
          <ul>
            <li><strong>Event Sourcing:</strong> Storing state changes as a sequence of events</li>
            <li><strong>CQRS:</strong> Separating read and write operations for better scalability</li>
            <li><strong>Message Queues:</strong> Asynchronous communication between services</li>
          </ul>

          <h3>3. Containerization & Orchestration</h3>
          <ul>
            <li><strong>Container Patterns:</strong> Sidecar, Ambassador, Adapter patterns</li>
            <li><strong>Kubernetes Patterns:</strong> Multi-container pods, operators, controllers</li>
            <li><strong>Service Discovery:</strong> Dynamic service registration and discovery</li>
          </ul>

          <h2>Implementation Example</h2>
          <p>Here's a practical example of implementing these patterns in a real-world scenario:</p>
          <pre><code>// API Gateway Pattern in Node.js
const gateway = express();

gateway.use('/auth', authService);
gateway.use('/users', usersService);
gateway.use('/orders', ordersService);

// Event-Driven Communication
kafka.subscribe('order.created', async (event) => {
  await notifyShipping(event);
  await updateInventory(event);
});</code></pre>

          <h2>Best Practices</h2>
          <ol>
            <li><strong>Design for Failure:</strong> Implement circuit breakers and fallbacks</li>
            <li><strong>Observability:</strong> Comprehensive logging, metrics, and tracing</li>
            <li><strong>Infrastructure as Code:</strong> Automated, version-controlled infrastructure</li>
            <li><strong>Zero-Trust Security:</strong> Secure service-to-service communication</li>
          </ol>

          <h2>Real-world Results</h2>
          <p>A recent implementation for a Fortune 500 client achieved:</p>
          <ul>
            <li>99.99% service availability</li>
            <li>90% reduction in deployment time</li>
            <li>50% decrease in operational costs</li>
            <li>3x improvement in system scalability</li>
          </ul>
        </div>
      `,
    },

    "mlops-best-practices": {
      title: "MLOps Best Practices for Production AI Systems",
      description:
        "A comprehensive guide to implementing MLOps in enterprise environments, from model training to production deployment.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800",
      date: "March 10, 2024",
      readTime: "12 min read",
      content: `
        <div class="prose prose-invert max-w-none">
          <h2>Introduction to MLOps</h2>
          <p>MLOps combines machine learning, DevOps, and data engineering to streamline the deployment, monitoring, and maintenance of ML models in production. This guide covers essential practices for building robust AI systems at scale.</p>
          
          <h2>Key Components of MLOps</h2>
          <ul>
            <li><strong>Version Control:</strong> Git-based model and data versioning using DVC or MLflow</li>
            <li><strong>CI/CD for ML:</strong> Automated testing and deployment pipelines</li>
            <li><strong>Model Registry:</strong> Centralized model storage and metadata tracking</li>
            <li><strong>Monitoring:</strong> Real-time performance and drift detection</li>
          </ul>

          <h2>Best Practices</h2>
          <ol>
            <li><strong>Reproducible Training Pipelines</strong>
              <ul>
                <li>Use containerization (Docker) for training environments</li>
                <li>Version control all training artifacts</li>
                <li>Implement deterministic training processes</li>
              </ul>
            </li>
            <li><strong>Model Governance</strong>
              <ul>
                <li>Track model lineage and approvals</li>
                <li>Implement A/B testing frameworks</li>
                <li>Monitor model fairness and bias</li>
              </ul>
            </li>
            <li><strong>Production Infrastructure</strong>
              <ul>
                <li>Use Kubernetes for scalable deployments</li>
                <li>Implement feature stores for real-time serving</li>
                <li>Set up automated model retraining</li>
              </ul>
            </li>
          </ol>

          <h2>Technology Stack</h2>
          <ul>
            <li>Model Training: TensorFlow, PyTorch</li>
            <li>Experiment Tracking: MLflow, Weights & Biases</li>
            <li>Feature Store: Feast, Tecton</li>
            <li>Model Serving: TensorFlow Serving, Seldon Core</li>
            <li>Monitoring: Prometheus, Grafana</li>
          </ul>

          <h2>Case Study: Fortune 500 Retail</h2>
          <p>We recently implemented these MLOps practices for a major retailer's demand forecasting system. Results included:</p>
          <ul>
            <li>90% reduction in model deployment time</li>
            <li>99.9% model serving availability</li>
            <li>Automated retraining reduced model drift by 45%</li>
          </ul>
        </div>
      `,
    },

    "building-enterprise-data-lakes": {
      title: "Building Enterprise Data Lakes: A Complete Guide",
      description:
        "Learn how to design and implement scalable data lakes that process petabytes of data with real-time analytics capabilities.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
      date: "March 15, 2024",
      readTime: "15 min read",
      content: `
        <div class="prose prose-invert max-w-none">
          <h2>Introduction to Enterprise Data Lakes</h2>
          <p>Modern enterprises generate massive amounts of data from various sources - customer interactions, IoT devices, business transactions, and more. A data lake provides a centralized repository to store all this raw data in its native format, enabling advanced analytics and machine learning at scale.</p>
          
          <h2>Key Components</h2>
          <ul>
            <li><strong>Storage Layer:</strong> Typically cloud-based (S3, Azure Blob) for scalability</li>
            <li><strong>Processing Engine:</strong> Distributed computing (Spark, Presto) for large-scale analytics</li>
            <li><strong>Metadata Layer:</strong> Data catalog and governance tools</li>
            <li><strong>Security:</strong> Authentication, encryption, and access controls</li>
          </ul>

          <h2>Best Practices</h2>
          <ol>
            <li>Implement proper data governance from day one</li>
            <li>Use zones (raw, processed, curated) for data organization</li>
            <li>Establish clear naming conventions and metadata standards</li>
            <li>Set up monitoring and alerting for data quality</li>
          </ol>

          <h2>Real-world Example</h2>
          <p>We recently helped a Fortune 500 financial institution build a cloud-native data lake processing 50TB+ daily. The solution reduced their data processing time by 80% while enabling real-time fraud detection through ML models.</p>

          <h2>Technology Stack</h2>
          <ul>
            <li>Storage: Amazon S3</li>
            <li>Processing: Apache Spark on EMR</li>
            <li>Metadata: AWS Glue</li>
            <li>Security: AWS IAM, KMS</li>
          </ul>
        </div>
      `,
    },
    "how-we-improve-our-website-speed": {
      title: "How We Improve Our Website Speed",
      description:
        "Learn about the techniques and tools we used to optimize our website performance and achieve better loading times.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      date: "March 15, 2024",
      readTime: "8 min read",
      content: `
        <div class="prose prose-invert max-w-none">
          <h2>Understanding Web Performance</h2>
          <p>Website speed is crucial for user experience and SEO. We'll share our journey of optimizing our web application to achieve sub-second load times and perfect Lighthouse scores.</p>
          
          <h2>Key Optimizations</h2>
          <ul>
            <li><strong>Code Splitting:</strong> Using dynamic imports and route-based splitting</li>
            <li><strong>Asset Optimization:</strong> Image compression and lazy loading</li>
            <li><strong>Caching Strategy:</strong> Implementing service workers and CDN</li>
            <li><strong>Performance Monitoring:</strong> Real-user metrics and synthetic testing</li>
          </ul>

          <h2>Implementation Steps</h2>
          <ol>
            <li>Audit current performance using Lighthouse and WebPageTest</li>
            <li>Identify and prioritize performance bottlenecks</li>
            <li>Implement optimizations incrementally</li>
            <li>Monitor impact and iterate</li>
          </ol>

          <h2>Results</h2>
          <p>After implementing these optimizations, we achieved:</p>
          <ul>
            <li>90+ Lighthouse performance score</li>
            <li>Sub-second First Contentful Paint</li>
            <li>2.5s Time to Interactive</li>
            <li>50% reduction in bundle size</li>
          </ul>
        </div>
      `,
    },
  };

  const post = blogPosts[slug];
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <article className="pt-32 pb-16 bg-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedWrapper animation="fade-up-slow">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />
          </AnimatedWrapper>

          <AnimatedWrapper animation="fade-up" delay={0.1}>
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
              <span>{post.date}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper animation="fade-up" delay={0.2}>
            <TypewriterGradientText 
              text={post.title}
              className="text-4xl md:text-5xl font-bold mb-6"
              gradientClassName="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
              duration={1.8}
            />
          </AnimatedWrapper>

          <AnimatedWrapper animation="fade-up" delay={0.3}>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-400 mb-8">{post.description}</p>

              {post.content ? (
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              ) : (
                <p className="text-gray-400">Full content coming soon...</p>
              )}
            </div>
          </AnimatedWrapper>
        </div>
      </article>

      <Footer />
    </div>
  );
}
