import { useState } from "react";
import "./ListTodo.css";
function ListTodos() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editedTask, setEditedTask] = useState("");
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const startEditing = (index, task) => {
    setEditIndex(index);
    setEditedTask(task);
  };

  const saveEditedTask = () => {
    if (editedTask.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = editedTask;
      setTasks(updatedTasks);
      setEditIndex(null);
      setEditedTask("");
    }
  };

  function moveTaskUp() {}
  return (
    <div className="list-to-do">
      <div className="add-to-do">
        <input type="text" onChange={handleInputChange}></input>
        <button onClick={addTask} className="add-button">
          Add
        </button>
      </div>
      <div className="content">
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                  />
                  <button onClick={saveEditedTask}>Save</button>
                </>
              ) : (
                <>
                  <span className="text">{task}</span>
                  <button
                    className="delete-button"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                  <button
                    className="edit-button"
                    onClick={() => startEditing(index, task)}
                  >
                    Edit
                  </button>
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
export default ListTodos;
