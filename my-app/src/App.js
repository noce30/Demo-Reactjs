import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PersonalInfoPanel from "./components/PersonalInfoPanel";

class App extends Component {
  render() {
    return (
      <div className="bg-image">
      <div className="main-bg">
        <PersonalInfoPanel />
       </div>
      </div>
    );
  }
}



export default App;
