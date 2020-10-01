import styled from 'styled-components'

const AppointmentWrapperSC = styled.div`
  .list-item {
    background-color: cornflowerblue;
    padding: 3px;
    margin-top: 2%;
    width: ${props => props.appointmentWidth}px; 
    white-space: nowrap;
    border-radius: 7px;
  }
`

export default AppointmentWrapperSC