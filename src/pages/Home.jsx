import Skills from "./skill";
export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-700 text-white min-h-screen">
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-4xl text-gray-900 dark:text-white md:text-6xl font-bold">
          Hi, I'm <span className="text-blue-400">Samyak Bajracharya</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-900 mt-4 dark:text-gray-300">
          Aspiring Frontend Developer | React Enthusiast
        </p>
        <p className="text-gray-900 mt-2 dark:text-gray-300">
          Aspiring Frontend Developer with hands-on experience in building
          interactive and responsive web applications using React.js. Recently
          completed React.js training from Broadway Infosys, with additional
          expertise in state management and React Router. Passionate about
          creating intuitive and user-friendly web experiences. Solid
          understanding of frontend technologies, including HTML, CSS,
          JavaScript, and React best practices. Seeking an opportunity to
          leverage my skills in a dynamic development environment.
        </p>
       
      </section>

      <Skills/>

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
              link: "https://ecommerce-coral-five.vercel.app/",
            },
            {
              title: "Travel Website 🗺️",
              description: "Interactive maps & weather APIs integrated",
              link: "https://travelvlog.vercel.app/",
            },
            {
              title: "AI Trash Detection ♻️",
              description: "Uses YOLOv5 for waste classification",
              link: "https://trash-classifier-ai.vercel.app/",
            },
          ].map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
