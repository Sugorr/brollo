import React from 'react'
import VecManPC from '../resources/vectors/vec-man-pc.PNG';

function WelcomePage() {
    return (
        <>  
            <div className='d-flex align-items-center flex-column'>
                <img alt='VecManPc' src={VecManPC}/>
                <p className='font-weight-light' style={{'font-size': '2.5rem'}}>Welcome to <span className='text-primary' style={{'font-size': '4rem', 'font-weight': '700'}}>B</span>rollo</p>
                <button className='btn btn-primary rounded-0 px-2 py-1'>- Go to Dashboard -</button>
            </div>
        </>
    );
}

export default WelcomePage;