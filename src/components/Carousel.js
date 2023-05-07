import React, { useState } from 'react';


// carousel-points btn active-point
export default function Carousel(){
    return (
        <>
            <div className='container-fluid p-5 d-flex flex-column'>
                <div className='carousel-container'>
                    <p>
                        [Brollo is] great  for simplyfing complex processes.
                        As a manager,
                        I can chunk [processes] down into bite-sized pieces for my team and then delegate that out,
                        but still keep a bird’s-eye view. 
                    </p>
                    <h1>
                        75% of orgranizations report that Brollo delivers value to their business within 30days.
                    </h1>
                    <div className='carousel-points-container'>
                        <button type='checkbox' className="carousel-points btn active-point"></button>
                        <button type='checkbox' className="carousel-points btn"></button>
                        <button type='checkbox' className="carousel-points btn"></button>
                        <div className='d-flex angle-btn'>
                            <button><i class="fa-solid btn fa-angle-left"></i></button>
                            <button><i class="fa-solid btn fa-angle-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}