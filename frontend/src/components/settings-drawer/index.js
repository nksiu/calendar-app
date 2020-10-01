import React, {useState} from 'react'

//Components
import Logout from '../auth/logout'
import SettingSwitches from './settings-switch'
import {Drawer, IconButton, List, Divider} from '@material-ui/core'
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
    setState({ ...state, [anchor]: open })
    if (!open) handleButtonClose()
  }

  return (
    <div>
      <IconButton className='settings' aria-label='settings' onClick={toggleDrawer('left', true)}>
        <SettingsIcon style={{fontSize: buttonSize}}/>
      </IconButton>

      <Drawer anchor='left' open={state.left} onClose={toggleDrawer('left', false)}>
        <SettingSwitches />
        <Divider />
        <List>
          <Logout handleButtonClose={handleButtonClose}/>
        </List>
      </Drawer>
    </div>
  )
}

export default (SettingsDrawer)