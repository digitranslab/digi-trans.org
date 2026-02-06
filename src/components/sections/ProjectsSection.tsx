import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { GradientButton } from "../ui/gradient-button";
import { ArrowRight, ExternalLink } from "lucide-react";

const featuredProjects = [
  {
    title: "TechFlow SaaS",
    subtitle: "Project Management Platform",
    description:
      "Transformed an MVP idea into a market-ready SaaS platform in 10 weeks. Secured €2M funding, onboarded 500+ enterprise customers, and achieved 99.9% uptime.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop&q=60",
    logo: "/images/1.svg",
    metrics: ["€2M Funding", "500+ Customers", "10 Weeks", "99.9% Uptime"],
    technologies: ["React", "Node.js", "TypeScript", "AWS"],
    caseStudyUrl: "/portfolio#techflow",
    founder: "Marcus Weber, CEO"
  },
  {
    title: "DataSync Pro",
    subtitle: "Data Integration Platform", 
    description:
      "Strategic product guidance led to perfect product-market fit and 400% revenue growth. Zero technical debt maintained while scaling to 10,000+ daily users.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    logo: "/images/2.svg",
    metrics: ["400% Growth", "Perfect PMF", "10K+ Users", "Zero Debt"],
    technologies: ["Python", "Django", "React", "Kafka"],
    caseStudyUrl: "/portfolio#datasync",
    founder: "Sophie Laurent, CTO"
  },
  {
    title: "MedCare Connect",
    subtitle: "Healthcare SaaS Platform",
    description:
      "Built HIPAA-compliant healthcare platform in 12 weeks. Now serves 50+ healthcare providers with zero security incidents and enterprise-grade compliance.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60",
    logo: "/images/3.svg",
    metrics: ["50+ Providers", "HIPAA Day 1", "12 Weeks", "Zero Incidents"],
    technologies: ["Next.js", "Node.js", "MongoDB", "HIPAA"],
    caseStudyUrl: "/portfolio#medcare",
    founder: "Lisa Chen, Founder"
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-3 px-4 py-1 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30">Featured Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-400">
            SaaS Products We've Built
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            From MVP to market leadership - see how we've helped founders transform 
            their ideas into successful, scalable SaaS businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-indigo-900/20 backdrop-blur-sm border border-blue-800/30 hover:border-purple-400/40 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90 z-10"></div>
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-0"
              />
              
              {/* Company Logo */}
              <div className="absolute top-4 left-4 z-20">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-2 flex items-center justify-center">
                  <img 
                    src={project.logo} 
                    alt={`${project.title} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              <div className="relative z-20 p-6 h-full flex flex-col justify-end min-h-[400px]">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-purple-300 text-sm font-medium mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="bg-black/40 backdrop-blur-sm rounded-lg p-2 border border-blue-800/30">
                      <div className="text-purple-300 font-semibold text-xs">{metric}</div>
                    </div>
                  ))}
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-blue-900/30 text-blue-300 rounded-md border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-gray-800/50 text-gray-400 rounded-md">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                {/* Founder Quote */}
                <div className="text-xs text-gray-400 italic mb-4">
                  "Built by {project.founder}"
                </div>
                
                <a
                  href={project.caseStudyUrl}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium group"
                >
                  View Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <GradientButton
            rightIcon={<ExternalLink className="h-5 w-5" />}
            onClick={() => window.open("/portfolio", "_self")}
          >
            View All Case Studies
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
}
