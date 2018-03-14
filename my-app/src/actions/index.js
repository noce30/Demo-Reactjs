import {
    SELECT_MARITAL_STATUS,
    SHOW_SELECT_MARITAL_OPTIONS,
    SHOW_SELECT_DATE_PICKER,
    SELECT_DATE_PICKER,
    SHOW_KID_NUMBER,
    SELECT_KID_NUMBER
} from "../constants/actionConstants";

function selectMaritalStatusOptions(value) {
    return {
        type: SELECT_MARITAL_STATUS,
        value
    }
}

function selectKidsNumber(value) {
    return {
        type: SELECT_KID_NUMBER,
        value
    }
}

function showSelectKidNumber(isShowed) {
    return{
        type: SHOW_KID_NUMBER,
        isShowed
    }
}

function showSelectOption(isShowed) {
    return {
        type: SHOW_SELECT_MARITAL_OPTIONS,
        isShowed
    }
}

function showSelectDatePicker(isShowed) {
    return {
        type: SHOW_SELECT_DATE_PICKER,
        isShowed
    }
}

function selectDateOfBirth(value) {
    return {
        type: SELECT_DATE_PICKER,
        value
    }
}

export default {
    selectMaritalStatusOptions,
    showSelectOption,
    showSelectDatePicker,
    selectDateOfBirth,
    selectKidsNumber,
    showSelectKidNumber
}