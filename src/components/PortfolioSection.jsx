import { motion } from "framer-motion";
import ProjectSlider from "./ProjectSlider";
import { useEffect, useState } from "react";
import sampleProjects from "../data/projects.json";
import React from "react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function PortfolioSection() {
  const [projects, setProjects] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("projects") || "[]");
    setProjects(saved.length ? saved : sampleProjects);
  }, []);

  if (!projects.length) return null;
  const project = projects[activeIndex];

  return (
    <section
      id="portfolio"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Work
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <ProjectSlider project={project} />
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800/80 backdrop-blur-md shadow-lg rounded-xl p-8 mt-8 transition-colors"
            variants={fadeInUp}
          >
            <h3 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {project.description}
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                View Project &rarr;
              </a>
            )}
          </motion.div>

          <motion.div className="flex justify-between mt-6" variants={fadeInUp}>
            <button
              onClick={() =>
                setActiveIndex((prev) =>
                  prev === 0 ? projects.length - 1 : prev - 1
                )
              }
              className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 shadow transition-colors"
            >
              Previous
            </button>
            <button
              onClick={() =>
                setActiveIndex((prev) => (prev + 1) % projects.length)
              }
              className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 shadow transition-colors"
            >
              Next
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
