import React from 'react'
import {connect} from 'react-redux'

//Helper Functions
import * as CalendarHelpers from '../../functions/calendar-helpers'

//Components
import WeekDays from '../week-days'
import Week from '../week'

const Month = ({calendarInfo}) => {
  //fix week key
  const month = CalendarHelpers.createMonthMap(calendarInfo.currentMonth)
  return (
    <div>
      <WeekDays/>
      {
        month.map(week => (<Week key={week[0].numOfDay} week={week}/>))
      }
    </div>
  )
}

const mapStateToProps = state => ({
  calendarInfo: state.calendarInfo
})

export default connect(mapStateToProps, null)(Month);