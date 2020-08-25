import React, {useCallback, useState} from 'react'
import DayWrapperSC from './day-wrapper-sc'

const Day = ({dayInfo}) => {

  const screenWidth = window.innerWidth
  const {numOfDay, isSunday, isPartOfCurrentMonth, isToday} = dayInfo

  return (
    <DayWrapperSC isSunday={isSunday} isPartOfCurrentMonth={isPartOfCurrentMonth} isToday={isToday}>
      <div className='circle'>
        <p>
          {numOfDay ? numOfDay : ''}
        </p>
      </div>
    </DayWrapperSC>
  )
}

export default Day;