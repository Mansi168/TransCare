import React from 'react';
import styled from 'styled-components';

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: #d4afb9;
`;

const Heading = styled.h1`
  font-size: 48px;
  color: #F5F0F0;
  margin-bottom: 0px;
`;

const Subheading = styled.h2`
  font-size: 24px;
  color: #F5F0F0;
  margin-bottom: 48px;
`;

const HeroSection = () => {
  return (
    <Hero>
      <Heading>TransCare</Heading>
      <Subheading>Trans rights are human rights, inclusion is our commitment.</Subheading>
    </Hero>
  );
};

export default HeroSection;
