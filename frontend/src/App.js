import React, { useEffect, useState } from "react";
import "./App.css";
import TaskService from "./services/TaskService";

function App() {

    const [tasks, setTasks] = useState([]);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("Pending");
    const [priority, setPriority] = useState("Medium");
    const [dueDate, setDueDate] = useState("");

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = () => {
        TaskService.getAllTasks()
            .then((response) => {
                setTasks(response.data);
            })
            .catch((error) => console.log(error));
    };

    const addTask = () => {

        const task = {
            title,
            description,
            status,
            priority,
            dueDate,
            project: {
                id: 2
            }
        };

        TaskService.addTask(task)
            .then(() => {

                loadTasks();

                setTitle("");
                setDescription("");
                setStatus("Pending");
                setPriority("Medium");
                setDueDate("");

            })
            .catch((error) => console.log(error));
    };

    const deleteTask = (id) => {

        TaskService.deleteTask(id)
            .then(() => {
                loadTasks();
            })
            .catch((error) => console.log(error));
    };

    return (

        <div className="container">

            <h1>Task Tracker</h1>

            <div className="card">

                <input
                    type="text"
                    placeholder="Task Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    placeholder="Task Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                </select>

                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>

                <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />

                <button onClick={addTask}>
                    Add Task
                </button>

            </div>

            <table>

                <thead>

                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Due Date</th>
                    <th>Action</th>
                </tr>

                </thead>

                <tbody>

                {tasks.map((task) => (

                    <tr key={task.id}>

                        <td>{task.title}</td>

                        <td>{task.description}</td>

                        <td>{task.status}</td>

                        <td>{task.priority}</td>

                        <td>{task.dueDate}</td>

                        <td>

                            <button
                                className="deleteBtn"
                                onClick={() => deleteTask(task.id)}
                            >
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