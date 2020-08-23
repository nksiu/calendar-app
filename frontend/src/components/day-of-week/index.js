import React, {useCallback, useState} from 'react'
import DayOfWeekWrapperSC from './day-of-week'

const WeekDay = ({weekDay}) => {

  return (
    <DayOfWeekWrapperSC weekDay={weekDay}>
        <div>
          <p>
          {weekDay}
          </p>
        </div>
    </DayOfWeekWrapperSC>
  )
}

export default WeekDay;