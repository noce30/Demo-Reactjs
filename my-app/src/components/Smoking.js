import React, { Component } from 'react';
import PropTypes from 'prop-types';
import icon_smoking from '../assets/img/icons-demo/icon_smoking.png';
import SmokingShow from './SmokingShow';

class Smoking extends Component {
    constructor() {
        super();
        this.clickSmoking = this.clickSmoking.bind(this);
    }
  
    clickSmoking() {
        this.setState({
            showFull: this.state.showFull ? false : true
        });
    }

    render() {
        return (
            <div className="item" style={this.state.showFull ? { backgroundColor: "hotpink" } : null}>
                <div className="left">
                    <img src={icon_smoking} alt="male" onClick={this.clickSmoking} />
                </div>
                <SmokingShow
                    showFull={this.state.showFull}                    
                />
            </div>
        );
    }
}

export default Smoking;