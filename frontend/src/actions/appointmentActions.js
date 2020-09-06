import {GET_APPOINTMENT, ADD_APPOINTMENT} from './types'
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