import './pageStyles/HomeStyles.css';
import React from 'react'
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import PowerHouse from '../components/PowerHouse';
import Workflow from '../components/Workflow';
import Integration from '../components/Integration';
import Pricing from '../components/Pricing';
import GetStarted from '../components/GetStarted';
import Footer from '../components/Footer';

function Home() {

    return (
        <>
            {/* navbar section */}
            <Navbar />
            {/* hero banner section */}
            <HeroBanner />
            {/* powerhouse section */}
            <PowerHouse />
            {/* workflow section */}
            <Workflow />
            {/* integration section */}
            <Integration />
            {/* pricing section */}
            <Pricing />
            {/* get started section */}
            <GetStarted />
            {/* footer section */}
            <Footer />
        </>
    );
}

export default Home;