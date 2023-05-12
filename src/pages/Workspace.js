import DashboardNavbar from '../components/dashboard-components/Dashboard-Navbar/DashboardNavbar';
import "./pageStyles/Workspace.css";
import SecondNavbarWorkspace from '../components/workspace-component/SecondNavbarWorkspace';
import BrolloCards from '../components/BrolloCards/BrolloCards';
function Workspace() {
    return (
        <>  
            <div id="Workspace-Section">
                <div className="Dashboard-SecondNavbar">
                    <DashboardNavbar />
                    <SecondNavbarWorkspace />
                </div>
                <BrolloCards />
            </div>
        </>
    );
}
export default Workspace;