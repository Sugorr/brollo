import "./Project.css";
import Gear from "./Projects-Components/Gear";
import Plus from "./Projects-Components/Plus";
function Project() {
    return(
        <>
            <p className="Project-Title">Projects</p>
            <div className="Project-Container">
                <Gear />
                <Gear />
                <Plus />
            </div>
        </>
    )
}
export default Project;