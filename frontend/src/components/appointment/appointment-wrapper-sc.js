import styled from 'styled-components'

const AppointmentWrapperSC = styled.div`
  background-color: cornflowerblue;
  width: ${props => (props.screenWidth ? `${props.screenWidth}px`: '93%')};
  height: 10%;
  margin-top 2%;
  margin-left: 2%;
  padding: 3px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export default AppointmentWrapperSC