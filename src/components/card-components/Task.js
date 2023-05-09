function Task(props) {
    return (
        <>
            <div className='card'>
                <div className='card-body p-2 fs-6 d-flex justify-content-between'>
                    <input type="text" className="form-control focusedInput" id="inputText" autofocus="autofocus" />
                    <button className="p-0 m-0 btn" onClick={props.onBtnClick}>x</button>
                </div>
            </div>
        </>
    );
}


export default Task;