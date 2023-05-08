import { useState } from "react";
import "./Plus.css";
import SoloGear from "./SoloGear";
function Plus() {
    const [plus, setPlus] = useState(['Plus']);
    const addGear = () => {
        setPlus([...plus, `Plus ${plus.length + 1}`]);
    };
    const removeGear = () => {
        if (plus.length > 0) {
            setPlus(plus.slice(0, -1));
        }
    };
    return(
        <>  
            <div className="SoloGear-Container">
                {plus.map(plus => (
                    <SoloGear key={plus}/>
                ))}
                <div className="Plus-Container"> 
                    <div className="btn add-project-btn">
                        <i onClick={addGear} className="fa-solid fa-plus"></i>
                        <p className="New-Project">New Project</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Plus;