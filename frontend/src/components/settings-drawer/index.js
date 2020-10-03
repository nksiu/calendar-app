import React, {useState} from 'react'
import {connect} from 'react-redux'

//Components
import Logout from '../auth/logout'
import SettingSwitches from './settings-switch'
import {Drawer, IconButton, List, Divider} from '@material-ui/core'
import SettingsIcon from '@material-ui/icons/Settings'

//Actions
import {updateSettings} from '../../actions/authActions'

const SettingsDrawer = ({handleButtonClose, updateSettings, authInfo}) => {
  const buttonSize = 25

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open })
    if (!open) {
      if (authInfo.isAuthenticated) {
        const updatedSettings = {
          userId: localStorage.getItem('userId'),
          hideAppointments: authInfo.hideAppointments
        }
        updateSettings(updatedSettings)
      }
      handleButtonClose()
    }
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

const mapStateToProps = state => ({
  authInfo: state.auth
})

export default connect(mapStateToProps, {updateSettings})(SettingsDrawer)