import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    ...state.personalInfo
});

const SummaryInformation = ({ customer }) => {
    return (
        <div>
            <h3 className="title-name">{customer.gender == 'male' ? "Mr" : "Mrs"}. {customer.fullName}</h3>
            <h5>{customer.age} years old | {customer.maritalStatus}</h5>
            <h5>{customer.occupation} | Expected retire age: {customer.expectedRetireAge}</h5>
        </div>
    )
}

export default SummaryInformation;