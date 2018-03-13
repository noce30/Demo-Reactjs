import React, { Component } from 'react';
import dobIcon from "../assets/img/icons-demo/icon_dob.png";

const DateOfBirth = (props) => {
    const selectedStatus = props.selectedStatus;
    if (!props.isShowSelectDatePicker) {
        return <div>
            <img src={dobIcon} onClick={e => props.onClickToShowDatePicker(true)} /> <span className="field-info">date of birth</span>
        </div>
    }
    return <div><input type="date" onChange={e => {
        props.onSelectDob(e.target.value)
        props.onClickToShowDatePicker(false)
    }}
    /><span className="field-info">date of birth</span>
    </div>
}

export default DateOfBirth;