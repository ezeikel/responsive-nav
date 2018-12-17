import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.ul`
  //transform: ${({ active }) => `translateX(${active ? 0 : "100vw"})`};
  //transition: transform 0.3s ease-in-out;
  display: grid;
  grid-template-columns: repeat(4, auto);
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

const Widgets = () => {
  return (
    <Wrapper>
      <li>
        <Link to="/search">
          <FontAwesomeIcon icon={["far", "search"]} color="#000" size="lg" />
        </Link>
      </li>
      <li>
        <Link to="/bag">
          <FontAwesomeIcon icon={["far", "shopping-bag"]} color="#000" size="lg" />
        </Link>
      </li>
      <li>
        <Link to="/saved">
          <FontAwesomeIcon icon={["far", "heart"]} color="#000" size="lg" />
        </Link>
      </li>
      <li>
        <Link to="/account">
          <FontAwesomeIcon icon={["far", "user"]} color="#000" size="lg" />
        </Link>
      </li>
    </Wrapper>
  );
};

export default Widgets;
