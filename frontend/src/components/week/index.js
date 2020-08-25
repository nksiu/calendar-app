import React from 'react'
import WeekWrapperSC from '../week-days/week-wrapper'
import Day from '../day'
import { v4 as uuidv4 } from 'uuid'

const Week = ({week}) => {

  return (
    <WeekWrapperSC>
      {week.map(dayInfo => (<Day key={uuidv4()} dayInfo={dayInfo}/>))}
    </WeekWrapperSC>
  )
}

export default Week;