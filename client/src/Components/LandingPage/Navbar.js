import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
display: flex;
justify-content: space-between;
padding: 16px;
background-color: #ffffff;
`;

const Logo = styled.div`
  font-size: 24px;
  color: #6c567b;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
`;

const NavMenuItem = styled.li`
  margin-left: 16px;
  color: #6c567b;
  cursor: pointer;

  &:hover {
    color: #a96da3;
  }
`;


const Navbar = () => {
  return (
    <Nav>
      <Logo>Logo</Logo>
      <NavMenu>
        <NavMenuItem>Home</NavMenuItem>
        <NavMenuItem>Services</NavMenuItem>
        <NavMenuItem>Testimonials</NavMenuItem>
        <NavMenuItem>Contributors</NavMenuItem>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
