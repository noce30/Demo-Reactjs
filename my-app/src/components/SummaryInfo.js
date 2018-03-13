import React, { Component } from 'react';

const SummaryInformation = ({ customer }) => {
    return (
        <div>
            <h3>{customer.gender == 'male' ? "Mr" : "Mrs"}. {customer.fullName}</h3>
            <h5>{customer.age} years old | {customer.maritalStatus}</h5>
            <h5>{customer.occupation} | Expected retire age: {customer.expectedRetireAge}</h5>
        </div>
    )
}

export default SummaryInformation;