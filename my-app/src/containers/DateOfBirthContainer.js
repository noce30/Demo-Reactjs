import { connect } from "react-redux";
import actions from "../actions/index";
import DateOfBirth from "../components/DateOfBirth";

const mapStateToProps = state => ({
    ...state.personalInfo
})

const mapDispatchToProps = dispatch => ({
    onSelectDob: value => dispatch(actions.selectDateOfBirth(value)),
    onClickToShowDatePicker: isShowed => dispatch(actions.showSelectDatePicker(isShowed))
})

const DateOfBirthContainer = connect(mapStateToProps, mapDispatchToProps)(DateOfBirth);
export default DateOfBirthContainer;