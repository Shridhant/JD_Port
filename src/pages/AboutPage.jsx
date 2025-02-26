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
            I'm a software developer passionate about sleek designs and building
            scalable applications. I specialize in the MERN stack and React
            Native, crafting intuitive user experiences and performant web
            solutions. Currently, I'm working at NagaEd as a Software Developer.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Background</h2>
          <p className="text-base text-gray-300 leading-relaxed mb-4">
            With over 4 years of experience in web development, I've worked
            across frontend and backend technologies. Before joining NagaEd, I
            was at SymBios Creations, where I contributed as a Frontend
            Developer and UI/UX Designer, focusing on React.js and React Native.
          </p>
          <p className="text-base text-gray-300 leading-relaxed">
            I started my journey as an Assistant Web Developer at Assam Power
            Distribution Company Limited, where I worked on a complaint
            management system. Later, I gained experience at Amazon as a Data
            Associate before diving deeper into software development.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-base font-medium mb-3">Languages</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>JavaScript</li>
                <li>C#</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-medium mb-3">Technologies</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>React.js</li>
                <li>Node.js</li>
                <li>MySQL</li>
                <li>Express.js</li>
                <li>React Native</li>
                <li>.NET</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
