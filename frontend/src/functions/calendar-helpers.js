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

export const getDaysInMonth = (yearAndMonth) => {
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

export const getPrevAndNextMonth = (date) => {
  const nextMonth = addOneMonth(date).split('-')
  const prevMonth = subtractOneMonth(date).split('-')

  const months = {
    next: `${nextMonth[0]}-${nextMonth[1]}`,
    prev: `${prevMonth[0]}-${prevMonth[1]}`
  }

  return months
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

const zeroToCurrentDate = (currentDay) => {
  if (currentDay.toString().length === 1) {
    return '0' + currentDay
  }

  return currentDay
}

export const createMonthMap = (yearAndMonth, prevMonth, nextMonth, currentDate, appointmentInfo) => {
  if (appointmentInfo.isLoading) {
    return []
  }

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
    let appointmentsForDay = []

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

    const dateInLoop = `${date[0]}-${date[1]}-${zeroToCurrentDate(currentDay)}`

    appointmentInfo.appointments.forEach(appointment => {
      if (appointment.date_to_query === dateInLoop)
        appointmentsForDay.push(appointment)
    })

    week.push({
      numOfDay: currentDay,
      isPartOfCurrentMonth: partOfCurrentMonth,
      isSunday: dayCounter === 0,
      date: dateInLoop,
      isToday: currentDate === dateInLoop,
      appointments: appointmentsForDay
    })

    currentDay++
    dayCounter++
  }

  return month
}