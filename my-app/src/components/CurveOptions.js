import React, { Component } from 'react';
import iconDot from "../assets/img/icons-demo/icon_dot.png";
import MaritalStatusContainer from "../containers/MaritalStatusContainer";
import DateOfBirthContainer from "../containers/DateOfBirthContainer";
import KidsContainer from "../containers/KidsContainer";
import OccupationContainer from "../containers/OccupationContainer";
import {Gender,Smoking} from '../components/HOC';

class CurveOptions extends Component {
    render() {
        return (
            <div>
                <ul className="circle-container">
                    <li><Gender /></li>
                    <li><MaritalStatusContainer /></li>
                    <li><DateOfBirthContainer /></li>
                    <li><KidsContainer /></li>
                    <li><Smoking /></li>
                    <li><OccupationContainer /></li>
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