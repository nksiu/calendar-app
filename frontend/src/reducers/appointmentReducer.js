import {
  ADD_APPOINTMENT, 
  GET_APPOINTMENT, 
  DELETE_APPOINTMENT,
  UPDATE_APPOINTMENT
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
      return {
        ...state,
        appointments: [action.payload, ...state.appointments]
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
    default:
      return state
  }
}