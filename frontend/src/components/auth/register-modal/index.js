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
import {register} from '../../../actions/authActions'

const RegisterDialog = ({register}) => {
  const [open, setOpen] = useState(false)

  const [formInfo, setFormInfo] = useState({
    name: '',
    nameError: false,
    email: '',
    emailError: false,
    password: '',
    passwordError: false
  })

  const handleClose = () => {
    setOpen(false)
    setFormInfo({
      name: '',
      nameError: false,
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
    if (!formInfo.password && !formInfo.name && !formInfo.email) {
      setFormInfo({...formInfo, passwordError: true, nameError: true, emailError: true})
    }

    else if (!formInfo.name && !formInfo.email) setFormInfo({...formInfo, nameError: true, emailError: true})
    else if (!formInfo.email && !formInfo.password) setFormInfo({...formInfo, emailError: true, passwordError: true})
    else if (!formInfo.name && !formInfo.password) setFormInfo({...formInfo, nameError: true, passwordError: true})

    else if (!formInfo.name) setFormInfo({...formInfo, nameError: true})
    else if (!formInfo.email) setFormInfo({...formInfo, emailError: true})
    else if (!formInfo.password) setFormInfo({...formInfo, passwrodError: true})

    else {
      const newUser = {
        name: formInfo.name,
        email: formInfo.email,
        password: formInfo.password
      }
  
      register(newUser)
      handleClose()
    }
  }

  return (
    <div>
      <Button className='reg-btn' color="inherit" onClick={handleClickOpen}>Register</Button>

      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth='sm'>
        <DialogTitle>
          Register
        </DialogTitle>
        <DialogContent dividers>
            <form autoComplete='off' noValidate>
              <TextField 
                id='standard-basic' 
                name='name'
                label='Name' 
                error={formInfo.nameError} 
                fullWidth
                onChange={onChange}
              />
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
                id='standard-basic' 
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
            Register
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default connect(null, {register})(RegisterDialog)