import React from 'react'
import AppointmentWrapperSC from './appointment-wrapper-sc'

const Appointment = ({appointment, screenWidth}) => {
  const {appointment_name, start_date} = appointment
  const timeFormat = {
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true
  }

  const startTime = new Date(start_date).toLocaleTimeString([], timeFormat)
  const appointmentWidth = screenWidth > 250 ? 250 - 16 : screenWidth - 18

  return (
    <AppointmentWrapperSC screenWidth={appointmentWidth}>
      {`${startTime} ${appointment_name}`}
    </AppointmentWrapperSC>
  )
}

export default Appointment;