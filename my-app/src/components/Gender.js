import React, { Component } from 'react';
import icon_female from '../assets/img/icons-demo/icon_female.png';
import icon_male from '../assets/img/icons-demo/icon_male.png';
import icon_select_gender from'../assets/img/icons-demo/icon_select_gender.png'

class Gender extends Component {
    constructor(props) {
        super(props)
        this.handleGender = this.handleGender.bind(this);
    }

    handleGender(e)
    {
        this.props.onGenderChange(e.target.checked);
    }

    render() {
        return (
            <div className="item">
                <div className="left">
                    <img src={icon_select_gender} alt="male" />
                </div>
                <div className="right">
                    <img src={icon_female} alt="male" />
                </div>

                <div className="right-swith">
                    <label className="switch">
                        <input type="checkbox" checked={this.props.checked} onChange={this.handleGender}/>
                        <span className="slider round"></span>
                    </label>
                </div>

                <div className="right">
                    <img src={icon_male} alt="male" />
                </div>
            </div>
        );
    }
}

export default Gender;