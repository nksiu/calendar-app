import {NEXT_MONTH, PREV_MONTH, NEXT_YEAR, PREV_YEAR} from '../actions/types'
import * as CalendarHelpers from '../functions/calendar-helpers'

const firstDate = CalendarHelpers.getCurrentMonthFirstDay()

const initialState = {
  currentDate: CalendarHelpers.getTodayDate(),
  currentMonth: CalendarHelpers.getCurrentMonth(),
  navigatedMonth: firstDate,
  initPrevMonth: CalendarHelpers.subtractOneMonth(firstDate),
  initNextMonth: CalendarHelpers.addOneMonth(firstDate)
}

export default function(state = initialState, action) {
  switch(action.type){
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