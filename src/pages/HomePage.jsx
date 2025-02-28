import { Github, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function HomePage() {
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
    <motion.div variants={container} initial="hidden" animate="show">
      <header className="mb-12">
        <motion.div
          variants={item}
          style={{ willChange: "filter" }}
          className="w-24 h-24 mb-6 overflow-hidden rounded-lg border border-white/10"
        >
          <img
            src="/dp.jpeg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.h1 variants={item} className="text-3xl font-bold mb-3">
          Jayantha Debnath
        </motion.h1>
        <motion.p variants={item} className="text-base text-gray-400">
          Software Engineer at{" "}
          <span className="text-blue-600 mr-1">Nagaed</span> working on Next.js
        </motion.p>
      </header>

      <main>
        <motion.section variants={item} className="mb-12">
          <p className="text-base text-gray-300 leading-relaxed mb-4">
            I'm a software engineer based in{" "}
            <span className="text-white">Kohima, Nagaland.</span> I'm currently
            working at <span className="text-blue-600 mr-1">Nagaed</span> on
            MERN Stack. Previously, I worked at
            <span className="text-orange-400 mr-1">Symbiosis.</span>
          </p>
          <p className="text-base text-gray-300 leading-relaxed">
            I'm a web developer who loves sleek, modern designs and bringing
            ideas to life. I specialize in the MERN stack, building fast and
            scalable applications. I'm passionate about creating seamless user
            experiences and intuitive interfaces, always striving for
            performance and efficiency.
          </p>
        </motion.section>

        <motion.section variants={item} className="mb-12">
          <h2 className="text-lg font-semibold mb-6">Connect</h2>
          <div className="flex space-x-6">
            <motion.a
              variants={item}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              variants={item}
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter size={20} />
            </motion.a>
            <motion.a
              variants={item}
              href="mailto:example@email.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </motion.section>
      </main>
    </motion.div>
  );
}
