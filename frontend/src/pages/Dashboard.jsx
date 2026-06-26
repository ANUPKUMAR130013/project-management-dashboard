import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";
import { ProjectContext } from "../context/ProjectContext";

function Dashboard() {

  const navigate = useNavigate();

  const { projects } = useContext(ProjectContext);

  const totalProjects = projects.length;

  const totalTasks = projects.reduce(
    (total, project) => total + project.tasks.length,
    0
  );

  const completedTasks = projects.reduce(
    (total, project) =>
      total +
      project.tasks.filter(
        (task) => task.status === "Completed"
      ).length,
    0
  );

  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="cards">

          <DashboardCard
            title="Total Projects"
            value={totalProjects}
          />

          <DashboardCard
            title="Total Tasks"
            value={totalTasks}
          />

          <DashboardCard
            title="Completed Tasks"
            value={completedTasks}
          />

          <DashboardCard
            title="Pending Tasks"
            value={pendingTasks}
          />

        </div>

        <div className="recent">

          <h2>Recent Projects</h2>

          <table border="1" width="100%" cellPadding="10">

            <thead>

              <tr>

                <th>Project</th>

                <th>Status</th>

                <th>Deadline</th>

              </tr>

            </thead>

            <tbody>

              {projects.map((project) => (

                <tr
                  key={project.id}
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    navigate(`/project/${project.id}`)
                  }
                >

                  <td>{project.title}</td>

                  <td>{project.status}</td>

                  <td>{project.deadline}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;