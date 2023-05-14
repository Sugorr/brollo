import { useState } from "react";
import "./TaskCards.css";
import AddCard from "./AddCard";
function TaskCards(props) {
    const [task, setTask] = useState(["Add a card"]);
    const [editingTitle, setEditingTitle] = useState(false);
    const [title, setTitle] = useState(props.title);
    const addTask = () => {
        setTask([...task, `Add a card ${task.length + 1}`]);
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
    const handleTitleInputChange = (event) => {
        setTitle(event.target.value);
    };
    const handleTitleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setEditingTitle(false);
        }
    };
    const handleTitleClick = () => {
        setEditingTitle(true);
    };
    const handleTitleBlur = () => {
        setEditingTitle(false);
    };
    return (
        <>
            <div id="Task-Cards-Section" onDragOver={handleDragOver} onDrop={handleDrop}>
                <div className="Task-Cards-Container">
                    <div className="Task-Cards-Header">
                        {editingTitle ? (
                            <input type="text" value={title} onChange={handleTitleInputChange} 
                            onKeyDown={handleTitleKeyDown} onBlur={handleTitleBlur} autoFocus />
                        ) : (
                            <p onClick={handleTitleClick}>{title}</p>
                        )}
                    </div>
                    <div className="Task-Cards-Content" style={{ overflowY: 'scroll', maxHeight: '500px' }}>
                        {task.map((_, index) => (
                            <AddCard key={index} word={task[index]} setWord={(newWord) => {
                                const newTask = [...task];
                                newTask[index] = newWord;
                                setTask(newTask);
                            }}onDelete={() => removeTask(index)}/>
                        ))}
                    </div>
                    <div className="Add-Remove-Task">
                        <div className="Add-Task">
                            <p onClick={addTask} className="Add-Card">
                                <i class="fa-solid fa-plus"></i>Add a card
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TaskCards;
