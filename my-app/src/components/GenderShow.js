import React, { Component } from 'react';
import PropTypes from 'prop-types';
import icon_female from '../assets/img/icons-demo/icon_female.png';
import icon_male from '../assets/img/icons-demo/icon_male.png';

class GenderShow extends Component {
    constructor(props) {
        super(props);
        this.handleGender = this.handleGender.bind(this);
    }

    handleGender(e) {
        this.props.onGenderChange(e.target.checked);
    }

    render() {
        return (
            (this.props.showFull &&
                <div>
                    <div className="right">
                        <img src={icon_female} alt="male" />
                    </div>
                    <div className="right-swith">
                        <label className="switch">
                            <input type="checkbox" checked={this.props.checked} onChange={this.handleGender} />
                            <span className="slider round"></span>
                        </label>
                    </div>

                    <div className="right">
                        <img src={icon_male} alt="male" />
                    </div>
                </div>
            )
        );
        // else
        // {
        //     return(
        //         <div className="left text-title">
        //             GENDER
        //         </div>
        //     )
        // }

    }
}

export default GenderShow;