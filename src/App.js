import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
//import styled from 'styled-components';
import './globalStyles';
import Main from './components/Main';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Fragment>
    )
  }
}

export default App;
