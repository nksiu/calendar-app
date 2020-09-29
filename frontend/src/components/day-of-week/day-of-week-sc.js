import styled from 'styled-components'

const DayOfWeekWrapperSC = styled.div`
  border: 2px solid black;
  border-left: ${props => (props.weekDay === "Sun" ? "2px solid black" : "none")};
  width: ${props => props.screenWidth ? props.screenWidth : '200'}px;
  max-width: 250px;
  text-align: center;
  background-color: white;
  
  p {
    color: black;
  }
`

export default DayOfWeekWrapperSC