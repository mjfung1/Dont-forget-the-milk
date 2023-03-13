import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import {  updateTask, fetchTask } from '../../actions/task_actions';
import TaskShow from './task_show';

const mstp = (state, ownProps) => {
    console.log(ownProps, 'dawerewrere')
    return {
        task: state.tasks[ownProps.match.params.taskId]
    };
};

const mdtp = dispatch => {
    return {
        fetchTask: (id) => dispatch(fetchTask(id)),
        updateTask: (task) => dispatch(updateTask(task))
    };
};

export default connect(mstp, mdtp)(TaskShow);