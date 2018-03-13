import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import PersonalInfoPanel from "./components/PersonalInfoPanel";
import icon_female from './assets/img/icons-demo/icon_female.png';
import male from './assets/img/icons-demo/icon_male.png';
import Gender from './components/Gender';

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
          <PersonalInfoPanel />
          <img src={this.state.checked ? icon_female : male} />
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
