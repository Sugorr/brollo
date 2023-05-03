import Task from "./Task";


function CardTask(){
    return (
        <>
            <div className='card m-3' style={{width: '16rem', height: '16rem'}}>
                <div className='card-body'>
                    <div className='card-title p-2 fs-3'> Task Title </div>
                    <div>
                        <Task/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardTask;