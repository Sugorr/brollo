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
      <DashboardNavbar />
      <div className="Dashboard-Projects">
        <Projects />
      </div>
      <div className="Dashboard-Template">
        <Template />
      </div>
    </>
  );
}
export default Dashboard;