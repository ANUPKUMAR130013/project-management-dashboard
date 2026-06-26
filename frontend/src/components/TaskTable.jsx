function TaskTable({ tasks }) {
  return (
    <table className="table">

      <thead>

        <tr>

          <th>Task</th>

          <th>Status</th>

          <th>Priority</th>

          <th>Assigned To</th>

        </tr>

      </thead>

      <tbody>

        {tasks.map((task) => (

          <tr key={task._id}>

            <td>{task.title}</td>

            <td>{task.status}</td>

            <td>{task.priority}</td>

            <td>
              {task.assignedTo?.name || "Not Assigned"}
            </td>

          </tr>

        ))}

      </tbody>

    </table>
  );
}

export default TaskTable;