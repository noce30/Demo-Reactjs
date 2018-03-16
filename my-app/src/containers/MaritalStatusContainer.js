import { connect } from "react-redux";
import MaritalStatus from "../components/MaritalStatus";
import actions from "../actions/index";
import HOC from "../components/HOC";
import icon_status from '../assets/img/icons-demo/icon_status.png';

const maritalStatusOptions = {
    items: ['Single', 'Married', 'Divorced', 'Widowed'],
    selectedStatus: 'Single'
}

const mapStateToProps = state => ({
    maritalStatusOptions,
    ...state.personalInfo
})

const mapDispatchToProps = dispatch => ({
    onSelectMaritalStatus: value => dispatch(actions.selectMaritalStatusOptions(value)),
    onClickToShowSelectStatus: (isShowed) => dispatch(actions.showSelectOption(isShowed))
})

const MaritalStatusContainer = HOC(connect(mapStateToProps, mapDispatchToProps)(MaritalStatus), icon_status, 'marital status');
export default MaritalStatusContainer;
