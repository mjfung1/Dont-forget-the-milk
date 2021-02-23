import * as TaskAPIUtil from '../util/task_api_util';

export const RECEIVE_ALL_TASKS = 'RECEIVE_ALL_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const RECEIVE_SELECTED_TASK = 'RECEIVE_SELECTED_TASK';

const receiveSelectedTask = (task) => ({
    type: RECEIVE_SELECTED_TASK,
    task
});

export const receiveTask = task => ({
    type: RECEIVE_TASK,
    task
});

export const deleteATask = task => ({
    type: DELETE_TASK,
    task
});

export const receiveAllTasks = tasks => ({
    type: RECEIVE_ALL_TASKS,
    tasks
});

export const addSelectedTask = (task) => dispatch => {
  dispatch(receiveSelectedTask(task));
};

export const fetchAllTasks = () => dispatch => (
    TaskAPIUtil.fetchAllTasks()
        .then(task => (dispatch(receiveAllTasks(task))
    ))
);

export const fetchTask = (id) => dispatch => (
    TaskAPIUtil.fetchTask(id)
        .then(task => (dispatch(receiveTask(task))
    ))
);
    
export const createTask = (task) => dispatch => (
    TaskAPIUtil.createTask(task)
        .then(task => (dispatch(receiveTask(task))
    ))
);
        
export const updateTask = (task) => dispatch => (
    TaskAPIUtil.updateTask(task)
        .then(task => (dispatch(receiveTask(task))
    ))
);

export const deleteTask = (id) => dispatch => (
    TaskAPIUtil.deleteTask(id)
        .then(task => (dispatch(deleteATask(task))
    ))
);

    
