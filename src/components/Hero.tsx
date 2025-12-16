import profile from "../assets/profile.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaJava,
  FaGitAlt,
  FaKaggle,
} from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiMysql,
  SiExpress,
  SiMongodb,
  SiLeetcode,
  SiHackerrank,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const Hero = () => {
  return (
    <section
      id="home"
      className="py-12 md:py-24 pb-20 bg-white dark:bg-gray-900 w-full relative transition-colors duration-300"
    >
      <div className="container mx-auto max-w-4xl px-8 md:px-9 pt-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-0">
          {/* Left Side: Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-6xl lg:text-4xl font-extrabold text-gray-800 dark:text-white leading-tight mb-4 transition-colors duration-300">
              Data-driven <br className="block md:hidden" />Frontend Developer{" "}
              <span className="hidden md:inline-block">👋</span>
            </h1>
            <p className="text-sm md:text-[0.97rem] text-gray-600 dark:text-gray-300 mb-6 max-w-lg transition-colors duration-300 mx-auto md:mx-0">
              Hi, I'm Harsh. A passionate data-driven developer based in{" "}
              [Pune, India]. 📍
            </p>

            <div className="flex justify-center md:justify-start space-x-4 mb-6">
              <a
                href="https://www.linkedin.com/in/harshbhosale7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin
                  size={18}
                  className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                />
              </a>
              <a
                href="https://github.com/Harshcode-develop"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub
                  size={18}
                  className="text-gray-700 dark:text-white hover:text-black dark:hover:text-gray-300 transition-colors duration-300"
                />
              </a>
              <a
                href="https://leetcode.com/u/Harsh-Developer/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
              >
                <SiLeetcode
                  size={18}
                  className="text-gray-700 dark:text-white hover:text-black dark:hover:text-gray-300 transition-colors duration-300"
                />
              </a>
              <a
                href="https://www.hackerrank.com/profile/harshbhosale232"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HackerRank"
              >
                <SiHackerrank
                  size={18}
                  className="text-gray-700 dark:text-white hover:text-black dark:hover:text-gray-300 transition-colors duration-300"
                />
              </a>
              <a
                href="https://www.kaggle.com/harshshahajibhosale"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kaggle"
              >
                <FaKaggle
                  size={18}
                  className="text-gray-700 dark:text-white hover:text-black dark:hover:text-gray-300 transition-colors duration-300"
                />
              </a>
            </div>

            {/* Download CV Button */}
            <div className="mt-6">
              <a
                href="https://drive.google.com/file/d/1sC9ZScsyijNx5ROkhegTRwBhUhAgy3qA/view?usp=drive_link"
                download
                target="_blank"
                className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-black dark:border-white text-black dark:text-white font-semibold text-[13px] transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black shadow-sm"
              >
                Download CV
              </a>
            </div>

            {/* Tech Stack */}
            <div className="mt-6 md:mt-36 transition-colors duration-300">
              <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="flex items-center gap-3 mb-2 md:mb-0">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 whitespace-nowrap transition-colors duration-300">
                    Tech Stack
                  </p>
                  <span className="hidden md:block text-sm text-gray-300 dark:text-gray-600 select-none mx-3 ml-1 pr-4 transition-colors duration-300">
                    |
                  </span>
                </div>
                <div className="flex flex-wrap justify-center md:flex-nowrap md:overflow-visible gap-4 md:gap-7 w-full md:w-auto px-2 md:px-0">
                  <SiPython
                    size={22}
                    className="text-blue-400 shrink-0"
                    title="Python"
                  />
                  <FaJava
                    size={22}
                    className="text-orange-500 shrink-0"
                    title="Java"
                  />
                  <SiMysql
                    size={22}
                    className="text-blue-500 shrink-0"
                    title="MySQL"
                  />
                  <SiMongodb
                    size={22}
                    className="text-green-500 shrink-0"
                    title="MySQL"
                  />
                  <SiHtml5
                    size={22}
                    className="text-orange-600 shrink-0"
                    title="HTML5"
                  />
                  <SiCss3
                    size={22}
                    className="text-blue-600 shrink-0"
                    title="CSS3"
                  />
                  <SiJavascript
                    size={22}
                    className="text-yellow-400 bg-black rounded shrink-0"
                    title="JavaScript"
                  />
                  <SiTypescript
                    size={22}
                    className="text-blue-500 bg-white rounded shrink-0"
                    title="TypeScript"
                  />
                  <SiTailwindcss
                    size={22}
                    className="text-cyan-500 shrink-0"
                    title="Tailwind CSS"
                  />
                  <SiReact
                    size={22}
                    className="text-sky-500 shrink-0"
                    title="React"
                  />
                  <SiExpress
                    size={22}
                    className="text-black dark:text-white transition-colors duration-300 shrink-0"
                    title="Express"
                  />
                  <FaGitAlt
                    size={22}
                    className="text-orange-500 shrink-0"
                    title="Git"
                  />
                  <VscAzure
                    size={22}
                    className="text-blue-500 shrink-0"
                    title="Azure"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Profile Image Container */}
          <div className="md:w-1/3 flex justify-center md:justify-end pr-0 md:pr-4 pb-30">
            <div className="relative w-[18rem] h-[18rem] md:w-[21rem] md:h-[20rem] flex items-center justify-center">
              {/* Rotating Glow & Outline */}
              <div className="absolute w-[15rem] h-[15rem] md:w-[17.5rem] md:h-[17.5rem] rounded-full bg-[conic-gradient(transparent_0%,transparent_30%,#808080_100%)] dark:bg-[conic-gradient(transparent_0%,transparent_30%,#a0a0a0_100%)] animate-[spin_4s_linear_infinite] blur-md opacity-60"></div>
              <div className="absolute w-[15rem] h-[15rem] md:w-[17.5rem] md:h-[17.5rem] rounded-full bg-[conic-gradient(transparent_0%,transparent_30%,#808080_100%)] dark:bg-[conic-gradient(transparent_0%,transparent_30%,#a0a0a0_100%)] animate-[spin_4s_linear_infinite_reverse]"></div>

              <div className="relative z-10 w-56 h-56 md:w-68 md:h-68 rounded-full overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.6)] dark:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-all duration-300">
                <img
                  src={profile}
                  alt="Harsh - Full Stack Developer"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
