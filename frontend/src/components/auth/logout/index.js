import React, {Fragment} from 'react'
import { connect } from 'react-redux'

//Components
import {ListItem, ListItemIcon, ListItemText, Typography} from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

//Actions
import {logout} from '../../../actions/authActions'

const Logout = ({logout, authInfo, handleButtonClose}) => {
  const {isAuthenticated} = authInfo
  const handleClick = () => {
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

export default connect(mapStateToProps, {logout})(Logout)