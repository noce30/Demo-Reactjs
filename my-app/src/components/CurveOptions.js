import React, { Component } from 'react';
import iconStatus from "../assets/img/icons-demo/icon_status.png";
import iconDot from "../assets/img/icons-demo/icon_dot.png";

class CurveOptions extends Component {

    render() {
        return (
            <div>
                <ul className="circle-container">
                    <li><img src={iconStatus} /></li>
                    <li><img src={iconStatus} /></li>
                    <li><img src={iconStatus} /></li>
                    <li><img src={iconStatus} /></li>
                    <li><img src={iconStatus} /></li>
                    <li><img src={iconStatus} /></li>
                </ul>
                <ul className="circle-inner" >
                    <li><img src={iconDot} /></li>
                    <li><img src={iconDot} /></li>
                    <li><img src={iconDot} /></li>
                    <li><img src={iconDot} /></li>
                    <li><img src={iconDot} /></li>
                    <li><img src={iconDot} /></li>
                </ul>
            </div>
        );
    }
}

export default CurveOptions;