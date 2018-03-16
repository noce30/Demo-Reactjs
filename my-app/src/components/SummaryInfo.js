import React, { Component } from 'react';
import { connect } from "react-redux";

// const mapStateToProps = (state) => ({
//     isMale: state.gender.isMale,
//     isSmoking: state.smoking.isSmoking
// });

const SummaryInformation = ({ customer, isMale, isSmoking }) => {
    console.log(isSmoking);
    return (
        <div>
            <h3 className="title-name">{isMale ? "Mr" : "Mrs"}. {customer.fullName}</h3>
            <h5>{customer.age} years old | {customer.maritalStatus === 'Married' ? `Married with ${customer.kids} kids` : customer.maritalStatus}</h5>
            <h5>{customer.occupation} | Expected retire age: {customer.expectedRetireAge}</h5>
            {isMale &&
                <h5>Smoking:{isSmoking ? "Yes" : "No"}</h5>
            }

        </div>
    )
}

export default SummaryInformation;