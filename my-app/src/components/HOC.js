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
        this.state = {
            show: false,
            width: 300
        }
    }

    clickIcon() {
        this.setState(({ show, width }) => ({
            show: !show,
            width: show ? 300 : 0

        }))
        console.log(this.state.show, this.state.width);

    }

    render() {

        const duration = 300;

        const defaultStyle = {
            transition: `opacity ${duration}ms ease-in-out`,
            opacity: 0,
            top: 0,
            position: 'absolute',
            zIndex: -20,
            width: this.state.width

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
                <div>
                    <Transition in={this.state.show} timeout={duration}>
                        {state => (
                            <div
                                style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state]
                                }}>
                                <div className="item toogle-height" style={this.state.show ? { backgroundColor: "hotpink", width: 350 } : null}>
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
            </div>
        );
    }
}

export const Smoking = HOC(connect()(SmokingShow), icon_smoking, "smoking");

export const Gender = HOC(connect()(GenderShow), icon_select_gender, "gender");

export default HOC;