import React, { Component } from 'react';
import iconKid from "../assets/img/icons-demo/icon_kids.png";

const Kids = (props) => {
    const selectedNumber = props.selectedNumber;
    return (
        <div className="col-md-4">
            <select className="form-control" name="kids" value={selectedNumber} onChange={e => {
                props.onSelectKidsNumber(e.target.value)
                props.onClickToShowSelectNumber(false)
            }}>
                {props.numberOfKidsOptions.items.map((opt, i) => {
                    return <option key={i} value={opt}>{opt}</option>
                })}
            </select>
        </div>
    )
}

export default Kids;