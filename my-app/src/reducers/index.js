import { combineReducers } from "redux";
import personalInfo from "../reducers/personalInfo";
import genderReducer from "../reducers/genderReducer";
import SomkingReducer from "../reducers/SomkingReducer"

export default combineReducers({
    personalInfo,
    gender: genderReducer,
    smoking: SomkingReducer
});
