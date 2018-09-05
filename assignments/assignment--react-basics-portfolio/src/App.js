import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class PortfolioFixed extends Component {
  render() {
    return (
      <h1>Hola desde PortfolioFixed</h1>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <PortfolioFixed />
      </div>
    );
  }
}

export default App;
