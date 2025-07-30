import React, { useState, useEffect } from "react";

export default function ProjectForm({ projectToEdit, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    video: "",
    link: "",
  });

  useEffect(() => {
    if (projectToEdit) {
      setFormData(projectToEdit);
    }
  }, [projectToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () =>
      setFormData({ ...formData, [type]: reader.result });
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({ title: "", description: "", image: "", video: "", link: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 bg-white shadow rounded p-4 space-y-4"
    >
      <input
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="border rounded p-2 w-full"
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="border rounded p-2 w-full"
        required
      />
      <input
        name="link"
        placeholder="Project Link"
        value={formData.link}
        onChange={handleChange}
        className="border rounded p-2 w-full"
      />
      <div>
        <label className="block font-semibold">Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileUpload(e, "image")}
        />
      </div>
      <div>
        <label className="block font-semibold">Upload Video</label>
        <input
          type="file"
          accept="video/*"
          onChange={(e) => handleFileUpload(e, "video")}
        />
      </div>
      <div className="flex space-x-2">
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Save
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
