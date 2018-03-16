import React, { Component } from 'react';
import PropTypes from 'prop-types';
import icon_female from '../assets/img/icons-demo/icon_female.png';
import icon_male from '../assets/img/icons-demo/icon_male.png';
import { connect } from 'react-redux';
import { SELECT_GENDER } from '../constants/actionConstants'

class GenderShow extends Component {
    render() {
        return (
            (this.props.showFull &&
                <div>
                    <div className="right">
                        <img src={icon_female} alt="male" />
                    </div>

                    <div className="right-swith">
                        <label className="switch">
                            <input type="checkbox" checked={this.props.isMale} onChange={e => this.props.dispatch({ type: SELECT_GENDER, value: e.target.checked })} />
                            <span className="slider round"></span>
                        </label>
                    </div>

                    <div className="right">
                        <img src={icon_male} alt="male" />
                    </div>
                </div>
            )
        );
    }
}

const mapStateToProps = (state) => ({
    showFull: state.gender.showFull,
    isMale: state.gender.isMale
})


export default connect(mapStateToProps)(GenderShow);