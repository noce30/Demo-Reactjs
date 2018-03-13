import {
    SELECT_MARITAL_STATUS, 
    SELECT_DATE_PICKER, 
    SHOW_SELECT_MARITAL_OPTIONS, 
    SHOW_SELECT_DATE_PICKER }from "../constants/actionConstants"; 

const personalInfo = (state =  {}, action) =>  {
    switch (action.type) {
        case SELECT_MARITAL_STATUS: {
            return {
                ...state, selectedStatus:action.value
            }
        }
        case SELECT_DATE_PICKER: {
            return {
                ...state, selectedDob:action.value
            }
        }
        case SHOW_SELECT_MARITAL_OPTIONS: {
            return {
                ...state, isShowSelectMaritalOption:action.isShowed
            }
        }
        case SHOW_SELECT_DATE_PICKER: {
            return {
                ...state, isShowSelectDatePicker:action.isShowed
            }
        }
        default:
            return state; 
    }
}

export default personalInfo; 