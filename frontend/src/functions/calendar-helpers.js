import moment from 'moment'

const numOfDaysInCalendar = 42

export const getTodayDate = () => {
  return moment().format('YYYY-MM-DD')
}

export const getTodayText = (yearAndMonth) => {
  return moment(yearAndMonth).format('MMMM YYYY')
}

export const getCurrentMonth = () => {
  return moment().format('YYYY-MM')
}

export const getCurrentMonthFirstDay = () => {
  return moment().startOf('month').format('YYYY-MM-DD')
}

const getDaysInMonth = (yearAndMonth) => {
  return moment(yearAndMonth, 'YYYY-MM').daysInMonth()
}

const getPreviousMonth = (yearAndMonth) => {
  return moment(yearAndMonth, 'YYYY-MM').subtract(1, 'months').daysInMonth()
}

const firstWeekDayOfMonth = (yearAndMonth) => {
  const date = moment(`${yearAndMonth}-01`)
  const dow = date.day()
  return dow
}

export const createMonthMap = (yearAndMonth) => {
  const daysInMonth = getDaysInMonth(yearAndMonth)
  const daysInPrevMonth = getPreviousMonth(yearAndMonth)
  const dayOfWeek = firstWeekDayOfMonth(yearAndMonth)

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