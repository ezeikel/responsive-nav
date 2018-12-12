import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import home from "../pages/index";
import blog from "../pages/blog";
import about from "../pages/about";
import contact from "../pages/contact";

const Wrapper = styled.main`
  padding: var(--spacing-medium);
`;

const Main = () => {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/blog" component={blog} />
        <Route exact path="/about" component={about} />
        <Route exact path="/contact" component={contact} />
      </Switch>
    </Wrapper>
  );
};

export default Main;
