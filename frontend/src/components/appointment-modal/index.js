import React, {useState} from 'react'
import AppointmentModalBody from '../appointment-modal-body'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import Modal from '@material-ui/core/Modal'


const AppointmentModal = () => {
  const [open, setOpen] = useState(false)

  const handleModalState = (value) =>{
    setOpen(value)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const buttonSize = 25

  return (
    <div>
      <IconButton className='add-button' aria-label='add-button' onClick={handleOpen}>
        <AddIcon style={{fontSize: buttonSize}}/>
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <AppointmentModalBody handleModal={handleModalState}/>
      </Modal>
    </div>
  )
}

export default AppointmentModal