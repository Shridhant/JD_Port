import { Github, Twitter, Mail } from "lucide-react";

export function HomePage() {
  return (
    <>
      <header className="mb-12">
        <div className="w-24 h-24 mb-6 overflow-hidden rounded-lg border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=200"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold mb-3">Tim Olsen</h1>
        <p className="text-base text-gray-400">
          Software Engineer at Vercel working on Next.js
        </p>
      </header>

      <main>
        <section className="mb-12">
          <p className="text-base text-gray-300 leading-relaxed mb-4">
            I'm a software engineer based in San Francisco. I'm currently
            working at Vercel on Next.js. Previously, I worked at Stripe on the
            Stripe Dashboard.
          </p>
          <p className="text-base text-gray-300 leading-relaxed">
            I'm passionate about building tools that help developers build
            better software. I'm particularly interested in developer
            experience, performance, and accessibility.
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
