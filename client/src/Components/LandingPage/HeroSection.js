import React from 'react';
import styled from 'styled-components';

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: #f7e8e8;
`;

const Heading = styled.h1`
  font-size: 48px;
  color: #6c567b;
  margin-bottom: 24px;
`;

const Subheading = styled.h2`
  font-size: 24px;
  color: #a96da3;
  margin-bottom: 48px;
`;

const HeroSection = () => {
  return (
    <Hero>
      <Heading>Welcome to Pastel Land!</Heading>
      <Subheading>A magical world of pastel colors</Subheading>
    </Hero>
  );
};

export default HeroSection;
