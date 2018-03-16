import React, { Component } from 'react';
import PropTypes from 'prop-types';
import icon_female from '../assets/img/icons-demo/icon_female.png';
import icon_male from '../assets/img/icons-demo/icon_male.png';
import { connect } from 'react-redux';
import {SELECT_GENDER} from '../constants/actionConstants'

class GenderShow extends Component {
    render() {
        if (this.props.showFull) {
            return (

                <div>
                    <div className="right">
                        <img src={icon_female} alt="male" />
                    </div>

                    <div className="right-swith">
                        <label className="switch">
                            <input type="checkbox" defaultChecked onChange={e => this.props.dispatch({ type: SELECT_GENDER, value: e.target.checked })} />
                            <span className="slider round"></span>
                        </label>
                    </div>

                    <div className="right">
                        <img src={icon_male} alt="male" />
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="left text-title">
                    GENDER
                </div>
            )
        }

    }
}

const mapStateToProps = (state) => ({
    showFull: state.personalInfo.showFull
})


export default connect(mapStateToProps)(GenderShow);