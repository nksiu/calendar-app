import React, {useState} from 'react'

//Components
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Popover from '@material-ui/core/Popover'
import OptionWrapperSC from './option-wrapper-sc'
import AppointmentAddDialog from '../appointment-add-dialog'
import SettingsDrawer from '../settings-drawer'

const Options = ({handleAlert}) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const handleButtonClose = (value) => {
    setAnchorEl(value)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className='options-menu'>
      <IconButton className='menu-button' aria-label='menu-button' onClick={handleClick}>
        <MenuIcon style={{fontSize: 40 }}/>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <OptionWrapperSC>
          <AppointmentAddDialog handleButtonClose={handleButtonClose} handleAlert={handleAlert}/>
          <SettingsDrawer handleButtonClose={handleButtonClose}/>
        </OptionWrapperSC>
      </Popover>
    </div>
  )
}

export default Options;