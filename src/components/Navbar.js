import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
    return (
        <>  
            <div id="Home-Navbar-Section">
                <nav className="Home-Navbar navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <h3 className="Home-Brollo fw-bold">
                            <div className="Blue-Home-b">B</div>
                            <div className="Rollo-Home">rollo</div>
                        </h3>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center gap-2">
                            <li className="nav-item">
                                <Link to="/" className="Nav-Home nav-item text-decoration-none 
                                text-secondary">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/features" className="Nav-Features nav-item text-decoration-none 
                                text-secondary">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/pricing" className="Nav-Pricing nav-item text-decoration-none 
                                text-secondary">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/plans" className="Nav-Plans nav-item text-decoration-none 
                                text-secondary">Plans</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="Nav-Resources nav-item text-decoration-none 
                                text-secondary">Resources</Link>
                            </li>
                            <div className="Login-Get-Brollo">
                                <li className="nav-item">    
                                    <Link to="login" className="Nav-Login text-decoration-none">
                                    <i class="fa-solid fa-user"></i>Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="Nav-Get-Brollo text-decoration-none">
                                    Get Brollo</Link>
                                </li>
                            </div>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}
export default Navbar;