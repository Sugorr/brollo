import "./AddCard.css";
import React, { useState } from 'react';
function AddCard() {
    const [editing, setEditing] = useState(false);
    const [word, setWord] = useState('Example word');
    const handleInputChange = (event) => {
        setWord(event.target.value);
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          setEditing(false);
        }
    };
    const handleEditClick = () => {
        setEditing(true);
    };
    const handleDragStart = (event) => {
        event.dataTransfer.setData("text/plain", JSON.stringify({ word }));
    };
    return (
        <>
            <div id="Add-Card-Section" draggable onDragStart={handleDragStart}>
                <div className="Add-Card-Container">
                    <div className="brollo-card">
                        {editing ? (
                            <input type="text" value={word} onChange={handleInputChange} 
                            onKeyDown={handleKeyDown} autoFocus />
                        ) : (
                            <p className="Handle-Edit-Word" onClick={handleEditClick}>{word}</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddCard;
