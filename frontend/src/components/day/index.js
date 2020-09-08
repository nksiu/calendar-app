import React, {useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid'

//Components
import Appointment from '../appointment'
import OverviewDialog from '../overview-dialog'

//Styling
import DayWrapperSC from './day-wrapper-sc'
import DayTopWrapperSC from './day-top-wrapper-sc'

const Day = ({dayInfo}) => {
  const [windowSize, setWindowSize] = useState({width: undefined, height: undefined})
  const [isShown, setIsShown] = useState(false)
  const stopHoverOnDialogClose = () => {
    setIsShown(false)
  }

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
  const {numOfDay, isSunday, isPartOfCurrentMonth, isToday, date, appointments} = dayInfo

  return (
    <DayWrapperSC 
      isSunday={isSunday} 
      isPartOfCurrentMonth={isPartOfCurrentMonth} 
      isToday={isToday} 
      screenWidth={screenWidth}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <DayTopWrapperSC>
        <div className='circle'>
          <p>
            {numOfDay ? numOfDay : ''}
          </p>
        </div>
        { isShown && 
          <OverviewDialog appointments={appointments} date={date} stopHoverOnDialogClose={stopHoverOnDialogClose}/>
        }
      </DayTopWrapperSC>
      {
        appointments.map(appointment => (<Appointment key={uuidv4()} appointment={appointment} screenWidth={screenWidth}/>))
      }
    </DayWrapperSC>
  )
}

export default Day;