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

const AppointmentModalBody = () => {
  const currentDate = CalendarHelpers.getTodayDate()
  const currentTime = CalendarHelpers.getCurrentTime()

  const [title, setTitle] = useState()
  const [titleError, setTitleError] = useState(false)

  const [selectedStartDate, setSelectedStartDate] = useState(new Date(`${currentDate}T${currentTime}`))
  const [selectedEndDate, setSelectedEndDate] = useState(new Date(`${currentDate}T${currentTime}`))

  const [isValidStartDate, setIsValidStartDate] = useState(true)
  const [isValidEndDate, setIsValidEndDate] = useState(true)

  const [needsAlert, setAlert] = useState(false)
  const [alertText, setAlertText] = useState('')

  const handleStartDateChange = (date) => {
    setSelectedStartDate(date)
    if (date){
      setIsValidStartDate(date.isValid())
    }else{
      setIsValidStartDate(false)
    }
  }

  const handleEndDateChange = (date) => {
    setSelectedEndDate(date)
    if (date) {
      setIsValidEndDate(date.isValid())
    }else{
      setIsValidEndDate(false)
    }
  }

  const handleClick = () => {
    console.log(selectedStartDate)
    console.log(selectedEndDate)

    if (!title) {
      setAlert(true)
      setAlertText('No title added')
      setTitleError(true)
    }

    else if (JSON.stringify(selectedEndDate) === JSON.stringify(selectedStartDate)) {
      setAlert(true)
      setAlertText('The date and time are the same')
    }

    else if (isValidStartDate && isValidEndDate) {
      console.log('valid format reached')
    }else{
      setAlert(true)
      setAlertText('Invalid date or time provided')
    }

    setTimeout(() => {
      setAlert(false)
    }, 3000)

    clearTimeout()
  }

  const handleTextChange = (e) => {
    setTitle(e.target.value)
    setTitleError(false)
  }

  return (
    <div>
      {
        needsAlert ?
        <AlertWrapperSC>
          <Alert severity='error' className='alert'>
            {alertText}
          </Alert>
        </AlertWrapperSC>
        :
        null
      }
    <AppointmentModalBodyWrapperSC>
      <form autoComplete='off' noValidate>
        <TextField id='standard-basic' label='Add Title' error={titleError} fullWidth onChange={handleTextChange}/>
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