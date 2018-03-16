import React, { Component } from 'react';
import { connect } from 'react-redux';
import SmokingShow from './SmokingShow';
import { CLICK_SMOKING_ICON } from '../constants/actionConstants';
import { SLECT_SMOKING } from '../constants/actionConstants'

const HOC = (ComposedComponent, link, name) => class extends Component {
    constructor() {
        super();
        this.state = { show: false }
    }

    clickIcon() {
        this.setState({ show: !this.state.show });
    }

    render() {
        return (
            <div className="item" style={this.state.show ? { backgroundColor: "hotpink" } : null}>
                <div className="left">
                    <img src={link} alt="male" onClick={this.clickIcon.bind(this)} />
                </div>
                {this.state.show &&
                    <div>
                        <ComposedComponent />
                    </div>
                }
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

export default HOC;