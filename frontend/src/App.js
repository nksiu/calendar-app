import React, {Component} from 'react';
import './App.css';

//Redux
import {Provider} from 'react-redux'
import store from './store'

//Components
import Month from './components/month'
import WeekWrapperSC from './components/week-days/week-wrapper'

//Actions
import * as CalendarHelpers from './functions/calendar-helpers'
import {initCalendarInfo} from './actions/calendarActions'

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

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <WeekWrapperSC>
            <h1>{this.state.topText}</h1>
          </WeekWrapperSC>
          <Month/>
        </div>
      </Provider>
    )
  }
}

export default App;
