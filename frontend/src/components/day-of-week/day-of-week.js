import styled from 'styled-components'

const DayOfWeekWrapperSC = styled.div`
  border: 2px solid black;
  border-left: ${props => (props.weekDay === "Sun" ? "2px solid black" : "none")};
  width: 200px;
  text-align: center;
  
  p {
    color: black;
  }
`

export default DayOfWeekWrapperSC