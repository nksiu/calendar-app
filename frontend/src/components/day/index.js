import React from 'react'
import DayWrapperSC from './day-wrapper-sc'
import Appointment from '../appointment'

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