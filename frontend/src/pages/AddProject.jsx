import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectContext } from "../context/ProjectContext";

function AddProject() {

  const navigate = useNavigate();

  const { addProject } = useContext(ProjectContext);

  const [project, setProject] = useState({
    title: "",
    status: "Pending",
    deadline: ""
  });

  const handleChange = (e) => {

    setProject({
      ...project,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      project.title === "" ||
      project.deadline === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    addProject(project);

    alert("Project Added Successfully");

    navigate("/projects");

  };

  return (

    <div
      style={{
        width: "600px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        background: "#fff"
      }}
    >

      <h1>Add Project</h1>

      <form onSubmit={handleSubmit}>

        <label>Project Title</label>

        <br />

        <input
          type="text"
          name="title"
          value={project.title}
          onChange={handleChange}
          placeholder="Enter Project Title"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
            marginBottom: "15px"
          }}
        />

        <label>Status</label>

        <br />

        <select
          name="status"
          value={project.status}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
            marginBottom: "15px"
          }}
        >

          <option>Pending</option>

          <option>Running</option>

          <option>Completed</option>

        </select>

        <label>Deadline</label>

        <br />

        <input
          type="date"
          name="deadline"
          value={project.deadline}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
            marginBottom: "20px"
          }}
        />

        <button
          type="submit"
          style={{
            padding: "10px 25px",
            cursor: "pointer"
          }}
        >
          Add Project
        </button>

      </form>

    </div>

  );

}

export default AddProject;