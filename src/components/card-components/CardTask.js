import { useState } from "react";
import Task from "./Task";


function CardTask() {
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        setTasks([...tasks, <Task onBtnClick={removeTask} />]);
    }

    const removeTask = (indexToRemove) => {
        setTasks(tasks.filter((_, index) => index !== indexToRemove));
    };

    return (
        <>
            <div className='container-fluid bg-white m-3' style={{ width: '16rem', 'overflow-y': 'auto' }}>
                <div className='card-body'>
                    <div className='card-title p-2 fs-3'> Task Title <button className="btn" onClick={addTask}>+</button></div>
                    <div>
                        {tasks.map((_, index) => (
                            <Task key={index} onBtnClick={() => removeTask(index)} />
                        ))}
                    </div>
                </div >
            </div >
        </>
    );
}

export default CardTask;