import React from 'react';
import Navbar from '../Components/LandingPage/Navbar';
import HeroSection from '../Components/LandingPage/HeroSection';
import ServicesSection from '../Components/LandingPage/ServicesSection';
import ContributorsSection from '../Components/LandingPage/ContributorsSection';
import Footer from '../Components/LandingPage/Footer';

const Home = () => {
  return (
    <>
     
        <HeroSection />
        <ServicesSection />
        <ContributorsSection />
        <Footer />
    </>
  )
}

export default Home;
