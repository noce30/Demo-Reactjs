import React, { Component } from 'react';
import GenderShow from './GenderShow';
import icon_select_gender from '../assets/img/icons-demo/icon_select_gender.png';
import { Transition } from 'react-transition-group';
import { connect } from 'react-redux';
import { CLICK_GENDER_ICON } from '../constants/actionConstants';

class Gender extends Component {
   
    render() {

        const duration = 300;

        const defaultStyle = {
            transition: `opacity ${duration}ms ease-in-out`,
            opacity: 0,        
            top: 0,  
            display: 'inline-block',
            position: 'absolute'          
        }

        const transitionStyles = {
            entering: { opacity: 0 },
            entered: { opacity: 1 },
        };

        return (
            <div>
                <img className="img-gender-container" src={icon_select_gender} alt="male" onClick={e => this.props.dispatch({ type: CLICK_GENDER_ICON, value: !this.props.showFull })} />              
                <span className="field-info">Gender</span>
                <Transition in={this.props.showFull} timeout={300}>
                    {state => (
                        <div
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}>
                            <div className="item" style={this.props.showFull ? { backgroundColor: "hotpink" } : null}>
                                <GenderShow
                                    onGenderChange={this.props.onGenderChange}
                                    checked={this.props.checked} />
                            </div>
                        </div>
                    )}
                </Transition>
            </div >
        );
    }
}
 const mapStateToProps = (state) => ({
    showFull: state.gender.showFull
})

export default connect(mapStateToProps)(Gender);