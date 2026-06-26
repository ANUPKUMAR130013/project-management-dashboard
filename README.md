# 📊 Project Management Dashboard

A full-stack **Project Management Dashboard** built using the **MERN Stack (MongoDB, Express.js, React.js, and Node.js)**. This application helps users efficiently manage projects and tasks through a modern and user-friendly dashboard.

---

## 🚀 Features

* 🔐 User Authentication (Login & Register)
* 📊 Dashboard with project statistics
* 📁 Create, Edit, and Delete Projects
* ✅ Add, Update, and Delete Tasks
* 📈 Reports and Project Summary
* 👤 User Profile Management
* 📱 Responsive User Interface
* 💾 Data Persistence using MongoDB

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* CSS
* Vite

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs

---

## 📂 Project Structure

```
project-management-dashboard/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ✨ Main Modules

### Dashboard

* View total projects
* View total tasks
* Completed tasks summary
* Pending tasks summary
* Recent projects list

### Projects

* Add new project
* Edit project details
* Delete project
* View project information

### Tasks

* Add tasks
* Update task status
* Delete tasks
* Track task progress

### Reports

* Project summary
* Task summary
* Completion percentage
* Overall project statistics

### Profile

* View profile information
* Update profile details

---

# 📡 API Endpoints

## Authentication

```
POST /api/auth/register
POST /api/auth/login
```

## Projects

```
GET    /api/projects
POST   /api/projects
PUT    /api/projects/:id
DELETE /api/projects/:id
```

## Tasks

```
GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id
```

---

# ⚙️ Installation

## Clone the Repository

```bash
git clone https://github.com/ANUPKUMAR130013/project-management-dashboard.git
```

Move into the project directory:

```bash
cd project-management-dashboard
```

---

## Install Backend Dependencies

```bash
cd backend
npm install
```

---

## Install Frontend Dependencies

Open another terminal and run:

```bash
cd frontend
npm install
```

---

## Run the Backend

```bash
npm run dev
```

---

## Run the Frontend

```bash
npm run dev
```

---

# 📷 Application Pages

* Login
* Register
* Dashboard
* Projects
* Tasks
* Reports
* Profile

---

# 📦 Major Dependencies

### Backend

* Express.js
* Mongoose
* JWT
* bcryptjs
* CORS
* Nodemon

### Frontend

* React
* React Router DOM
* Axios
* Vite

---

# 🎯 Future Enhancements

* Team Collaboration
* Role-Based Access Control
* File Upload Support
* Email Notifications
* Calendar Integration
* Analytics Dashboard
* Dark Mode
* Real-Time Task Updates

---

# 👨‍💻 Author

**Anup Kumar**

B.Tech – Information Technology

Rajkiya Engineering College, Banda

---

# 📄 License

This project is developed for educational and learning purposes.
