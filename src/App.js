import React from 'react';
import logo from './Images/logo.svg';
import Abdul from './Images/Abdul.jpeg';
import './App.css';

class App extends React.Component {
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <img src={Abdul} width="10%" height="20%" alt="logo" />
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
          </a>
        </header>
      </div>
    )
  } 
}

export default App;
