import React, { Component } from 'react';

import SummaryInformation from "../components/SummaryInfo"
import iconMale from "../assets/img/icons-demo/icon_male.png";
import iconFemale from "../assets/img/icons-demo/icon_female.png";
import { connect } from "react-redux";

const mockCustomer = {
    fullName: "John Doe",
    gender: ".",
    age: 0,
    maritalStatus: "---",
    occupation: "---",
    expectedRetireAge: 60,
    kids: 0
}

const mapStateToProps = (state) => ({
    ...state.personalInfo,
    isMale: state.gender.isMale,
    isSmoking: state.smoking.isSmoking
})

class PersonalInfoPanel extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        mockCustomer.maritalStatus = this.props.selectedStatus ? this.props.selectedStatus : mockCustomer.maritalStatus;
        mockCustomer.age = this.props.selectedDob ? new Date().getFullYear() - new Date(this.props.selectedDob).getFullYear() : mockCustomer.age;
        mockCustomer.kids = this.props.selectedNumber ? this.props.selectedNumber : mockCustomer.kids;
        mockCustomer.occupation = this.props.occupationValue === undefined ? mockCustomer.occupation : this.props.occupationValue;
        return (
            <div>
                <SummaryInformation customer={mockCustomer} isMale={this.props.isMale} isSmoking={this.props.isSmoking} />
                <img src={this.props.isMale ? iconFemale : iconMale} />
            </div>
        );
    }
}

export default connect(mapStateToProps, {})(PersonalInfoPanel);