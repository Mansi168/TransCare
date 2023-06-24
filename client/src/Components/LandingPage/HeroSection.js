import React, { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import Background from "../../images/bg.jpg";
import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { motion } from 'framer-motion';
import {Button} from '../ButtonElements' 
import { Link } from "react-router-dom";

 const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;

    :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        /* background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%); */
        /* linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%); */
        z-index: 2;
    }
`

 const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;

`


 const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    background: #232a34;
    filter: brightness(0.5); 
`;

 const HeroContent = motion(styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute; 
   
      display: flex;
    flex-direction: column; 
    align-items: center;
    
    :before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 2;
        /* background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%); */
        }
          
    `);

 const HeroH1 = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    margin-bottom: 34px;
    font-size: 3.6rem;
    line-height: 1.2;
    font-weight: 600;
    color: white;
    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }

`;

 const HeroP = styled.h2`
    font-size: 1.8rem;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    color: white;
    text-align: center; 
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }

    @media screen and (max-width: 480px) {
        font-size: 15px;
    }

`;

 const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;

`;

 const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;

`;

 const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;


const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Make your life more blissful"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const onHover = () => {
    setHover(!hover);
  };  
  
  
  return (

    <HeroContainer id="home">
      <HeroBg>
      <ImageBg src={Background}type='image/jpg' />
      </HeroBg>
      <HeroContent
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8 }}
      >
        <HeroH1>
          <span ref={el} style={{ display: "inline-block" }} />
        </HeroH1>
        <HeroP>Register today and embrace a supportive transgender community where you can connect, share, and thrive!</HeroP>
        <HeroBtnWrapper>
          <Button
            as={Link}
            to="/signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            style={{ textDecoration: "none" }}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>

  );
};

export default HeroSection;
