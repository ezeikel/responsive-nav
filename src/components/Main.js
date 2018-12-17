import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import homePage from "../pages/index";
import searchPage from "../pages/search";
import bagPage from "../pages/bag";
import savedPage from "../pages/saved";
import accountPage from "../pages/account";

const Wrapper = styled.main`
  padding: var(--spacing-medium);
`;

const Main = () => {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/" component={homePage} />
        <Route exact path="/search" component={searchPage} />
        <Route exact path="/bag" component={bagPage} />
        <Route exact path="/saved" component={savedPage} />
        <Route exact path="/account" component={accountPage} />
      </Switch>
    </Wrapper>
  );
};

export default Main;
