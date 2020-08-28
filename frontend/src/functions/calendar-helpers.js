import moment from 'moment'

const numOfDaysInCalendar = 42

export const getCurrentTime = () => {
  return moment().format('HH:mm')
}

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

export const addOneMonth = (date) => {
  return moment(date).add(1, 'months').format('YYYY-MM-DD')
}

export const subtractOneMonth = (date) => {
  return moment(date).subtract(1, 'months').format('YYYY-MM-DD')
}

export const addOneYear = (date) => {
  return moment(date).add(1, 'years').format('YYYY-MM-DD')
}

export const subtractOneYear = (date) => {
  return moment(date).subtract(1, 'years').format('YYYY-MM-DD')
}

const getPreviousMonth = (yearAndMonth) => {
  return moment(yearAndMonth, 'YYYY-MM').subtract(1, 'months').daysInMonth()
}

const firstWeekDayOfMonth = (yearAndMonth) => {
  if(!yearAndMonth) {
    return 0
  }
  const date = moment(`${yearAndMonth}-01`)
  const dow = date.day()
  return dow
}

export const createMonthMap = (yearAndMonth, prevMonth, nextMonth, currentDate) => {
  const daysInMonth = getDaysInMonth(yearAndMonth)
  const daysInPrevMonth = getPreviousMonth(yearAndMonth)
  const dayOfWeek = firstWeekDayOfMonth(yearAndMonth)

  let month = []
  let week = []

  let currentDay = daysInPrevMonth - dayOfWeek + 1
  let partOfCurrentMonth = false
  let date = prevMonth && prevMonth.split('-')
  
  let dayCounter = 0

  for (let i = 0; i <= numOfDaysInCalendar; i++) {
    if (i === dayOfWeek) {
      currentDay = 1
      partOfCurrentMonth = true
      date = yearAndMonth && yearAndMonth.split('-')
    }
    if (i === dayOfWeek + daysInMonth) {
      currentDay = 1
      partOfCurrentMonth = false
      date = nextMonth && nextMonth.split('-')
    }
    if (dayCounter === 7) {
      if(!week[0].isPartOfCurrentMonth && month.length) {
        return month
      }
      month.push(week)
      week = []
      dayCounter = 0
    }
    
    week.push({
      numOfDay: currentDay,
      isPartOfCurrentMonth: partOfCurrentMonth,
      isSunday: dayCounter === 0,
      date: date && `${date[0]}-${date[1]}-${currentDay}`,
      isToday: currentDate === (date ? `${date[0]}-${date[1]}-${currentDay}` : null)
    })

    currentDay++
    dayCounter++
  }

  return month
}