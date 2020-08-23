import moment from 'moment'

export const getDaysInMonth = (year, month) => {
  return moment(`${year}-${month}`, 'YYYY-MM').daysInMonth()
}

export const getPreviousMonth = (year, month) => {
  return moment(`${year}-${month}`, 'YYYY-MM').subtract(1, 'months').daysInMonth()
}

export const getToday = () => {
  return moment().format('YYYY-MM-DD')
}

export const getTodayText = () => {
  return moment().format('MMMM YYYY')
}

export const firstWeekDayOfMonth = () => {
  // const date = moment("2020-08-01").format('dddd')
  const date = moment("2020-08-01")
  const dow = date.day()
  return dow
}