import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";
import "../styles/login.css";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Employee",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {

      await API.post("/auth/register", formData);

      alert("Registration Successful");

      navigate("/");

    } catch (error) {

      alert(error.response?.data?.message || "Registration Failed");

    }
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h1>Project Management Dashboard</h1>

        <h2>Create Account</h2>

        <form onSubmit={handleRegister}>

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            required
          />

          <select
            name="role"
            onChange={handleChange}
          >
            <option>Employee</option>
            <option>Manager</option>
            <option>Admin</option>
          </select>

          <button type="submit">
            Register
          </button>

        </form>

        <p>
          Already have an account?
          <Link to="/"> Login</Link>
        </p>

      </div>

    </div>
  );
}

export default Register;