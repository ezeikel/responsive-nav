import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/pro-regular-svg-icons";
import {
  faShoppingBag,
  faHeart,
  faUser,
  faSearch
} from "@fortawesome/pro-regular-svg-icons";
import Main from './components/Main';
import Header from './components/Header';
import 'normalize.css';

library.add(fab, far, faShoppingBag, faHeart, faUser, faSearch);

const Wrapper = styled.div`
  display: grid;
  @media (min-width: 768px) {}
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Fragment>
        <GlobalStyle />
        <Wrapper>
            <Header />
            <Main />
          </Wrapper>
      </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
