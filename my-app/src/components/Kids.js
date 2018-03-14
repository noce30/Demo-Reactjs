import React, { Component } from 'react';
import iconKid from "../assets/img/icons-demo/icon_kids.png";

const Kids = (props) => {
    const selectedNumber = props.selectedNumber;

    return (
        <div>
            <div>
                <img src={iconKid} onClick={e => props.onClickToShowSelectNumber(true)} />
                <div>
                    <span className="field-info">Kids</span>
                </div>
            </div>
            {props.isShowSelectKidsOption &&
                <div>
                    <select name="kids" value={selectedNumber} onChange={e => {
                        props.onSelectKidsNumber(e.target.value)
                        props.onClickToShowSelectNumber(false)
                    }}>
                        {props.numberOfKidsOptions.items.map((opt, i) => {
                            return <option key={i} value={opt}>{opt}</option>
                        })}
                    </select>
                </div>
            }
        </div>
    )
}

export default Kids;