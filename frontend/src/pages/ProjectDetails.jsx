import { useContext, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ProjectContext } from "../context/ProjectContext";

function ProjectDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const { projects, addTask, deleteTask } = useContext(ProjectContext);

  const project = projects.find(
    (item) => item.id === Number(id)
  );

  const [taskTitle, setTaskTitle] = useState("");
  const [taskStatus, setTaskStatus] = useState("Pending");

  if (!project) {
    return (
      <div style={{ padding: "30px" }}>
        <h2>Project Not Found</h2>

        <button onClick={() => navigate("/dashboard")}>
          Back
        </button>
      </div>
    );
  }

  const handleAddTask = (e) => {

    e.preventDefault();

    if (taskTitle.trim() === "") {
      alert("Please Enter Task Name");
      return;
    }

    addTask(project.id, {
      title: taskTitle,
      status: taskStatus,
    });

    setTaskTitle("");
    setTaskStatus("Pending");

    alert("Task Added Successfully");

  };

  return (

    <div
      style={{
        padding: "30px",
        maxWidth: "1000px",
        margin: "auto"
      }}
    >

      <h1>{project.title}</h1>

      <hr />

      <h3>Status : {project.status}</h3>

      <h3>Deadline : {project.deadline}</h3>

      <br />

      <button
        onClick={() =>
          navigate(`/edit-project/${project.id}`)
        }
      >
        Edit Project
      </button>

      <br /><br />

      <h2>Add New Task</h2>

      <form onSubmit={handleAddTask}>

        <input
          type="text"
          placeholder="Enter Task Name"
          value={taskTitle}
          onChange={(e) =>
            setTaskTitle(e.target.value)
          }
          style={{
            width: "300px",
            padding: "10px"
          }}
        />

        <select
          value={taskStatus}
          onChange={(e) =>
            setTaskStatus(e.target.value)
          }
          style={{
            marginLeft: "10px",
            padding: "10px"
          }}
        >

          <option>Pending</option>

          <option>Running</option>

          <option>Completed</option>

        </select>

        <button
          type="submit"
          style={{
            marginLeft: "10px",
            padding: "10px 20px"
          }}
        >
          Add Task
        </button>

      </form>

      <br />

      <h2>Task List</h2>

      <table
        border="1"
        width="100%"
        cellPadding="10"
      >

        <thead>

          <tr>

            <th>Task Name</th>

            <th>Status</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {project.tasks.length === 0 ? (

            <tr>

              <td
                colSpan="3"
                align="center"
              >
                No Tasks Found
              </td>

            </tr>

          ) : (

            project.tasks.map((task) => (

              <tr key={task.id}>

                <td>{task.title}</td>

                <td>{task.status}</td>

                <td>

                  <button
                    onClick={() =>
                      deleteTask(project.id, task.id)
                    }
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

      <br />

      <Link to="/dashboard">

        <button>
          Dashboard
        </button>

      </Link>

      {" "}

      <Link to="/projects">

        <button>
          Projects
        </button>

      </Link>

    </div>

  );

}

export default ProjectDetails;