import { motion } from "framer-motion";

export function BlogPage() {
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
  return (
    <motion.div
      variants={item}
      initial="hidden"
      animate="show"
      className="text-center py-16"
    >
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <p className="text-base text-gray-400">Coming soon! 🚧</p>
      <p className="text-sm text-gray-500 mt-2">
        Check back later for updates and articles.
      </p>
    </motion.div>
  );
}
