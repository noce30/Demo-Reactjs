import React, { Component } from 'react';
import icon_female from '../assets/img/icons-demo/icon_female.png';
import icon_male from '../assets/img/icons-demo/icon_male.png';
import { connect } from 'react-redux';
import { SELECT_GENDER } from '../constants/actionConstants';

class GenderShow extends Component {
    render() {
        return (
            <div>
                <div className="right" style={!this.props.isMale ? { opacity: "0.3" } : null}>
                    <img src={icon_female} alt="male" onClick={e => this.props.dispatch({ type: SELECT_GENDER, value: true })} />
                </div>
                <div className="right mr-10" style={this.props.isMale ? { opacity: "0.3" } : null}>
                    <img src={icon_male} alt="male" onClick={e => this.props.dispatch({ type: SELECT_GENDER, value: false })} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isMale: state.gender.isMale
})


export default connect(mapStateToProps)(GenderShow);