import React, {Fragment} from 'react'
import { connect } from 'react-redux'

//Components
import {Button} from '@material-ui/core'

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
          <Button color='inherit' onClick={handleClick}>Logout</Button>
        : null
      }
    </Fragment>
  )
}

const mapStateToProps = state => ({
  authInfo: state.auth
})

export default connect(mapStateToProps, {logout})(Logout)