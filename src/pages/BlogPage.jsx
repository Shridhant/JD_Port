import { motion } from "framer-motion";

export function BlogPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
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
