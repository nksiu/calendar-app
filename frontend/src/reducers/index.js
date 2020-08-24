import {combineReducers} from 'redux'
import calendarInfoReducer from './calendarInfoReducer'

export default combineReducers({
  calendarInfo: calendarInfoReducer
})