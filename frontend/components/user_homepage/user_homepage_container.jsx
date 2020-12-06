import { connect } from 'react-redux';
import Homepage from './homepage';
import { logout } from '../../actions/session_actions';
import { allTasks } from '../../actions/task_actions';

const mapStateToProps = ({ tasks, session, entities: { users } }) => {
    console.log(tasks)
    return ({
        user: users[session.id],
        tasks: Object.values(tasks)
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        logout: () => dispatch(logout()),
        fetchAllTasks: () => dispatch(allTasks())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);