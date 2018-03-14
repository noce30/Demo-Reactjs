import React, { Component } from 'react';
import iconKid from "../assets/img/icons-demo/icon_kids.png";

const Kids = (props) => {
    const selectedNumber = props.selectedNumber;
    if (!props.isShowSelectKidsOption) {
        return <div>
            <img src={iconKid} onClick={e => props.onClickToShowSelectNumber(true)} />
            <span className="field-info">Kids</span>
        </div>
    }
    return <div>
        <select name="kids" value={selectedNumber} onChange={e => {
            props.onSelectKidsNumber(e.target.value)
            props.onClickToShowSelectNumber(false)
        }}>
            {props.numberOfKidsOptions.items.map((opt, i) => {
                return <option key={i} value={opt}>{opt}</option>
            })}
        </select>
        <span className="field-info">Select number of kids</span>
    </div>
}

export default Kids;