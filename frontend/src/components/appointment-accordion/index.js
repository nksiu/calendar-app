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

const AppointmentAccordion = ({appointment}) => {
  const {appointment_name, start_date, end_date} = appointment
  const timeFormat = {
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true
  }

  const startTime = new Date(start_date).toLocaleTimeString([], timeFormat)

  const rows = [
    createData('Start Date', start_date),
    createData('End Date', end_date)
  ]

  return (
    <AccordionWrapperSC>
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