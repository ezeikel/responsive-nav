import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  li + li {
    margin-left: var(--spacing-medium);
  }
`;

const Nav = () => {
  return (
    <nav>
      <NavLinks>
        <li><Link to="/">Home</Link></li>
        <li><Link to="blog">Blog</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="contact">Contact</Link></li>
      </NavLinks>
    </nav>
  );
};

export default Nav;
