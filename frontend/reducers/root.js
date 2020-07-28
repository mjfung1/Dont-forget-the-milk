import sessionReducer from '/session';
import { combineReducers } from 'redux';
import mysessionReducer from './session'

export default combineReducers({
    session: mysessionReducer
});