import React, {useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid'
import DayWrapperSC from './day-wrapper-sc'
import Appointment from '../appointment'

const Day = ({dayInfo}) => {
  const [windowSize, setWindowSize] = useState({width: undefined, height: undefined})
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const screenWidth = windowSize.width/7
  const {numOfDay, isSunday, isPartOfCurrentMonth, isToday, appointments} = dayInfo

  return (
    <DayWrapperSC isSunday={isSunday} isPartOfCurrentMonth={isPartOfCurrentMonth} isToday={isToday} screenWidth={screenWidth}>
      <div className='circle'>
        <p>
          {numOfDay ? numOfDay : ''}
        </p>
      </div>
      {
        appointments.map(appointment => (<Appointment key={uuidv4()} appointment={appointment} screenWidth={screenWidth}/>))
      }
    </DayWrapperSC>
  )
}

export default Day;