import React from 'react'
import WeekWrapperSC from '../week-days/week-wrapper'
import Day from '../day'

const Week = ({week}) => {

  return (
    <WeekWrapperSC>
      {week.map(dayInfo => (<Day key={dayInfo.numOfDay} dayInfo={dayInfo}/>))}
    </WeekWrapperSC>
  )
}

export default Week;