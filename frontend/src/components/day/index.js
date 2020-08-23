import React, {useCallback, useState} from 'react'
import DayWrapperSC from './day-wrapper-sc'

const Day = ({dayInfo}) => {

  const screenWidth = window.innerWidth
  const {numOfDay, isSunday, isPartOfCurrentMonth} = dayInfo
  return (
    <DayWrapperSC isSunday={isSunday} isPartOfCurrentMonth={isPartOfCurrentMonth}>
      <div>
        <p>
          {numOfDay}
        </p>
      </div>
    </DayWrapperSC>
  )
}

export default Day;