import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import * as CalendarHelpers from '../../functions/calendar-helpers'
import {
  KeyboardTimePicker,
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers'
import Button from '@material-ui/core/Button'
import {Alert} from '@material-ui/lab'
import MomentUtils from '@date-io/moment'

//Styling
import AppointmentModalBodyWrapperSC from './appointment-modal-body-sc'
import WeekWrapperSC from '../week-days/week-wrapper'
import AlertWrapperSC from './alert-wrapper-sc'

const AppointmentModalBody = ({handleModal, handleAlert}) => {
  const currentDate = CalendarHelpers.getTodayDate()
  const currentTime = CalendarHelpers.getCurrentTime()

  const [title, setTitle] = useState({text: '', error: false})

  const [selectedStartDate, setSelectedStartDate] = useState(new Date(`${currentDate}T${currentTime}`))
  const [selectedEndDate, setSelectedEndDate] = useState(new Date(`${currentDate}T${currentTime}`))

  const [isValidStartDate, setIsValidStartDate] = useState(true)
  const [isValidEndDate, setIsValidEndDate] = useState(true)

  const [alert, setAlert] = useState({text: '', severity: '', shouldShow: false})

  const handleStartDateChange = (date) => {
    if (date){
      setSelectedStartDate(date.toDate())
      setIsValidStartDate(date.isValid())
    }else{
      setSelectedStartDate(date)
      setIsValidStartDate(false)
    }
  }

  const handleEndDateChange = (date) => {
    if (date) {
      setSelectedEndDate(date.toDate())
      setIsValidEndDate(date.isValid())
    }else{
      setSelectedEndDate(date)
      setIsValidEndDate(false)
    }
  }

  const handleClick = () => {
    // console.log(selectedStartDate)
    // console.log(selectedEndDate)

    if (!title.text) {
      setAlert({text: 'No title added', severity: 'error', shouldShow: true})
      setTitle({...title, error: true})
    }

    else if (JSON.stringify(selectedEndDate) === JSON.stringify(selectedStartDate)) {
      setAlert({text: 'The date and time are the same', severity: 'error', shouldShow: true})
    }

    else if (isValidStartDate && isValidEndDate) {
      handleModal(false)
      handleAlert({text: 'Successfully created appointment', severity: 'success', shouldShow: true})
      console.log('valid format reached')
      console.log(selectedStartDate)
      console.log(selectedEndDate)
    }else{
      setAlert({text: 'Invalid date or time provided', severity: 'error', shouldShow: true})
    }

    setTimeout(() => {
      setAlert({...alert, shouldShow: false})
    }, 3000)

    clearTimeout()
  }

  const handleTextChange = (e) => {
    setTitle({text: e.target.value, error: false})
  }

  return (
    <div>
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
        <TextField id='standard-basic' label='Add Title' error={title.error} fullWidth onChange={handleTextChange}/>
        <MuiPickersUtilsProvider utils={MomentUtils}>

          <WeekWrapperSC>
            <KeyboardDatePicker
              disableToolbar
              variant='inline'
              format='MM/DD/yyyy'
              margin='normal'
              id='date-picker-inline'
              label='Start Date'
              value={selectedStartDate}
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
              value={selectedStartDate}
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
              value={selectedEndDate}
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
              value={selectedEndDate}
              onChange={handleEndDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
          </WeekWrapperSC>

          <WeekWrapperSC>
            <Button variant='contained' color='primary' onClick={handleClick}>
              Create
            </Button>
          </WeekWrapperSC>

        </MuiPickersUtilsProvider>
      </form>
    </AppointmentModalBodyWrapperSC>
    </div>
  )
}

export default AppointmentModalBody