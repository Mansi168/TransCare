import React from "react";
import styled from "styled-components";
import Library from '../../images/Library_image.jpg'
import CommunityForum from '../../images/forum.jpg'
import GovtPolicies from '../../images/policies.jpg'

const Services = styled.section`
  padding: 30px;
  padding-bottom: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFE3E1;

  @media screen and (max-width: 768px) {
    height: 1400px;
  }
  @media screen and (max-width: 992px) {
    height: 1200px;
  }
  @media screen and (max-width: 480px) {
    height: 1500px;
  }
`;

const Title = styled.h2`
  font-size: 42px;
  color: #000000;
  margin-bottom: 48px;
`;

const ServiceGrid = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 30px;

@media screen and (max-width: 1000px) {
  grid-template-columns: 1fr 1fr;
}
@media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
  padding: 0 20px;
}
`;

const ServiceCard = styled.div`
align-items: center;
display: flex;
background-color: #F5F0F0;
flex-direction: column;
justify-content: flex-start;
border-radius: 10px;
max-height: 380px;
padding: 30px;
box-shadow: 0 1px 3px gray;
color: var(--text-clr);
transition: all 0.2s ease-in-out;

&:hover {
  transform: scale(1.02);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
`;

const Image = styled.img`
height: 170px;
width: 180px;
margin-bottom: 10px;
border: 0.5px solid gray;
box-shadow: 3px 3px 3px gray;
`;

const Heading = styled.h3`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #000000;
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #000000;
  margin-bottom: 16px;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 18px;
  background-color: #000000;
  color: #F5F0F0;
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
        <ServiceCard>
          <Image src={Library} alt="Service Icon" />
          <Heading>TransBookshelf</Heading>
          <Paragraph>
          Empowering Trans voices through Knowledge , Stories and embracing Trans literacy.
          </Paragraph>
          <Button>Learn More</Button>
        </ServiceCard>
        <ServiceCard>
          <Image src={CommunityForum} alt="Service Icon" />
          <Heading>TransTalk </Heading>
          <Paragraph>
          Embrace Your Authentic Self,connecting Transgender Souls, Sharing Stories.
          </Paragraph>
          <Button>Learn More</Button>
        </ServiceCard>
        <ServiceCard>
          <Image src={GovtPolicies} alt="Service Icon" />
          <Heading>TransPolicy Hub</Heading>
          <Paragraph>
          Navigating Government Policies for Transgender Rights and Equality.
          </Paragraph>
          <Button>Learn More</Button>
        </ServiceCard>
      </ServiceGrid>
    </Services>
  );
};

export default ServicesSection;
