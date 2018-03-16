import React, { Component } from 'react';
import { connect } from 'react-redux';
import SmokingShow from './SmokingShow';
import GenderShow from "./GenderShow";
import icon_smoking from '../assets/img/icons-demo/icon_smoking.png';
import icon_select_gender from '../assets/img/icons-demo/icon_select_gender.png';

const HOC = (ComposedComponent, link, name) => class extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="item">
                <div className="left">
                    <img src={link} alt="male"/>
                </div>
                <div>
                    <ComposedComponent />
                    <div className="left text-title">
                        {name}
                    </div>
                </div>
            </div>
        );
    }
}

export const Smoking = HOC(connect()(SmokingShow), icon_smoking, "smoking");

export const Gender = HOC(connect()(GenderShow), icon_select_gender, "gender");

export default HOC;