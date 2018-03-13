import { connect } from "react-redux";
import MaritalStatus from "../components/MaritalStatus";
import actions from "../actions/index";

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

const MaritalStatusContainer = connect(mapStateToProps, mapDispatchToProps)(MaritalStatus);
export default MaritalStatusContainer;