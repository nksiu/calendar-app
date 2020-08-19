import React, {Component} from 'react';
import './App.css';
import Week from './components/week/Week'

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
