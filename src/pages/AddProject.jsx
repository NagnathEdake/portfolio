import React, { useState } from "react";
import "../CSS/addproject.css";
import axios from "axios";
function AddProject() {
  const [file, setFile] = useState(null);
  const [project, setProject] = useState({
    title: "",
    description: "",
    url: "",
    liveDemo: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append(
        "project",

        new Blob([JSON.stringify(project)], { type: "application/json" }),
      );
      const res = await axios.post(
        "http://localhost:8080/api/project/add",
        formData,
      );
      alert("Project Added Successfully!");
      console.log(res);
      setProject({
        title: "",
        description: "",
        url: "",
        liveDemo: "",
      });
      setFile(null);
    } catch (error) {
      alert("Error Adding Project!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="add-project-section text-center">
      <h1 className="heading">Add Project</h1>
      <div className="container border border-outline rounded  mt-5">
        <form
          onSubmit={handleSubmit}
          method="post"
          className="d-flex flex-column gap-2 p-5"
        >
          <input
            type="text"
            name="title"
            placeholder="Your Title"
            className="input"
            value={project.title}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Your Description"
            className="input"
            value={project.description}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="url"
            placeholder="Github Url"
            className="input"
            value={project.url}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="liveDemo"
            placeholder="Live Demo Url"
            className="input"
            value={project.liveDemo}
            onChange={handleChange}
            required
          />
          <input
            type="file"
            placeholder="Image Src"
            className="input"
            // value={form.name}
            onChange={handleFileChange}
            required
          />
          <div className="mt-3">
            {!loading ? (
              <button type="submit" className="btn btn-outline-light p-3 ">
                Send Message
              </button>
            ) : (
              <button type="button" className="btn btn-outline-light p-3 ">
                Sending...
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddProject;
