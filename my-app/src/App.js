import React, { Component } from 'react';
import PersonalInfoPanel from "./components/PersonalInfoPanel";
import CurveOptions from "./components/CurveOptions";


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
