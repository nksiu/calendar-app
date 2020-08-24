import {INIT_CALENDAR} from '../actions/types'

const initialState = {
  currentDate: null,
  currentMonth: null
}

export default function(state = initialState, action) {
  switch(action.type){
    case INIT_CALENDAR:
      return {
        ...state,
        currentDate: action.payload.currentDate,
        currentMonth: action.payload.currentMonth
      }
    default:
      return state
  }
}