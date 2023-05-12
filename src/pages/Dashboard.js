import React from 'react'
import Projects from '../components/dashboard-components/Projects/Projects';
import Template from '../components/dashboard-components/Templates/Templates';
import "./pageStyles/Dashboard.css";
import DashboardNavbar from '../components/dashboard-components/Dashboard-Navbar/DashboardNavbar';
function Dashboard() {
  return (
    <>
      {/* <p className="UserName">Hi, UserName</p> */}
      {/* <p className="Welcome">Welcome to your dashboard.</p> */}
      <div id="Dashboard-Section">
        <div className="DashBoard-Navbar">
          <DashboardNavbar />
        </div>
        <div className="Dashboard-Projects">
          <Projects />
        </div>
        <div className="Dashboard-Template">
          <Template />
        </div>
      </div>
    </>
  );
}
export default Dashboard;