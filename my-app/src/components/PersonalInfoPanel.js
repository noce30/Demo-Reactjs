import React, { Component } from 'react';
import MaritalStatus from "../components/MaritalStatus";
import SummaryInformation from "../components/SummaryInfo";


const mockCustomer = {
    fullName: "John Doe",
    gender: "male",
    age: 32,
    maritalStatus: "Married",
    occupation: "Professional",
    expectedRetireAge: 60
}

class PersonalInfoPanel extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <SummaryInformation customer={mockCustomer} />
                <MaritalStatus />
            </div>
        );
    }
}

export default PersonalInfoPanel;