import React, { useState } from "react";
import ProjectCard from "./projectCard";
import ProjectForm from "./projectForm";

export default function AdminPage() {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);

  const handleSave = (project) => {
    if (project.id) {
      setProjects(projects.map((p) => (p.id === project.id ? project : p)));
    } else {
      project.id = Date.now();
      setProjects([...projects, project]);
    }
    setEditingProject(null);
  };

  const handleDelete = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>
      <ProjectForm
        projectToEdit={editingProject}
        onSave={handleSave}
        onCancel={() => setEditingProject(null)}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onEdit={setEditingProject}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
