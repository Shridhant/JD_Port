import { Github, Twitter, Mail } from "lucide-react";

export function HomePage() {
  return (
    <>
      <header className="mb-12">
        <div className="w-24 h-24 mb-6 overflow-hidden rounded-lg border border-white/10">
          <img
            src="/dp.jpeg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold mb-3">Jayantha Debnath</h1>
        <p className="text-base text-gray-400">
          Software Engineer at{" "}
          <span className="text-blue-600 mr-1"> Nagaed</span>
          working on Next.js
        </p>
      </header>

      <main>
        <section className="mb-12">
          <p className="text-base text-gray-300 leading-relaxed mb-4">
            I'm a software engineer based in Kohima, Nagaland. I'm currently
            working at <span className="text-blue-600 mr-1"> Nagaed</span> on
            MERN Stack. Previously, I worked at{" "}
            <span className="text-orange-400 mr-1">Symbiosis.</span>
          </p>
          <p className="text-base text-gray-300 leading-relaxed">
            I'm a web developer who loves sleek, modern designs and bringing
            ideas to life. I specialize in the MERN stack, building fast and
            scalable applications. I'm passionate about creating seamless user
            experiences and intuitive interfaces, always striving for
            performance and efficiency.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-6">Connect</h2>
          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="mailto:example@email.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
