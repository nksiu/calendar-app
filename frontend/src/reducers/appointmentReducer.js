import {ADD_APPOINTMENT} from '../actions/types'

const initialState = {
  appointments: []
}

export default function(state = initialState, action) {
  switch(action.type){
    case ADD_APPOINTMENT:
      return {
        ...state,
        appointments: [action.payload, ...state.appointments]
      }
    default:
      return state
  }
}