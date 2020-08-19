import React, {useCallback, useState} from 'react'
import WeekDayWrapperSC from './week-day-wrapper'

const WeekDay = ({weekDay}) => {

  return (
    <WeekDayWrapperSC weekDay={weekDay}>
        <div>
          <p>
          {weekDay}
          </p>
        </div>
    </WeekDayWrapperSC>
  )
}

export default WeekDay;