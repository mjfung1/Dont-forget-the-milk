import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {  updateTask } from '../../actions/task_actions';
import TaskShow from './task_show';

const mstp = (state) => {
    // console.log(state.selectedTasks, 'from container')
    return {
        selectedTask: state.selectedTasks,
        tasks: Object.values(state.tasks)
    };
};

const mdtp = dispatch => {
    return {
        updateTask: (task) => dispatch(updateTask(task))
    };
};

export default withRouter(connect(mstp, mdtp)(TaskShow));