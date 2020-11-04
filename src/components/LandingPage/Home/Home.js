import React from 'react';
import About from '../About/About';
import BannerSection from '../BannerSection/BannerSection';
import Clients from '../Clients/Clients';
import ContactUS from '../ContactUs/ContactUS';
import Projects from '../Project/Projects';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import TopNav from '../TopNav/TopNav';

const Home = () => {
    return (
        <>
            <TopNav/>
            <BannerSection/>
            <About/>
            <Services/>
            <Projects />
            <Testimonial/>
            <Clients />
            <ContactUS/>
        </>
    );
};

export default Home;