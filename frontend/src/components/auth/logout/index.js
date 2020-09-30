import React from 'react'
import { connect } from 'react-redux'

//Components
import {Button} from '@material-ui/core'

//Actions
import {logout} from '../../../actions/authActions'

const Logout = ({logout}) => {
  return (
    <Button color='inherit' onClick={logout}>Logout</Button>
  )
}

export default connect(null, logout)(Logout)