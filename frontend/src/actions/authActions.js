import axios from 'axios'
import {returnErrors} from './errorActions'
import {getAppointments, clearAppointments} from './appointmentActions'
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

export const loadUser = (filterData) => (dispatch, getState) => {
  dispatch({type: USER_LOADING})

  axios.get('/api/auth/user', tokenConfig(getState))
    .then(res => dispatch({type: USER_LOADED, payload: res.data}))
    .then(userInfo => {
      const filterUserData = {
        ...filterData,
        authorId: userInfo.payload._id
      }
      dispatch(getAppointments(filterUserData))
      dispatch({type: INITIALIZE_SETTINGS, payload: userInfo.payload.settings})
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({type: AUTH_ERROR})
    }) 
}

export const register = ({name, email, password}) => (dispatch, getState) => {
  const {auth} = getState()
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify(
    {
      name,
      email,
      password,
      settings: {
        hideAppointments: auth.hideAppointments
      }
    }
  )

  axios.post('/api/users', body, config).then(res => {
    dispatch({type: REGISTER_SUCCESS, payload: res.data})
  })
  .catch(err => {
    dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'))
    dispatch({type: REGISTER_FAIL})
  })
}

export const login = ({email, password}) => (dispatch, getState) => {
  const {calendarInfo} = getState()
  const filterData = {
    nextMonth: calendarInfo.initNextMonth,
    prevMonth: calendarInfo.initPrevMonth
  }
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({email, password})

  axios.post('/api/auth', body, config)
    .then(res => {
      dispatch({type: LOGIN_SUCCESS, payload: res.data})
      dispatch({type: INITIALIZE_SETTINGS, payload: res.data.user.settings})
    })
    .then(userInfo => {
      const {auth} = getState()
      const filterUserData = {
        ...filterData,
        authorId: auth.user ? auth.user.id : ''
      }
      dispatch(getAppointments(filterUserData))
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'))
      dispatch({type: LOGIN_FAIL})
    })
}

export const logout = () => dispatch => {
  dispatch(clearAppointments())
  dispatch({type: LOGOUT_SUCCESS})
}

export const updateSettings = (updatedSettings) => (dispatch, getState) => {
  axios.put('/api/auth/user/settings', updatedSettings)
    .then(res => dispatch({type: UPDATE_SETTINGS, payload: res.data}))
}

export const hideAppointments = () => dispatch => {
  dispatch({type: HIDE_APPOINTMENTS})
}

export const tokenConfig = getState => {
  const token = getState().auth.token;

  const config = {
      headers: {
          'Content-Type': 'application/json',
      }
  }

  if(token){
      config.headers['x-auth-token'] = token
  }

  return config
}
