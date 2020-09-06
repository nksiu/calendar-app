import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import DayWrapperSC from './day-wrapper-sc'
import Appointment from '../appointment'

const Day = ({dayInfo}) => {

  const screenWidth = window.innerWidth
  const {numOfDay, isSunday, isPartOfCurrentMonth, isToday, appointments} = dayInfo

  return (
    <DayWrapperSC isSunday={isSunday} isPartOfCurrentMonth={isPartOfCurrentMonth} isToday={isToday}>
      <div className='circle'>
        <p>
          {numOfDay ? numOfDay : ''}
        </p>
      </div>
      {
        appointments.map(appointment => (<Appointment key={uuidv4()} appointment={appointment}/>))
      }
    </DayWrapperSC>
  )
}

export default Day;