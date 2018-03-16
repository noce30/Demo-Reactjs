import React, { Component } from 'react';
import iconStatus from "../assets/img/icons-demo/icon_status.png";


const MaritalStatus = (props) => {
    const selectedStatus = props.selectedStatus;
    return (
        <div className="col-md-8">
            <select className="form-control" name="maritalStatus" value={selectedStatus} onChange={e => {
                props.onSelectMaritalStatus(e.target.value)
            }}>
                {props.maritalStatusOptions.items.map((opt, i) => {
                    return <option key={i} value={opt}>{opt}</option>
                })}
            </select>
        </div>
    )
}

export default MaritalStatus;