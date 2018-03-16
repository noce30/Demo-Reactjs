import actions from "../actions/index"
import Occupation from "../components/Occupation";
import { connect } from "react-redux";
import HOC from "../components/HOC";
import icon_occupation from '../assets/img/icons-demo/icon_occupation.png';

const mapStateToProps = state => ({
    ...state.personalInfo
})

const mapDispatchToProps = dispatch => ({
    onClickToShowOccupationInput: isShowed => dispatch(actions.showOccupationInput(isShowed)),
    onUpdateOccupationField: value => dispatch(actions.updateOccupationInput(value))
})


export default HOC(connect(mapStateToProps, mapDispatchToProps)(Occupation), icon_occupation, 'occupation');
