import React, {useState, Fragment} from 'react'

//Components
import OverviewTabs from '../overview-tabs'

//Material UI
import {
  Dialog, 
  DialogTitle,
  DialogContent,
  DialogActions,
  AppBar,
  Tabs,
  Tab,
  Button
} from '@material-ui/core'

const OverviewDialog = ({appointments, date, stopHoverOnDialogClose, handleAlert}) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(0)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    stopHoverOnDialogClose()
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Fragment>
      <Button variant='contained' size='small' onClick={handleClickOpen} className='all-appointments'>
        Overview
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth='md'>
        <DialogTitle>
          <AppBar position='static' color='default'>
            <Tabs value={value} onChange={handleChange} indicatorColor='primary' textColor='primary' variant='fullWidth'>
              <Tab label='Appointments'/>
              <Tab label='Weather'/>
            </Tabs>
          </AppBar>
        </DialogTitle>
        <DialogContent>
          <OverviewTabs value={value} appointments={appointments} date={date} handleAlert={handleAlert} handleCloseOnUpdate={handleClose}/>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export default OverviewDialog