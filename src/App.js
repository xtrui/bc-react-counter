import React from 'react';
import logo from './logo.svg';
import Counter from './component/Counter/Counter'
import Counters from './component/Counters/Counters'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter></Counter>
        <Counters size={5}></Counters>

      </header>
    </div>
  );


}

export default App;
