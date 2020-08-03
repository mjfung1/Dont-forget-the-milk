


import { connect } from 'react-redux';
import React from 'react';
import { createTask, deleteTask, allTasks, updateTask } from '../../actions/task_actions';
import taskForm from './task_form';

const msp = (state) => {
    // debugger
    return ({
        
        tasks: Object.values(state.tasks),
        formType: 'no_list'
    });
};

const mdp = (dispatch) => {
    return ({
        createTask: (task) => dispatch(createTask(task)),
        action: () => dispatch(allTasks()),
        deleteTask: (id) => dispatch(deleteTask(id)),
        updateTask: (task) => dispatch(updateTask(task))
    })
}

export default connect(msp, mdp)(taskForm);