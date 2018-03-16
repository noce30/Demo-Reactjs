import React, { Component } from 'react';
import occupationIcon from "../assets/img/icons-demo/icon_occupation.png";

const Occupation = (props) => {
    return (
        <div className="col-md-8">
            <input className="form-control" type="text" onChange={e => {
                props.onUpdateOccupationField(e.target.value)
            }}
            />
        </div>
    )
}

export default Occupation;