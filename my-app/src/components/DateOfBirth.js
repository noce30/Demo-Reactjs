import React, { Component } from 'react';
import dobIcon from "../assets/img/icons-demo/icon_dob.png";

const DateOfBirth = (props) => {
    const selectedDob = props.selectedDob;
    return (
        <div className="col-md-8" style={{ marginTop: '15px' }}>
            <input type="date" onChange={e => {
                props.onSelectDob(e.target.value)
                props.onClickToShowDatePicker(false)
            }} className="form-control" value={selectedDob} />
        </div>
    )
}

export default DateOfBirth;