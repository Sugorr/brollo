import { useState } from "react";
import "./BrolloCards.css";
import TaskCards from "./TaskCards";
const BrolloCards = () => {
    const [cards, setCards] = useState(["PlusCards"]);
    const [newTitle, setNewTitle] = useState("");
    const addCards = () => {
        if (newTitle.trim() !== "") {
            setCards([...cards, newTitle]);
            setNewTitle("");
        }
    };
    const removeCards = () => {
        if (cards.length > 0) {
            setCards(cards.slice(0, -1));
        }
    };
    const handleTitleChange = (event) => {
        const newTitleValue = event.target.value;
        if (newTitleValue.length <= 15) { 
            setNewTitle(newTitleValue);
        }
    };
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            addCards();
        }
    };
    return (
        <>
            <div id="Brollo-Cards-Section">
                <div className="Brollo-Cards-Container">
                    {cards.map((cards, index) => (
                        <TaskCards key={index} title={cards}/>
                    ))}
                    <div className="Add-Remove-Cards">
                        <p className="Add-Another-List">
                            <input type="text" value={newTitle} 
                            onChange={handleTitleChange} onKeyPress={handleKeyPress}
                            placeholder="Enter title" />
                        </p>
                        <p onClick={removeCards} className="Remove-List">Remove card list</p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default BrolloCards;
