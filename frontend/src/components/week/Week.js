import React, {useCallback, useState} from 'react'
import moment from 'moment'
import Day from '../week-day/WeekDay'
import WeekWrapperSC from './week-wrapper'

const Week = () => {
  const weekDayShort = moment.weekdaysShort()

  return (
    <WeekWrapperSC>
        {weekDayShort.map(dayLabel => (<Day key={dayLabel} weekDay={dayLabel}/>))}
    </WeekWrapperSC>
  )
}

export default Week;