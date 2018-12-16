import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -3px 3rem 0px rgba(0, 0, 0, 0.1);
`;

const NavLinks = styled.ul`
  //transform: ${({ active }) => `translateX(${active ? 0 : "100vw"})`};
  //transition: transform 0.3s ease-in-out;
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-medium);
  @media (min-width: 1024px) {
  }
`;

const Nav = () => {
  const [active, toggleActive] = useState(false);

  return (
    <Wrapper>
      <NavLinks active={active}>
        <li><Link to="/">Account</Link></li>
        <li><Link to="blog">Saved</Link></li>
        <li><Link to="about">Messages</Link></li>
        <li><Link to="contact">Cart</Link></li>
      </NavLinks>
    </Wrapper>
  );
};

export default Nav;
