import React, { Component } from 'react';
import iconStatus from "../assets/img/icons-demo/icon_status.png";

const MaritalStatus = (props) => {
    const selectedStatus = props.selectedStatus;
    return (
        <div>
            <div>
                <img src={iconStatus} onClick={e => props.onClickToShowSelectStatus(true)} />
                <div>
                    <span className="field-info">marital status</span>
                </div>
            </div>
            {props.isShowSelectMaritalOption &&
                <div>
                    <select name="maritalStatus" value={selectedStatus} onChange={e => {
                        props.onSelectMaritalStatus(e.target.value)
                    }}>
                        {props.maritalStatusOptions.items.map((opt, i) => {
                            return <option key={i} value={opt}>{opt}</option>
                        })}
                    </select>
                </div>
            }
        </div>
    )
}

export default MaritalStatus;