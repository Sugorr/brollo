import Sidebar from "../Sidebar/Sidebar";
import "./DashboardNavbar.css";
function DashboardNavbar() {
    return (
        <>
            <div id="Dashboard-Navbar-Section">
                <div className="Navbar-Main-Container">
                    <div className="Navbar-Sidebar">
                        <Sidebar />
                    </div>
                    <div className="Navbar-Title">
                        <p className="Narbar-Blue-B">B</p>
                        <p className="Navbar-Rollo">rollo</p>
                    </div>
                    <div className="Navbar-Item">
                        <div className="dropdown">
                            <div className="dropdown-toggle" type="button" data-bs-toggle="dropdown" 
                                aria-expanded="false">
                                Workspaces
                            </div>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/#">Action</a></li>
                                <li><a className="dropdown-item" href="/#">Another action</a></li>
                                <li><a className="dropdown-item" href="/#">Something else here</a></li>
                            </ul>
                        </div>    
                        <div className="dropdown">
                            <div className="dropdown-toggle" type="button" data-bs-toggle="dropdown" 
                                aria-expanded="false">
                                Recent
                            </div>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/#">Action</a></li>
                                <li><a className="dropdown-item" href="/#">Another action</a></li>
                                <li><a className="dropdown-item" href="/#">Something else here</a></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <div className="dropdown-toggle" type="button" data-bs-toggle="dropdown" 
                                aria-expanded="false">
                                Starred
                            </div>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/#">Action</a></li>
                                <li><a className="dropdown-item" href="/#">Another action</a></li>
                                <li><a className="dropdown-item" href="/#">Something else here</a></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <div className="dropdown-toggle" type="button" data-bs-toggle="dropdown" 
                                aria-expanded="false">
                                Templates
                            </div>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/#">Action</a></li>
                                <li><a className="dropdown-item" href="/#">Another action</a></li>
                                <li><a className="dropdown-item" href="/#">Something else here</a></li>
                            </ul>
                        </div>
                        <div className="Navbar-Create-Container">
                            <p className="Navbar-Create">Create</p>
                        </div>
                        <div className="Navbar-Search">
                            <form className="d-flex" role="search">
                                <div>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                                <input className="form-control me-2" type="search" placeholder="Search" 
                                aria-label="Search"/>
                            </form>
                        </div>
                        <div className="Navbar-Icons-Container">
                            <i className="Navbar-Icons fa-solid fa-bell"></i>
                            <i className="Navbar-Icons fa-sharp fa-solid fa-question"></i>
                            <i className="Navbar-Icons fa-solid fa-circle-half-stroke"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DashboardNavbar;