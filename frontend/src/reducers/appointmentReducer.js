import {
  ADD_APPOINTMENT, 
  GET_APPOINTMENT, 
  DELETE_APPOINTMENT,
  UPDATE_APPOINTMENT,
  CLEAR_APPOINTMENTS
} from '../actions/types'

const initialState = {
  appointments: [],
  loading: true
}

export default function(state = initialState, action) {
  switch(action.type){
    case GET_APPOINTMENT:
      return {
        ...state,
        appointments: action.payload,
        loading: false
      }
    case ADD_APPOINTMENT:
      let tmpAddAppointments = [action.payload, ...state.appointments]
      return {
        ...state,
        appointments: tmpAddAppointments.sort((start, end) => new Date(start.start_date) - new Date(end.start_date))
      }
    case DELETE_APPOINTMENT:
      return {
        ...state,
        appointments: state.appointments.filter(appointment => appointment._id !== action.payload)
      }
    case UPDATE_APPOINTMENT: 
      const index = state.appointments.findIndex(appointment => appointment._id === action.payload._id)
      let tmpAppointments = [...state.appointments]
      tmpAppointments[index] = action.payload
      return {
        ...state,
        appointments: tmpAppointments
      }

    case CLEAR_APPOINTMENTS:
      return {
        ...state,
        appointments: []
      }
    default:
      return state
  }
}