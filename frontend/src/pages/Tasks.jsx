function Tasks() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Tasks</h1>

      <button>Add Task</button>

      <table border="1" width="100%" cellPadding="10">

        <thead>

          <tr>

            <th>Task</th>

            <th>Status</th>

            <th>Priority</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>Create Login</td>

            <td>Completed</td>

            <td>High</td>

          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default Tasks;