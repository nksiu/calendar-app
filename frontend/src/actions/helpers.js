import moment from 'moment'

const numOfDaysInCalendar = 42

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
  const date = moment("2020-08-01")
  const dow = date.day()
  return dow
}

export const createMonthMap = (daysInMonth, daysInPrevMonth, dayOfWeek) => {
  let month = []
  let week = []

  let currentDay = daysInPrevMonth - dayOfWeek + 1
  let partOfCurrentMonth = false
  
  let dayCounter = 0

  for (let i = 0; i <= numOfDaysInCalendar; i++) {
    if (i === dayOfWeek) {
      currentDay = 1
      partOfCurrentMonth = true
    }
    if (i === dayOfWeek + daysInMonth) {
      currentDay = 1
      partOfCurrentMonth = false
    }
    if (dayCounter === 7) {
      month.push(week)
      week = []
      dayCounter = 0
    }
    
    week.push({
      numOfDay: currentDay,
      isPartOfCurrentMonth: partOfCurrentMonth,
      isSunday: dayCounter === 0
    })

    currentDay++
    dayCounter++
  }

  return month
}