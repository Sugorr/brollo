import "./Project.css";
function Project() {
    return(
        <>
            <p className="Project-Title">Projects</p>
            <div className="First-Project-Body">
                <div className="Project-Gear First-Gear">
                    <i className="fa-solid fa-gear"></i>
                    <p className="Database-Project">Database Project</p>
                </div>
                <div className="Project-Gear Second-Gear">
                    <i className="fa-solid fa-gear"></i>
                    <p className="Database-Project">Database Project</p>
                </div>
                <div className="Project-Gear Third-Gear">
                    <i className="fa-solid fa-gear"></i>
                    <p className="Database-Project">Database Project</p>
                </div>
            </div>
            <div className="Second-Project-Body">
                <div className="Project-Gear First-Gear">
                    <i className="fa-solid fa-gear"></i>
                    <p className="Database-Project">Database Project</p>
                </div>
                <div className="Project-Gear Second-Gear">
                    <i className="fa-solid fa-gear"></i>
                    <p className="Database-Project">Database Project</p>
                </div>
                <div className="Project-Plus Third-Plus">
                    <i className="fa-solid fa-plus"></i>
                    <p className="Database-Project">Database Project</p>
                </div>
            </div>
        </>
    )
}
export default Project;