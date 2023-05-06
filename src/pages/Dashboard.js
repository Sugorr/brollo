import React from 'react'
import Sidebar from '../components/dashboard-components/Sidebar/Sidebar';
import Projects from '../components/dashboard-components/Projects/Projects';
import Template from '../components/dashboard-components/Templates/Templates';
function Dashboard() {
    return (
        <>
          <Sidebar />
          <Template />
          <Projects />  
        </>
    );
}
export default Dashboard;