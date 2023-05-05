import "./Sidebar.css";
function Sidebar() {
    return(
        <>
            <div className="sidebar-btn" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" 
                aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="staticBackdropLabel">
                       <div className="Blue-B">B</div>
                       <div className="Rollo">rollo</div>
                    </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="Side-Chest">Home</div>
                    <div  className="Side-Chest">Boards</div>
                    <div class="dropend">
                        <div class="Side-Chest-Toggle dropdown-toggle" 
                            data-bs-toggle="dropdown" aria-expanded="false" type="button">
                            Dropdown
                        </div>
                        <ul class="dropdown-menu">
                            <li><button class="dropdown-item" type="button">Engineering</button></li>
                            <li><button class="dropdown-item" type="button">Marketing</button></li>
                            <li><button class="dropdown-item" type="button">Sales</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sidebar;