import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import icon_female from './icon_female.png';
import './App.css';
import PersonalInfoPanel from "./components/PersonalInfoPanel";
import Toggle from 'react-bootstrap-toggle';
import Switch from 'react-bootstrap-switch';

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
        <div className="item">
          <div className="right">
            <img src="icon_female.png" alt="male" />
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider round"></span>
            </label>
            <img src={icon_female} alt="male" />
          </div>

        </div>
      </form>
    )
  }

}



export default App;
