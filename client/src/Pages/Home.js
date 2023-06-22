import React from 'react';
import Navbar from '../Components/LandingPage/Navbar';
import HeroSection from '../Components/LandingPage/HeroSection';
import ServicesSection from '../Components/LandingPage/ServicesSection';
import ContributorsSection from '../Components/LandingPage/ContributorsSection';

const Home = () => {
  return (
    <>
      <Navbar />
        <HeroSection />
        <ServicesSection />
        <ContributorsSection />
    </>
  )
}

export default Home;
