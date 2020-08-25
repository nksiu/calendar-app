import {INIT_CALENDAR, NEXT_MONTH, PREV_MONTH} from '../actions/types'

const initialState = {
  currentDate: null,
  currentMonth: null,
  navigatedMonth: null
}

export default function(state = initialState, action) {
  switch(action.type){
    case INIT_CALENDAR:
      return {
        ...state,
        currentDate: action.payload.currentDate,
        currentMonth: action.payload.currentMonth,
        navigatedMonth: action.payload.navigatedMonth
      }
    case PREV_MONTH:
    case NEXT_MONTH:
      return {
        ...state,
        currentMonth: action.payload.currentMonth,
        navigatedMonth: action.payload.navigatedMonth
      }
    default:
      return state
  }
}