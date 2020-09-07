import React, {useState, Fragment} from 'react'

//Components
import OverviewTabs from '../overview-tabs'

//Material UI
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'

const OverviewDialog = ({appointments, date, stopHoverOnDialogClose}) => {
  // console.log(appointments)
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    stopHoverOnDialogClose()
  }

  return (
    <Fragment>
      <Button variant='contained' size='small' onClick={handleClickOpen} className='all-appointments'>
        Overview
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth='sm'>
        {/* <DialogTitle>
          {`All Appointments on ${date}`}
        </DialogTitle>
        <DialogContent>
          {appointments.length ?
            <div>
              hello
            </div>
            :
            <div>
              No appointments for this day
            </div>
          }
        </DialogContent> */}
        <DialogContent>
          <OverviewTabs appointments={appointments} date={date}/>
        </DialogContent>
        <DialogActions>
          <Button autoFocus color='primary' onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export default OverviewDialog