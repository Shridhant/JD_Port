import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export function ProjectsPage() {
  const projects = [
    {
      title: "Next.js App Router",
      description:
        "A complete rewrite of Next.js routing system with improved developer experience and performance.",
      link: "https://nextjs.org/docs/app",
      image:
        "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=800",
      year: "2023",
      tags: ["Next.js", "React", "TypeScript"],
    },
    {
      title: "Stripe Dashboard",
      description:
        "A complete redesign of Stripe's main dashboard interface with improved performance and accessibility.",
      link: "https://stripe.com",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
      year: "2022",
      tags: ["React", "TypeScript", "GraphQL"],
    },
    {
      title: "Developer Experience Tools",
      description:
        "Suite of developer tools focused on improving the development workflow and debugging experience.",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      year: "2021",
      tags: ["Node.js", "TypeScript", "CLI"],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-3xl font-bold mb-8">Work</h1>
      <div className="space-y-16">
        {projects.map((project, index) => (
          <div key={index} className="group">
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
          </div>
        ))}
      </div>
    </motion.div>
  );
}
