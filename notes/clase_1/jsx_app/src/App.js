// Con esto importamos las librerías
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Title extends Component {
  render() {
    return (
      <h1>Hola título</h1>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        Hola mundo!
        <Title />
      </div>

    );
  }
}

export default App;
