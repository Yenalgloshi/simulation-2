import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Dashboard from './component/dashboard/Dashboard';
import Wizard from './component/wizard/Wizard';
import Header from './component/header/Header';
import House from './component/house/House';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard >
          <House />
        </Dashboard >
        <Wizard />
        <Header />
      </div>
    );
  }
}

//export default App;
