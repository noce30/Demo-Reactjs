import { connect } from "react-redux";
import Kids from "../components/Kids";
import actions from "../actions/index";
import HOC from "../components/HOC";
import icon_kids from '../assets/img/icons-demo/icon_kids.png';

const numberOfKidsOptions = {
    items: ['1', '2', '3', '4', '5', '6', 'more'],
    selected: '1'
}

const mapStateToProps = state => ({
    numberOfKidsOptions,
    ...state.personalInfo
})

const mapDispatchToProps = dispatch => ({
    onSelectKidsNumber: value => dispatch(actions.selectKidsNumber(value)),
    onClickToShowSelectNumber: (isShowed) => dispatch(actions.showSelectKidNumber(isShowed))
})


export default HOC(connect(mapStateToProps, mapDispatchToProps)(Kids), icon_kids, 'kids');