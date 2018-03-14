import React, { Component } from 'react';
import occupationIcon from "../assets/img/icons-demo/icon_occupation.png";

const Occupation = (props) => {
    return (
        <div>
            <div>
                <img src={occupationIcon} onClick={e => props.onClickToShowOccupationInput(true)} />
                <span className="field-info">occupation</span>
            </div>
            {props.isShowOccupationInput &&
                <div> <input type="text" onChange={e => {
                    props.onUpdateOccupationField(e.target.value)
                }}
                />
                </div>
            }
        </div>
    )
}

export default Occupation;