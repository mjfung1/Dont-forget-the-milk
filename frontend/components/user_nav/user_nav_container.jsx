import { connect } from 'react-redux';
import UserNav from './user_nav';
import { logout } from '../../actions/session_actions';
import { fetchAllTasks } from '../../actions/task_actions';

const mapStateToProps = ({ tasks, session, entities: { users } }) => {
    return ({
        user: users[session.id],
        tasks: Object.values(tasks)
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        logout: () => dispatch(logout()),
        fetchAllTasks: () => dispatch(fetchAllTasks())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(UserNav);