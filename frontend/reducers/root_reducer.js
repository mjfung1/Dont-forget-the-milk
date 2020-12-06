import { combineReducers } from 'redux';
import lists from './lists_reducer';
import tasks from './tasks_reducer';
import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';

const rootReducer = combineReducers({
    entities,
    session,
    tasks,
    lists,
    errors,
});

export default rootReducer;
