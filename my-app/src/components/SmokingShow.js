import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SLECT_SMOKING } from '../constants/actionConstants';
import icon_smoking from '../assets/img/icons-demo/icon_smoking.png';
import HOC from "../components/HOC"

class SmokingShow extends Component {
    render() {
        return (
<<<<<<< HEAD
            <div className="onoffswitch right-swith">
                <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox"
                    id="myonoffswitch" checked={this.props.isSmoking} onChange={e => this.props.dispatch({ type: SLECT_SMOKING, value: e.target.checked })} />
                <label className="onoffswitch-label" htmlFor="myonoffswitch">
                    <span className="onoffswitch-inner"></span>
                    <span className="onoffswitch-switch"></span>
                </label>
            </div>
        );
=======
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
>>>>>>> af14800e2a0dbfc6d5d29e8ace031d1a0a9fdd87
    }
}

const mapStateToProps = (state) => ({
    isSmoking: state.smoking.isSmoking
})

export default HOC(SmokingShow, icon_smoking, "smoking");