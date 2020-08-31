import {combineReducers} from 'redux'
import calendarInfoReducer from './calendarInfoReducer'
import appointmentReducer from './appointmentReducer'

export default combineReducers({
  calendarInfo: calendarInfoReducer,
  appointment: appointmentReducer
})