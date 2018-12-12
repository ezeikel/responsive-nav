import React, { Component } from "react";
import styled from "styled-components";
import Nav from "./Nav";

const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  padding: var(--spacing-medium);
  font-size: var(--font-size-small);
  box-shadow: 0px 4px 1.5rem 0px rgba(0, 0, 0, 0.1);
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        Five Yards.
        <Nav />
      </Wrapper>
    );
  }
}

export default Header;
