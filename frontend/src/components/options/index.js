import React, {useState} from 'react'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Popover from '@material-ui/core/Popover'
import AddIcon from '@material-ui/icons/Add'
import SettingsIcon from '@material-ui/icons/Settings'
import OptionWrapperSC from './option-wrapper-sc'

const Options = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <div>
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
          <IconButton className='add-button' aria-label='add-button'>
            <AddIcon style={{fontSize: 20 }}/>
          </IconButton>
          <IconButton className='settings' aria-label='settings'>
            <SettingsIcon style={{fontSize: 20}}/>
          </IconButton>
        </OptionWrapperSC>
      </Popover>
    </div>
  )
}

export default Options;