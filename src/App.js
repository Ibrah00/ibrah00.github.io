import React from 'react';
import logo from './Bald Eagle Portrait.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        My name is Ibrahem and I'm going to master React, hopefully!
        </p>
        <a
          className="App-link"
          href="https://github.com/Ibrah00/ibrah00.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out!
        </a>
      </header>
    </div>
  );
}

export default App;
