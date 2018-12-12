import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import home from "../pages/index";

const Wrapper = styled.main`
  padding: var(--spacing-medium);
`;

const Main = ({ className, active }) => {
  return (
    <Wrapper className={className} active={active}>
      <Switch>
        <Route exact path="/" component={home} />
      </Switch>
    </Wrapper>
  );
};

export default Main;
