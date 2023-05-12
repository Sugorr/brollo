import DashboardNavbar from '../components/dashboard-components/Dashboard-Navbar/DashboardNavbar';
import "./pageStyles/Workspace.css";
import SecondNavbarWorkspace from '../components/workspace-component/SecondNavbarWorkspace';
import BrolloCards from '../components/BrolloCards/BrolloCards';
import BrolloBackground from "../components/BrolloCards/BrolloImages/BrolloBackgroundImage.jpg";
function Workspace() {
    return (
        <>  
            <div id="Workspace-Section">
                <div className="Dashboard-SecondNavbar">
                    <DashboardNavbar />
                    <SecondNavbarWorkspace />
                </div>
                <div className="Brollo-Background-Image">
                    <img src={BrolloBackground} alt='BrolloBackground'/>
                </div>
                <BrolloCards />
            </div>
        </>
    );
}
export default Workspace;