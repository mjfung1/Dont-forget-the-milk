import { connect } from 'react-redux';
import { fetchAllLists } from '../../actions/list_actions';
import ListShow from "./list_show";



const mstp = ({ lists }) => {
    return ({
        lists: Object.values(lists)
    });
};

const mdtp = dispatch => {
    return ({
        fetchAllLists: () => dispatch(fetchAllLists())
    });
};

export default connect(mstp, mdtp)(ListShow);