import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { allTasks, deleteTask, createTask, updateTask } from '../../actions/task_actions';
import AllTasks from './all_tasks'


const mstp = (state) => {
    return {
        tasks: Object.values(state.tasks)
    };
}

const mdtp = dispatch => {
    return {
        fetchAllTasks: () => dispatch(allTasks()),
        deleteTask: (id) => dispatch(deleteTask(id)),
        createTask: (task) => dispatch(createTask(task)),
        updateTask: (task) => dispatch(updateTask(task))
    };
};


export default withRouter(connect(mstp, mdtp)(AllTasks));