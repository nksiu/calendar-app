import React,{useState, useEffect} from 'react'
import DayOfWeekWrapperSC from './day-of-week-sc'

const WeekDay = ({weekDay}) => {
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

  return (
    <DayOfWeekWrapperSC weekDay={weekDay} screenWidth={screenWidth}>
        <div>
          <p>
          {weekDay}
          </p>
        </div>
    </DayOfWeekWrapperSC>
  )
}

export default WeekDay;