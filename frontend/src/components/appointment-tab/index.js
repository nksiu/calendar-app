import React from 'react'
import Typography from '@material-ui/core/Typography'

const AppointmentTab = ({appointment}) => {
  return (
    <Typography>
      {appointment.appointment_name}
    </Typography>
  )
}

export default AppointmentTab