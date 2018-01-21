import { combineReducers } from 'redux';
import users from './userReducer';
import user from './editReducer'

export default combineReducers({
   users,
   user
});
