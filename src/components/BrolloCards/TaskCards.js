import { useState } from "react";
import "./TaskCards.css";
import AddCard from "./AddCard";
function TaskCards() {
    const [task, setTask] = useState(["PlusTask"]);
    const addTask = () => {
        setTask([...task, `PlusTask ${task.length + 1}`]);
    };
    const removeTask = () => {
        if (task.length > 0) {
            setTask(task.slice(0, -1));
        }
    };
    const handleDragOver = (event) => {
        event.preventDefault();
    };
    const handleDrop = (event) => {
        event.preventDefault();
        const data = JSON.parse(event.dataTransfer.getData("text/plain"));
        setTask([...task, data.word]);
    };
    return (
        <>
            <div id="Task-Cards-Section" onDragOver={handleDragOver} onDrop={handleDrop}>
                <div className="Task-Cards-Container">
                    <div className="Task-Cards-Content">
                        {task.map(task => (
                            <AddCard key={task}/>
                        ))}
                    </div>
                    <div className="Add-Remove-Task">
                        <div className="Add-Task">
                            <p onClick={addTask} className="Add-Card">
                                <i class="fa-solid fa-plus"></i>Add a card
                            </p>
                        </div>
                        <div className="Remove-Task">
                            <p className="Remove-Card" onClick={removeTask}>Remove</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TaskCards;
