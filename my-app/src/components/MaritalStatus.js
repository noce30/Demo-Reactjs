import React, { Component } from 'react';

class MaritalStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = { maritalStatus: 'Married' };
        this.state.maritalStatusOptions = ['Single', 'Married', 'Divorced', 'Widowed'];
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <select name="maritalStatus" value={this.state.maritalStatus} onChange={e => { this.handleChange(e) }}>
                {this.state.maritalStatusOptions.map((opt, i) => {
                    return <option key={i} value={opt}>{opt}</option>
                })}
            </select>
        )
    }
}

export default MaritalStatus;