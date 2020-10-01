import React, {Component} from 'react';
import './App.css';
import {createGlobalStyle} from 'styled-components'

//Redux
import {Provider} from 'react-redux'
import store from './store'

import {Alert} from '@material-ui/lab'
import AlertWrapperSC from './components/appointment-add-dialog/alert-wrapper-sc'

//Components
import Month from './components/month'
import Options from './components/options'
import AuthBar from './components/auth'
import {AppBar, Typography, IconButton, Toolbar} from '@material-ui/core'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

//Styling
import HeaderWrapperSC from './styled-wrapper/header-wrapper-sc'
import CalendarLayoutWrapperSC from './styled-wrapper/calendar-layout-wrapper'

//Actions
import * as CalendarHelpers from './functions/calendar-helpers'
import {getAppointments} from './actions/appointmentActions'
import {goNextMonth, goPrevMonth, goNextYear, goPrevYear} from './actions/calendarActions'
import {loadUser} from './actions/authActions'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F2F2F2;
  }
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topText: '',
      alert: {text: '', severity: '', shouldShow: false},
      currentYearAndMonth: null
    }

    this.handleAlert = this.handleAlert.bind(this)
  }

  componentDidMount() {
    const {calendarInfo} = store.getState()
    const nextMonth = calendarInfo.initNextMonth
    const prevMonth = calendarInfo.initPrevMonth
    const filterData = {
      nextMonth,
      prevMonth
    }
    store.dispatch(loadUser(filterData))
    this.setState({topText: CalendarHelpers.getTodayText(calendarInfo.currentMonth)})
    this.setState({currentYearAndMonth: calendarInfo.currentMonth})
  }

  componentDidUpdate() {
    const {calendarInfo, auth} = store.getState()
    const nextMonth = calendarInfo.initNextMonth
    const prevMonth = calendarInfo.initPrevMonth

    if (this.state.currentYearAndMonth !== calendarInfo.currentMonth){
      const filterData = {
        nextMonth,
        prevMonth,
        authorId: auth.user ? auth.user._id : ''
      }
      store.dispatch(getAppointments(filterData))
      this.setState({currentYearAndMonth: calendarInfo.currentMonth})
    }
  }

  changeTopText() {
    const {calendarInfo} = store.getState()
    const headerText = CalendarHelpers.getTodayText(calendarInfo.currentMonth)
    if (this.state.topText !== headerText) {
      this.setState({topText: headerText})
    }
  }

  handleSubmit(direction) {
    if(direction === 'right') {
      store.dispatch(goNextMonth())
    }
    else if(direction === 'left') {
      store.dispatch(goPrevMonth())
    }
    else if(direction === 'right-year') {
      store.dispatch(goNextYear())
    }else {
      store.dispatch(goPrevYear())
    }

    this.changeTopText()
  }

  handleAlert(values) {
    this.setState({alert: values})

    setTimeout(() => {
      this.setState({alert: {...values, shouldShow: false}})
    }, 3000)
  }

  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <div className="App">
        <AppBar>
          <CalendarLayoutWrapperSC>
            <Options handleAlert={this.handleAlert}/>
            <HeaderWrapperSC>
              <IconButton className='prev-year' aria-label='prev-year' size='medium' onClick={() => { this.handleSubmit('left-year') }}>
                <ArrowBackIosIcon fontSize='large' />
              </IconButton>
              <IconButton className='prev-month' aria-label='prev-month' size='medium' onClick={() => { this.handleSubmit('left') }}>
                <ArrowLeftIcon fontSize='large' />
              </IconButton>
              <Typography variant='h4' className='month-text'>
                {this.state.topText}
              </Typography>
              <IconButton className='next-month' aria-label='next-month' size='medium' onClick={() => { this.handleSubmit('right') }}>
                <ArrowRightIcon fontSize='large' />
              </IconButton>
              <IconButton className='next-year' aria-label='next-year' size='medium' onClick={() => { this.handleSubmit('right-year') }}>
                <ArrowForwardIosIcon fontSize='large' />
              </IconButton>
            </HeaderWrapperSC>
            <AuthBar/>
          </CalendarLayoutWrapperSC>
        </AppBar>
        <Toolbar/>
        {
          this.state.alert.shouldShow ?
            <AlertWrapperSC>
              <Alert severity={this.state.alert.severity}>
                {this.state.alert.text}
              </Alert>
            </AlertWrapperSC>
          :
            null
        }
        {/* <Alert severity={this.state.alert.severity}>
          {this.state.alert.text}
        </Alert> */}

        <Month handleAlert={this.handleAlert}/>
        </div>
      </Provider>
    )
  }
}

export default App;
