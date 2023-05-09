import React, { useState } from 'react';

export default function PowerHouse() {
  const [activeBoardIndex, setActiveBoardIndex] = useState(0);

  // Define an array of boards
  const boards = [
    'Brollo boards keep tasks organized and work moving forward. In a glance everything from “things to do” to “ aww yeah, we did it!”', 
    'Brollo boards keep tasks organized and work moving forward. In a glance everything from “things to do” to “ aww yeah, we did it!”', 
    'Brollo boards keep tasks organized and work moving forward. In a glance everything from “things to do” to “ aww yeah, we did it!”'
    ];

  // Define an array of carousel slide content
  const carouselSlides = [    {      id: 1,      text: 'Slide 1 content goes here',      statistic: 'Slide 1 statistic goes here'    },    {      id: 2,      text: 'Slide 2 content goes here',      statistic: 'Slide 2 statistic goes here'    },    {      id: 3,      text: 'Slide 3 content goes here',      statistic: 'Slide 3 statistic goes here'    }  ];

  // Define a function to handle clicking on the board buttons
  const handleBoardClick = (index) => {
    setActiveBoardIndex(index);
  };

  return (
    <>
      <div className="container-fluid p-5 powerhouse" style={{ color: '#1B2134' }}>
        <h5 className="mx-5 px-5 py-2">Brollo</h5>
        <h1 className="mx-5 px-5 py-2">A productivity powerhouse</h1>
        <h3 className="mx-5 px-5 py-2 w-75">
          Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who’s doing what and what needs to get done. Learn more in our guide for getting started.
        </h3>
        <div className="container-fluid px-5 m-5 d-flex">
          <div className="board-section">
            {/* Map through the board array and render a button for each board */}
            {boards.map((board, index) => (
                <button key={index} onClick={() => handleBoardClick(index)} className={`board ${index === activeBoardIndex ? 'board-selected' : ''}`}>
                    <h5>Boards</h5>
                    {board}
                </button>
            ))}
          </div>
          <div className="slide-section w-75">
            {/* Display the slide content corresponding to the active board index */}
            <div className="test">
              <p>{carouselSlides[activeBoardIndex].text}</p>
              <h1>{carouselSlides[activeBoardIndex].statistic}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
