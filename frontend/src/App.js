import React, { useEffect, useState } from "react";
import TaskService from "./services/TaskService";

function App() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = () => {
        TaskService.getTasks().then((response) => {
            setTasks(response.data);
        });
    };

    const addTask = () => {
        const task = { title, description, status };

        TaskService.createTask(task).then(() => {
            loadTasks();
            setTitle("");
            setDescription("");
            setStatus("");
        });
    };

    const deleteTask = (id) => {
        TaskService.deleteTask(id).then(() => {
            loadTasks();
        });
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Task Tracker</h1>

            <h3>Add New Task</h3>

            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br /><br />

            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <br /><br />

            <input
                type="text"
                placeholder="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            />
            <br /><br />

            <button onClick={addTask}>Add Task</button>

            <hr />

            <table border="1" cellPadding="10">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                {tasks.map((task) => (
                    <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                        <td>{task.status}</td>
                        <td>
                            <button onClick={() => {
                                const newTitle = prompt("Enter new title", task.title);
                                const newDescription = prompt("Enter new description", task.description);
                                const newStatus = prompt("Enter new status", task.status);

                                const updatedTask = {
                                    title: newTitle,
                                    description: newDescription,
                                    status: newStatus
                                };

                                TaskService.updateTask(task.id, updatedTask)
                                    .then(() => loadTasks());
                            }}>
                                Edit
                            </button>

                            <button onClick={() => deleteTask(task.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    );
}

export default App;