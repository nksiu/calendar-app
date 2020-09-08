import React from 'react'
import {connect} from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

//Helper Functions
import * as CalendarHelpers from '../../functions/calendar-helpers'

//Components
import WeekDays from '../week-days'
import Week from '../week'

const Month = ({calendarInfo, appointmentInfo, handleAlert}) => {
  const month = CalendarHelpers.createMonthMap(calendarInfo.currentMonth, calendarInfo.initPrevMonth, calendarInfo.initNextMonth, calendarInfo.currentDate, appointmentInfo)

  return (
    <div>
      <WeekDays/>
      {
        month.map(week => (<Week key={uuidv4()} week={week} handleAlert={handleAlert}/>))
      }
    </div>
  )
}

const mapStateToProps = state => ({
  calendarInfo: state.calendarInfo,
  appointmentInfo: state.appointment
})

export default connect(mapStateToProps, null)(Month);