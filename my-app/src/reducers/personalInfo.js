import {
    SELECT_MARITAL_STATUS,
    SELECT_DATE_PICKER,
    SHOW_KID_NUMBER,
    SELECT_KID_NUMBER,
    SHOW_SELECT_MARITAL_OPTIONS,
    SHOW_SELECT_DATE_PICKER,
    UPDATE_OCCUPATION_INPUT,
    SHOW_OCCUPATION_INPUT,
    CLICK_GENDER_ICON,
    SELECT_GENDER,
    CLICK_SMOKING_ICON
} from "../constants/actionConstants";

const personalInfo = (state = {}, action) => {
    switch (action.type) {
        case SELECT_MARITAL_STATUS: {
            return {
                ...state, selectedStatus: action.value
            }
        }
        case SELECT_DATE_PICKER: {
            return {
                ...state, selectedDob: action.value
            }
        }
        case UPDATE_OCCUPATION_INPUT: {
            return {
                ...state, occupationValue: action.value
            }
        }
        case SHOW_SELECT_MARITAL_OPTIONS: {
            return {
                ...state, isShowSelectMaritalOption: state.isShowSelectMaritalOption ? false : action.isShowed
            }
        }
        case SHOW_OCCUPATION_INPUT: {
            return {
                ...state, isShowOccupationInput: state.isShowOccupationInput ? false : action.isShowed
            }
        }
        case SHOW_SELECT_DATE_PICKER: {
            return {
                ...state, isShowSelectDatePicker: state.isShowSelectDatePicker ? false : action.isShowed
            }
        }
        case SHOW_KID_NUMBER: {
            return {
                ...state, isShowSelectKidsOption: state.isShowSelectKidsOption ? false : action.isShowed
            }
        }
        case SELECT_KID_NUMBER: {
            return {
                ...state, selectedNumber: action.value
            }
        }

        case CLICK_GENDER_ICON: {
            return {
                ...state, showFull: action.value
            }
        }

        case SELECT_GENDER: {
            return {
                ...state, isMale: action.value
            }
        }

        case CLICK_SMOKING_ICON:{
            return{
                ...state, showSmoking: action.value
            }
        }

        default:
            return state;
    }
}

export default personalInfo; 