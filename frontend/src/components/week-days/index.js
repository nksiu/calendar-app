import React, {useCallback, useState} from 'react'
import moment from 'moment'
import DayOfWeek from '../day-of-week'
import WeekWrapperSC from './week-wrapper'

const WeekDays = () => {
  const weekDayShort = moment.weekdaysShort()

  return (
    <WeekWrapperSC>
        {weekDayShort.map(dayLabel => (<DayOfWeek key={dayLabel} weekDay={dayLabel}/>))}
    </WeekWrapperSC>
  )
}

export default WeekDays;