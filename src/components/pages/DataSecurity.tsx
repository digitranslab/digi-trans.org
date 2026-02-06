import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import UniverseLights from "../UniverseLights";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { GradientButton } from "../ui/gradient-button";
import { ProgressBar } from "../ui/progress-bar";
import { BackToTop } from "../ui/back-to-top";
import { StickyCTA } from "../ui/sticky-cta";
import {
  Shield,
  Lock,
  Key,
  Eye,
  CheckCircle,
  ArrowRight,
  FileText,
  Users,
  TrendingUp,
  Layers,
  AlertTriangle,
  Database,
  Network,
  BarChart,
  Code,
  Cloud,
} from "lucide-react";

const features = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Data Protection",
    description:
      "Enterprise-grade security measures to protect sensitive data.",
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Access Control",
    description: "Advanced authentication and authorization systems.",
  },
  {
    icon: <Key className="w-8 h-8" />,
    title: "Encryption",
    description: "End-to-end encryption for data at rest and in transit.",
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Security Monitoring",
    description: "24/7 monitoring and threat detection systems.",
  },
];

export default function DataSecurity() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ProgressBar />
      <Navbar />

      <div className="relative w-full h-[800px] bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50 object-center"
          style={{ objectPosition: "center 30%" }}
        >
          <source src="/videos/security.mp4" type="video/mp4" />
        </video>
        <UniverseLights />

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Data Security
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl"
          >
            Protect your valuable data assets with our comprehensive security
            solutions designed for the modern threat landscape.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <GradientButton
              size="lg"
              rightIcon={<ArrowRight className="h-5 w-5" />}
              onClick={() => (window.location.href = "/contact")}
            >
              Request a Security Assessment
            </GradientButton>
            <GradientButton
              size="lg"
              variant="secondary"
              onClick={() =>
                document
                  .getElementById("understanding")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More
            </GradientButton>
          </motion.div>
        </div>
      </div>

      {/* Understanding Data Security Section */}
      <section id="understanding" className="py-20 bg-black scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Understanding Data Security
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                In today's digital landscape, data has become one of the most
                valuable assets for organizations across all industries. From
                customer information and financial records to intellectual
                property, this information is critical to business success but
                increasingly threatened by cyber attacks and insider threats.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Data security encompasses the practices, technologies, and
                controls deployed to protect data from unauthorized access, use,
                disclosure, disruption, modification, or destruction. It ensures
                confidentiality, integrity, and availability throughout the data
                lifecycle.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
                alt="Data security visualization with lock and shield concepts"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-2xl order-2 md:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
                alt="Business team reviewing security protocols"
                className="w-full h-auto object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-left order-1 md:order-2"
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                The consequences of data security breaches can be severe.
                According to IBM's Cost of a Data Breach Report, the global
                average cost reached $4.45 million in 2023, a 15% increase over
                three years. Beyond financial impact, breaches damage
                reputation, customer trust, and can trigger regulatory
                penalties.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                At Digitrans, we understand that effective data security
                requires a holistic strategy aligned with your business
                objectives and compliance requirements. Our solutions combine
                leading technologies, proven methodologies, and deep expertise
                to protect your valuable data assets while enabling business
                agility.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Security Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive protection for your valuable data assets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20">
                  <div className="text-blue-500 mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-white text-left">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-left">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Evolving Threat Landscape */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              The Evolving Threat Landscape
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8">
              <div>
                <p className="text-xl text-gray-300 leading-relaxed mb-6 text-left">
                  The data security threat landscape is constantly evolving,
                  with attackers developing increasingly sophisticated methods
                  to compromise systems and steal sensitive information.
                  Understanding these threats is essential for developing
                  effective security strategies that can adapt to emerging
                  risks.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80"
                  alt="Cybersecurity threat landscape visualization"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-white mt-10">
              Ransomware and Extortion Attacks
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Ransomware attacks have evolved from opportunistic campaigns to
              highly targeted operations conducted by organized criminal groups.
              Modern ransomware attacks often employ a double extortion
              strategy, where attackers not only encrypt data but also
              exfiltrate it and threaten to publish it unless a ransom is paid.
              According to Cybersecurity Ventures, the global cost of ransomware
              is expected to reach $265 billion by 2031, with an attack
              occurring every 2 seconds.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              These attacks are becoming more sophisticated, with attackers
              conducting extensive reconnaissance to identify high-value
              targets, exploiting multiple vulnerabilities, and using legitimate
              tools to evade detection. The rise of Ransomware-as-a-Service
              (RaaS) has also lowered the barrier to entry, allowing less
              technically skilled attackers to deploy sophisticated ransomware.
              Defending against these threats requires a multi-layered approach
              that includes robust backup strategies, advanced threat detection,
              and comprehensive incident response planning.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Supply Chain Attacks
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Supply chain attacks target the less-secure elements in a supply
              chain to compromise the ultimate target. The SolarWinds attack in
              2020 and the Kaseya attack in 2021 demonstrated the devastating
              potential of these attacks, which can affect thousands of
              organizations through a single compromise. According to the
              European Union Agency for Cybersecurity (ENISA), supply chain
              attacks are expected to quadruple in 2023 compared to 2021.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              These attacks are particularly challenging to defend against
              because they exploit trusted relationships and legitimate update
              mechanisms. Organizations must implement rigorous third-party risk
              management processes, conduct thorough due diligence on vendors,
              and implement technical controls such as code signing, integrity
              verification, and network segmentation to mitigate these risks.
              Additionally, organizations should develop contingency plans for
              responding to supply chain compromises affecting critical vendors.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Advanced Persistent Threats (APTs)
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Advanced Persistent Threats are sophisticated, targeted attacks
              conducted by well-resourced threat actors, often nation-states or
              state-sponsored groups. These attacks are characterized by their
              persistence, stealth, and focus on specific high-value targets.
              APTs typically involve multiple attack vectors, custom malware,
              and advanced evasion techniques designed to maintain long-term
              access to compromised environments.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Defending against APTs requires advanced security capabilities,
              including threat intelligence, behavioral analytics, endpoint
              detection and response (EDR), and security information and event
              management (SIEM) solutions. Organizations should also implement a
              defense-in-depth strategy that includes network segmentation,
              principle of least privilege, and regular security assessments to
              identify and remediate vulnerabilities that could be exploited by
              APT actors.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Cloud Security Challenges
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              As organizations increasingly migrate data and applications to the
              cloud, they face new security challenges related to shared
              responsibility models, misconfigurations, identity management, and
              data protection. According to Gartner, through 2025, 99% of cloud
              security failures will be the customer's fault, primarily due to
              misconfigurations and inadequate identity and access management.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Securing cloud environments requires a different approach than
              traditional on-premises security. Organizations must understand
              the shared responsibility model of their cloud providers,
              implement cloud-native security controls, and adapt their security
              processes and tools to address cloud-specific risks. Key focus
              areas include identity and access management, data protection,
              network security, and continuous compliance monitoring. Cloud
              security posture management (CSPM) tools can help identify and
              remediate misconfigurations that could lead to data breaches.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Data Security Framework */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Our Data Security Framework
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Effective data security requires a comprehensive, risk-based
              approach that addresses the full spectrum of threats while
              enabling business operations. Our Data Security Framework provides
              a structured methodology for developing, implementing, and
              maintaining robust data security programs aligned with your
              business objectives and compliance requirements.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white mt-10">
              1. Data Discovery and Classification
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              The foundation of effective data security is understanding what
              data you have, where it resides, and its sensitivity level. Our
              data discovery and classification services help you identify and
              categorize your data assets based on sensitivity, business value,
              and regulatory requirements. We employ automated discovery tools,
              data flow mapping, and classification methodologies to create a
              comprehensive inventory of your data assets.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              This process includes identifying structured and unstructured data
              across on-premises systems, cloud environments, and third-party
              services. We help you develop and implement data classification
              policies that define sensitivity levels (e.g., public, internal,
              confidential, restricted) and handling requirements for each
              level. The output of this phase is a detailed data inventory and
              classification scheme that serves as the foundation for your data
              security strategy.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              2. Risk Assessment and Security Strategy
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              With a clear understanding of your data assets, we conduct a
              comprehensive risk assessment to identify threats,
              vulnerabilities, and potential impacts related to your data. This
              assessment considers various risk factors, including technical
              vulnerabilities, process weaknesses, regulatory requirements, and
              business context. We use industry-standard methodologies such as
              NIST, ISO 27005, and FAIR to ensure a thorough and structured
              approach to risk assessment.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Based on the risk assessment findings, we develop a data security
              strategy that defines your security objectives, risk tolerance,
              and prioritized initiatives. This strategy aligns security
              investments with business priorities and regulatory requirements,
              ensuring that resources are allocated to the most significant
              risks. The strategy also includes a roadmap for implementing
              security controls, addressing gaps, and continuously improving
              your security posture.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              3. Data Protection Implementation
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              With a clear strategy in place, we implement a comprehensive set
              of data protection controls across your environment. These
              controls are designed to protect data throughout its lifecycle and
              address the specific risks identified in the risk assessment. Our
              implementation approach follows security best practices and
              industry standards while considering your unique business
              requirements and technical constraints.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Key data protection capabilities include encryption (for data at
              rest, in transit, and in use), access controls, data loss
              prevention, secure data sharing, and secure deletion. We implement
              these capabilities using a combination of native platform
              controls, third-party security solutions, and custom integrations.
              Our implementation approach emphasizes security effectiveness
              while minimizing business disruption and user friction.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              4. Security Monitoring and Incident Response
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Implementing security controls is not sufficient—you must also
              continuously monitor your environment for security events and
              respond effectively to incidents. We help you establish robust
              security monitoring capabilities that provide visibility into
              potential security incidents and data breaches. This includes
              implementing security information and event management (SIEM)
              solutions, user and entity behavior analytics (UEBA), and data
              activity monitoring.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              We also help you develop and implement incident response plans
              specifically focused on data security incidents. These plans
              define roles and responsibilities, escalation procedures,
              containment strategies, and communication protocols for responding
              to data breaches and other security incidents. We conduct tabletop
              exercises and simulations to test and refine these plans, ensuring
              that your organization is prepared to respond effectively to
              security incidents.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              5. Governance and Compliance
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Effective data security requires strong governance and compliance
              mechanisms to ensure that security policies are followed and
              regulatory requirements are met. We help you establish data
              security governance frameworks that define roles and
              responsibilities, decision-making processes, and oversight
              mechanisms for your data security program. This includes
              developing security policies, standards, and procedures that
              provide clear guidance for securing data.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              We also help you implement compliance management processes that
              ensure adherence to relevant regulations such as GDPR, CCPA,
              HIPAA, PCI DSS, and industry-specific requirements. This includes
              conducting compliance assessments, implementing controls to
              address compliance requirements, and establishing monitoring and
              reporting mechanisms to demonstrate compliance to regulators and
              stakeholders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Data Security Capabilities */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Key Data Security Capabilities
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Our data security solutions include a comprehensive set of
              capabilities designed to protect your data across its lifecycle.
              These capabilities can be tailored to your specific requirements
              and integrated with your existing security infrastructure.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Data Encryption
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Encryption is a fundamental data security control that protects
              data confidentiality by converting plaintext data into ciphertext
              that can only be read with the appropriate decryption key. We
              implement encryption solutions for data at rest (stored in
              databases, file systems, and cloud storage), data in transit
              (moving across networks), and increasingly, data in use (being
              processed in memory).
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Our encryption solutions include transparent database encryption,
              file and disk encryption, email encryption, and secure
              communication protocols (TLS/SSL). We also implement encryption
              key management solutions that ensure secure generation, storage,
              rotation, and revocation of encryption keys. For sensitive cloud
              workloads, we leverage advanced encryption technologies such as
              confidential computing and homomorphic encryption that protect
              data even during processing.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Identity and Access Management
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Controlling who can access data and what they can do with it is
              critical for data security. Our identity and access management
              (IAM) solutions help you implement the principle of least
              privilege, ensuring that users have only the access necessary for
              their roles. We implement robust authentication mechanisms,
              including multi-factor authentication (MFA), single sign-on (SSO),
              and risk-based authentication that adapts to user behavior and
              context.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              For authorization, we implement role-based access control (RBAC),
              attribute-based access control (ABAC), and fine-grained access
              controls that restrict access based on data sensitivity and user
              attributes. We also help you implement privileged access
              management (PAM) solutions that provide additional controls and
              monitoring for high-risk administrative accounts. Our IAM
              solutions integrate with your existing directory services and
              identity providers, ensuring a seamless user experience while
              enhancing security.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Data Loss Prevention
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Data Loss Prevention (DLP) solutions help prevent the unauthorized
              disclosure of sensitive data, whether accidental or malicious. We
              implement DLP controls that monitor, detect, and block sensitive
              data transfers across various channels, including email, web,
              cloud services, and removable media. Our DLP solutions use content
              inspection, contextual analysis, and machine learning to
              accurately identify sensitive data and apply appropriate controls.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              We implement DLP at multiple levels, including endpoint DLP
              (protecting data on user devices), network DLP (monitoring data in
              transit), and cloud DLP (securing data in cloud services). Our DLP
              implementations include both preventive controls that block
              unauthorized transfers and detective controls that alert security
              teams to potential data leakage. We also help you develop and
              implement DLP policies that balance security requirements with
              business needs, minimizing false positives and user friction.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Database Security
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Databases often contain an organization's most sensitive and
              valuable data, making them prime targets for attackers. Our
              database security solutions help you protect database systems from
              unauthorized access, SQL injection attacks, and other threats. We
              implement database activity monitoring (DAM) solutions that
              provide visibility into database queries, schema changes, and
              administrative actions, helping detect suspicious activities and
              compliance violations.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              We also implement database vulnerability management processes that
              identify and remediate security weaknesses in database
              configurations, patch levels, and access controls. For sensitive
              data within databases, we implement data masking and tokenization
              solutions that protect production data while enabling its use for
              development, testing, and analytics. Our database security
              approach addresses both traditional on-premises databases and
              cloud-based database services.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Cloud Data Security
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              As organizations increasingly store and process data in cloud
              environments, securing this data requires cloud-specific
              approaches and tools. Our cloud data security solutions help you
              implement the shared responsibility model, ensuring that you
              fulfill your security obligations while leveraging the security
              capabilities provided by cloud service providers. We implement
              cloud security posture management (CSPM) solutions that
              continuously monitor your cloud environments for
              misconfigurations, compliance violations, and security risks.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              For data stored in cloud services, we implement cloud access
              security broker (CASB) solutions that provide visibility and
              control over data access and sharing. We also help you implement
              cloud-native security controls such as AWS Macie, Azure
              Information Protection, and Google Cloud Data Loss Prevention to
              protect sensitive data in cloud environments. Our cloud data
              security approach addresses multi-cloud and hybrid environments,
              ensuring consistent protection across your entire data estate.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white mt-8">
              Secure Data Platforms in the Cloud
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Building secure data platforms in the cloud requires a
              comprehensive approach that addresses security at every layer of
              the stack. Our secure-by-design methodology ensures that security
              is integrated from the beginning, not added as an afterthought. We
              implement defense-in-depth strategies that include network
              security, identity and access management, data encryption, and
              continuous monitoring.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Our cloud data platform security framework includes automated
              compliance checks, security posture management, and real-time
              threat detection. We leverage infrastructure-as-code practices to
              ensure consistent security controls across environments and
              implement zero-trust architectures that verify every access
              request regardless of source.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              For organizations with sensitive data subject to regulatory
              requirements, we design cloud data platforms that maintain
              compliance with standards such as GDPR, HIPAA, PCI DSS, and
              industry-specific regulations. Our solutions include data
              sovereignty controls, audit logging, and comprehensive
              documentation to support compliance verification and reporting
              requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry-Specific Data Security */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Industry-Specific Data Security
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Different industries face unique data security challenges based on
              the types of data they handle, regulatory requirements, and threat
              landscape. Our industry-specific data security solutions address
              these unique challenges while leveraging our comprehensive
              security framework.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white mt-10">
              Financial Services
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Financial institutions handle highly sensitive financial and
              personal data, making them prime targets for cyber attacks. They
              also face stringent regulatory requirements from authorities such
              as the SEC, FINRA, and various international financial regulators.
              Our data security solutions for financial services focus on
              protecting customer financial data, transaction information, and
              trading data while ensuring compliance with regulations such as
              GLBA, PCI DSS, and MiFID II.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Key capabilities include fraud detection and prevention, secure
              payment processing, insider threat detection, and secure customer
              authentication. We implement advanced security controls such as
              behavioral analytics, real-time transaction monitoring, and secure
              customer portals. Our solutions also address the unique challenges
              of securing fintech applications, open banking interfaces, and
              blockchain-based financial systems.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Healthcare and Life Sciences
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Healthcare organizations handle protected health information (PHI)
              that is subject to strict privacy and security regulations such as
              HIPAA in the US and similar regulations globally. They also face
              unique challenges related to medical devices, clinical systems,
              and research data. Our data security solutions for healthcare
              focus on protecting patient data while enabling secure sharing for
              care coordination, research, and administrative purposes.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Key capabilities include PHI identification and protection, secure
              health information exchange, medical device security, and secure
              telehealth platforms. We implement healthcare-specific security
              controls such as electronic health record (EHR) security, medical
              device security monitoring, and secure clinical collaboration
              tools. Our solutions also address emerging challenges such as
              securing genomic data, AI-powered clinical decision support
              systems, and remote patient monitoring platforms.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Retail and E-commerce
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Retail and e-commerce companies handle large volumes of customer
              data, payment information, and inventory data across multiple
              channels and locations. They face challenges related to securing
              e-commerce platforms, point-of-sale systems, and supply chain
              data. Our data security solutions for retail focus on protecting
              customer and payment data while enabling personalized customer
              experiences and efficient operations.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Key capabilities include payment card security, secure e-commerce
              platforms, and customer data protection. We implement
              retail-specific security controls such as point-to-point
              encryption for payment processing, secure customer authentication
              for online shopping, and inventory data protection. Our solutions
              also address emerging challenges such as securing omnichannel
              retail environments, IoT devices in stores, and personalization
              platforms that leverage customer data.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Manufacturing and Industrial
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              Manufacturing and industrial organizations increasingly rely on
              connected systems and data-driven processes, creating new security
              challenges related to operational technology (OT), industrial
              control systems (ICS), and intellectual property. Our data
              security solutions for manufacturing focus on protecting
              intellectual property, production data, and connected industrial
              systems while enabling digital transformation initiatives.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Key capabilities include industrial control system security,
              intellectual property protection, and secure supply chain
              collaboration. We implement manufacturing-specific security
              controls such as OT network segmentation, secure remote access for
              maintenance, and data loss prevention for design files and
              manufacturing processes. Our solutions also address emerging
              challenges such as securing Industry 4.0 initiatives, industrial
              IoT devices, and digital twins that contain sensitive operational
              data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compliance and Regulatory Considerations */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Compliance and Regulatory Considerations
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Data security is increasingly governed by a complex landscape of
              regulations and standards that vary by industry, geography, and
              data type. Organizations must navigate these requirements while
              implementing effective security controls that protect their data
              assets. Our data security solutions help you address compliance
              requirements while building a robust security program that goes
              beyond checkbox compliance.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white mt-10">
              Privacy Regulations
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Privacy regulations such as the General Data Protection Regulation
              (GDPR) in Europe, the California Consumer Privacy Act (CCPA) and
              California Privacy Rights Act (CPRA) in the US, and similar
              regulations globally impose specific requirements for protecting
              personal data. These regulations typically require organizations
              to implement appropriate security measures, conduct privacy impact
              assessments, report data breaches, and provide individuals with
              rights regarding their personal data.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Industry-Specific Regulations
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Many industries are subject to sector-specific regulations that
              include data security requirements. Examples include the Health
              Insurance Portability and Accountability Act (HIPAA) for
              healthcare, the Gramm-Leach-Bliley Act (GLBA) for financial
              services, the Payment Card Industry Data Security Standard (PCI
              DSS) for organizations handling payment card data, and the Federal
              Information Security Modernization Act (FISMA) for federal
              agencies and their contractors.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Security Frameworks and Standards
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Various security frameworks and standards provide guidance for
              implementing effective data security controls. These include the
              National Institute of Standards and Technology (NIST)
              Cybersecurity Framework, ISO/IEC 27001 (Information Security
              Management), the Center for Internet Security (CIS) Controls, and
              the Cloud Security Alliance (CSA) Cloud Controls Matrix. These
              frameworks provide structured approaches to security that can help
              organizations build comprehensive security programs.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Our Compliance Approach
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our approach to compliance focuses on integrating regulatory
              requirements into your overall data security program rather than
              treating compliance as a separate activity. We help you map
              security controls to specific regulatory requirements, implement
              controls that address multiple regulations simultaneously, and
              establish monitoring and reporting mechanisms that demonstrate
              compliance to auditors and regulators. This integrated approach
              reduces duplication of effort and ensures that compliance
              activities contribute to your overall security posture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Strengthen Your Data Security Posture?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us to discuss how our data security solutions can help
              protect your most valuable assets.
            </p>
            <GradientButton
              size="lg"
              rightIcon={<ArrowRight className="h-5 w-5" />}
              onClick={() => (window.location.href = "/contact")}
            >
              Schedule a Security Assessment
            </GradientButton>
          </motion.div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <StickyCTA />
    </div>
  );
}
