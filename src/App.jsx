import logo from './logo.svg';
import React from 'react';
import {Nav} from '../components/Nav.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

          Testing by David
        </a>
      </header>
    </div>
  );
}

export default App;
