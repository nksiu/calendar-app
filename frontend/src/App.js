import React, {Component} from 'react';
import './App.css';

//Redux
import {Provider} from 'react-redux'
import store from './store'

//Components
import Month from './components/month'
import HeaderWrapperSC from './header-wrapper-sc'
import IconButton from '@material-ui/core/IconButton'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

//Actions
import * as CalendarHelpers from './functions/calendar-helpers'
import {initCalendarInfo, goNextMonth, goPrevMonth} from './actions/calendarActions'

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

    this.changeTopText()
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <HeaderWrapperSC>
            <IconButton className='prev-month' aria-label='prev-month' size='medium' onClick={() => { this.handleSubmit('left') }}>
              <ArrowLeftIcon fontSize='large' />
            </IconButton>
            <h1>{this.state.topText}</h1>
            <IconButton className='next-month' aria-label='next-month' size='medium' onClick={() => { this.handleSubmit('right') }}>
              <ArrowRightIcon fontSize='large' />
            </IconButton>
          </HeaderWrapperSC>
          <Month/>
        </div>
      </Provider>
    )
  }
}

export default App;
