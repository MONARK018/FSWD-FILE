import React, { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Function to add a task
  const addTask = () => {
    if (newTask.trim() === "") return; // Prevent adding empty tasks
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  // Function to remove a task by index
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>
      <h1>To-Do List</h1>

      {/* Input & Add Button */}
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a task..."
          style={styles.input}
        />
        <button onClick={addTask} style={styles.button}>
          Add Task
        </button>
      </div>

      {/* Task List */}
      {tasks.length > 0 ? (
        <ul style={styles.list}>
          {tasks.map((task, index) => (
            <li key={index} style={styles.listItem}>
              {task}
              <button onClick={() => removeTask(index)} style={styles.deleteButton}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p style={styles.emptyMessage}>No tasks yet! Add a new task above. 📌</p>
      )}
    </div>
  );
}

// Simple inline styles for better appearance
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  input: {
    padding: "10px",
    marginRight: "10px",
    width: "250px",
    fontSize: "16px",
  },
  button: {
    padding: "10px 15px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "20px",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #ccc",
    fontSize: "18px",
  },
  deleteButton: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
  },
  emptyMessage: {
    fontSize: "18px",
    color: "#888",
    marginTop: "20px",
  },
};

export default TodoApp;
