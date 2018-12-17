import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Wrapper = styled.header`
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  padding: var(--spacing-medium);
  font-size: var(--font-size-small);
  text-transform: uppercase;
  box-shadow: 0px 4px 1.5rem 0px rgba(0, 0, 0, 0.1);
`;

const Header = ({ className }) => {
  const [active, toggleActive] = useState(false);

  return <Wrapper className={className}>
      <Link to="/">Five Yards</Link>
      <Nav active={active} toggleActive={toggleActive} />
    </Wrapper>;
};

export default Header;
