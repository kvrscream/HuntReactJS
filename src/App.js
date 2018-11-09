import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Components/Header';
import Main from './Components/Lista/main';
import Routes from './routes';

import './styles.css';

//para poder navegar entre páginas no ReactJS usamos a seginte biblioteca: react-router-dom  

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
