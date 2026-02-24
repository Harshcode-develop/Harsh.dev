"use client";
import React, { useState } from "react";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";

import { FaGithub } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiMysql,
  SiGooglegemini,
  SiTypescript,
  SiPython,
  SiDatabricks,
  SiTensorflow,
  SiDocker,
  SiApacheairflow,
  SiSupabase,
  SiSpring,
} from "react-icons/si";
import { IoClose } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";

// Define the type for a single project
interface Project {
  title: string;
  description: string;
  image: string;
  tech: React.ReactNode[];
  liveLink?: string;
  codeLink?: string;
}

// Project Data
const projects: Project[] = [
  {
    title: "AI-Powered Code Snippets Manager",
    description:
      "An intelligent code snippet manager that uses AI to help you organize, find, and use your code snippets more effectively.",
    image: project1, // Placeholder image path
    tech: [
      <SiExpress key="express" />,
      <SiReact key="react" />,
      <SiTypescript key="typescript" />,
      <SiTailwindcss key="tailwind" />,
      <SiSupabase key="supabase" />,
      <SiGooglegemini key="googlegemini" />,
    ],
    codeLink: "https://github.com/Harshcode-develop/Code-Snippets-Manager.git",
    liveLink: "https://code-snippets-manager-sxc.vercel.app",
  },
  {
    title: "AI-Powered Movie Concierge",
    description:
      "An intelligent movie booking platform that uses AI to help you discover the latest films and reserve seats through intuitive, natural conversational experiences.",
    image: project2, // Placeholder image path
    tech: [
      <SiSpring key="spring" />,
      <SiReact key="react" />,
      <SiTypescript key="typescript" />,
      <SiTailwindcss key="tailwind" />,
      <SiSupabase key="supabase" />,
      <SiGooglegemini key="googlegemini" />,
    ],
    codeLink: "https://github.com/Harshcode-develop/Code-Snippets-Manager.git",
    liveLink: "https://code-snippets-manager-sxc.vercel.app",
  },

  {
    title: "AI Coffee Concierge",
    description:
      "An AI-powered coffee concierge website that helps users find and order the perfect brew based on their preferences.",
    image: project3, // Placeholder image path
    tech: [
      <SiReact key="react" />,
      <SiTypescript key="typescript" />,
      <SiTailwindcss key="tailwind" />,
      <SiGooglegemini key="googlegemini" />,
    ],
    liveLink: "https://harshcode-develop.github.io/AI-Coffee-Concierge/",
    codeLink:
      "https://github.com/Harshcode-develop/AI-Coffee-Concierge-Website.git",
  },

  {
    title: "Spotify Music Database ETL",
    description:
      "An ETL pipeline that extracts music data from Spotify, transforms it using Azure Databricks, and loads it into Azure SQL Database and visualizes it using Power BI.",
    image: project4, // Placeholder image path
    tech: [
      <SiPython key="python" />,
      <VscAzure key="azure" />,
      <SiDatabricks key="databricks" />,
    ],
    // liveLink: "#",
    codeLink: "https://github.com/Harshcode-develop/Spotify-Music-Data-ETL.git",
  },

  {
    title: "Toxic Comment Classifier",
    description:
      "A machine learning model that uses natural language processing to classify comments as toxic or non-toxic.",
    image: project5, // Placeholder image path
    tech: [
      <SiPython key="python" />,
      <SiDatabricks key="databricks" />,
      <SiTensorflow key="tensorflow" />,
    ],
    //liveLink: "#",
    codeLink:
      "https://github.com/Harshcode-develop/Toxic-Comment-Classifier.git",
  },

  {
    title: "FootBall Stadiums ETL",
    description:
      "An ETL pipeline that extracts foot ball stadiums data from web, transforms it using Azure Databricks, and loads it into Azure SQL Database and visualizes it using Power BI.",
    image: project6, // Placeholder image path
    tech: [
      <SiPython key="python" />,
      <VscAzure key="azure" />,
      <SiDatabricks key="databricks" />,
      <SiDocker key="docker" />,
      <SiApacheairflow key="apacheairflow" />,
    ],
    // liveLink: "#",
    codeLink:
      "https://github.com/Harshcode-develop/Football-Stadiums-Data-Analytics.git",
  },
];

interface ProjectCardProps extends Project {
  index: number;
  onImageClick: (image: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tech,
  liveLink,
  codeLink,
  index,
  onImageClick,
}) => (
  <div
    className={`flex flex-col ${
      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
    } gap-8 md:gap-12 mb-20 md:mb-16 items-center`}
  >
    {/* Image container */}
    <div className="w-full md:w-1/2">
      <div
        className="w-full h-[210px] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 cursor-pointer border border-transparent dark:border-white/20"
        onClick={() => onImageClick(image)}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
    <div className="w-full md:w-1/2 text-center">
      <h3 className="text-1xl font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed max-w-md mx-auto transition-colors duration-300">
        {description}
      </p>

      {/* Tech stack */}
      <div className="flex justify-center items-center gap-4 mb-6">
        {tech.map((techName, index) => (
          <span
            key={index}
            className="text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors duration-300"
          >
            {techName}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex justify-center items-center gap-6">
        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-800 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            Code <FaGithub />
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            Live Demo <FiExternalLink />
          </a>
        )}
      </div>
    </div>
  </div>
);

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section
      id="projects"
      className="py-12 md:py-24 bg-white dark:bg-gray-900 w-full transition-colors duration-300 relative"
    >
      <div className="container mx-auto max-w-4xl px-8 md:px-9">
        <div className="text-center md:text-left mb-12 md:mb-16">
          <h2 className="text-sm md:text-base font-bold text-blue-600 dark:text-blue-400 mb-2 transition-colors duration-300">
            PORTFOLIO
          </h2>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
            Each project is a unique piece of development 🧩
          </h3>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              index={index}
              onImageClick={openModal}
            />
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-opacity duration-300"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center">
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={closeModal}
            >
              <IoClose size={40} />
            </button>
            <img
              src={selectedImage}
              alt="Project Preview"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </div>
        </div>
      )}
    </section>
  );
}
