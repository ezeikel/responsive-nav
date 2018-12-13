import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Hamburger from './Hamburger';

const NavLinks = styled.ul`
  position: absolute;
  background: tomato;
  right: 0;
  width: 320px;
  height: 100vh;
  @media (min-width: 1024px) {
    position: static;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    li + li {
      margin-left: var(--spacing-medium);
    }
  }
`;

const Nav = () => {
  const [active, toggleActive] = useState(false);

  return (
    <nav>
      <NavLinks>
        <li><Link to="/">Home</Link></li>
        <li><Link to="blog">Blog</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="contact">Contact</Link></li>
      </NavLinks>
      <Hamburger active={active} toggleActive={toggleActive} />
    </nav>
  );
};

export default Nav;
