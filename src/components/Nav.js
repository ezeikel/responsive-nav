import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -3px 3rem 0px rgba(0, 0, 0, 0.1);
  @media (min-width: 768px) {
    position: relative;
    box-shadow: none;
  }
`;

const NavLinks = styled.ul`
  //transform: ${({ active }) => `translateX(${active ? 0 : "100vw"})`};
  //transition: transform 0.3s ease-in-out;
  display: grid;
  grid-template-columns: repeat(5, auto);
  place-items: center;
  padding: var(--spacing-medium);
  > li {
    width: 100%;
    display: grid;
    place-items: center;
  }
  @media (min-width: 768px) {
    grid-column-gap: var(--spacing-large);
    padding: 0;
  }
`;

const Nav = ({ active, toggleActive }) => {

  return (
    <Wrapper>
      <NavLinks>
        <li>
          <Link to="home">
            <FontAwesomeIcon icon={["far", "home"]} color="#000" size="lg" />
          </Link>
        </li>
        <li>
          <Link to="search">
            <FontAwesomeIcon icon={["far", "search"]} color="#000" size="lg" />
          </Link>
        </li>
        <li>
          <FontAwesomeIcon icon={["far", "shopping-bag"]} color="#000" size="lg" onClick={() => toggleActive(!active)} />
        </li>
        <li>
          <Link to="saved">
            <FontAwesomeIcon icon={["far", "heart"]} color="#000" size="lg" />
          </Link>
        </li>
        <li>
          <Link to="account">
            <FontAwesomeIcon icon={["far", "user"]} color="#000" size="lg" />
          </Link>
        </li>
      </NavLinks>
    </Wrapper>
  );
};

export default Nav;
