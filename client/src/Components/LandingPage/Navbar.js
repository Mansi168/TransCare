import React, { useState } from 'react';

import { FaBars } from 'react-icons/fa';

import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

const Nav = styled.nav`
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	height: 80px;
	margin-top: -80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 10;

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

 const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	z-index: 1;
	width: 100%;
	@media screen and (max-width: 768px) {
		justify-content: space-between;
		padding-left: 4%;
		padding-right: 4%;
	}
`;

 const NavLogo = styled(LinkR)`
	color: #ffffff;
	cursor: pointer;
	font-size: 2rem;
	display: flex;
	align-items: center;
	font-family: 'Roboto', sans-serif;
	font-weight: bold;
	padding: 1rem;
	z-index: 10;
	${'' /* text-decoration: none; */}
	text-align: center; /* Center the NavLogo on small screens */

	&:hover {
		mask-image: linear-gradient(
			-75deg,
			rgba(0, 0, 0, 0.6) 30%,
			#000 50%,
			rgba(0, 0, 0, 0.6) 70%
		);
		mask-size: 200%;
		animation: shine 3s infinite;
		color: #000000;
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

 const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		font-size: 1.8rem;
		cursor: pointer;
		 color: #ffffff;
		color: var(--text-clr);
		align-items: center;
		display: flex;
		&:hover {
			color: green;
		}
	}
`;


 const NavMenu = styled.ul`
	color: #ffffff;
	display: flex;
	gap: 30px;
	align-items: center;
	justify-items: center;
	margin-top: 30px;
	list-style: none;
	font-size: 1.2rem;
	font-weight: 600;
	margin-right: 0;
	@media screen and (max-width: 768px) {
	    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
		position: sticky;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100vw;
		height: 100vh;
		margin-top: 0;
		position: absolute;
		margin-left: 0;
		top: 0px;
		padding-left: 0px;
		left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
		opacity: 1;
		z-index: 5;
		transition: all 0.5s ease;
		background-color: white;
	}
`;


 const NavItem = styled.li`
	margin-top: -15px;
	color: #ffffff;
`;

 const NavLinks = styled(LinkS)`
    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    ${'' /* text-decoration: none; */}
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;

    &:after {
        content: '';
        width: 0%;
        height: 5%;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #28b86b;
        transition: all 0.3s ease-in;
    }

    &:hover::after {
        width: 100%;
    }

    &:hover {
        color: #28b86b;
    }

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`;

 const NavBtn = styled.nav`
	display: flex;
	align-items: center;
	gap: 4%;

	@media screen and (max-width: 768px) {
		display: none;
		margin-top: 0px;
		margin-right: 45px;
	}
`;

 const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #d4afb9;
    white-space: nowrap;
    padding:10px 22px;
    color: #010606;
    font-size: 16px;
    outline:none;
    border:none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;

    }

`;
const glassStyle = {
  background: "rgba(40, 30, 30, 0.3)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(7.1px)",
  webkitBackdropFilter: "blur(7.1px)",
  border: "1px solid rgba(40, 30, 30, 0.18)",
};

const Navbar = ({ toggle }) => {
  const [navbarBg] = useState(glassStyle);

  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <>
      <Nav style={navbarBg}>
        <NavbarContainer>
          <NavLogo to="/">TransCare</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="features">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="#" onClick={handleContactClick}>
                Contact{" "}
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Feedback">Feedback</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
            <NavBtnLink to="/signup">Sign Up</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
