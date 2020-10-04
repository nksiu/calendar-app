import React, {Fragment} from 'react'
import { connect } from 'react-redux'

//Components
import {ListItem, ListItemIcon, ListItemText, Typography} from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

//Actions
import {logout, updateSettings} from '../../../actions/authActions'

const Logout = ({logout, authInfo, handleButtonClose, updateSettings}) => {
  const {isAuthenticated} = authInfo
  const handleClick = () => {
    const updatedSettings = {
      userId: localStorage.getItem('userId'),
      hideAppointments: authInfo.hideAppointments
    }
    updateSettings(updatedSettings)
    logout()
    handleButtonClose()
  }
  return (
    <Fragment>
      {
        isAuthenticated ?
          <ListItem button onClick={handleClick}>
            <ListItemIcon><ExitToAppIcon/></ListItemIcon>
            <ListItemText 
             disableTypography
             primary={<Typography style={{color: 'red'}}>Logout</Typography>}
            />
          </ListItem>
        : null
      }
    </Fragment>
  )
}

const mapStateToProps = state => ({
  authInfo: state.auth
})

export default connect(mapStateToProps, {logout, updateSettings})(Logout)