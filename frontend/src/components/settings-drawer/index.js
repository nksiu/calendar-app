import React, {useState} from 'react'

//Components
import Logout from '../auth/logout'
import {Drawer, IconButton} from '@material-ui/core'
import SettingsIcon from '@material-ui/icons/Settings'

const SettingsDrawer = ({handleButtonClose}) => {
  const buttonSize = 25

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return
    // }

    setState({ ...state, [anchor]: open })
    if (!open) handleButtonClose()
  }

  return (
    <div>
      <IconButton className='settings' aria-label='settings' onClick={toggleDrawer('left', true)}>
        <SettingsIcon style={{fontSize: buttonSize}}/>
      </IconButton>

      <Drawer anchor='left' open={state.left} onClose={toggleDrawer('left', false)}>
        <Logout handleButtonClose={handleButtonClose}/>
      </Drawer>
    </div>
  )
}

export default (SettingsDrawer)