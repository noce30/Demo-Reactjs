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
            width: 350
        }
    }

    clickIcon() {
        this.setState(({ show }) => ({
            show: !show,
            width: !show ? 350 : 0
        }))
    }

    render() {

        const duration = 300;

        const defaultStyle = {
            transition: `width ${2}s`,
            opacity: 0,
            top: 0,       
            width: this.state.width,
            position: 'absolute',
            zIndex: -10,
            backgroundColor: this.state.show ? "hotpink" : null
        }

        const transitionStyles = {
            entering: { opacity: 0 },
            entered: { opacity: 1 },
        };

        return (
            <div>
                <div className="left">
                    <img src={link} alt="male" onClick={() => this.clickIcon()} />
                </div>
                <Transition in={this.state.show} timeout={4}>
                    {state => (
                        <div className="item"
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}>
                            <ComposedComponent />
                        </div>
                    )}
                </Transition>
                {
                    (!this.state.show &&
                        <div className="left text-title">
                            {name}
                        </div>)
                }
            </div>
        );
    }
}

export const Smoking = HOC(connect()(SmokingShow), icon_smoking, "smoking");

export const Gender = HOC(connect()(GenderShow), icon_select_gender, "gender");

export default HOC;