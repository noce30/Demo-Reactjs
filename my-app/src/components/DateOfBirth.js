import React, { Component } from 'react';
import dobIcon from "../assets/img/icons-demo/icon_dob.png";

const DateOfBirth = (props) => {
    const selectedStatus = props.selectedStatus;
    return (
        <div className="col-md-8" style={{marginTop:'15px'}}>
            <input type="date" onChange={e => {
                props.onSelectDob(e.target.value)
                props.onClickToShowDatePicker(false)
            }} />
        </div>
    )
}

export default DateOfBirth;