import React, { useEffect, useRef } from 'react';
import img from '../../images/about.png'
import Typed from 'typed.js';
import styled from 'styled-components';
import { Button } from '../ButtonElements'
// import { AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, TopLine, Heading, SubTitle, BtnWrap, ImgWrap, Img } from './AboutElements'
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';



const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Let's come together",
    headline: 'Welcome to TransCare - Empowering Transgender Lives!',
    description: 'At TransCare, we are dedicated to providing a supportive and inclusive online platform for the transgender community. Our purpose is to empower transgender individuals by offering resources, fostering connection, and promoting self-acceptance.We believe in creating a world where transgender voices are heard, respected, and celebrated. is a one and all platform for you to help you out in quitting smoking and drinking by providing personalized consultations and medications making you a step closer to leading a healthy life.',
    buttonLabel: 'Get Started',
    imgStart: false ,
    img: img,
    alt: 'Doctor',
    dark: true,
    primary: true,
    darkText: false

};



const AboutContainer = styled.div`
    color : var(--text-clr);
    background : #F8B195;
    //background: ${({lightBg})=> (lightBg ? '#f9f9f9' : '#010606')};
    //background : var(--bg-clr);
    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`;

const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`
 const AboutRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart})=> (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart})=> (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};

    }
`;
const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;
const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;
const TextWrapper = motion(styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 50px;
`);
const TopLine = styled.p`
    opacity: 1;
    color: #355C7D;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 28px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText})=> (lightText ? '#f7f8fa' : '#010606')};
    color : var(--text-clr);
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`
const SubTitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText})=> (darkText ? '#010606' : '#fff')}; 
    color: var(--text-clr);
`
const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`
const ImgWrap = motion(styled.div`
    max-width: 555px;
    height: 100%
`);
 const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`


const About = ({ lightBg, id, imgStart, topLine, headline, description, buttonLabel, lightText, darkText, img, alt, primary, dark, dark2 }) => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [homeObjOne.headline],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            showCursor: false,
        });

        return () => {
            typed.destroy();
        };
    }, [headline]);


    return (
        <>
            <AboutContainer lightBg={homeObjOne.lightBg} id={homeObjOne.id} >
                <AboutWrapper>
                    <AboutRow imgStart={homeObjOne.imgStart}>
                        <Column1>
                            <TextWrapper
                                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                                transition={{ duration: 0.8 }}
                            >
                                <TopLine>{homeObjOne.topLine}</TopLine>
                                <Heading>   <span ref={el} style={{ display: 'inline-block' }} /></Heading>
                                <SubTitle>{homeObjOne.description}</SubTitle>
                                <BtnWrap>
                                    <Button
                                        as={Link}
                                        to="/signin"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={homeObjOne.primary ? 1 : 0}
                                        dark={homeObjOne.dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                        style={{ textDecoration: 'none' }}
                                    >{homeObjOne.buttonLabel} </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <motion.div
                                //   variants={cardTwoVariants}
                                initial="hidden"
                                whileInView="visible"
                                whileHover={{
                                    scale: 1.1,
                                    textShadow: '0px 0px 8px rgb(255,255,255)',

                                    transition: { duration: 0.6 },
                                }}
                            >

                                <ImgWrap
                                    whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                                    transition={{ duration: .9 }}

                                >
                                    <Img src={homeObjOne.img} alt={homeObjOne.alt} />
                                </ImgWrap>
                            </motion.div>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>

            </AboutContainer>
        </>
    )
}

export default About
