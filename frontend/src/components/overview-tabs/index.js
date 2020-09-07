import React, {useState, Fragment} from 'react'
import { v4 as uuidv4 } from 'uuid'

//Components
import TabPanel from '../tab-panel'
import AppointmentTab from '../appointment-tab'

//Material UI
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { AppBar } from '@material-ui/core'


const OverviewTabs = ({appointments, date}) => {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Fragment>
      <AppBar position='static' color='default'>
        <Tabs value={value} onChange={handleChange} indicatorColor='primary' textColor='primary' variant='fullWidth'>
          <Tab label='Appointments'/>
          <Tab label='Weather'/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      { appointments.length ?
          appointments.map(appointment => (<AppointmentTab key={uuidv4()} appointment={appointment}/>))
        :
        `No appointments on ${date}`
      }
      </TabPanel>
      <TabPanel value={value} index={1}>
        Weather is currently unavailable
      </TabPanel>
    </Fragment>
  )
}

export default OverviewTabs