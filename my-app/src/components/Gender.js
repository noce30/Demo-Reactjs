import React, { Component } from 'react';
import GenderShow from './GenderShow';
import icon_select_gender from '../assets/img/icons-demo/icon_select_gender.png';
import { connect } from 'react-redux';
import {CLICK_GENDER_ICON} from '../constants/actionConstants';

class Gender extends Component {
    render() {
        return (
            <div className="item" style={this.props.showFull ? { backgroundColor: "hotpink" } : null}>
                <div className="left">
                    <img src={icon_select_gender} alt="male" onClick={e => this.props.dispatch({ type: CLICK_GENDER_ICON, value: !this.props.showFull })} />
                </div>
                <GenderShow
                    onGenderChange={this.props.onGenderChange}
                    checked={this.props.checked}
                />
            </div>
        );
    }
}
 const mapStateToProps = (state) => ({
    showFull: state.personalInfo.showFull
})




export default connect(mapStateToProps)(Gender);