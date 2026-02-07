import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { GradientButton } from "../ui/gradient-button";
import { ArrowRight, Briefcase, MapPin, Clock, DollarSign } from "lucide-react";
import JobApplicationModal from "../JobApplicationModal";
import UniverseLights from "../UniverseLights";
import SEO from "../SEO";
import { AnimatedWrapper } from "../ui/animated-wrapper";
import { GlassCard } from "../ui/glass-card";
import { SectionHeader } from "../ui/section-header";
import { TypewriterGradientText } from "../ui/typewriter-text";

const jobs = [
  {
    title: "Senior Data Engineer",
    location: "Dubai, UAE",
    type: "Full-time",
    salary: "$80,000 - $90,000",
    description:
      "Design and implement scalable data pipelines and ETL processes for enterprise clients. Experience with Spark, Kafka, and cloud data platforms required.",
    requirements: [
      "7+ years of experience in data engineering",
      "Expertise in Apache Spark, Kafka, and Airflow",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Strong SQL and Python skills",
      "Experience with data modeling and warehouse design",
    ],
  },
  {
    title: "Machine Learning Engineer",
    location: "London, UK",
    type: "Full-time",
    salary: "£70,000 - £80,000",
    description:
      "Develop and deploy machine learning models for production environments. Focus on NLP, computer vision, and recommendation systems.",
    requirements: [
      "5+ years of experience in ML engineering",
      "Strong Python skills and experience with ML frameworks (TensorFlow, PyTorch)",
      "Experience deploying ML models to production",
      "Understanding of MLOps practices",
      "Background in NLP or computer vision preferred",
    ],
  },
  {
    title: "Cloud Solutions Architect",
    location: "Paris, France",
    type: "Full-time",
    salary: "€70,000 - €95,000",
    description:
      "Design and implement secure, scalable cloud architectures for enterprise clients. Lead cloud migration and modernization initiatives.",
    requirements: [
      "8+ years of experience in cloud architecture",
      "AWS/Azure/GCP professional certifications",
      "Experience with infrastructure as code (Terraform, CloudFormation)",
      "Knowledge of containerization and orchestration (Docker, Kubernetes)",
      "Strong understanding of cloud security best practices",
    ],
  },
  {
    title: "Full Stack Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$70,000 - $80,000",
    description:
      "Develop modern web applications using React, Node.js, and cloud services. Work on enterprise-grade applications with a focus on performance and scalability.",
    requirements: [
      "5+ years of full stack development experience",
      "Expertise in React and Node.js",
      "Experience with database design and ORM frameworks",
      "Understanding of CI/CD pipelines",
      "Knowledge of cloud services and serverless architecture",
    ],
  },
  {
    title: "DevOps Engineer",
    location: "Dubai, UAE",
    type: "Full-time",
    salary: "$70,000 - $80,000",
    description:
      "Implement and manage CI/CD pipelines, containerization, and infrastructure automation. Focus on Kubernetes, Terraform, and cloud-native technologies.",
    requirements: [
      "6+ years of DevOps experience",
      "Strong knowledge of Kubernetes and container orchestration",
      "Experience with infrastructure as code (Terraform, Pulumi)",
      "Expertise in CI/CD tools (Jenkins, GitHub Actions, GitLab CI)",
      "Understanding of observability and monitoring solutions",
    ],
  },
  {
    title: "Data Scientist",
    location: "London, UK",
    type: "Full-time",
    salary: "£75,000 - £95,000",
    description:
      "Apply statistical and machine learning techniques to solve complex business problems. Work with large datasets to extract insights and build predictive models.",
    requirements: [
      "4+ years of experience in data science",
      "Strong background in statistics and machine learning",
      "Proficiency in Python and data analysis libraries",
      "Experience with big data technologies",
      "Excellent communication and presentation skills",
    ],
  },
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Careers | Join Our Team of Tech Experts | Digitrans"
        description="Join our team of passionate technologists building the future of enterprise data and AI solutions. Explore exciting career opportunities at Digitrans."
        canonicalUrl="/careers"
      />
      <Navbar />

      <div className="relative w-full h-[600px] bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/videos/join.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <AnimatedWrapper animation="fade-up-slow">
            <TypewriterGradientText 
              text="Join Our Team"
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              gradientClassName="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
              duration={1.8}
            />
          </AnimatedWrapper>

          <AnimatedWrapper animation="fade-up" delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl">
              Build the future of enterprise technology with a team of passionate
              innovators
            </p>
          </AnimatedWrapper>
        </div>
      </div>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <AnimatedWrapper animation="fade-up" className="max-w-4xl mx-auto text-center mb-16">
            <SectionHeader
              badge="Opportunities"
              title="Current Openings"
              description="Explore our open positions and find your next career opportunity"
              alignment="center"
            />
          </AnimatedWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative max-w-6xl mx-auto">
            {jobs.map((job, index) => (
              <AnimatedWrapper key={job.title} animation="scale-up-bounce" delay={index * 0.1}>
                <GlassCard 
                  variant="gradient"
                  className="w-full h-[400px] p-8 hover:scale-[1.02] transition-all duration-300 flex flex-col cursor-pointer"
                  onClick={() => {
                    const jobPath = job.title.toLowerCase().replace(/\s+/g, "-");
                    window.location.href = `/careers/${jobPath}`;
                  }}
                >
                  <div className="text-purple-400 mb-6">
                    <Briefcase className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="flex items-center text-sm text-gray-400">
                      <MapPin className="w-4 h-4 mr-1 text-blue-400" />
                      {job.location}
                    </span>
                    <span className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-1 text-green-400" />
                      {job.type}
                    </span>
                    <span className="flex items-center text-sm text-gray-400">
                      <DollarSign className="w-4 h-4 mr-1 text-yellow-400" />
                      {job.salary}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-4 flex-1">{job.description}</p>

                  <div className="mt-auto">
                    <GradientButton
                      className="w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        const jobPath = job.title.toLowerCase().replace(/\s+/g, "-");
                        window.location.href = `/careers/${jobPath}`;
                      }}
                      rightIcon={<ArrowRight className="h-4 w-4" />}
                    >
                      View Job
                    </GradientButton>
                  </div>
                </GlassCard>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <AnimatedWrapper animation="slide-right">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Why Join Digitrans?
                  </h2>
                  <div className="space-y-4">
                    <AnimatedWrapper animation="float-up" delay={0.1}>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 flex-shrink-0 mt-1">
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">
                            Challenging Projects
                          </h3>
                          <p className="text-gray-300">
                            Work on complex, high-impact projects for Fortune 500
                            companies and innovative startups.
                          </p>
                        </div>
                      </div>
                    </AnimatedWrapper>
                    <AnimatedWrapper animation="float-up" delay={0.2}>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-400 flex-shrink-0 mt-1">
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">
                            Continuous Learning
                          </h3>
                          <p className="text-gray-300">
                            Access to training, certifications, and opportunities to
                            work with cutting-edge technologies.
                          </p>
                        </div>
                      </div>
                    </AnimatedWrapper>
                    <AnimatedWrapper animation="float-up" delay={0.3}>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-900/50 flex items-center justify-center text-green-400 flex-shrink-0 mt-1">
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">
                            Global Opportunities
                          </h3>
                          <p className="text-gray-300">
                            Work with international teams and clients, with
                            possibilities for relocation and travel.
                          </p>
                        </div>
                      </div>
                    </AnimatedWrapper>
                  </div>
                </div>
              </AnimatedWrapper>

              <AnimatedWrapper animation="slide-left">
                <GlassCard variant="gradient" className="p-8 hover:scale-[1.02] transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-6">Our Benefits</h3>
                  <ul className="space-y-4">
                    {[
                      "Competitive salary and performance bonuses",
                      "Flexible working arrangements",
                      "Health insurance and wellness programs",
                      "Professional development budget",
                      "Regular team events and activities",
                      "Equity options for senior positions"
                    ].map((benefit, index) => (
                      <AnimatedWrapper key={benefit} animation="slide-up" delay={index * 0.05}>
                        <li className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400">
                            <ArrowRight className="w-3 h-3" />
                          </div>
                          <span>{benefit}</span>
                        </li>
                      </AnimatedWrapper>
                    ))}
                  </ul>
                </GlassCard>
              </AnimatedWrapper>
            </div>
          </div>
        </div>
      </section>

      <JobApplicationModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        job={selectedJob}
      />

      <Footer />
    </div>
  );
}
