import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleTabs from'./components/navbar'



class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleTabs />
      </div>
    );
  }
}

export default App;
