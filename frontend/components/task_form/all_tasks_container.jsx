import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAllTasks, 
        deleteTask, 
        createTask, 
        updateTask,
        addSelectedTask} from '../../actions/task_actions';
import AllTasks from './all_tasks'


const mstp = (state) => {
    return {
        tasks: Object.values(state.tasks)
    };
}

const mdtp = dispatch => {
    return {
        fetchAllTasks: () => dispatch(fetchAllTasks()),
        deleteTask: (id) => dispatch(deleteTask(id)),
        createTask: (task) => dispatch(createTask(task)),
        updateTask: (task) => dispatch(updateTask(task)),
        addSelectedTask: (task) => dispatch(addSelectedTask(task))
    };
};


export default withRouter(connect(mstp, mdtp)(AllTasks));
// export default connect(mstp, mdtp)(AllTasks);