import {
    CLICK_GENDER_ICON,
    SELECT_GENDER
} from '../constants/actionConstants';

const defaultState = { showFull: false, isMale: false};

const genderReducer = (state = defaultState, action) => {
    switch (action.type) {
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

        default:
            return state;
    }
}

export default genderReducer;