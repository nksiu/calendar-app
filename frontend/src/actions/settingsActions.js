import {HIDE_APPOINTMENTS} from '../actions/types'

export const hideAppointments = () => (dispatch, getState) => {
  dispatch({type: HIDE_APPOINTMENTS})
}