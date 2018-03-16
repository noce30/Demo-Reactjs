import { connect } from "react-redux";
import actions from "../actions/index";
import DateOfBirth from "../components/DateOfBirth";
import HOC from "../components/HOC";
import icon_dob from '../assets/img/icons-demo/icon_dob.png';

const mapStateToProps = state => ({
    ...state.personalInfo
})

const mapDispatchToProps = dispatch => ({
    onSelectDob: value => dispatch(actions.selectDateOfBirth(value)),
    onClickToShowDatePicker: isShowed => dispatch(actions.showSelectDatePicker(isShowed))
})

const DateOfBirthContainer = HOC(connect(mapStateToProps, mapDispatchToProps)(DateOfBirth), icon_dob, 'date of birth');
export default DateOfBirthContainer;