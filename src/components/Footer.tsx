// src/app/components/Footer.js
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black dark:bg-white text-white dark:text-black py-6 w-full transition-colors duration-300">
      <div className="container mx-auto max-w-6xl px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm font-medium text-center md:text-left mb-4 md:mb-0 pl-0 md:pl-32">
          Copyright © 2025. All rights are reserved
        </p>
        <div className="flex space-x-4 gap-2 pr-0 md:pr-28">
          <a
            href="https://www.linkedin.com/in/harshbhosale7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin
              size={20}
              className="text-white dark:text-black hover:text-blue-400 dark:hover:text-blue-600 transition-colors duration-300"
            />
          </a>
          <a
            href="https://github.com/Harshcode-develop"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub
              size={20}
              className="text-white dark:text-black hover:text-gray-400 dark:hover:text-gray-600 transition-colors duration-300"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
