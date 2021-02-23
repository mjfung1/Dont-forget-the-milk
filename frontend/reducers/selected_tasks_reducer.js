
import { RECEIVE_SELECTED_TASK } from '../actions/task_actions';

const selectedTasksReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_SELECTED_TASK:
      return [...oldState, action.task];
    default:
      return oldState;
  }
};

export default selectedTasksReducer;
