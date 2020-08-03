import { connect } from 'react-redux';
import React from 'react';
import { createTask, deleteTask, allTasks, updateTask } from '../../actions/task_actions';
import taskForm from './task_form';

const msp = (state) => {
    // debugger
    return ({
        
        tasks: Object.values(state.tasks)
    });
};

const mdp = (dispatch) => {
    return ({
        action: () => dispatch(allTasks()),
        createTask: (task) => dispatch(createTask(task)),
        updateTask: (task) => dispatch(updateTask(task)),
        deleteTask: (id) => dispatch(deleteTask(id))
    })
}

export default connect(msp, mdp)(taskForm);