import React, { Component } from 'react';
import iconDot from "../assets/img/icons-demo/icon_dot.png";
import MaritalStatusContainer from "../containers/MaritalStatusContainer";
import DateOfBirthContainer from "../containers/DateOfBirthContainer";
import KidsContainer from "../containers/KidsContainer";
import OccupationContainer from "../containers/OccupationContainer";
import { connect } from 'react-redux';
import { SLECT_SMOKING } from '../constants/actionConstants';
import icon_smoking from '../assets/img/icons-demo/icon_smoking.png';
import icon_female from '../assets/img/icons-demo/icon_female.png';
import icon_male from '../assets/img/icons-demo/icon_male.png';
import icon_dob from '../assets/img/icons-demo/icon_male.png';
import { SELECT_GENDER } from '../constants/actionConstants';
import { Gender, Smoking } from "../components/HOC";

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