import React, {Component, useEffect} from 'react';
import './App.css';
import Month from './components/month'
import {getDaysInMonth, getToday, getTodayText, firstWeekDayOfMonth, getPreviousMonth} from '../src/actions/helpers'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dateToday: getToday().split('-'),
      topText: getTodayText(),
      daysInPrevMonth: 0
    }
  }

  componentDidMount() {
    const daysInMonth = getDaysInMonth(this.state.dateToday[0], this.state.dateToday[1])
    const daysInPreviousMonth = getPreviousMonth(this.state.dateToday[0], this.state.dateToday[1])
    const dayOfWeek = firstWeekDayOfMonth()
    this.setState({daysInPrevMonth: daysInPreviousMonth})
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.topText}</h1>
        <Month/>
      </div>
    )
  }
}

export default App;
