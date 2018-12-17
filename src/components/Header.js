import React, { useState } from 'react';
import styled from "styled-components";
import Nav from "./Nav";
import Cart from "./Cart";

const Wrapper = styled.header`
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  place-items: center;
  padding: var(--spacing-medium);
  font-size: var(--font-size-small);
  box-shadow: 0px 4px 1.5rem 0px rgba(0, 0, 0, 0.1);
`;

const Header = () => {
  const [active, toggleActive] = useState(false);

  return (
    <Wrapper>
      Five Yards
      <Nav active={active} toggleActive={toggleActive} />
      <Cart active={active} />
    </Wrapper>
  );
};

export default Header;
