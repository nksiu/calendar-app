import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  HIDE_APPOINTMENTS,
  INITIALIZE_SETTINGS,
  UPDATE_SETTINGS
} from '../actions/types'

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: null,
  hideAppointments: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      }
    
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      }
    
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('userId', action.payload.user.id)
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
      }
    
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      }

    case INITIALIZE_SETTINGS:
      return {
        ...state,
        hideAppointments: action.payload.hide_appointments
      }
    
    case UPDATE_SETTINGS:
      console.log(action.payload)
      return {
        ...state,
        hideAppointments: action.payload.settings.hide_appointments
      }
    
    case HIDE_APPOINTMENTS:
      return {
        ...state,
        hideAppointments: !state.hideAppointments
      }

    default:
      return state
  }
}