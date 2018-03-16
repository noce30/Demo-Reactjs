import React, { Component } from 'react';
import { connect } from 'react-redux'

class SmokingShow extends Component {
    render() {
        if (this.props.showSmoking) {
            return (
                <div className="onoffswitch right-swith">
                    <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" defaultChecked />
                        <label className="onoffswitch-label" htmlFor="myonoffswitch">
                        <span className="onoffswitch-inner"></span>
                        <span className="onoffswitch-switch"></span>
                    </label>
                </div>
            );
        }
        else {
            return (
                <div className="left text-title">
                    smoking
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    showSmoking: state.smoking.showSmoking
})


export default connect(mapStateToProps)(SmokingShow);