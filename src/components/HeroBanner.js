import { Link } from 'react-router-dom';
import sidePic from '../resources/subpics/home-side-pic.png'

export default function HeroBanner(){
    return (
        <>
            <div className='container-fluid d-flex justify-content-evenly hero-banner'>
                <div className='left-section w-50 text-white p-5'>
                    <h1 className='mx-5 py-3'>Brollo brings all your  tasks, teammates, and tools together</h1>
                    <h3 className='mx-5 py-5'>Keep everything in the same place—even if your team isn’t.</h3>
                    <form className='d-flex align-items-center justify-content-start mx-5 gap-3'>
                        <Link to={'/signup'}><button className='btn btn-primary'>Sign Up For Free</button></Link>
                        <input className='form-control h-50 w-50' type='email' placeholder='Enter your email'/>
                    </form>
                </div>
                <div>
                    <img className='p-5 m-5' alt='side-pic.png' src={sidePic}/>
                </div>
            </div>
        </>
    );
}