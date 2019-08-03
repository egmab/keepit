import { combineReducers } from 'redux'
import ItemsReducer from './ItemsReducer'

const KeepItApp = combineReducers({
  ItemsReducer,
})

export default KeepItApp;