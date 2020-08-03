import { RECEIVE_TASK, RECEIVE_ALL_TASKS, DELETE_TASK } from '../actions/task_actions';
import { merge } from 'lodash';

const taskReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_ALL_TASKS:
            return action.tasks
        case RECEIVE_TASK:
            return merge({}, state, { [action.task.id]: action.task })
        case DELETE_TASK:
            const newState = merge({}, state)
            delete newState[action.task.id]
            return newState;
        default:
            return state;
    }
};

export default taskReducer;