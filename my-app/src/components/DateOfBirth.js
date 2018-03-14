import React, { Component } from 'react';
import dobIcon from "../assets/img/icons-demo/icon_dob.png";

const DateOfBirth = (props) => {
    const selectedStatus = props.selectedStatus;
    return (
        <div>
            <div>
                <img src={dobIcon} onClick={e => props.onClickToShowDatePicker(true)} /> <span className="field-info">date of birth</span>
            </div>
            {
                props.isShowSelectDatePicker &&
                <div>
                    <input type="date" onChange={e => {
                        props.onSelectDob(e.target.value)
                        props.onClickToShowDatePicker(false)
                    }} />
                </div>
            }
        </div>
    )
}

export default DateOfBirth;