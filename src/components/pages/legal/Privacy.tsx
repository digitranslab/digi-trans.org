import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, UserCheck, Database, Globe, Mail, FileCheck, Share2, Clock, Baby, User } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400">
                <Shield className="w-8 h-8" />
              </div>
              <span className="text-purple-400 text-sm font-medium">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-gray-400">Last updated: October 2022</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-12"
            >
              {/* Highlights */}
              <div className="bg-gray-900/50 rounded-2xl border border-gray-800 p-8">
                <h3 className="text-xl font-semibold text-white mb-4">The Highlights</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Digitrans is committed to complying with data protection legislation, including the 
                  data protection regime introduced by the General Data Protection Regulation (EU Regulation 
                  2016/679). This privacy notice contains information on what personal data we collect, what 
                  we do with that information, and what rights you have.
                </p>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  We process some personal data in order to run our business. There are a limited number of 
                  circumstances where we may share your information with third parties (for example, pursuant 
                  to a court order, if we are part of a merger, or with our business partners and service 
                  providers who support our business or collaborate with us). We take the security of your 
                  information seriously and take steps to keep your information secure.
                </p>
              </div>

              {/* GDPR Compliance Introduction */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Introduction</h2>
                </div>
                <div className="pl-10 space-y-4">
                  <p className="text-gray-300">
                    We respect your privacy and are committed to protecting it through our compliance with 
                    this Privacy Policy Statement. This Privacy Policy Statement (together with our{" "}
                    <a href="/terms" className="text-purple-400 hover:text-purple-300 underline">Terms &amp; Conditions</a>) 
                    describes the types of information we may collect from you or that you may provide — for 
                    example, when you visit any of our websites or contact us — and how we use, protect, and 
                    disclose that information.
                  </p>
                  <p className="text-gray-300">
                    This Privacy Policy Statement does not apply to information collected on any third-party 
                    site or application (including advertising) that may link to or be accessible from our 
                    websites. We are not responsible for the privacy policies or data collection, use and 
                    disclosure practices of those sites. We encourage you to review the privacy policies of 
                    each site you visit.
                  </p>
                  <p className="text-gray-300">
                    By accessing or using any of our websites or services (including email communications), 
                    you agree to this Privacy Policy Statement. This Statement may change from time to time, 
                    so please check the Privacy Policy Statement periodically for updates.
                  </p>
                </div>
              </div>

              {/* Data Collection */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-green-500/20 text-green-400">
                    <Database className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
                </div>
                <div className="pl-10 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Information You Provide to Us</h3>
                    <p className="text-gray-300">
                      When you navigate our websites or contact us, we may request or you may choose to 
                      provide us with certain information. This may include information by which you may be 
                      personally identified ("personal information"), such as:
                    </p>
                    <ul className="space-y-3 mt-3">
                      {[
                        "Name, employer, email address, or telephone number",
                        "Records and copies of your correspondence with us",
                        "Information provided when registering to use portions of our websites or services",
                        "Information provided when reporting a problem with our websites, products, or services",
                        "Personal information collected for security purposes if you visit one of our offices"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Automatically Collected Information</h3>
                    <p className="text-gray-300">
                      As you navigate through and interact with our websites, we may automatically collect 
                      certain information about your equipment, browsing actions, and patterns using common 
                      internet technologies, such as cookies and web beacons. This may include:
                    </p>
                    <ul className="space-y-3 mt-3">
                      {[
                        "IP address and browser information",
                        "Location data, logs, and other communication data",
                        "Details of your visits to our websites and the resources you access",
                        "Device information and operating system"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-300 mt-3">
                      This information helps us improve our websites and deliver better and more personalized 
                      content and services by enabling us to estimate our audience size and usage patterns.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Email Marketing</h3>
                    <p className="text-gray-300">
                      As a current or previous customer or user of our products or services, you may 
                      periodically receive emails from us. Such processing may include the placing of beacons 
                      or pixels that let us know if you have opened our email. We do this to see which emails 
                      are effective so we can improve our content and services. We will never track your 
                      location or device information through email marketing.
                    </p>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
                </div>
                <div className="pl-10 space-y-4">
                  <p className="text-gray-300">We use information that we collect about you or that you provide to us, including personal information:</p>
                  <ul className="space-y-3">
                    {[
                      "To present our websites, products, and services to you and continuously improve upon them",
                      "To provide you with information, products, or services that you request from us",
                      "To notify you about changes to our website, products, or services and promotions or events",
                      "To maintain the integrity and security of our websites, products, and services",
                      "For our ordinary business operations, including human resources, recruiting, and business research"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Legal Basis for Processing (GDPR) */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Legal Basis for Processing (GDPR)</h2>
                </div>
                <div className="pl-10 space-y-4">
                  <p className="text-gray-300">
                    We are not allowed to process personal data if we do not have a valid legal ground. 
                    We will only process your personal data if:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "The processing is necessary to perform our contractual obligations towards you or to take pre-contractual steps at your request",
                      "The processing is necessary to comply with our legal or regulatory obligations, such as tax reporting or regulatory requirements",
                      "The processing is necessary for the legitimate interests of Digitrans, and does not unduly affect your interests or fundamental rights and freedoms",
                      "The processing is necessary for the performance of a task carried out in the public interest",
                      "In some cases, we have obtained prior consent from you"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-300 mt-4">
                    To the extent that we process any special categories of data relating to you, we will do 
                    so because the data has been manifestly made public, the processing is necessary for the 
                    establishment, exercise, or defense of a legal claim, or you have given your explicit consent.
                  </p>
                </div>
              </div>

              {/* Third-Party Sharing */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-orange-500/20 text-orange-400">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Disclosure of Your Information</h2>
                </div>
                <div className="pl-10 space-y-4">
                  <p className="text-gray-300">
                    Protecting your personal information is important to us and we neither rent nor sell your 
                    personal information to anyone. We may disclose or transfer personal information that we 
                    collect or you provide as described in this Privacy Policy Statement, including:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "To a buyer or other successor in the event of a merger, acquisition, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Digitrans's assets",
                      "To our subsidiaries, affiliates, agents, contractors, service providers, and other third parties we use to support our business, who are bound by contractual obligations to keep personal information confidential",
                      "To comply with any court order, law, or legal process, including to respond to any government or regulatory request",
                      "To enforce or apply our Terms of Use and other agreements that govern the sale or use of our products and services",
                      "To protect the rights, property, or security of Digitrans, our employees, our users, or others"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* International Transfers */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-pink-500/20 text-pink-400">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">International Transfers</h2>
                </div>
                <div className="pl-10 space-y-4">
                  <p className="text-gray-300">
                    To facilitate our global operations, and in accordance with applicable laws, we may 
                    transfer your personal information to, and access your personal information from, our 
                    corporate offices, subsidiaries, and affiliates in the various countries in which we operate.
                  </p>
                  <p className="text-gray-300">
                    If your personal data is transferred outside the EEA, we will put in place suitable 
                    safeguards to ensure that such transfer is carried out in compliance with applicable data 
                    protection rules. We may use data transfer agreements based on standard contractual clauses 
                    approved by the European Commission or ensure that the transfer is to a jurisdiction that 
                    is the subject of an adequacy decision by the European Commission.
                  </p>
                </div>
              </div>

              {/* Data Security */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-red-500/20 text-red-400">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Data Security</h2>
                </div>
                <div className="pl-10 space-y-4">
                  <p className="text-gray-300">
                    We take your security seriously and take reasonable steps to protect and secure your 
                    personal information from unauthorized access, use, and disclosure. We have implemented 
                    adequate technical and organizational measures to protect personal data against unauthorized, 
                    accidental, or unlawful destruction, loss, alteration, misuse, disclosure, or access and 
                    against all other unlawful forms of processing.
                  </p>
                  <p className="text-gray-300">
                    These security measures have been implemented taking into account the state of the art of 
                    the technology, their cost of implementation, the risks presented by the processing, and 
                    the nature of the personal data, with particular care for sensitive data.
                  </p>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 mt-4">
                    <p className="text-sm text-gray-400">
                      The safety and security of your information also depends on you. Where we have given you 
                      (or where you have chosen) a password for access to certain parts of our websites, products, 
                      or services, you are responsible for keeping this password confidential.
                    </p>
                  </div>
                </div>
              </div>

              {/* Your Rights Under GDPR */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Your Rights Under GDPR</h2>
                </div>
                <div className="pl-10 space-y-4">
                  <p className="text-gray-300">
                    You may have a right to access and to obtain a copy of your personal data as processed by 
                    Digitrans. If you believe that any information we hold about you is incorrect or incomplete, 
                    you may also request the correction of your personal data. You may also have the right to:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {[
                      { title: "Access", desc: "Request a copy of your personal data" },
                      { title: "Rectification", desc: "Request correction of inaccurate data" },
                      { title: "Erasure", desc: "Request deletion of your personal data" },
                      { title: "Restriction", desc: "Request limitation of processing" },
                      { title: "Objection", desc: "Object to the processing of your personal data" },
                      { title: "Withdraw Consent", desc: "Withdraw consent where Digitrans obtained your consent to process personal data" }
                    ].map((right, i) => (
                      <div key={i} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                        <h4 className="font-semibold text-white mb-1">{right.title}</h4>
                        <p className="text-sm text-gray-400">{right.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-300 mt-4">
                    We will honor such requests, withdrawal, or objection as required under applicable data 
                    protection rules, but these rights are not absolute: they do not always apply and exemptions 
                    may be engaged. To exercise the above rights, you may send an email to{" "}
                    <a href="mailto:enquiry@digi-trans.org" className="text-purple-400 hover:text-purple-300 underline">
                      enquiry@digi-trans.org
                    </a>.
                  </p>
                  <p className="text-gray-300">
                    If you are not satisfied with how we process your personal data, please let us know and we 
                    will investigate your concern. If you are not satisfied with our response, you have the right 
                    to make a complaint to the data protection authority in the jurisdiction where you live or work.
                  </p>
                </div>
              </div>

              {/* Choices */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-yellow-500/20 text-yellow-400">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Your Choices</h2>
                </div>
                <div className="pl-10 space-y-4">
                  <p className="text-gray-300">
                    We strive to provide you with choices regarding the personal information you provide to us.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <h4 className="font-semibold text-white mb-2">Tracking Technologies</h4>
                      <p className="text-sm text-gray-400">
                        Depending on your browser, you may be able to change settings to refuse all or some 
                        browser cookies, or to alert you when cookies are being sent. If you disable or refuse 
                        cookies, please note that some parts of the site may then be inaccessible or not function properly.
                      </p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <h4 className="font-semibold text-white mb-2">Promotional Offers</h4>
                      <p className="text-sm text-gray-400">
                        If you do not wish to receive promotional email messages from us, you can opt out by 
                        sending us an email at{" "}
                        <a href="mailto:enquiry@digi-trans.org" className="text-purple-400 hover:text-purple-300 underline">
                          enquiry@digi-trans.org
                        </a>{" "}
                        asking to be omitted from future email distributions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Retention */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Data Retention</h2>
                </div>
                <div className="pl-10">
                  <p className="text-gray-300">
                    We will only retain personal data for as long as necessary to fulfill the purpose for which 
                    it was collected or to comply with legal, regulatory, or internal policy requirements. We 
                    only collect and retain as much personal information as needed for specific, identified 
                    purposes described in this Privacy Policy and we will not use it in any way that is 
                    incompatible with those purposes.
                  </p>
                </div>
              </div>

              {/* Children */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-teal-500/20 text-teal-400">
                    <Baby className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Children Under the Age of 13</h2>
                </div>
                <div className="pl-10">
                  <p className="text-gray-300">
                    Our website is not intended for children under 13 years of age. We do not knowingly collect 
                    personal information from children under 13. If you become aware that your child has provided 
                    us with personal information without your consent, please contact us at{" "}
                    <a href="mailto:enquiry@digi-trans.org" className="text-purple-400 hover:text-purple-300 underline">
                      enquiry@digi-trans.org
                    </a>{" "}
                    and we will work to delete it.
                  </p>
                </div>
              </div>

              {/* Data Protection Officer */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                    <User className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Data Protection Officer</h2>
                </div>
                <div className="pl-10">
                  <p className="text-gray-300">
                    To communicate with our Data Protection Officer, please email{" "}
                    <a href="mailto:enquiry@digi-trans.org" className="text-purple-400 hover:text-purple-300 underline">
                      enquiry@digi-trans.org
                    </a>.
                  </p>
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl border border-purple-500/20 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Contact Us</h2>
                </div>
                <p className="text-gray-300 mb-2">
                  If you have any questions or comments about this Privacy Policy Statement, please contact us:
                </p>
                <p className="text-gray-400 text-sm mb-4">
                  IDMOG SAS<br />
                  Quai Armand Lalande<br />
                  Bassin à Flot 1 – Hangar G2<br />
                  33000 Bordeaux, France
                </p>
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="mailto:enquiry@digi-trans.org" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors font-medium"
                  >
                    <Mail className="w-4 h-4" />
                    Email Us
                  </a>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors font-medium"
                  >
                    Contact Page
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
