import React from 'react'
import {connect} from 'react-redux'

//Components
import AppointmentUpdateDialog from '../appointment-update-dialog'

//Actions
import {deleteAppointment} from '../../actions/appointmentActions'

//Material UI
import {
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AccordionActions,
  Paper,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableRow,
  Divider,
  Button
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

//Styling
import AccordionWrapperSC from './accordion-wrapper-sc'

function createData(left, right) {
  return { left, right }
}

const AppointmentAccordion = ({appointment, isEven, deleteAppointment, handleAlert}) => {
  const {appointment_name, start_date, end_date, _id} = appointment
  const timeFormat = {
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true
  }

  const startDate = new Date(start_date).toDateString()
  const startTime = new Date(start_date).toLocaleTimeString([], timeFormat)

  const endDate = new Date(end_date).toDateString()
  const endTime = new Date(end_date).toLocaleTimeString([], timeFormat)

  const rows = [
    createData('Start Date', startDate),
    createData('Starts at', startTime),
    createData('End Date', endDate),
    createData('Ends at', endTime)
  ]

  const onDeleteClick = (id) => {
    deleteAppointment(id)
    handleAlert({text: 'Successfully deleted appointment', severity: 'success', shouldShow: true})
  }

  return (
    <AccordionWrapperSC isEven={isEven}>
      <Accordion className='root' TransitionProps={{ unmountOnExit: true }}>

        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography className='heading'>{appointment_name}</Typography>
          <Typography className='secondaryHeading'>{startTime}</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table aria-label='appointment-info-table'>
              <TableBody>
                {
                  rows.map(row => (
                    <TableRow key={row.left}>
                      <TableCell component='th' scope='row'>
                        {row.left}
                      </TableCell>
                      <TableCell align='right'>
                        {row.right}
                      </TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
        
        <Divider/>

        <AccordionActions>
          <AppointmentUpdateDialog appointment={appointment} handleAlert={handleAlert}/>
          <Button color='secondary' size='small' onClick={() => onDeleteClick(_id)}>
            Delete
          </Button>
        </AccordionActions>

      </Accordion>
    </AccordionWrapperSC>
  )
}

export default connect(null, {deleteAppointment})(AppointmentAccordion)