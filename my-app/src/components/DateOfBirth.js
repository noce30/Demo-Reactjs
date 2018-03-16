import React, { Component } from 'react';
import dobIcon from "../assets/img/icons-demo/icon_dob.png";

const DateOfBirth = (props) => {
    const selectedStatus = props.selectedStatus;
    return (
        <div>
            <input type="date" onChange={e => {
                props.onSelectDob(e.target.value)
                props.onClickToShowDatePicker(false)
            }} />
        </div>
    )
}

export default DateOfBirth;