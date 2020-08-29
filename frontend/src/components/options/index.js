import React, {useState} from 'react'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Popover from '@material-ui/core/Popover'
import SettingsIcon from '@material-ui/icons/Settings'
import OptionWrapperSC from './option-wrapper-sc'
import AppointmentModal from '../appointment-modal'

const Options = () => {
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

  const buttonSize = 25

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
          <AppointmentModal handleButtonClose={handleButtonClose}/>
          <IconButton className='settings' aria-label='settings'>
            <SettingsIcon style={{fontSize: buttonSize}}/>
          </IconButton>
        </OptionWrapperSC>
      </Popover>
    </div>
  )
}

export default Options;