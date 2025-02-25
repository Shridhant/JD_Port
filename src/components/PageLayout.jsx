import React from "react";
import { motion } from "framer-motion";
import { Mail, Home, FileText, Briefcase, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function PageLayout({ children }) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <motion.div
      initial={{ filter: "blur(10px)", opacity: 0 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#0A0A0A] text-white p-6 md:p-12 lg:p-16 pb-24 relative"
    >
      <div className="max-w-2xl mx-auto">
        {children}

        {/* Bottom Navigation */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-lg rounded-2xl p-4 flex items-center gap-8 border border-white/10 z-50">
          <Link
            to="/"
            className={`${
              currentPath === "/" ? "text-white" : "text-gray-400"
            } hover:text-white transition-colors`}
          >
            <Home size={20} />
          </Link>
          <Link
            to="/about"
            className={`${
              currentPath === "/about" ? "text-white" : "text-gray-400"
            } hover:text-white transition-colors`}
          >
            <User size={20} />
          </Link>
          <Link
            to="/projects"
            className={`${
              currentPath === "/projects" ? "text-white" : "text-gray-400"
            } hover:text-white transition-colors`}
          >
            <Briefcase size={20} />
          </Link>
          <Link
            to="/blog"
            className={`${
              currentPath === "/blog" ? "text-white" : "text-gray-400"
            } hover:text-white transition-colors`}
          >
            <FileText size={20} />
          </Link>
          <a
            href="mailto:example@email.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
