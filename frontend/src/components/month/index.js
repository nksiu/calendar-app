import React from 'react'
import WeekDays from '../week-days'
import Week from '../week'

const Month = ({month}) => {
  //fix week key
  return (
    <div>
      <WeekDays/>
      {
        month.map(week => (<Week key={week[0].numOfDay} week={week}/>))
      }
    </div>
  )
}

export default Month;