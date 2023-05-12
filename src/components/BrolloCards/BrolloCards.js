import { useState } from "react";
import "./BrolloCards.css";
import TaskCards from "./TaskCards";
const BrolloCards = () => {
    const [cards, setCards] = useState(["PlusCards"]);
    const addCards = () => {
        setCards([...cards, `PlusCards ${cards.length + 1}`]);
    };
    const removeCards = () => {
        if (cards.length > 0) {
            setCards(cards.slice(0, -1));
        }
    };
    return (
        <>
            <div id="Brollo-Cards-Section">
                <div className="Brollo-Cards-Container">
                    {cards.map(cards => (
                        <TaskCards key={cards} />
                    ))}
                    <div className="Add-Remove-Cards">
                        <p onClick={addCards} className="Add-Another-List">
                        <i class="fa-solid fa-plus"></i>Add another list</p>
                        <p onClick={removeCards} className="Remove-List">Remove card list</p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default BrolloCards;
