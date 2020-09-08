import React from 'react'

//Material UI
import {
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableRow
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

//Styling
import AccordionWrapperSC from './accordion-wrapper-sc'

function createData(left, right) {
  return { left, right }
}

const AppointmentAccordion = ({appointment, isEven}) => {
  const {appointment_name, start_date, end_date} = appointment
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

      </Accordion>
    </AccordionWrapperSC>
  )
}

export default AppointmentAccordion