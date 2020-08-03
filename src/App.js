import React from 'react';
import logo from './logo.svg';
import Counters from './component/Counters/Counters'
import './App.css';
import reducer from './reducers'
import { createStore } from 'redux'
import store from './Store'
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Counters
          value={store.getState()}
          addTotal={()=>store.dispatch({ type: 'INCREMENT' })}
          subTotal={()=>store.dispatch({ type: 'DECREMENT' }) }
          size={1}></Counters>

      </header>
    </div>
  );
  
}
store.subscribe(App)

export default App;
