import React, { Component } from 'react';
import Gender from "./Gender";
import iconStatus from "../assets/img/icons-demo/icon_status.png";
import iconDot from "../assets/img/icons-demo/icon_dot.png";
import MaritalStatusContainer from "../containers/MaritalStatusContainer";
import DateOfBirthContainer from "../containers/DateOfBirthContainer";

class CurveOptions extends Component {
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
            <div>
                <ul className="circle-container">
<<<<<<< HEAD
                    <li><Gender
                        onGenderChange={this.handleGender}
                        checked={this.state.checked}
                    />
                    </li>
                    <li><img src={iconStatus} /></li>
                    <li><img src={iconStatus} /></li>
=======
                    <li><img src={iconStatus} /></li>
                    <li><MaritalStatusContainer /></li>
                    <li><DateOfBirthContainer /></li>
>>>>>>> fix-cannot-click-icon
                    <li><img src={iconStatus} /></li>
                    <li><img src={iconStatus} /></li>
                    <li><img src={iconStatus} /></li>
                </ul>
                <ul className="circle-inner" >
                    <li><img src={iconDot} /></li>
                    <li><img src={iconDot} /></li>
                    <li><img src={iconDot} /></li>
                    <li><img src={iconDot} /></li>
                    <li><img src={iconDot} /></li>
                    <li><img src={iconDot} /></li>
                </ul>
            </div>
        );
    }
}

export default CurveOptions;