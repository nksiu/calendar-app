import React, {useState} from 'react'
import {connect} from 'react-redux'
import MomentUtils from '@date-io/moment'

//Actions
import {addAppointment} from '../../actions/appointmentActions'

//Material UI
import {
  Dialog, 
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField
} from '@material-ui/core'
import {
  KeyboardTimePicker,
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers'
import {Alert} from '@material-ui/lab'

//Styling
import AppointmentModalBodyWrapperSC from '../appointment-add-dialog/appointment-modal-body-sc'
import WeekWrapperSC from '../week-days/week-wrapper'
import AlertWrapperSC from '../appointment-add-dialog/alert-wrapper-sc'

const AppointmentUpdateDialog = ({handleAlert, addAppointment, appointment}) => {
  const [open, setOpen] = useState(false)

  const [formInfo, setFormInfo] = useState({
    titleText: appointment.appointment_name,
    titleError: false,
    startDate: new Date(appointment.start_date),
    isValidStartDate: true,
    endDate: new Date(appointment.end_date),
    isValidEndDate: true,
    dateToQuery: appointment.date_to_query
  })

  const [alert, setAlert] = useState({text: '', severity: '', shouldShow: false})

  const handleClose = () => {
    setOpen(false)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleStartDateChange = (date) => {
    if (date){
      setFormInfo({
        ...formInfo,
        startDate: date.toDate(),
        isValidStartDate: date.isValid(),
        dateToQuery: date.format('YYYY-MM-DD')
      })
    }else{
      setFormInfo({
        ...formInfo,
        startDate: date,
        isValidStartDate: false
      })
    }
  }

  const handleEndDateChange = (date) => {
    if (date) {
      setFormInfo({
        ...formInfo,
        endDate: date.toDate(),
        isValidEndDate: date.isValid()
      })
    }else{
      setFormInfo({
        ...formInfo,
        endDate: date,
        isValidEndDate: false
      })
    }
  }

  const fadeAlert = () => {
    setTimeout(() => {
      setAlert({...alert, shouldShow: false})
    }, 3000)

    clearTimeout()
  }

  const handleClick = () => {
    if (!formInfo.titleText) {
      setAlert({text: 'No title added', severity: 'error', shouldShow: true})
      setFormInfo({
        ...formInfo,
        titleError: true
      })
      fadeAlert()
    }

    else if(formInfo.titleText.length > 60) {
      setAlert({text: 'Title cannot be longer than 60 characters', severity: 'error', shouldShow: true})
      setFormInfo({
        ...formInfo,
        error: true
      })
    }

    else if (JSON.stringify(formInfo.startDate) === JSON.stringify(formInfo.endDate)) {
      setAlert({text: 'The date and time are the same', severity: 'error', shouldShow: true})
      fadeAlert()
    }

    else if (formInfo.isValidStartDate && formInfo.isValidEndDate) {
      const newAppointment = {
        appointmentAuthor: 'default',
        appointmentName: formInfo.titleText,
        startDate: formInfo.startDate,
        endDate: formInfo.endDate,
        dateToQuery: formInfo.dateToQuery
      }
      addAppointment(newAppointment)
      handleClose()
      handleAlert({text: 'Successfully created appointment', severity: 'success', shouldShow: true})
    }else{
      setAlert({text: 'Invalid date or time provided', severity: 'error', shouldShow: true})
      fadeAlert()
    }
  }

  const handleTextChange = (e) => {
    setFormInfo({
      ...formInfo,
      titleText: e.target.value,
      titleError: false
    })
  }

  return (
    <div>
      <Button color='primary' size='small' onClick={handleClickOpen}>
        Edit
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth='sm'>
        <DialogTitle>
          Update Appointment
        </DialogTitle>
        <DialogContent dividers>
          {
            alert.shouldShow ?
            <AlertWrapperSC>
              <Alert severity={alert.severity} className='alert'>
                {alert.text}
              </Alert>
            </AlertWrapperSC>
            :
            null
          }
          <AppointmentModalBodyWrapperSC>
            <form autoComplete='off' noValidate>
              <TextField 
                id='standard-basic' 
                label='Add Title' 
                error={formInfo.titleError} 
                fullWidth 
                onChange={handleTextChange}
                defaultValue={appointment.appointment_name}
              />
              <MuiPickersUtilsProvider utils={MomentUtils}>

                <WeekWrapperSC>
                  <KeyboardDatePicker
                    disableToolbar
                    variant='inline'
                    format='MM/DD/yyyy'
                    margin='normal'
                    id='date-picker-inline'
                    label='Start Date'
                    value={formInfo.startDate}
                    onChange={handleStartDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                  <KeyboardTimePicker
                    margin='normal'
                    id='time-picker'
                    label='Starts'
                    className='picker'
                    value={formInfo.startDate}
                    onChange={handleStartDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change time',
                    }}
                  />
                </WeekWrapperSC>

                <WeekWrapperSC>
                  <KeyboardDatePicker
                    disableToolbar
                    variant='inline'
                    format='MM/DD/yyyy'
                    margin='normal'
                    id='date-picker-inline'
                    label='End Date'
                    value={formInfo.endDate}
                    onChange={handleEndDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                  <KeyboardTimePicker
                    margin='normal'
                    id='time-picker'
                    label='Ends'
                    className='picker'
                    value={formInfo.endDate}
                    onChange={handleEndDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change time',
                    }}
                  />
                </WeekWrapperSC>

              </MuiPickersUtilsProvider>
            </form>
          </AppointmentModalBodyWrapperSC>
        </DialogContent>
        <DialogActions>
          <Button color='primary' onClick={handleClick}>
            Update
          </Button>
          <Button onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default connect(null, {addAppointment})(AppointmentUpdateDialog)
