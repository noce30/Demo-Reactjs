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

const PersonalInfoPanel = props => {
    mockCustomer.maritalStatus = props.selectedStatus ? props.selectedStatus : mockCustomer.maritalStatus;
    mockCustomer.age = props.selectedDob ? new Date().getFullYear() - new Date(props.selectedDob).getFullYear() : mockCustomer.age;
    mockCustomer.occupation = props.occupationValue === undefined ? mockCustomer.occupation : props.occupationValue;
    return (
        <div>
            <SummaryInformation customer={mockCustomer} />
        </div>
    );
}

export default connect(mapStateToProps, {})(PersonalInfoPanel);