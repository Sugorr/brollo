import './pageStyles/HomeStyles.css';
import React from 'react'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import sidePic from '../resources/subpics/home-side-pic.png'

function Home() {
    return (
        <>
            <Navbar />
            <div className='container-fluid d-flex justify-content-evenly hero-banner'>
                <div className='left-section w-50 text-white p-5'>
                    <h1 className='mx-5 py-3'>Brollo brings all your  tasks, teammates, and tools together</h1>
                    <h3 className='mx-5 py-5'>Keep everything in the same place—even if your team isn’t.</h3>
                    <form className='d-flex mx-5 gap-3'>
                        <Link to={'/signup'}><button className='btn btn-primary'>Sign Up For Free</button></Link>
                        <input className='form-control h-50 w-50' type='email' placeholder='Enter your email'/>
                    </form>
                </div>
                <div>
                    <img className='p-5 m-5' alt='side-pic.png' src={sidePic}/>
                </div>
            </div>

            <div className='container-fluid p-5 powerhouse' style={{color: '#1B2134'}}>
                <h5 className='mx-5 px-5 py-2'>Brollo</h5>
                <h1 className='mx-5 px-5 py-2'>A productivity powerhouse</h1>
                <h3 className='mx-5 px-5 py-2 w-75'>
                    Simple, flexible, and powerful.
                    All it takes are boards, lists,
                    and cards to get a clear view of who’s doing what and what needs to get done.
                    Learn more in our guide for getting started.
                </h3>
                <div className='container-fluid px-5 m-5 d-flex'>
                    <div className='board-section'>
                        <div className='board board-selected'>Board 1</div>
                        <div className='board'>Board 2</div>
                        <div className='board'>Board 3</div>
                    </div>
                    <div className='slide-section w-75'>
                        <div className='test'></div>
                    </div>
                </div>
            </div>

            <div className='container-fluid p-5 d-flex flex-column'>
                <h5 className='mx-5 px-5 py-2'>Brollo in action</h5>
                <h1 className='mx-5 px-5 py-2'>Workflows for any project, big or small</h1>
                <div className='container-fluid d-flex justify-content-evenly'>
                    <div className='action-box'>
                        <h4>Project management</h4>
                        <h5>Keep tasks in order, deadlines on track, and team members aligned with Brollo.</h5>
                    </div>
                    <div className='action-box'>
                        <h4>Project management</h4>
                        <h5>Keep tasks in order, deadlines on track, and team members aligned with Brollo.</h5>
                    </div>
                    <div className='action-box'>
                        <h4>Project management</h4>
                        <h5>Keep tasks in order, deadlines on track, and team members aligned with Brollo.</h5>
                    </div>
                </div>
                <div className='container-fluid- d-flex justify-content-evenly my-5 py-3'>
                    <h4 className='w-75'>
                        No need to start from scratch. Jump-start your workflow with a proven playbook designed for different teams. Customize it to make it yours.
                    </h4>
                    <button className='btn explore-cases h-50'>Explore all cases</button>
                </div>
            </div>
        </>
    );
}

export default Home;