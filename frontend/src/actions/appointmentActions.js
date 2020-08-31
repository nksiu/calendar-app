import {ADD_APPOINTMENT} from './types'
import axios from 'axios'


export const addAppointment = (newAppointment) => (dispatch, getState) => {
  axios.post('/api/appointments', newAppointment)
    .then(res => dispatch({
      type: ADD_APPOINTMENT,
      payload: res.data
    }))
    .catch(err => console.log('could not add appoinment', err.response.data))
}