import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

function Reports() {

  const { projects } = useContext(ProjectContext);

  const totalProjects = projects.length;

  const totalTasks = projects.reduce(
    (sum, project) => sum + project.tasks.length,
    0
  );

  const completedTasks = projects.reduce(
    (sum, project) =>
      sum +
      project.tasks.filter(
        (task) => task.status === "Completed"
      ).length,
    0
  );

  const pendingTasks = totalTasks - completedTasks;

  const runningProjects = projects.filter(
    (project) => project.status === "Running"
  ).length;

  const completedProjects = projects.filter(
    (project) => project.status === "Completed"
  ).length;

  const pendingProjects = projects.filter(
    (project) => project.status === "Pending"
  ).length;

  const completion =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  return (

    <div style={{ padding: "30px" }}>

      <h1>Project Reports</h1>

      <hr />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          marginTop: "25px"
        }}
      >

        <div style={cardStyle}>
          <h2>{totalProjects}</h2>
          <p>Total Projects</p>
        </div>

        <div style={cardStyle}>
          <h2>{totalTasks}</h2>
          <p>Total Tasks</p>
        </div>

        <div style={cardStyle}>
          <h2>{completedTasks}</h2>
          <p>Completed Tasks</p>
        </div>

        <div style={cardStyle}>
          <h2>{pendingTasks}</h2>
          <p>Pending Tasks</p>
        </div>

        <div style={cardStyle}>
          <h2>{runningProjects}</h2>
          <p>Running Projects</p>
        </div>

        <div style={cardStyle}>
          <h2>{completedProjects}</h2>
          <p>Completed Projects</p>
        </div>

      </div>

      <br />

      <h2>Overall Progress</h2>

      <div
        style={{
          width: "100%",
          height: "30px",
          background: "#ddd",
          borderRadius: "10px"
        }}
      >

        <div
          style={{
            width: completion + "%",
            height: "100%",
            background: "green",
            borderRadius: "10px",
            color: "white",
            textAlign: "center",
            lineHeight: "30px"
          }}
        >
          {completion}%
        </div>

      </div>

      <br />

      <h2>Project Summary</h2>

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

            <th>Total Tasks</th>

          </tr>

        </thead>

        <tbody>

          {projects.map((project) => (

            <tr key={project.id}>

              <td>{project.title}</td>

              <td>{project.status}</td>

              <td>{project.deadline}</td>

              <td>{project.tasks.length}</td>

            </tr>

          ))}

        </tbody>

      </table>

      <br />

      <h2>Project Status</h2>

      <table
        border="1"
        width="60%"
        cellPadding="10"
      >

        <tbody>

          <tr>

            <td>Total Projects</td>

            <td>{totalProjects}</td>

          </tr>

          <tr>

            <td>Running Projects</td>

            <td>{runningProjects}</td>

          </tr>

          <tr>

            <td>Completed Projects</td>

            <td>{completedProjects}</td>

          </tr>

          <tr>

            <td>Pending Projects</td>

            <td>{pendingProjects}</td>

          </tr>

        </tbody>

      </table>

    </div>

  );

}

const cardStyle = {
  background: "#f4f4f4",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0 0 10px rgba(0,0,0,0.2)"
};

export default Reports;