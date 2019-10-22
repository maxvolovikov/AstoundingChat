import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';
import Store from './Store';

function App() {
  return (
    <div className="App" key="q">
      <Store>
        <Dashboard />
      </Store>
    </div>
  );
}

export default App;
