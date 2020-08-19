import React, {Component} from 'react';
import './App.css';
import Day from './components/week-day/WeekDay'
import Week from '../src/components/Week'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Calendar</h1>
        <Week/>
      </div>
    )
  }
}

export default App;
