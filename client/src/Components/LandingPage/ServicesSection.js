import React from 'react';
import styled from 'styled-components';

const Services = styled.section`
  padding: 80px;
  background-color: #beb4cf;
`;

const Title = styled.h2`
  font-size: 32px;
  color: #6c567b;
  margin-bottom: 48px;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;

const ServiceBox = styled.div`
  padding: 24px;
  border: 1px solid #6c567b;
  border-radius: 8px;
`;

const Image = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
`;

const Heading = styled.h3`
  font-size: 24px;
  color: #6c567b;
  margin-bottom: 16px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #6c567b;
  margin-bottom: 16px;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 18px;
  background-color: #a96da3;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #6c567b;
  }
`;

const ServicesSection = () => {
  return (
    <Services>
      <Title>Our Services</Title>
      <ServiceGrid>
        <ServiceBox>
          <Image src="service-icon-1.png" alt="Service Icon" />
          <Heading>Service 1</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a ligula et nisl
            ultrices vestibulum ac a arcu.
          </Paragraph>
          <Button>Learn More</Button>
        </ServiceBox>
        <ServiceBox>
          <Image src="service-icon-2.png" alt="Service Icon" />
          <Heading>Service 2</Heading>
          <Paragraph>
            Sed eu lectus varius, dapibus nulla at, molestie odio. Maecenas id feugiat arcu.
          </Paragraph>
          <Button>Learn More</Button>
        </ServiceBox>
        <ServiceBox>
          <Image src="service-icon-3.png" alt="Service Icon" />
          <Heading>Service 3</Heading>
          <Paragraph>
            Quisque sit amet risus ut metus consectetur feugiat. Morbi facilisis justo ut
            cursus cursus.
          </Paragraph>
          <Button>Learn More</Button>
        </ServiceBox>
      </ServiceGrid>
    </Services>
  );
};

export default ServicesSection;
