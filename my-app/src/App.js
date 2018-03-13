import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Information from "./components/Information";
import MaritalStatus from "./components/MaritalStatus";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Information customer={mockCustomer} />
        <MaritalStatus />
      </div>
    );
  }
}

const mockCustomer = {
  fullName: "John Doe",
  gender: "male",
  age: 32,
  maritalStatus: "Married",
  occupation: "Professional",
  expectedRetireAge: 60
}

export default App;
