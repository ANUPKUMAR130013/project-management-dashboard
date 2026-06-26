import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="sidebar">
      <h2>PM Dashboard</h2>

      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/projects">Projects</Link>
        </li>

        <li>
          <Link to="/tasks">Tasks</Link>
        </li>

        <li>
          <Link to="/reports">Reports</Link>
        </li>

        <li>
          <Link to="/profile">Profile</Link>
        </li>

        <li onClick={logout} style={{ cursor: "pointer" }}>
          Logout
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;