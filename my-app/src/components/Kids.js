import React, { Component } from 'react';
import iconStatus from "../assets/img/icons-demo/icon_status.png";

class Kids extends Component {
    constructor(props) {
        super(props);
        this.state = { isShowSelected: false, numberOfChildren: 0 };
    }

    render() {
        if (!this.state.isShowSelected) {
            return
            <div>
            </div>
        }         

    }
}

export default Kids;
