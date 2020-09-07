import React from 'react'
import AppointmentAccordion from '../appointment-accordion'
import { v4 as uuidv4 } from 'uuid'

const AppointmentTab = ({appointments}) => {
  return (
    appointments.map((appointment, i) => (<AppointmentAccordion key={uuidv4()} isEven={i%2 === 0} appointment={appointment}/>))
  )
}

export default AppointmentTab