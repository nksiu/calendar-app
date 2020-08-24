import {INIT_CALENDAR} from './types'
import * as CalendarHelpers from '../functions/calendar-helpers'

export const initCalendarInfo = () => dispatch => {
  const data = {
    currentDate: CalendarHelpers.getTodayDate(),
    currentMonth: CalendarHelpers.getCurrentMonth()
  }
  dispatch({type: INIT_CALENDAR, payload: data})
}