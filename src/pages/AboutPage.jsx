import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-3xl font-bold mb-8">About</h1>

      <div className="space-y-8">
        <section>
          <p className="text-base text-gray-300 leading-relaxed">
            I'm Tim, a software engineer based in San Francisco. I specialize in
            building high-performance web applications and developer tools.
            Currently, I'm working at Vercel where I focus on improving the
            Next.js framework and making web development more accessible to
            everyone.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Background</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-4">
            With over 8 years of experience in web development, I've worked
            across the full stack but found my passion in frontend development
            and developer tooling. I believe in creating intuitive, performant
            experiences that help developers build better software.
          </p>
          <p className="text-base text-gray-300 leading-relaxed">
            Before joining Vercel, I was at Stripe where I contributed to their
            dashboard infrastructure and helped scale their frontend
            architecture. I've also been an active open source contributor,
            particularly in the React and TypeScript ecosystems.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-base font-medium mb-3">Languages</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Rust</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-medium mb-3">Technologies</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>GraphQL</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Speaking & Writing</h2>
          <div className="space-y-4">
            <div className="group">
              <a
                href="#"
                className="block space-y-2 p-4 -mx-4 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-medium group-hover:text-white text-gray-200">
                    The Future of React Server Components
                  </h3>
                  <ExternalLink
                    size={18}
                    className="text-gray-400 group-hover:text-white"
                  />
                </div>
                <p className="text-sm text-gray-400">
                  ReactConf 2024 • San Francisco, CA
                </p>
              </a>
            </div>
            <div className="group">
              <a
                href="#"
                className="block space-y-2 p-4 -mx-4 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-medium group-hover:text-white text-gray-200">
                    Building the Next Generation of Web Apps
                  </h3>
                  <ExternalLink
                    size={18}
                    className="text-gray-400 group-hover:text-white"
                  />
                </div>
                <p className="text-sm text-gray-400">
                  JSConf 2023 • Berlin, Germany
                </p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
