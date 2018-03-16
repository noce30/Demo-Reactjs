import React, { Component } from 'react';
import { connect } from 'react-redux'
import { SLECT_SMOKING } from '../constants/actionConstants'

class SmokingShow extends Component {
    render() {
        return (
            (this.props.showSmoking &&
                <div className="onoffswitch right-swith" >
                    <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox"
                        id="myonoffswitch" checked={this.props.isSmoking} onChange={e => this.props.dispatch({ type: SLECT_SMOKING, value: e.target.checked })} />
                    <label className="onoffswitch-label" htmlFor="myonoffswitch">
                        <span className="onoffswitch-inner"></span>
                        <span className="onoffswitch-switch"></span>
                    </label>
                </div >
            ));
    }
}

const mapStateToProps = (state) => ({
    showSmoking: state.smoking.showSmoking,
    isSmoking: state.smoking.isSmoking
})


export default connect(mapStateToProps)(SmokingShow);