import {
  GET_APPOINTMENT, 
  ADD_APPOINTMENT, 
  DELETE_APPOINTMENT,
  UPDATE_APPOINTMENT
} from './types'
import axios from 'axios'

export const getAppointments = (filterData) => (dispatch, getState) => {
  axios.get('/api/appointments', {params: {nextMonth: filterData.nextMonth, prevMonth: filterData.prevMonth}})
    .then(res => dispatch({
      type: GET_APPOINTMENT,
      payload: res.data
    }))
    .catch(err => console.log('cound not get appointments', err.response.data))
}

export const addAppointment = (newAppointment) => (dispatch, getState) => {
  axios.post('/api/appointments', newAppointment)
    .then(res => dispatch({
      type: ADD_APPOINTMENT,
      payload: res.data
    }))
    .catch(err => console.log('could not add appoinment', err.response.data))
}

export const deleteAppointment = (id) => (dispatch, getState) => {
  axios.delete(`/api/appointments/${id}`)
    .then(res => dispatch({
      type: DELETE_APPOINTMENT,
      payload: id
    }))
    .catch(err => console.log('could not delete appointment', err.response.data))
}

export const updateAppointment = (updatedAppointment) => (dispatch, getState) => {
  axios.put(`/api/appointments/${updatedAppointment.appointmentId}`, updatedAppointment)
    .then(res => dispatch({
      type: UPDATE_APPOINTMENT,
      payload: res.data
    }))
}