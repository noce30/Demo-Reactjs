import React, { Component } from 'react';

class SmokingShow extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        if (this.props.showFull) {
            return (
                <div className="onoffswitch right-swith">
                    <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" defaultChecked />
                        <label className="onoffswitch-label" htmlFor="myonoffswitch">
                        <span className="onoffswitch-inner"></span>
                        <span className="onoffswitch-switch"></span>
                    </label>
                </div>
            );
        }
        else {
            return (
                <div className="left text-title">
                    smoking
                </div>
            );
        }
    }
}

export default SmokingShow;