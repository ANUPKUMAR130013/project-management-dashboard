import { createContext, useState, useEffect } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {

  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("projects");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            title: "Hospital Management",
            status: "Running",
            deadline: "20 July",
            tasks: [
              {
                id: 1,
                title: "Login Page",
                status: "Completed",
              },
              {
                id: 2,
                title: "Dashboard",
                status: "Pending",
              },
            ],
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const addProject = (project) => {
    setProjects([
      ...projects,
      {
        ...project,
        id: Date.now(),
        tasks: [],
      },
    ]);
  };

 const updateProject = (id, updatedProject) => {
  setProjects(
    projects.map((project) => {
      if (project.id === id) {
        return {
          ...project,
          ...updatedProject,
        };
      }
      return project;
    })
  );
};

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const addTask = (projectId, task) => {
    setProjects(
      projects.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            tasks: [
              ...project.tasks,
              {
                ...task,
                id: Date.now(),
              },
            ],
          };
        }
        return project;
      })
    );
  };

  const deleteTask = (projectId, taskId) => {
    setProjects(
      projects.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            tasks: project.tasks.filter(
              (task) => task.id !== taskId
            ),
          };
        }
        return project;
      })
    );
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        addProject,
        updateProject,
        deleteProject,
        addTask,
        deleteTask,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};