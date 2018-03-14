import React, { Component } from 'react';

import SummaryInformation from "../components/SummaryInfo"
import { connect } from "react-redux";

const mockCustomer = {
    fullName: "John Doe",
    gender: "male",
    age: 32,
    maritalStatus: "Single",
    occupation: "Professional",
    expectedRetireAge: 60
}

const mapStateToProps = (state) => ({
    ...state.personalInfo
})

class PersonalInfoPanel extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        mockCustomer.maritalStatus = this.props.selectedStatus ? this.props.selectedStatus : mockCustomer.maritalStatus;
        mockCustomer.age = this.props.selectedDob ? new Date().getFullYear() - new Date(this.props.selectedDob).getFullYear() : mockCustomer.age;

        return (
            <div>
                <SummaryInformation customer={mockCustomer} />
            </div>
        );
    }
}

export default connect(mapStateToProps, {})(PersonalInfoPanel);