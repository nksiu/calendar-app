import React from 'react'
import DayOfWeekWrapperSC from './day-of-week-sc'

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