import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Main from './components/Main';
import Header from './components/Header';
import 'normalize.css';

const Wrapper = styled.div`
  display: grid;
  @media(min-width: 1024px) {}
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
