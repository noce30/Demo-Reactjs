import React, { Component } from 'react';
import iconStatus from "../assets/img/icons-demo/icon_status.png";
import iconDot from "../assets/img/icons-demo/icon_dot.png";
import iconKid from "../assets/img/icons-demo/icon_kids.png";
import MaritalStatusContainer from "../containers/MaritalStatusContainer";
import DateOfBirthContainer from "../containers/DateOfBirthContainer";
import KidsContainer from "../containers/KidsContainer";
import OccupationContainer from "../containers/OccupationContainer";
import { connect } from 'react-redux';
import { SLECT_SMOKING } from '../constants/actionConstants';
import icon_smoking from '../assets/img/icons-demo/icon_smoking.png';
import icon_female from '../assets/img/icons-demo/icon_female.png';
import icon_male from '../assets/img/icons-demo/icon_male.png';
import {SELECT_GENDER} from '../constants/actionConstants';

class CurveOptions extends Component {
    render() {
        return (
            <div>
                <ul className="circle-container">
                    <li><Gender/></li>
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

const HOC = (ComposedComponent, link, name) => class extends Component {
    constructor() {
        super();
        this.state = { show: false }
    }

    clickIcon() {
        this.setState({ show: !this.state.show });
    }

    render() {
        return (
            <div className="item" style={this.state.show ? { backgroundColor: "hotpink" } : null}>
                <div className="left">
                    <img src={link} alt="male" onClick={this.clickIcon.bind(this)} />
                </div>
                {this.state.show &&
                    <div>
                        <ComposedComponent />
                    </div>
                }
                {
                    !this.state.show &&
                    <div className="left text-title">
                        {name}
                    </div>
                }
            </div>
        );
    }
}

class SmokingShow extends Component {
    render() {
        return (
            <div className="onoffswitch right-swith">
                <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox"
                    id="myonoffswitch" checked={this.props.isSmoking} onChange={e => this.props.dispatch({ type: SLECT_SMOKING, value: e.target.checked })} />
                <label className="onoffswitch-label" htmlFor="myonoffswitch">
                    <span className="onoffswitch-inner"></span>
                    <span className="onoffswitch-switch"></span>
                </label>
            </div>
        );
    }
}

class GenderShow extends Component {
    render() {
        return (

            <div>
                <div className="right">
                    <img src={icon_female} alt="male" />
                </div>

                <div className="right-swith">
                    <label className="switch">
                        <input type="checkbox" checked = {this.props.isMale} onChange={e => this.props.dispatch({ type: SELECT_GENDER, value: e.target.checked })} />
                        <span className="slider round"></span>
                    </label>
                </div>

                <div className="right">
                    <img src={icon_male} alt="male" />
                </div>
            </div>
        );
    }
}

const Smoking = HOC(connect()(SmokingShow), icon_smoking, "smoking");

const Gender = HOC(connect()(GenderShow), icon_smoking, "gender");



export default CurveOptions;