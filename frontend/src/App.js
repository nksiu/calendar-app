import React, {Component} from 'react';
import './App.css';
import Month from './components/month'
import WeekWrapperSC from './components/week-days/week-wrapper'
import {getDaysInMonth, getToday, getTodayText, firstWeekDayOfMonth, getPreviousMonth, createMonthMap} from '../src/actions/helpers'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dateToday: getToday().split('-'),
      topText: getTodayText(),
      month: []
    }
  }

  componentDidMount() {
    const daysInMonth = getDaysInMonth(this.state.dateToday[0], this.state.dateToday[1])
    const daysInPreviousMonth = getPreviousMonth(this.state.dateToday[0], this.state.dateToday[1])
    const dayOfWeek = firstWeekDayOfMonth()
    const monthArr = createMonthMap(daysInMonth, daysInPreviousMonth, dayOfWeek)
    this.setState({month: monthArr})
  }

  render() {
    return (
      <div className="App">
        <WeekWrapperSC>
          <h1>{this.state.topText}</h1>
        </WeekWrapperSC>
        <Month month={this.state.month}/>
      </div>
    )
  }
}

export default App;
