import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Reports from "./pages/Reports";
import Profile from "./pages/Profile";
import AddProject from "./pages/AddProject";
import EditProject from "./pages/EditProject";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/projects" element={<Projects />} />

      <Route path="/project/:id" element={<ProjectDetails />} />

      <Route path="/tasks" element={<Tasks />} />

      <Route path="/reports" element={<Reports />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="/add-project" element={<AddProject />} />

      <Route path="/edit-project/:id" element={<EditProject />} />

    </Routes>
  );
}

export default App;