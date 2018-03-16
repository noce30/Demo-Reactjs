import React, { Component } from 'react';
import GenderShow from './GenderShow';
import icon_select_gender from '../assets/img/icons-demo/icon_select_gender.png';
import { Transition } from 'react-transition-group';

class Gender extends Component {

    constructor(props) {
        super(props)
        this.state = { showFull: false };
        this.ClickGender = this.ClickGender.bind(this);
    }

    ClickGender() {

        this.setState(({ showFull }) => ({
            showFull: !showFull
        }))
    }

    render() {
        const duration = 300;

        const defaultStyle = {
            transition: `opacity ${duration}ms ease-in-out`,
            opacity: 0,
            padding: 20,
            display: 'inline-block'
        }

        const transitionStyles = {
            entering: { opacity: 0 },
            entered: { opacity: 1 },
        };

        return (
            <div>
                <img src={icon_select_gender} alt="male" onClick={this.ClickGender} />
                <span className="field-info">Gender</span>
                <Transition in={this.state.showFull} timeout={300}>
                    {state => (
                        <div
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}>
                            <div className="item left" style={this.state.showFull ? { backgroundColor: "hotpink" } : null}>
                                <GenderShow
                                    showFull={this.state.showFull}
                                    onGenderChange={this.props.onGenderChange}
                                    checked={this.props.checked} />
                            </div>
                        </div>
                    )}
                </Transition>
            </div>
        );
    }
}

export default Gender;