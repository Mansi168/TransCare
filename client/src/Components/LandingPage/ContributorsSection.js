import React from 'react';
import styled from 'styled-components';
import Sneha from '../../images/Contributor-1.png';
import Monalika from '../../images/Contributor-2.png'
import Mansi from '../../images/contributor-3.jpg'
import Kashish from '../../images/Contributor-4.jpeg'



const Contributors = styled.section`
  padding: 30px;
  background-color: #FFD1D1;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 42px;
  color: #000000;
  margin-bottom: 48px;
`;

const ContributorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: auto;
  gap: 24px;
`;

const ContributorBox = styled.div`
  padding: 14px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  background-color: #ffffff;
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 250px;
  height: 180px;
  margin: 5px;
`;

const Heading = styled.h3`
  font-size: 24px;
  color: #000000;
  margin: auto;
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #000000;
  margin: auto;
`;


const ContributorsSection = () => {
  return (
    <Contributors>
      <Title>Contributors</Title>
      <ContributorGrid>
        <ContributorBox>
          <Image src={Sneha} />
          <Heading>SNEHA CHAUHAN</Heading>
          <Paragraph>
          Efficient Coder | Embracing Diligence and Critical Thinking | Mindset for Growth, Honesty at Core.
          </Paragraph>
        </ContributorBox>
        <ContributorBox>
          <Image src={Monalika} />
          <Heading>MONALIKA PATNAIK</Heading>
          <Paragraph>
            Sed eu lectus varius, dapibus nulla at, molestie odio. Maecenas id feugiat arcu.
          </Paragraph>
        </ContributorBox>
        <ContributorBox>
          <Image src={Mansi}  />
          <Heading>MANSI JANGRA</Heading>
          <Paragraph>
            Quisque sit amet risus ut metus consectetur feugiat. Morbi facilisis justo ut
            cursus cursus.
          </Paragraph>
        </ContributorBox>
        <ContributorBox>
          <Image src={Kashish} alt="Contributor Icon" />
          <Heading>Contributor 3</Heading>
          <Paragraph>
            Quisque sit amet risus ut metus consectetur feugiat. Morbi facilisis justo ut
            cursus cursus.
          </Paragraph>
        </ContributorBox>
      </ContributorGrid>
    </Contributors>
  );
};

export default ContributorsSection;
