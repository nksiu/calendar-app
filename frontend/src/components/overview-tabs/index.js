import React, {Fragment} from 'react'

//Components
import TabPanel from '../tab-panel'
import AppointmentTab from '../appointment-tab'

//Material UI
import {Typography} from '@material-ui/core'


const OverviewTabs = ({value, appointments, date}) => {
  return (
    <Fragment>
      <TabPanel value={value} index={0}>
      { appointments.length ?
          <AppointmentTab appointments={appointments}/>
        :
        <Typography>
          No appointments on {date}
        </Typography>
      }
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>
          Weather is currently unavailable
        </Typography>
      </TabPanel>
    </Fragment>
  )
}

export default OverviewTabs