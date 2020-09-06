import {NEXT_MONTH, PREV_MONTH, NEXT_YEAR} from './types'
import * as CalendarHelpers from '../functions/calendar-helpers'

export const goNextMonth = () => (dispatch, getState) => {
  const {calendarInfo} = getState()
  const date = CalendarHelpers.addOneMonth(calendarInfo.navigatedMonth)
  const months = CalendarHelpers.getPrevAndNextMonth(date)
  const yearAndMonth = date.split('-')
  const data = {
    navigatedMonth: date,
    currentMonth: `${yearAndMonth[0]}-${yearAndMonth[1]}`,
    initNextMonth: months.next,
    initPrevMonth: months.prev
  }

  dispatch({type: NEXT_MONTH, payload: data})
}

export const goPrevMonth = () => (dispatch, getState) => {
  const {calendarInfo} = getState()
  const date = CalendarHelpers.subtractOneMonth(calendarInfo.navigatedMonth)
  const months = CalendarHelpers.getPrevAndNextMonth(date)
  const yearAndMonth = date.split('-')
  const data = {
    navigatedMonth: date,
    currentMonth: `${yearAndMonth[0]}-${yearAndMonth[1]}`,
    initNextMonth: months.next,
    initPrevMonth: months.prev
  }

  dispatch({type: PREV_MONTH, payload: data})
}

export const goNextYear = () => (dispatch , getState) => {
  const {calendarInfo} = getState()
  const date = CalendarHelpers.addOneYear(calendarInfo.navigatedMonth)
  const months = CalendarHelpers.getPrevAndNextMonth(date)
  const yearAndMonth = date.split('-')
  const data = {
    navigatedMonth: date,
    currentMonth: `${yearAndMonth[0]}-${yearAndMonth[1]}`,
    initNextMonth: months.next,
    initPrevMonth: months.prev
  }

  dispatch({type: NEXT_YEAR, payload: data})
}

export const goPrevYear = () => (dispatch , getState) => {
  const {calendarInfo} = getState()
  const date = CalendarHelpers.subtractOneYear(calendarInfo.navigatedMonth)
  const months = CalendarHelpers.getPrevAndNextMonth(date)
  const yearAndMonth = date.split('-')
  const data = {
    navigatedMonth: date,
    currentMonth: `${yearAndMonth[0]}-${yearAndMonth[1]}`,
    initNextMonth: months.next,
    initPrevMonth: months.prev
  }

  dispatch({type: NEXT_YEAR, payload: data})
}