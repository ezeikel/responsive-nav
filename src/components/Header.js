import React, { Component } from "react";
import styled from "styled-components";
import Nav from "./Nav";

const Wrapper = styled.header`
  display: grid;
  padding: var(--spacing-medium);
  font-size: var(--font-size-small);
  box-shadow: 0px 4px 1.5rem 0px rgba(0, 0, 0, 0.1);
  @media (min-width: 1024px) {
    box-shadow: none;
    position: relative;
  }
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Nav />
      </Wrapper>
    );
  }
}

export default Header;
