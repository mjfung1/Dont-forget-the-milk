import { connect } from 'react-redux';
import React from 'react';
import { createTask, deleteTask, allTasks, updateTask } from '../../actions/task_actions';
import taskForm from './task_form';
import { logout } from '../../actions/session_actions';

const msp = ({ tasks, session, entities: { users } }) => {
    // debugger
    return ({
        currentUser: users[session.id],
        tasks: Object.values(tasks)
    });
};

const mdp = (dispatch) => {
    return ({
        logout: () => dispatch(logout()),
        action: () => dispatch(allTasks()),
        createTask: (task) => dispatch(createTask(task)),
        updateTask: (task) => dispatch(updateTask(task)),
        deleteTask: (id) => dispatch(deleteTask(id))
    })
}

export default connect(msp, mdp)(taskForm);