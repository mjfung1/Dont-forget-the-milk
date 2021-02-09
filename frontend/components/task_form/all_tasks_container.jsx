import { connect } from 'react-redux';
import { deleteTask, allTasks, updateTask } from '../../actions/task_actions';
import AllTasks from './all_tasks';


const msp = ({ lists, tasks, session, entities: { users } }) => {
    // debugger
    return ({
        currentUser: users[session.id],
        tasks: Object.values(tasks),
        lists: Object.values(lists)
    });
};


const mdp = (dispatch) => {
    return ({
        logout: () => dispatch(logout()),
        action: () => dispatch(allTasks()),
        updateTask: (task) => dispatch(updateTask(task)),
        deleteTask: (id) => dispatch(deleteTask(id))
    })
}

export default connect(msp, mdp)(AllTasks); 