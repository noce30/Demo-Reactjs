import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import PersonalInfoPanel from "./components/PersonalInfoPanel";
import Gender from'./components/Gender';

class App extends Component {
  constructor() {
    super();
  }

  handleSwitch(elem, state) {
    console.log('handleSwitch. elem:', elem);
    console.log('name:', elem.props.name);
    console.log('new state:', state);
  }

  render() {
    return (
      <form>
        <div>
          <PersonalInfoPanel />
          <Gender/>>
        </div>        
      </form>
    )
  }

}



export default App;
