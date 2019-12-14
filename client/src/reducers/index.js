import { combineReducers } from 'redux';
import auth from './auth';
import contacts from './contacts';
import alert from './alert';

export default combineReducers({
    contacts,
    auth,
    alert
});