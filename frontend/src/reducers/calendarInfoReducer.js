import {INIT_CALENDAR, NEXT_MONTH, PREV_MONTH, NEXT_YEAR, PREV_YEAR} from '../actions/types'

const initialState = {
  currentDate: null,
  currentMonth: null,
  navigatedMonth: null,
  initPrevMonth: null,
  initNextMonth: null
}

export default function(state = initialState, action) {
  switch(action.type){
    case INIT_CALENDAR:
      return {
        ...state,
        currentDate: action.payload.currentDate,
        currentMonth: action.payload.currentMonth,
        navigatedMonth: action.payload.navigatedMonth,
        initPrevMonth: action.payload.initPrevMonth,
        initNextMonth: action.payload.initNextMonth
      }
    case PREV_MONTH:
    case NEXT_MONTH:
    case NEXT_YEAR:
    case PREV_YEAR:
      return {
        ...state,
        currentMonth: action.payload.currentMonth,
        navigatedMonth: action.payload.navigatedMonth
      }
    default:
      return state
  }
}