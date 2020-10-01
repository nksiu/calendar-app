import {HIDE_APPOINTMENTS} from '../actions/types'

const initialState = {
  hideAppointments: false
}

export default function (state = initialState, action) {
  switch(action.type) {
    case HIDE_APPOINTMENTS:
      return {
        ...state,
        hideAppointments: !state.hideAppointments
      }

    default: 
      return state
  }
}