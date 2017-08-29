import * as React from 'react';
import './App.css';

import Header from './components/header/Header';
import Main from './components/main/Main';

const logo: string = require('./logo.svg');

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h3>FIRE</h3>
      <h5>Flexible React Examples</h5>
    </div>
    <div className="App-intro">
      <Header/>
      <Main/>
    </div>
  </div>
);

export default App;