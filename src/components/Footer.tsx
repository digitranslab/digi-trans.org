import React from "react";
import {
  Linkedin,
  Twitter,
  Facebook,
  Github,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="relative bg-black/50 backdrop-blur-sm text-white py-16 border-t border-purple-500/20"
      style={{ zIndex: 1 }}
    >
      <div className="container mx-auto px-4">
        {/* Footer Links */}
        <div className="pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    MVP Development
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Product Strategy & Design
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Full-Stack Development
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    DevOps & Scaling
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/privacy"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/cookies"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/security"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://linkedin.com/company/digitranslab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/digitranslab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Twitter className="h-4 w-4" /> X (Twitter)
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com/digitranslab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Facebook className="h-4 w-4" /> Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/digitranslab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </li>

              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-purple-500/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 Digitrans, Inc. All rights reserved.
              </p>
              <div className="text-gray-400 text-sm">
                <span>Empowering SaaS founders across EMEA 🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
