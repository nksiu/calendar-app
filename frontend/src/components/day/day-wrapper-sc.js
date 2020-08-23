import styled from 'styled-components'

const DayWrapperSC = styled.div`
  border: 2px solid black;
  border-left: ${props => (props.isSunday? "2px solid black" : "none")};
  border-top: none;
  background-color: ${props => (props.isPartOfCurrentMonth? 'white' : 'gainsboro')};
  width: 200px;
  height: 150px;
  
  p {
    color: ${props => (props.isPartOfCurrentMonth? 'black' : 'grey')};
    vertical-align: top;
    margin-top: 2%;
    margin-left: 2%;
  }
`

export default DayWrapperSC