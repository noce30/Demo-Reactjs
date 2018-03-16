import React, { Component } from 'react';
import { connect } from 'react-redux'
import icon_smoking from '../assets/img/icons-demo/icon_smoking.png';
import SmokingShow from './SmokingShow';
import { CLICK_SMOKING_ICON } from '../constants/actionConstants'
import { Transition } from 'react-transition-group';

class Smoking1 extends Component {
    render() {
        const duration = 300;

        const defaultStyle = {
            transition: `opacity ${duration}ms ease-in-out`,
            opacity: 0,
            top: 0,           
            display: 'inline-block',
            position: 'absolute',
            zIndex: -20
        }

        const transitionStyles = {
            entering: { opacity: 0 },
            entered: { opacity: 1 },
        };
        return (
            <div>
                <img src={icon_smoking} alt="male" onClick={e => this.props.dispatch({ type: CLICK_SMOKING_ICON, value: !this.props.showSmoking })} />
                <span className="field-info">Smoking</span>
                <Transition in={this.props.showSmoking} timeout={300}>
                    {state => (
                        <div
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}>
                            <div className="item smoking-height" style={this.props.showSmoking ? { backgroundColor: "hotpink" } : null}>
                                <SmokingShow />
                            </div>
                        </div>
                    )}
                </Transition>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    showSmoking: state.smoking.showSmoking
})


export default connect(mapStateToProps)(Smoking1);