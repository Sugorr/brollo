import React from 'react'
import Sidebar from '../components/dashboard-components/Sidebar/Sidebar';
import Projects from '../components/dashboard-components/Projects/Projects';
import Template from '../components/dashboard-components/Templates/Templates';
import "./pageStyles/Dashboard.css";
function Dashboard() {
  return (
    <>
      <p className="UserName">Hi, UserName</p>
      <p className="Welcome">Welcome to your dashboard.</p>
      <Sidebar />
      <div className="Dashboard-Template">
        <Template />
      </div>
      <div className="Dashboard-Projects">
        <Projects />
      </div>
    </>
  );
}
export default Dashboard;