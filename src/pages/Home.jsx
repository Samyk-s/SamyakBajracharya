import { Footer } from "flowbite-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-500 text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm <span className="text-blue-400">Samyak Bajracharya</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-4">
          Aspiring Frontend Developer | React Enthusiast
        </p>
        <p className="text-gray-400 mt-2">
          Passionate about crafting intuitive and user-friendly web experiences.
        </p>
        <a
          href="mailto:samykbajr919@gmail.com"
          className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg font-medium transition"
        >
          Get in Touch
        </a>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-center text-blue-400">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 text-center">
          {[
            "React.js",
            "JavaScript (ES6+)",
            "Tailwind CSS",
            "Redux",
            "Next.js",
            "Git",
            "Figma",
          ].map((skill) => (
            <span key={skill} className="px-4 py-2 bg-gray-800 rounded-lg">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-center text-blue-400">
          Projects
        </h2>
        <div className="mt-6 space-y-6">
          {[
            {
              title: "E-commerce Website 🛒",
              description: "Built with React, Redux, Tailwind CSS",
              link: "#",
            },
            {
              title: "Travel Website 🗺️",
              description: "Interactive maps & weather APIs integrated",
              link: "#",
            },
            {
              title: "AI Trash Detection ♻️",
              description: "Uses YOLOv5 for waste classification",
              link: "#",
            },
          ].map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center py-10 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-blue-400">Let's Connect</h2>
        <p className="text-gray-300 mt-2">
          Feel free to reach out for collaborations or opportunities.
        </p>

        {/* Footer Icons */}
        <div className="flex justify-center space-x-4 mt-4">
          <Footer.Icon
            href="https://github.com/Samyk-s"
            icon={FaGithub}
            className="text-white hover:text-blue-500 transition dark:text-blue-400 dark:hover:text-gray-300"
          />

          <Footer.Icon
            href="https://www.linkedin.com/in/samyak-bajracharya-b3380028a/"
            icon={FaLinkedin}
            className="text-white hover:text-blue-500 transition dark:text-blue-400 dark:hover:text-gray-300"
            />
          <Footer.Icon
            href="https://www.linkedin.com/in/samyak-bajracharya-b3380028a/"
            icon={FaEnvelope}
            className="text-white hover:text-blue-500 transition dark:text-blue-400 dark:hover:text-gray-300"
            />
        </div>
        <Footer.Copyright
          by="Samyak Bajracharya"
          year={new Date().getFullYear()}
        />
      </section>
    </main>
  );
}