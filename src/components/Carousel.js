import React, { useState } from 'react';


// carousel-points btn active-point
export default function Carousel(){
    const [activeIndex, setActiveIndex] = useState(0);

    // Define an array of carousel slide content
    const carouselSlides = [
      {
        id: 1,
        text: 'Brollo is great for simplifying complex processes. As a manager, I can chunk processes down into bite-sized pieces for my team and then delegate that out, but still keep a bird’s-eye view.',
        statistic: '75% of organizations report that Brollo delivers value to their business within 30 days.'
      },
      {
        id: 2,
        text: 'Another slide content goes here',
        statistic: 'Another statistic goes here'
      },
      {
        id: 3,
        text: 'Yet another slide content goes here',
        statistic: 'Yet another statistic goes here'
      }
    ];
  
    // Define a function to handle clicking on the angle buttons
    const handleAngleClick = (direction) => {
      if (direction === 'left') {
        setActiveIndex((activeIndex - 1 + carouselSlides.length) % carouselSlides.length);
      } else {
        setActiveIndex((activeIndex + 1) % carouselSlides.length);
      }
    };

    function skipCarousel(index){
        setActiveIndex((index) % carouselSlides.length);
    }
  
    return (
      <div className="container-fluid p-5 d-flex flex-column">
        <div className="carousel-container">
          <p>{carouselSlides[activeIndex].text}</p>
          <h1>{carouselSlides[activeIndex].statistic}</h1>
          <div className="carousel-points-container">
            {carouselSlides.map((slide, index) => (
              <div key={slide.id} onClick={() => skipCarousel(index)} className={`carousel-points btn ${index === activeIndex ? 'active-point' : ''}`}></div>
            ))}
            <div className="d-flex angle-btn">
              <button onClick={() => handleAngleClick('left')}><i className="fa-solid btn fa-angle-left"></i></button>
              <button onClick={() => handleAngleClick('right')}><i className="fa-solid btn fa-angle-right"></i></button>
            </div>
          </div>
        </div>
      </div>
    );
}