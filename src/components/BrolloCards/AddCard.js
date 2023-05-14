import "./AddCard.css";
import React, { useState } from 'react';
function AddCard({ word, setWord, onDelete }) {
    const [editing, setEditing] = useState(false);
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
    const handleDragEnd = (event) => {
        const dropzone = event.target.closest('.Task-Cards-Content');
        if (dropzone) {
          event.target.parentNode.removeChild(event.target);
        }
    };
    const handleDeleteClick = () => {
        onDelete();
    };
    return (
        <>
            <div id="Add-Card-Section">
                <div className="Add-Card-Container" draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
                    <div className="brollo-card">
                        <i className="fa-solid fa-trash" onClick={handleDeleteClick}></i>
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
