import { Footer } from "flowbite-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
export default function CustomFooter() {
    return (
      <>
      
      <section className="text-center py-10 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-blue-400">Let's Connect</h2>
        <p className="text-gray-900 mt-2 dark:text-gray-300">
          Feel free to reach out for collaborations or opportunities.
        </p>

        <div className="flex justify-center space-x-4 mt-4">
          <Footer.Icon
            href="https://github.com/Samyk-s"
            icon={FaGithub}
            className="hover:text-gray-900 transition dark:text-blue-400 dark:hover:text-gray-300"
          />

          <Footer.Icon
            href="https://www.linkedin.com/in/samyak-bajracharya-b3380028a/"
            icon={FaLinkedin}
            className="hover:text-gray-900 transition dark:text-blue-400 dark:hover:text-gray-300"
            />
          <Footer.Icon
            href="https://www.linkedin.com/in/samyak-bajracharya-b3380028a/"
            icon={FaEnvelope}
            className="hover:text-gray-900 transition dark:text-blue-400 dark:hover:text-gray-300"
            />
        </div>
        <Footer.Copyright
          by="Samyak Bajracharya"
          year={new Date().getFullYear()}
        />
      </section>
      </>
    )
}
