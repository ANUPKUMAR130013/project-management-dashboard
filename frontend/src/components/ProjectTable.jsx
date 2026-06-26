import { Link } from "react-router-dom";

function ProjectTable({ projects, onDelete }) {
  return (
    <table className="table">

      <thead>

        <tr>
          <th>Title</th>
          <th>Status</th>
          <th>Deadline</th>
          <th>Action</th>
        </tr>

      </thead>

      <tbody>

        {projects.map((project) => (

          <tr key={project._id}>

            <td>{project.title}</td>

            <td>{project.status}</td>

            <td>
              {new Date(project.deadline).toLocaleDateString()}
            </td>

            <td>

              <Link to={`/edit-project/${project._id}`}>
                Edit
              </Link>

              {" | "}

              <button
                onClick={() => onDelete(project._id)}
                className="delete-btn"
              >
                Delete
              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>
  );
}

export default ProjectTable;