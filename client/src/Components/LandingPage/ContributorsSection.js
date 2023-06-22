import React from 'react';
import styled from 'styled-components';
import Sneha from '../../images/Contributor-1.png';

const Contributors = styled.section`
  padding: 50px;
  background-color: #ffffff;
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
  gap: 24px;
`;

const ContributorBox = styled.div`
  padding: 14px;
  border: 1px solid #6c567b;
  border-radius: 8px;
`;

const Image = styled.img`
  width: 200px;
  height: 180px;
  margin-bottom: 2px;
`;

const Heading = styled.h3`
  font-size: 24px;
  color: #6c567b;
  margin: auto;
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #6c567b;
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
          <Image src="Contributor-icon-2.png" alt="Contributor Icon" />
          <Heading>Contributor 2</Heading>
          <Paragraph>
            Sed eu lectus varius, dapibus nulla at, molestie odio. Maecenas id feugiat arcu.
          </Paragraph>
        </ContributorBox>
        <ContributorBox>
          <Image src="Contributor-icon-3.png" alt="Contributor Icon" />
          <Heading>Contributor 3</Heading>
          <Paragraph>
            Quisque sit amet risus ut metus consectetur feugiat. Morbi facilisis justo ut
            cursus cursus.
          </Paragraph>
        </ContributorBox>
        <ContributorBox>
          <Image src="Contributor-icon-3.png" alt="Contributor Icon" />
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
