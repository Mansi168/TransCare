import React from 'react'
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram, FaTwitter, FaGithub} from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Footer container
const FooterContainer = styled.section`
  background-color:#52B2CF;
  padding-top: 3rem;
  padding-bottom: 2.5rem;
  z-index: 99;
`;

// Footer wrap
const FooterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 1100px;
  flex-direction: column;
`;

// Footer links container
const FooterLinksContainer = styled.div`
  width: 100%;
  display: grid;

  @media (min-width: 320px) {
    justify-content: center;
  }

  @media (max-width: 786px) {
    gap: 2rem;
  }

  @media (min-width: 786px) {
    grid-template-columns: 1fr 0.5fr;
  }
`;

// Footer links wrapper
const FooterLinksWrapper = styled.div`
  @media (max-width: 786px) {
    display: grid;
    gap: 2rem;
  }

  @media (min-width: 786px) {
    &:nth-child(1) {
      display: flex;
      justify-content: space-around;
    }
    &:nth-child(2) {
      width: 100%;
      display: grid;
      align-self: inherit;
      align-content: center;
      justify-content: center;
    }
  }
`;

// Footer link items
const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  color: #000000;

  &.socials {
    display: flex;
    flex-direction: row;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    gap: 0.3rem;
    margin-top: 1rem;
  }

  @media (min-width: 320px) {
    align-items: center;
    &.socials {
      margin: 1rem;
    }
  }

  @media (min-width: 786px) {
    align-items: flex-start;
    text-align: left;
  }
`
;

// Footer link title
const FooterLinkTitle = styled.h1`
 font-size: 18px;
 font-weight: bold;
 margin-bottom: 16px;
`
// export const FooterLinkTitleHr = styled.hr`
//   content: "";
//   border: 2px solid;
//   margin-top: 0;
//   width: 52%;
//   color: #000000;
   
// `
const FooterText = styled.p`
    color: #000000;
`

const FooterForm = styled.form`
    color : #F5F0F0;
    padding: 1rem;
    height: 30;

`;

const Footerinput = styled.input`
    margin-bottom: 40px;
    padding: 10px;
    border: none;
    border-radius: 9px;
    font-size:14px;
    border:none;
    outline:none;
`;

export const FooterLink = styled(Link)`
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
  margin-bottom: 0.6rem;
  font-size: 14px;

  &:hover {
    color: #0F5F0F0;
    transition: 0.3s ease-out;
  }

    
&.icons{
 text-align:center;
  border-radius:22px;
  padding:7px

  
 }
  &.icons:hover{
  transform: translate(0,-10px);
  background-color:white !important;
  

 }
 &.icons{
  color:white !important;
 }
 &.insta:hover{
  color:#E4405F!important;
 }
 &.fb:hover{
  color:#1877F2!important;
}
 &.youtube:hover{
  color:#FF0000 !important;
}
 &.twitter:hover{
  color:#1DA1F2 !important;
}
 &.linkdn:hover{
  color:#0077B5 !important;
}
 `
 
 ;

 

// Social media
const SocialMedia = styled.section``;

// Social media wrap
const SocialMediaWrap = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  ${'' /* padding: 3rem; */}
  ${'' /* align-items: center; */}
`;

// Social logo
const SocialLogo = styled(Link)`
  color: #000000;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 700;

  &:hover {
    mask-image: linear-gradient(-75deg, rgba(0,0,0,.6) 30%, #000 50%, rgba(0,0,0,.6) 70%);
    mask-size: 200%;
    animation: shine 2s infinite;
    color: #01bf71;
  }

  @keyframes shine {
  from {
    mask-position: 150%;
  }
  
  to {
    mask-position: -50%;
  }
}
`;

// Website rights
const WebsiteRights = styled.small`
  color: #000000;
  
`;

// Social icons
export const SocialIcons = styled.div``;

// Social icons link
export const SocialIconsLink = styled.a``;

const Footer = () => {

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <FooterContainer>
       <FooterWrap>
         <FooterLinksContainer>
            <FooterLinksWrapper>
            <SocialLogo onClick={handleClick}>
              TransCare
            </SocialLogo>
                <FooterLinkItems className='about'>
                       <FooterLink to="/signin">About Us</FooterLink>
                       <FooterLink to="/contact">Contact Us</FooterLink>
                       <FooterLink to="/signin">Our Farmers</FooterLink>
                       <FooterLink to="/signin">Services</FooterLink>
                       <FooterLink to="/signin">Testimonials</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems className='contact'>
                       <FooterLink to="/contact">Our Blog</FooterLink>
                       <FooterLink to="/">Our Gallery</FooterLink>
                       <FooterLink to="/">Products</FooterLink>
                       <FooterLink to="/">Shop</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>NewsLetter</FooterLinkTitle>
                    <FooterText>Get latest updates and offers.</FooterText>
                    <FooterForm className="form-group">
                        <Footerinput placeholder="Enter your Email"
								type="email"
								id="email"
								require />
                    </FooterForm>
                </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
                
            <FooterLinkItems className='socials' >
              <FooterLink className="icons youtube" style={{ backgroundColor:"#FF0000"}}><FaYoutube style={{ fontSize: '22px'}}  /> </FooterLink>
              <FooterLink className="icons twitter" style={{ backgroundColor:"#1DA1F2"}}><FaTwitter style={{ fontSize: '22px'}}  /> </FooterLink>
              <FooterLink className="icons linkdn" style={{ backgroundColor:"#0077B5"}}><FaLinkedin style={{ fontSize: '22px'}}/> </FooterLink>
              <FooterLink className="icons insta" style={{ backgroundColor:"#E4405F"}} ><FaInstagram style={{ fontSize: '22px'}}  /> </FooterLink>
              <FooterLink className="icons fb" style={{ backgroundColor:"#1877F2"}}><FaFacebook style={{ fontSize: '22px'}}  /> </FooterLink>
            <FooterLink className="icons github" style={{ backgroundColor:"black"}} ><FaGithub style={{ fontSize: '26px'}}  /> </FooterLink>

            </FooterLinkItems>

          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights>TransCare © {new Date().getFullYear()}&nbsp;All rights reserved.</WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
