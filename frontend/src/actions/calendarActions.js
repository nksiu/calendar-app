import {INIT_CALENDAR, NEXT_MONTH, PREV_MONTH} from './types'
import * as CalendarHelpers from '../functions/calendar-helpers'

export const initCalendarInfo = () => dispatch => {
  const data = {
    currentDate: CalendarHelpers.getTodayDate(),
    currentMonth: CalendarHelpers.getCurrentMonth(),
    navigatedMonth: CalendarHelpers.getCurrentMonthFirstDay()
  }
  dispatch({type: INIT_CALENDAR, payload: data})
}

export const goNextMonth = () => (dispatch, getState) => {
  const {calendarInfo} = getState()
  const date = CalendarHelpers.addOneMonth(calendarInfo.navigatedMonth)
  const yearAndMonth = date.split('-')
  const data = {
    navigatedMonth: date,
    currentMonth: `${yearAndMonth[0]}-${yearAndMonth[1]}`
  }

  dispatch({type: NEXT_MONTH, payload: data})
}

export const goPrevMonth = () => (dispatch, getState) => {
  const {calendarInfo} = getState()
  const date = CalendarHelpers.subtractOneMonth(calendarInfo.navigatedMonth)
  const yearAndMonth = date.split('-')
  const data = {
    navigatedMonth: date,
    currentMonth: `${yearAndMonth[0]}-${yearAndMonth[1]}`
  }

  dispatch({type: PREV_MONTH, payload: data})
}