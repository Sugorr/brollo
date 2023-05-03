import React, { useState } from 'react'
import CardTask from '../components/card-components/CardTask';

function Workspace() {
    const [tasks, setTasks] = useState([]);

    function addNewTask(){
        console.log('add tasks')
    }

    return (
        <>  
            {/* workspace navbar */}
            <div className='navbar bg-primary px-5'>
                <button className='btn btn-dark text-white'>Menu</button>
                <input type='text' className='form-control w-25 bg-dark text-center text-white' style={{'font-weight': '700'}} value={'Sample Task Title'}/>
                <div>
                    <button className='btn btn-dark text-white mx-2'>teams</button>
                    <button className='btn btn-dark text-white mx-2'>share</button>
                    <button className='btn btn-dark text-white mx-2'>log</button>
                </div>
            </div>
            
            {/* workspace cards */}
            <div className='fluid-container d-flex bg-secondary p-3 flex-start' style={{height: '100vh'}}>
                <div className='d-flex bg-secondary p-3 flex-start'>
                    <CardTask/>
                    <CardTask/>
                    <CardTask/>
                </div>
                <button className='btn btn-primary' onClick={addNewTask}>Add New Task</button>
            </div>
        </>
    );
}

export default Workspace;