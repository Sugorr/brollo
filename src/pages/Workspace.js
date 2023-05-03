import React from 'react'
import CardTask from '../components/card-components/CardTask';

function Workspace() {
    return (
        <>  
            {/* workspace navbar */}
            <div className='navbar bg-primary px-5'>
                <button className='btn btn-dark text-white'>Menu</button>
                <div>Title</div>
                <div>
                    <div>teams</div>
                    <div>share</div>
                    <div>log</div>
                </div>
            </div>
            
            {/* workspace cards */}
            <div className='fluid-container d-flex bg-secondary p-3 flex-start' style={{height: '100vh'}}>
                <div className='d-flex bg-secondary p-3 flex-start'>
                    <CardTask/>
                    <CardTask/>
                    <CardTask/>
                </div>
                <button className='btn btn-primary'>Add New Task</button>
            </div>
        </>
    );
}

export default Workspace;