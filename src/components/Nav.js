import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Hamburger from './Hamburger';

const Wrapper = styled.nav`
  @media (min-width: 1024px) {
  }
`;

const NavLinks = styled.ul`
  position: absolute;
  background: tomato;
  right: 0;
  width: 320px;
  height: 100vh;
  transform: ${({ active }) => `translateX(${active ? 0 : '100vw'})`};
  transition: transform 0.3s ease-in-out;
  @media (min-width: 1024px) {
    position: static;
    height: auto;
    display: flex;
    flex-direction: row;
    li + li {
      margin-left: var(--spacing-medium);
    }
  }
`;

const StyledHamburger = styled(Hamburger)`
  position: absolute;
  top: 20px;
  right: 20px;
  @media (min-width: 1024px) {
    display: none;
  }
`;

const Nav = () => {
  const [active, toggleActive] = useState(false);

  return (
    <Wrapper>
      <NavLinks active={active}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="blog">Blog</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="contact">Contact</Link></li>
      </NavLinks>
      <StyledHamburger active={active} toggleActive={toggleActive} />
    </Wrapper>
  );
};

export default Nav;
