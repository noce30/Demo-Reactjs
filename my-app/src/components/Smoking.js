import React, { Component } from 'react';
import { connect } from 'react-redux'
import icon_smoking from '../assets/img/icons-demo/icon_smoking.png';
import SmokingShow from './SmokingShow';
import {CLICK_SMOKING_ICON} from '../constants/actionConstants'

class Smoking extends Component {
    render() {
        return (
            <div className="item" style={this.props.showSmoking ? { backgroundColor: "hotpink" } : null}>
                <div className="left">
                    <img src={icon_smoking} alt="male" onClick={e=>this.props.dispatch({type: CLICK_SMOKING_ICON, value: !this.props.showSmoking})} />
                </div>
                <SmokingShow/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    showSmoking: state.personalInfo.showSmoking
})


export default connect(mapStateToProps)(Smoking);