import {combineReducers} from 'redux'
import calendarInfoReducer from './calendarInfoReducer'
import appointmentReducer from './appointmentReducer'
import errorReducer from './errorReducer'
import authReducer from './authReducer'

export default combineReducers({
  calendarInfo: calendarInfoReducer,
  appointment: appointmentReducer,
  error: errorReducer,
  auth: authReducer
})