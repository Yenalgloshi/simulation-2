import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Routes from './routes';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        { Routes }
        <Header />
      </div>
    );
  }
}

//export default App;
