import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary py-0">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold" href="#/"><span className="fw-bold fs-1 text-primary">B</span>rollo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center gap-2">
                            <li className="nav-item">
                                <Link to="/" className="nav-item text-decoration-none text-secondary">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/features" className="nav-item text-decoration-none text-secondary">Features</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/pricing" className="nav-item text-decoration-none text-secondary">Pricing</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/plans" className="nav-item text-decoration-none text-secondary">Plans</Link>
                            </li>

                        </ul>
                        <div className="d-flex gap-1">
                            <Link to="/signup" className="nav-item text-decoration-none text-white bg-primary rounded p-2">SignUp</Link>
                            <Link to="login" className="nav-item text-decoration-none text-white bg-primary rounded p-2">Login</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;