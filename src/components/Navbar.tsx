import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("theme") || "light";
    }
    return "light";
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    sessionStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full py-6 bg-white dark:bg-gray-900 shadow-sm md:shadow-none dark:shadow-gray-800 dark:md:shadow-none transition-colors duration-300 relative z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        <a
          href="/"
          className="text-base font-bold text-gray-800 dark:text-white pl-4 transition-colors duration-300"
        >
          Harsh.dev
        </a>

        <div className="flex items-center space-x-4 md:space-x-7 pr-4 md:pr-7">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="relative flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1 w-14 h-7 transition-colors duration-300 focus:outline-none shadow-inner"
            aria-label="Toggle Dark Mode"
          >
            {/* Sliding Indicator */}
            <div
              className={`absolute left-1 top-1 w-5 h-5 bg-white dark:bg-gray-600 rounded-full shadow-md transform transition-transform duration-300 ${
                theme === "dark" ? "translate-x-7" : "translate-x-0"
              }`}
            ></div>

            {/* Icons */}
            <div className="flex justify-between items-center w-full px-1 z-10">
              <FaSun
                size={12}
                className={`${
                  theme === "light" ? "text-yellow-500" : "text-gray-400"
                } transition-colors duration-300`}
              />
              <FaMoon
                size={12}
                className={`${
                  theme === "dark" ? "text-white" : "text-gray-400"
                } transition-colors duration-300`}
              />
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 dark:text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-gray-900 shadow-lg border-t dark:border-gray-800 flex flex-col items-center py-6 space-y-6 transition-all duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-bold text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
