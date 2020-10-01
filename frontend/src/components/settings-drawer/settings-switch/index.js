import React, {useState} from 'react'
import { connect } from 'react-redux'

//Components
import {FormGroup, FormControlLabel, Switch} from '@material-ui/core'

//Actions
import {hideAppointments} from '../../../actions/settingsActions'

const SettingSwitches = ({hideAppointments, settings}) => {
  const [settingsForm, setSettings] = useState({
    hideAppointment: settings.hideAppointments
  })

  const handleChange = (event) => {
    setSettings({ ...settingsForm, [event.target.name]: event.target.checked })
    hideAppointments(settingsForm)
  }

  return (
    <FormGroup>
      <FormControlLabel
        style={{marginLeft: '8px'}} 
        control={<Switch color='primary' checked={settingsForm.hideAppointment} onChange={handleChange} name='hideAppointment'/>}
        label='Hide Appointments'
      />
    </FormGroup>
  )
}

const mapStateToProps = state => ({
  settings: state.settings
})

export default connect(mapStateToProps, {hideAppointments})(SettingSwitches)