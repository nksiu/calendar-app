import React from 'react'
import AppointmentWrapperSC from './appointment-wrapper-sc'

const Appointment = ({appointment}) => {
  const {appointment_name} = appointment

  return (
    <AppointmentWrapperSC>
      {appointment_name}
    </AppointmentWrapperSC>
  )
}

export default Appointment;