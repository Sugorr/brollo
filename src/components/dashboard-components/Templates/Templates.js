import TemplateProjects from "./Templates-Components/TemplateProjects";
import "./Templates.css";
function Template() {
    return(
        <>  
            <p className="Templates-Title">Templates</p>
            <div className="Templates-Container">
                <TemplateProjects />
                <TemplateProjects />
                <TemplateProjects />
            </div>
        </>
    )
}
export default Template;