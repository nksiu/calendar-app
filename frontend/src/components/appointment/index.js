import React, {useState, useEffect, Fragment} from 'react'
import {connect} from 'react-redux'

//Styling
import AppointmentWrapperSC from './appointment-wrapper-sc'

//Material UI
import {
  ListItem
} from '@material-ui/core'

const Appointment = ({appointment, settings}) => {
  const elementWidth = document.getElementsByClassName('day-comp')[0].clientWidth
  const [dynamicWidth, setAppointmentWidth] = useState(elementWidth)

  useEffect(() => {
    const elementWidth = document.getElementsByClassName('day-comp')[0].clientWidth
    function handleResize() {
      setAppointmentWidth(elementWidth)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const {appointment_name, start_date} = appointment
  const timeFormat = {
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true
  }

  const startTime = new Date(start_date).toLocaleTimeString([], timeFormat)

  return (
    <Fragment>
      {
        settings.hideAppointments ?
          null
        :
          <AppointmentWrapperSC appointmentWidth={dynamicWidth}>
            <ListItem className='list-item'>
              {`${startTime} ${appointment_name}`}
            </ListItem>
          </AppointmentWrapperSC>
      }
    </Fragment>
  )
}

const mapStateToProps = state => ({
  settings: state.settings
})

export default connect(mapStateToProps, null)(Appointment)
