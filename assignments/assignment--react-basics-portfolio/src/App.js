import React, { Component } from 'react';

import logo from './logo.svg';

import PortfolioFixed from './PortfolioFixed';
import PortfolioContent from './PortfolioContent';

import "./css/styles.css"


class App extends Component {
  render() {
    return (
      <div id="app-container">
        <PortfolioFixed />
        <PortfolioContent />
      </div>
    );
  }
}

export default App;
