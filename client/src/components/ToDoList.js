import React, { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';
import ToDo from './ToDo'

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    useEffect(() => {
        fetch("http://localhost:8000/api")
            .then((res) => res.json())
            .then((data) => setTasks(data));
    }, []);

    function addToList(taskText) {
        tasks.push({ taskText, key: uuid() })
        setTasks([...tasks])
    }

    function deleteFromList(key) {
        const deletedTask = tasks.filter(task => task.key !== key)
        setTasks([...deletedTask])
    }

    function editTask(taskToEdit, key) {
        const newTasksList = tasks.filter(task => task.key !== key)
        newTasksList.push({ taskToEdit, key })
        setTasks([...newTasksList])
    }

    const taskComponentList = tasks.map((task) => (
        <ToDo
            key={task.key}
            text={task.taskText}
            deleteFromList={deleteFromList}
            taskKey={task.key}
            editTask={editTask}
        />
    ))

    return (
        <div>
            <div>
                <input type="text" onChange={(e) => setTaskInput(e.target.value)} />
                <button onClick={() => addToList(taskInput)}>Add Task</button>
            </div>
            <div>Number of tasks: {tasks.length}</div>
            {taskComponentList}
        </div>
    )
}

export default ToDoList;