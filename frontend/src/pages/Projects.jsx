import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectContext } from "../context/ProjectContext";

function Projects() {

  const navigate = useNavigate();

  const { projects, deleteProject } = useContext(ProjectContext);

  return (

    <div style={{ padding: "30px" }}>

      <h1>Projects</h1>

      <button
        onClick={() => navigate("/add-project")}
        style={{
          marginBottom: "20px",
          padding: "10px 20px"
        }}
      >
        Add Project
      </button>

      <table
        border="1"
        width="100%"
        cellPadding="10"
      >

        <thead>

          <tr>

            <th>Project</th>

            <th>Status</th>

            <th>Deadline</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {projects.map((project) => (

            <tr key={project.id}>

              <td
                style={{
                  color: "blue",
                  cursor: "pointer"
                }}
                onClick={() =>
                  navigate(`/project/${project.id}`)
                }
              >
                {project.title}
              </td>

              <td>{project.status}</td>

              <td>{project.deadline}</td>

              <td>

                <button
                  onClick={() =>
                    navigate(`/edit-project/${project.id}`)
                  }
                >
                  Edit
                </button>

                {" "}

                <button
                  onClick={() =>
                    deleteProject(project.id)
                  }
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default Projects;