import {
    CLICK_SMOKING_ICON,
    SLECT_SMOKING
} from '../constants/actionConstants';

const defaultState = { showSmoking: false, isSmoking: false };

const smokingReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CLICK_SMOKING_ICON: {
            return {
                ...state, showSmoking: action.value
            }
        }

        case SLECT_SMOKING: {
            return {
                ...state, isSmoking: action.value
            }
        }

        default:
            return state;
    }
}

export default smokingReducer;