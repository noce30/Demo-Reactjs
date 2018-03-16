import React, { Component } from 'react';
import { connect } from 'react-redux';
import SmokingShow from './SmokingShow';
import GenderShow from "./GenderShow";
import icon_smoking from '../assets/img/icons-demo/icon_smoking.png';
import icon_select_gender from '../assets/img/icons-demo/icon_select_gender.png';
import { Transition } from 'react-transition-group';

const HOC = (ComposedComponent, link, name) => class extends Component {
    constructor() {
        super();
        this.state = { show: false }
    }

    clickIcon() {
        this.setState(({ show }) => ({
            show: !show
        }))
    }

    render() {

        const duration = 300;

        const defaultStyle = {
            transition: `opacity ${duration}ms ease-in-out`,
            opacity: 0,
            top: 0,
            position: 'absolute',
            zIndex: -20
        }

        const transitionStyles = {
            entering: { opacity: 0 },
            entered: { opacity: 1 },
        };

        return (
            <div className="item">
                <div className="left">
                    <img src={link} alt="male" onClick={() => this.clickIcon()} />
                </div>
                <Transition in={this.state.show} timeout={duration}>
                    {state => (
                        <div
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}>
                            <div className="item toogle-height" style={this.state.show ? { backgroundColor: "hotpink" } : null}>
                                <ComposedComponent />
                            </div>
                        </div>
                    )}
                </Transition>
                {
                    !this.state.show &&
                    <div className="left text-title">
                        {name}
                    </div>
                }
            </div>
        );
    }
}

export const Smoking = HOC(connect()(SmokingShow), icon_smoking, "smoking");

export const Gender = HOC(connect()(GenderShow), icon_select_gender, "gender");