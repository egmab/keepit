import { combineReducers } from 'redux';
import UserReducer from './UserReducer';


const KeepItApp = combineReducers({
  UserReducer,
})

export default KeepItApp;