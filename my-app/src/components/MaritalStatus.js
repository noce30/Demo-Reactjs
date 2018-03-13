import React, { Component } from 'react';
import iconStatus from "../assets/img/icons-demo/icon_status.png";

class MaritalStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = { maritalStatus: 'Married', isShowSelectOptions: false };
        this.state.maritalStatusOptions = ['Single', 'Married', 'Divorced', 'Widowed'];
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value, isShowSelectOptions: false });
    }

    handShowSelectStatus(e) {
        e.preventDefault();
        this.setState({ isShowSelectOptions: true });
    }

    render() {
        if (!this.state.isShowSelectOptions) {
            return <div>
                <img src={iconStatus} onClick={e => this.handShowSelectStatus(e)} />
                <p>{this.state.maritalStatus}</p>
            </div>
        }
        return <select name="maritalStatus" value={this.state.maritalStatus} onChange={e => { this.handleChange(e) }}>
            {this.state.maritalStatusOptions.map((opt, i) => {
                return <option key={i} value={opt}>{opt}</option>
            })}
        </select>
    }
}

export default MaritalStatus;