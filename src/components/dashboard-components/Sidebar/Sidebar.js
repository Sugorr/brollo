import "./Sidebar.css";
function Sidebar() {
    return(
        <>  
            <div className="sidebar-btn" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                <i className="fa-solid fa-bars"></i>
            </div>  
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" 
                tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                       <div className="Blue-B">B</div>
                       <div className="Rollo">rollo</div>
                    </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="Side-Chest">Home</div>
                    <div  className="Side-Chest">Boards</div>
                    <div className="dropend">
                        <div className="Side-Chest-Toggle dropdown-toggle" 
                            data-bs-toggle="dropdown" aria-expanded="false" type="button">
                            Dropdown
                        </div>
                        <ul className="dropdown-menu">
                            <li><button className="dropdown-item" type="button">Engineering</button></li>
                            <li><button className="dropdown-item" type="button">Marketing</button></li>
                            <li><button className="dropdown-item" type="button">Sales</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sidebar;