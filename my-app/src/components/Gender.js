import React, { Component } from 'react';
import GenderShow from './GenderShow';
import icon_select_gender from '../assets/img/icons-demo/icon_select_gender.png';

class Gender extends Component {
    constructor(props) {
        super(props)
        this.state = { showFull: false };
        this.ClickGender = this.ClickGender.bind(this);
    }

    ClickGender() {
        this.setState({
            showFull: this.state.showFull ? false : true
        });
    }

    render() {
        return (
            <div className="item" style={this.state.showFull ? { backgroundColor: "hotpink" } : null}>
                <div className="left">
                    <img src={icon_select_gender} alt="male" onClick={this.ClickGender} />
                </div>
                <GenderShow
                    showFull={this.state.showFull}
                    onGenderChange={this.props.onGenderChange}
                    checked={this.props.checked}
                />
            </div>
        );
    }
}

export default Gender;