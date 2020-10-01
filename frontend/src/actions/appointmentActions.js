import {
  GET_APPOINTMENT, 
  ADD_APPOINTMENT, 
  DELETE_APPOINTMENT,
  UPDATE_APPOINTMENT
} from './types'
import {tokenConfig} from './authActions'
import {returnErrors} from './errorActions'
import axios from 'axios'

export const getAppointments = (filterData) => (dispatch, getState) => {
  axios.get('/api/appointments', {params: {nextMonth: filterData.nextMonth, prevMonth: filterData.prevMonth}})
    .then(res => dispatch({
      type: GET_APPOINTMENT,
      payload: res.data
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const addAppointment = (newAppointment) => (dispatch, getState) => {
  axios.post('/api/appointments', newAppointment, tokenConfig(getState))
    .then(res => dispatch({
      type: ADD_APPOINTMENT,
      payload: res.data
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const deleteAppointment = (id) => (dispatch, getState) => {
  axios.delete(`/api/appointments/${id}`, tokenConfig(getState))
    .then(res => dispatch({
      type: DELETE_APPOINTMENT,
      payload: id
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const updateAppointment = (updatedAppointment) => (dispatch, getState) => {
  axios.put(`/api/appointments/${updatedAppointment.appointmentId}`, updatedAppointment, tokenConfig(getState))
    .then(res => dispatch({
      type: UPDATE_APPOINTMENT,
      payload: res.data
    }))
}