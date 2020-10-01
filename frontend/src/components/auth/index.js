import React, {Fragment} from 'react'
import {connect} from 'react-redux'

//Components
import LoginDialog from './login-modal'
import RegisterDialog from './register-modal'
import {Typography} from '@material-ui/core'

const AuthBar = ({authInfo}) => {
  const {isAuthenticated, user} = authInfo
  return (
    <Fragment>
      {
        isAuthenticated ?
          <Typography className='user-welcome-txt' variant='h6'>Welcome, {user.name}</Typography>
        :
          <Fragment>
            <RegisterDialog />
            <LoginDialog />
          </Fragment>
      }
    </Fragment>
  )
}

const mapStateToProps = state => ({
  authInfo: state.auth
})

export default connect(mapStateToProps, null)(AuthBar)