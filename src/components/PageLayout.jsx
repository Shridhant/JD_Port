import React from "react";
import { motion } from "framer-motion";
import { Mail, Home, FileText, Briefcase, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function PageLayout({ children }) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="h-screen flex flex-col bg-[#0A0A0A] text-white">
      {/* Content Wrapper (Takes Full Space & Scrolls if Needed) */}
      <div className="flex-grow overflow-y-auto p-6 mb-22 md:mb-20">
        <div className="max-w-2xl mx-auto mb-3">{children}</div>
      </div>

      {/* Bottom Dock - Improved Visibility */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center items-end pb-4">
        {/* Optional background gradient for better contrast */}
        <div className="fixed bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black to-transparent"></div>

        <div className="relative flex items-center gap-6 px-5 py-3 mb-2 bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg">
          <NavItem to="/" icon={Home} currentPath={currentPath} />
          <NavItem to="/about" icon={User} currentPath={currentPath} />
          <NavItem to="/projects" icon={Briefcase} currentPath={currentPath} />
          <NavItem to="/blog" icon={FileText} currentPath={currentPath} />
          <a
            href="mailto:example@email.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

// Navigation Item Component
function NavItem({ to, icon: Icon, currentPath }) {
  return (
    <Link
      to={to}
      className={`flex items-center justify-center w-12 h-12 rounded-lg transition-colors ${
        currentPath === to ? "text-white bg-white/10" : "text-gray-400"
      } hover:text-white hover:bg-white/5`}
    >
      <Icon size={24} />
    </Link>
  );
}
