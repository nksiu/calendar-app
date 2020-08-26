import React, {Component} from 'react';
import './App.css';

//Redux
import {Provider} from 'react-redux'
import store from './store'

//Components
import Month from './components/month'
import IconButton from '@material-ui/core/IconButton'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Options from './components/options'

//Styling
import HeaderWrapperSC from './styled-wrapper/header-wrapper-sc'
import CalendarLayoutWrapperSC from './styled-wrapper/calendar-layout-wrapper'

//Actions
import * as CalendarHelpers from './functions/calendar-helpers'
import {initCalendarInfo, goNextMonth, goPrevMonth, goNextYear, goPrevYear} from './actions/calendarActions'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topText: ''
    }
  }

  componentDidMount() {
    store.dispatch(initCalendarInfo())
    const {calendarInfo} = store.getState()
    this.setState({topText: CalendarHelpers.getTodayText(calendarInfo.currentMonth)})
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

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          
        <CalendarLayoutWrapperSC>
          <Options/>
          <HeaderWrapperSC>
            <IconButton className='prev-year' aria-label='prev-year' size='medium' onClick={() => { this.handleSubmit('left-year') }}>
              <ArrowBackIosIcon fontSize='large' />
            </IconButton>
            <IconButton className='prev-month' aria-label='prev-month' size='medium' onClick={() => { this.handleSubmit('left') }}>
              <ArrowLeftIcon fontSize='large' />
            </IconButton>
            <h1>{this.state.topText}</h1>
            <IconButton className='next-month' aria-label='next-month' size='medium' onClick={() => { this.handleSubmit('right') }}>
              <ArrowRightIcon fontSize='large' />
            </IconButton>
            <IconButton className='next-year' aria-label='next-year' size='medium' onClick={() => { this.handleSubmit('right-year') }}>
              <ArrowForwardIosIcon fontSize='large' />
            </IconButton>
          </HeaderWrapperSC>
        </CalendarLayoutWrapperSC>

        <Month/>

        </div>
      </Provider>
    )
  }
}

export default App;
