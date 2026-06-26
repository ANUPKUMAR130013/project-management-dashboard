import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProjectContext } from "../context/ProjectContext";

function EditProject() {

  const { id } = useParams();

  const navigate = useNavigate();

  const { projects, updateProject } = useContext(ProjectContext);

  const project = projects.find(
    (item) => item.id === Number(id)
  );

  const [title, setTitle] = useState(
    project ? project.title : ""
  );

  const [status, setStatus] = useState(
    project ? project.status : "Pending"
  );

  const [deadline, setDeadline] = useState(
    project ? project.deadline : ""
  );

  if (!project) {
    return (
      <div style={{ padding: "30px" }}>
        <h2>Project Not Found</h2>
      </div>
    );
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    if (title === "" || deadline === "") {
      alert("Please fill all fields");
      return;
    }

    updateProject(project.id, {
      title,
      status,
      deadline,
    });

    alert("Project Updated Successfully");

    navigate("/projects");

  };

  return (

    <div
      style={{
        width: "600px",
        margin: "40px auto",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "25px",
      }}
    >

      <h1>Edit Project</h1>

      <form onSubmit={handleSubmit}>

        <label>Project Title</label>

        <br />

        <input
          type="text"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
        />

        <label>Status</label>

        <br />

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
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
          value={deadline}
          onChange={(e) =>
            setDeadline(e.target.value)
          }
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "10px 20px",
          }}
        >
          Update Project
        </button>

      </form>

    </div>

  );

}

export default EditProject;