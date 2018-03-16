import {
    CLICK_SMOKING_ICON
} from '../constants/actionConstants';

const defaultState = {showSmoking: false };

const smokingReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CLICK_SMOKING_ICON: {
            return {
                ...state, showSmoking: action.value
            }
        }

        default:
            return state;
    }
}

export default smokingReducer;