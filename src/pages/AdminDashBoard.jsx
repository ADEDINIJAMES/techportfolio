import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectForm from "../components/projectForm";
import ProjectCard from "../components/projectCard";

export default function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("projects") || "[]");
    setProjects(saved);
  }, []);

  const saveProject = (project) => {
    if (project.id) {
      const updated = projects.map((p) => (p.id === project.id ? project : p));
      setProjects(updated);
      localStorage.setItem("projects", JSON.stringify(updated));
    } else {
      const newProject = { ...project, id: Date.now() };
      const updated = [...projects, newProject];
      setProjects(updated);
      localStorage.setItem("projects", JSON.stringify(updated));
    }
    setEditingProject(null);
  };

  const deleteProject = (id) => {
    const updated = projects.filter((p) => p.id !== id);
    setProjects(updated);
    localStorage.setItem("projects", JSON.stringify(updated));
  };

  return (
    <motion.div
      className="max-w-5xl mx-auto p-6 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Form Animation */}
      <motion.div
        key={editingProject ? editingProject.id : "new"}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <ProjectForm
          projectToEdit={editingProject}
          onSave={saveProject}
          onCancel={() => setEditingProject(null)}
        />
      </motion.div>

      {/* Cards Animation */}
      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        <AnimatePresence>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard
                project={project}
                onEdit={setEditingProject}
                onDelete={deleteProject}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
