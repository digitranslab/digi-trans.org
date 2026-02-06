import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { GradientButton } from "./ui/gradient-button";
import {
  ArrowRight,
  Users,
  Target,
  Award,
  Rocket,
  Globe,
  Code,
  Database,
  Server,
  Cloud,
  Zap,
  CheckCircle,
  BarChart,
  Building,
  Briefcase,
} from "lucide-react";

const stats = [
  { label: "Years Experience", value: "12+" },
  { label: "Team Members", value: "120+" },
  { label: "Projects Delivered", value: "350+" },
  { label: "Global Clients", value: "180+" },
  { label: "Countries", value: "25+" },
  { label: "Success Rate", value: "98%" },
];

const values = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "People First",
    description: "We believe in empowering our team and clients alike.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Excellence",
    description: "We strive for excellence in everything we do.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Innovation",
    description:
      "Constantly pushing boundaries and embracing new technologies.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Growth",
    description: "Committed to continuous learning and improvement.",
  },
];

const openSourceProjects = [
  {
    name: "DataFlow",
    description: "Open-source ETL pipeline framework for big data processing",
    stars: "4.2k",
    forks: "1.8k",
    icon: <Database className="w-8 h-8" />,
  },
  {
    name: "CloudOps",
    description: "Infrastructure as code toolkit for multi-cloud deployments",
    stars: "3.7k",
    forks: "1.2k",
    icon: <Cloud className="w-8 h-8" />,
  },
  {
    name: "MLPipeline",
    description: "End-to-end machine learning pipeline orchestration framework",
    stars: "5.1k",
    forks: "2.3k",
    icon: <Zap className="w-8 h-8" />,
  },
  {
    name: "DataViz",
    description: "Interactive data visualization library for complex datasets",
    stars: "3.9k",
    forks: "1.5k",
    icon: <BarChart className="w-8 h-8" />,
  },
];

const milestones = [
  {
    year: "2012",
    title: "Founded in Dubai",
    description:
      "Digitrans was established with a focus on enterprise data solutions",
  },
  {
    year: "2014",
    title: "European Expansion",
    description: "Opened offices in London and Paris to serve European clients",
  },
  {
    year: "2016",
    title: "First Open Source Release",
    description: "Released DataFlow, our first major open-source contribution",
  },
  {
    year: "2018",
    title: "AI Practice Launched",
    description:
      "Established dedicated AI solutions practice with 30+ specialists",
  },
  {
    year: "2020",
    title: "African Expansion",
    description: "Opened Casablanca office to serve African market",
  },
  {
    year: "2022",
    title: "100th Enterprise Client",
    description: "Reached milestone of 100 enterprise clients globally",
  },
  {
    year: "2023",
    title: "SaaS Product Launch",
    description: "Launched suite of SaaS products for data and AI solutions",
  },
];

const keyProjects = [
  {
    client: "Global Financial Institution",
    title: "Real-time Fraud Detection System",
    metrics: [
      "Processing 1M+ transactions per second",
      "99.99% accuracy rate",
      "$200M annual savings",
      "Deployed across 35 countries",
    ],
    icon: <Building className="w-8 h-8" />,
  },
  {
    client: "Healthcare Provider Network",
    title: "Patient Outcome Prediction Platform",
    metrics: [
      "30% improvement in treatment outcomes",
      "45% reduction in readmission rates",
      "15M+ patient records analyzed",
      "Deployed in 200+ hospitals",
    ],
    icon: <Briefcase className="w-8 h-8" />,
  },
  {
    client: "Retail Conglomerate",
    title: "Inventory Optimization System",
    metrics: [
      "40% reduction in stockouts",
      "25% inventory cost reduction",
      "2,500+ stores connected",
      "$150M annual savings",
    ],
    icon: <Building className="w-8 h-8" />,
  },
  {
    client: "Government Agency",
    title: "Secure Data Platform",
    metrics: [
      "50PB of data securely managed",
      "100% compliance with regulations",
      "70% faster data access",
      "30M+ citizens served",
    ],
    icon: <Briefcase className="w-8 h-8" />,
  },
];

const teamMembers = [
  {
    name: "Dr. James Mitchell",
    role: "Chief Executive Officer",
    bio: "Former CTO at Global Tech Solutions with 20+ years of experience in enterprise technology",
    image: "/images/ceo.png",
  },
  {
    name: "Sarah Johnson",
    role: "Chief Technology Officer",
    bio: "AI researcher and former lead architect at Tech Innovators with 15+ years of experience",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    name: "Michael Chen",
    role: "Chief Data Officer",
    bio: "Data science expert with previous leadership roles at major financial institutions",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
  },
  {
    name: "Aisha Patel",
    role: "VP of Engineering",
    bio: "Cloud architecture specialist with experience scaling systems for Fortune 500 companies",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha",
  },
  {
    name: "David Rodriguez",
    role: "VP of Client Success",
    bio: "Former management consultant with expertise in digital transformation",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
  },
  {
    name: "Emma Wilson",
    role: "Director of AI Research",
    bio: "PhD in Machine Learning with 30+ published research papers and 10 patents",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
  },
];

function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/videos/about2.mp4" type="video/mp4" />
        </video>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-10 leading-relaxed"
            >
              <span className="block text-5xl md:text-6xl font-bold mb-6 mt-6">
                Transforming Businesses Through Data & AI
              </span>
              Digitrans is a global technology consultancy specializing in
              enterprise-grade data analytics, cloud computing, and artificial
              intelligence solutions. Since 2012, we've been helping
              organizations across industries harness the power of their data to
              drive innovation and growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <GradientButton
                size="lg"
                onClick={() => (window.location.href = "/contact")}
                rightIcon={<ArrowRight className="h-5 w-5" />}
              >
                Get in Touch
              </GradientButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Numbers Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Digitrans by the Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our global impact in enterprise data and AI solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-blue-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                <span className="text-gray-300">
                  350+ Enterprise Projects Completed
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                <span className="text-gray-300">
                  25+ Petabytes of Data Managed
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                <span className="text-gray-300">
                  $2B+ Client Value Generated
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                To empower organizations with transformative data and AI
                solutions that drive innovation, efficiency, and competitive
                advantage in the digital age.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                We believe that every organization, regardless of size or
                industry, should have access to the power of advanced analytics
                and artificial intelligence to make better decisions, optimize
                operations, and create exceptional experiences for their
                customers.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                To be the global leader in enterprise technology transformation,
                setting new standards for consulting excellence while building a
                community of visionary technologists who drive positive change
                across industries.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                We envision a world where data-driven decision making and
                AI-powered automation enable organizations to solve complex
                challenges, operate with unprecedented efficiency, and create
                sustainable value for all stakeholders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 text-center">
                  <div className="w-16 h-16 mx-auto bg-blue-900/30 rounded-full flex items-center justify-center text-blue-500 mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-300">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key milestones in our growth story
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-900/50"></div>

            {/* Timeline Items */}
            <div className="relative z-10">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}
                  >
                    <div className="p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-blue-800/30">
                      <div className="text-blue-500 font-bold text-xl mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 border-4 border-black flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Projects Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Some of our most impactful enterprise solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center text-blue-500">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="text-blue-400">{project.client}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">{metric}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Our Open Source Contributions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe in giving back to the technology community through open
              source
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {openSourceProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20">
                  <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center text-blue-500 mb-4">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-gray-300">{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-300">{project.forks}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <GradientButton
              onClick={() =>
                window.open("https://github.com/digitranslab", "_blank")
              }
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              View All Projects on GitHub
            </GradientButton>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the experts leading our global operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 text-center">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 border-2 border-blue-500">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1 text-white">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 mb-4">{member.role}</p>
                  <p className="text-gray-300">{member.bio}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Global Presence</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Serving clients across continents with local expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-2"></div>
              <p className="text-white font-semibold">Dubai, UAE</p>
              <p className="text-gray-400">Headquarters</p>
            </div>
            <div className="text-center">
              <div className="w-4 h-4 bg-purple-500 rounded-full mx-auto mb-2"></div>
              <p className="text-white font-semibold">London, UK</p>
              <p className="text-gray-400">European Operations</p>
            </div>
            <div className="text-center">
              <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-2"></div>
              <p className="text-white font-semibold">Paris, France</p>
              <p className="text-gray-400">R&D Center</p>
            </div>
            <div className="text-center">
              <div className="w-4 h-4 bg-yellow-500 rounded-full mx-auto mb-2"></div>
              <p className="text-white font-semibold">Casablanca, Morocco</p>
              <p className="text-gray-400">African Operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our data and AI solutions can help you achieve
              your business goals.
            </p>
            <GradientButton
              size="lg"
              onClick={() => (window.location.href = "/contact")}
              rightIcon={<ArrowRight className="h-5 w-5" />}
            >
              Contact Us Today
            </GradientButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Custom Star and GitFork icons
function Star(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function GitFork(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
      <path d="M12 12v6" />
    </svg>
  );
}

export default About;
