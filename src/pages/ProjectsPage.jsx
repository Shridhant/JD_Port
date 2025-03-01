import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export function ProjectsPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        default: { type: "spring" },
        opacity: { ease: "linear" },
      },
    },
  };

  // Animation variants for individual items with blur
  const item = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        filter: { duration: 0.7 },
      },
    },
  };
  const projects = [
    {
      title: "Nagaland Conservatory School of Music CMS",
      description:
        "A content management system for Nagaland Conservatory School of Music, built using MySQL and the MERN stack, hosted on Hostinger.",
      link: "#",
      image: "/school.jpeg",
      year: "2024",
      tags: ["MERN", "MySQL", "Hostinger"],
    },
    {
      title: "SuperBazaar Smart Ship System",
      description:
        "A smart courier shipping system for SuperBazaar, developed with the MERN stack and MySQL, hosted on Hostinger.",
      link: "#",
      image: "/courier.jpeg",
      year: "2024",
      tags: ["MERN", "MySQL", "Hostinger"],
    },
  ];

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <h1 className="text-3xl font-bold mb-8">Work</h1>
      <div className="space-y-16">
        {projects.map((project, index) => (
          <motion.div variants={item} key={index} className="group">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block space-y-6"
            >
              <div className="aspect-[16/9] overflow-hidden rounded-lg bg-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium group-hover:text-white text-gray-200">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-400">
                      {project.year}
                    </span>
                    <ExternalLink
                      size={18}
                      className="text-gray-400 group-hover:text-white"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
