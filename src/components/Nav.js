import React from 'react';
import styled from 'styled-components';
import Widgets  from './Widgets';

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

const Nav = () => {
  return (
    <Wrapper>
      <Widgets />
    </Wrapper>
  );
};

export default Nav;
