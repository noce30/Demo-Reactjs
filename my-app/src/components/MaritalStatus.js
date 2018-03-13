import React, { Component } from 'react';
import iconStatus from "../assets/img/icons-demo/icon_status.png";

const MaritalStatus = (props) => {
    const selectedStatus = props.selectedStatus;
    if (!props.isShowSelectMaritalOption) {
        return <div>
            <img src={iconStatus} onClick={e => props.onClickToShowSelectStatus(true)} />
            <span className="field-info">marital status</span>
        </div>
    }
    return <div>
        <select name="maritalStatus" value={selectedStatus} onChange={e => {
            props.onSelectMaritalStatus(e.target.value)
            props.onClickToShowSelectStatus(false)
        }}>
            {props.maritalStatusOptions.items.map((opt, i) => {
                return <option key={i} value={opt}>{opt}</option>
            })}
        </select>
        <span className="field-info">marital status</span>
    </div>
}

export default MaritalStatus;