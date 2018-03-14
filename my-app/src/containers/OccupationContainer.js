import actions from "../actions/index"
import Occupation from "../components/Occupation";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    ...state.personalInfo
})

const mapDispatchToProps = dispatch => ({
    onClickToShowOccupationInput: isShowed => dispatch(actions.showOccupationInput(isShowed)),
    onUpdateOccupationField: value => dispatch(actions.updateOccupationInput(value))
})

const OccupationContainer = connect(mapStateToProps, mapDispatchToProps)(Occupation);
export default OccupationContainer;
