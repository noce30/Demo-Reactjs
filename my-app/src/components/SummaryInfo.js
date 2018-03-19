import React, { Component } from 'react';
import { connect } from "react-redux";

// const mapStateToProps = (state) => ({
//     isMale: state.gender.isMale,
//     isSmoking: state.smoking.isSmoking
// });

const SummaryInformation = ({ customer, isMale, isSmoking }) => {
    return (
        <div>
            <p className="title-name">{isMale ? "Mr" : "Mrs"}. {customer.fullName}</p>
            <p className="info-personal">{customer.age > 0 ? customer.age + ' years old' : '---'} | {customer.maritalStatus === 'Married' ? `Married with ${customer.kids} kids` : customer.maritalStatus}</p>
            <p className="info-personal">{customer.occupation} | Expected retire age: {customer.expectedRetireAge}</p>
            <p className="info-personal">Smoking:{isSmoking ? "Yes" : "No"}</p>
        </div>
    )
}

export default SummaryInformation;