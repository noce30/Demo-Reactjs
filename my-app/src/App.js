import React, { Component } from 'react';
import logo from './logo.svg';
import icon_female from './assets/img/icons-demo/icon_female.png';
import icon_male from './assets/img/icons-demo/icon_male.png';
import './App.css';
import PersonalInfoPanel from "./components/PersonalInfoPanel";
import CurveOptions from "./components/CurveOptions";
import Gender from "./components/Gender";


class App extends Component {
  constructor() {
    super();
    this.state = { checked: true };
    this.handleGender = this.handleGender.bind(this);
  }

  handleGender(checked) {
    this.setState({
      checked: checked
    });
  }
  
  render() {
    return (
      <div className="bg-image">
        <div className="main-bg">
          <div className="info-position">
            <PersonalInfoPanel />
          </div>
          <CurveOptions />
          <img src={this.state.checked ? icon_female : icon_male} />
          <Gender
            onGenderChange={this.handleGender}
            checked={this.state.checked}
          />
        </div>
      </div>
    );
  }
}



export default App;
