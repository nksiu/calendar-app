import React, {useState} from 'react'
import {connect} from 'react-redux'

//Material UI
import {
  Dialog, 
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField
} from '@material-ui/core'

//Actions
import {login} from '../../../actions/authActions'

const LoginDialog = ({login}) => {
  const [open, setOpen] = useState(false)

  const [formInfo, setFormInfo] = useState({
    email: '',
    emailError: false,
    password: '',
    passwordError: false
  })

  const handleClose = () => {
    setOpen(false)
    setFormInfo({
      email: '',
      emailError: false,
      password: '',
      passwordError: false
    })
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const onChange = (e) => {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
      [`${e.target.name}Error`]: false
    })
  }
  
  const handleClick = () => {
    if (!formInfo.password && !formInfo.email) {
      setFormInfo({...formInfo, passwordError: true, emailError: true})
    }

    else if (!formInfo.email) setFormInfo({...formInfo, emailError: true})
    else if (!formInfo.password) setFormInfo({...formInfo, passwrodError: true})

    else {
      const user = {
        email: formInfo.email,
        password: formInfo.password
      }
  
      login(user)
      handleClose()
    }
  }

  return (
    <div>
      <Button className='login-btn' color="inherit" onClick={handleClickOpen}>Login</Button>

      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth='sm'>
        <DialogTitle>
          Login
        </DialogTitle>
        <DialogContent dividers>
            <form autoComplete='off' noValidate>
              <TextField 
                id='standard-basic'
                name='email'
                label='Email Address'
                error={formInfo.emailError}
                style={{marginTop: '10px'}}
                fullWidth
                onChange={onChange}
              />
              <TextField 
                id='standard' 
                name='password'
                label='Password' 
                error={formInfo.passwordError}
                style={{marginTop: '10px'}}
                fullWidth
                onChange={onChange}
                type='password'
              />
            </form>
        </DialogContent>
        <DialogActions>
          <Button color='primary' onClick={handleClick}>
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default connect(null, {login})(LoginDialog)