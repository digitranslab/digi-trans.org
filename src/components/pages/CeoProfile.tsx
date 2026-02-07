import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import {
  FileText,
  Mail,
  Linkedin,
  Award,
  Building2,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { AnimatedWrapper } from "../ui/animated-wrapper";
import { GlassCard } from "../ui/glass-card";
import { TypewriterGradientText } from "../ui/typewriter-text";

interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
  details?: string;
}

const experiences: Experience[] = [
  {
    company: "Global Tech Solutions, UK",
    role: "Chief Technology Officer",
    period: "2019 - Present",
    achievements: [
      "Led digital transformation initiatives for Fortune 500 clients",
      "Scaled cloud infrastructure to support 10M+ daily active users",
      "Reduced operational costs by 40% through cloud optimization",
    ],
    details:
      "Led the technical strategy and implementation of cloud-native solutions for Fortune 500 clients. Managed a team of 50+ engineers across multiple regions. Implemented enterprise-wide DevOps practices resulting in 70% faster deployment cycles. Architected and delivered solutions processing over 1PB of data daily.",
  },
  {
    company: "Innovation Labs, France",
    role: "Solutions Architecture Director",
    period: "2015 - 2019",
    achievements: [
      "Architected enterprise data platforms processing 50TB+ daily",
      "Led team of 30+ solution architects across multiple regions",
      "Implemented ML/AI solutions resulting in $100M annual savings",
    ],
    details:
      "Spearheaded the development of enterprise data platforms handling massive scale. Implemented real-time analytics solutions for financial institutions. Developed and deployed ML models for fraud detection and risk assessment. Led architecture reviews and technical governance across multiple projects.",
  },
  {
    company: "Tech Innovators SA, France",
    role: "Senior Solutions Architect",
    period: "2010 - 2015",
    achievements: [
      "Designed cloud-native architectures for banking sector",
      "Implemented real-time fraud detection systems",
      "Led cloud migration projects for enterprise clients",
    ],
    details:
      "Designed and implemented cloud-native architectures for major banking institutions. Led the development of real-time fraud detection systems processing millions of transactions per second. Successfully migrated legacy systems to cloud platforms with zero downtime.",
  },
];

const skills = [
  "Cloud Architecture (AWS, Azure, GCP)",
  "Enterprise Architecture",
  "Data Engineering & Analytics",
  "Machine Learning & AI",
  "DevOps & SRE",
  "Microservices Architecture",
  "Big Data Processing",
  "Security & Compliance",
];

const education = [
  {
    degree: "Ph.D. in Computer Science",
    institution: "Imperial College London",
    period: "2007 - 2010",
    focus: "Distributed Systems and Cloud Computing",
  },
  {
    degree: "M.Sc. in Software Engineering",
    institution: "École Polytechnique, France",
    period: "2005 - 2007",
    focus: "Software Architecture and Design",
  },
  {
    degree: "B.Sc. in Computer Science",
    institution: "University of Oxford",
    period: "2002 - 2005",
    focus: "Computer Science and Mathematics",
  },
];

const certifications = [
  "AWS Solutions Architect Professional",
  "Google Cloud Professional Architect",
  "Azure Solutions Architect Expert",
  "Certified Kubernetes Administrator",
  "Certified Data Professional",
];

export default function CeoProfile() {
  const [selectedExperience, setSelectedExperience] =
    React.useState<Experience | null>(null);
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="relative pt-32 pb-16">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
            <AnimatedWrapper animation="zoom-in">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500/20">
                <img
                  src="/images/ceo.png"
                  alt="CEO"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedWrapper>
            <div>
              <AnimatedWrapper animation="fade-up" delay={0.2}>
                <TypewriterGradientText 
                  text="Dr. James Mitchell"
                  className="text-4xl font-bold mb-4"
                  gradientClassName="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
                  duration={1.5}
                />
              </AnimatedWrapper>
              <AnimatedWrapper animation="fade-up" delay={0.3}>
                <p className="text-xl text-gray-400 mb-6">
                  Chief Technology Officer & Solutions Architecture Expert
                </p>
              </AnimatedWrapper>
              <AnimatedWrapper animation="fade-up" delay={0.4}>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/james-mitchell"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <Linkedin className="w-5 h-5" /> LinkedIn
                  </a>
                </div>
              </AnimatedWrapper>
            </div>
          </div>

          {/* Experience Section */}
          <AnimatedWrapper animation="fade-up" delay={0.5}>
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-blue-500" /> Professional
                Experience
              </h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <AnimatedWrapper key={index} animation="slide-up" delay={index * 0.1}>
                    <GlassCard
                      variant="gradient"
                      className="p-6 cursor-pointer hover:scale-[1.01] transition-all duration-300"
                      onClick={() => setSelectedExperience(exp)}
                    >
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {exp.role}
                      </h3>
                      <p className="text-white mb-4 flex items-center gap-2">
                        <Building2 className="w-4 h-4" /> {exp.company}
                      </p>
                      <p className="text-gray-400 mb-4">{exp.period}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-gray-300"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </AnimatedWrapper>
                ))}
              </div>
            </section>
          </AnimatedWrapper>

          {/* Education Section */}
          <AnimatedWrapper animation="fade-up" delay={0.5}>
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-blue-500" /> Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <AnimatedWrapper key={index} animation="float-up" delay={index * 0.1}>
                    <GlassCard
                      variant="gradient"
                      className="p-6 hover:scale-[1.01] transition-all duration-300"
                    >
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-blue-500 mb-2">{edu.institution}</p>
                      <p className="text-gray-400 mb-2">{edu.period}</p>
                      <p className="text-gray-300">Focus: {edu.focus}</p>
                    </GlassCard>
                  </AnimatedWrapper>
                ))}
              </div>
            </section>
          </AnimatedWrapper>

          {/* Skills & Certifications */}
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedWrapper animation="slide-right" delay={0.6}>
              <section>
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-blue-500" /> Skills
                </h2>
                <GlassCard variant="gradient" className="p-6 hover:scale-[1.01] transition-all duration-300">
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </section>
            </AnimatedWrapper>

            <AnimatedWrapper animation="slide-left" delay={0.7}>
              <section>
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                  <Award className="w-6 h-6 text-blue-500" /> Certifications
                </h2>
                <GlassCard variant="gradient" className="p-6 hover:scale-[1.01] transition-all duration-300">
                  <ul className="space-y-3">
                    {certifications.map((cert) => (
                      <li
                        key={cert}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </section>
            </AnimatedWrapper>
          </div>
        </div>
      </div>

      <Dialog
        open={!!selectedExperience}
        onOpenChange={() => setSelectedExperience(null)}
      >
        <DialogContent className="sm:max-w-[600px] bg-slate-900 text-white border-slate-800">
          {selectedExperience && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {selectedExperience.role}
                </DialogTitle>
                <p className="text-blue-500 flex items-center gap-2 mt-2">
                  <Building2 className="w-4 h-4" /> {selectedExperience.company}
                </p>
                <p className="text-gray-400 mt-1">
                  {selectedExperience.period}
                </p>
              </DialogHeader>
              <div className="mt-6">
                <h3 className="font-semibold mb-3">Key Achievements</h3>
                <ul className="space-y-2">
                  {selectedExperience.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {achievement}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <h3 className="font-semibold mb-3">Detailed Overview</h3>
                  <p className="text-gray-300">{selectedExperience.details}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
