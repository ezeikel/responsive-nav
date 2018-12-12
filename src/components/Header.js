import React, { Component } from "react";
import styled from "styled-components";
//import { Link } from "react-router-dom";

const Wrapper = styled.header`
  display: grid;
  transition: background-color 0.3s ease-in-out;
  padding: var(--spacing-medium);
  box-shadow: 0px 4px 1.5rem 0px rgba(0, 0, 0, 0.1);
  @media (min-width: 1024px) {
    box-shadow: none;
    position: relative;
    z-index: 2;
  }
`;

class Header extends Component {
  render() {
    const { className } = this.props;
    return (
      <Wrapper className={className}>
        <h1>Brand Title</h1>
      </Wrapper>
    );
  }
}

export default Header;
