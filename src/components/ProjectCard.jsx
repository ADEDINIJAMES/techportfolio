import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project, onEdit, onDelete }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white shadow rounded p-4 transition cursor-pointer"
    >
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>

      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="rounded w-full h-auto mb-4"
        />
      )}
      {project.video && (
        <video controls className="w-full rounded mb-4">
          <source src={project.video} type="video/mp4" />
        </video>
      )}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline block mb-4"
        >
          View Project
        </a>
      )}
    </motion.div>
  );
}
