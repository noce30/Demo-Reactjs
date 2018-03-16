import React, { Component } from 'react';
import icon_female from './assets/img/icons-demo/icon_female.png';
import icon_male from './assets/img/icons-demo/icon_male.png';
import './App.css';
import PersonalInfoPanel from "./components/PersonalInfoPanel";
import CurveOptions from "./components/CurveOptions";
import Gender from "./components/Gender";


class App extends Component {
  render() {
    return (
      <div className="bg-image">
        <div className="main-bg">
          <div className="info-position">
            <PersonalInfoPanel />
          </div>
          <CurveOptions />
        </div>
      </div>
    );
  }
}

export default App;
