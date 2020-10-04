import styled from 'styled-components'

const DayWrapperSC = styled.div`
  border: 2px solid black;
  border-left: ${props => (props.isSunday? "2px solid black" : "none")};
  border-top: none;
  border-radius: ${props => (props.bottomLeft ? "0px 0px 0px 10px" : props.bottomRight ? "0px 0px 10px 0px" : "0px 0px 0px 0px")};
  background-color: ${props => (props.isPartOfCurrentMonth ? 'white' : 'gainsboro')};
  width: ${props => (props.screenWidth ? props.screenWidth : '200')}px;
  max-width: 250px;
  height: 150px;

  .circle {
    display: block;
    height: 30px;
    width: 30px;
    line-height: 30px;

    -moz-border-radius: 15px;
    border-radius: 15px;
    background-color: ${props => (props.isToday ? 'lightskyblue' : 'none')};
    margin-top: 2%;
    margin-left: 2%;
    text-align: center;
  }
  
  p {
    color: ${props => (props.isPartOfCurrentMonth ? 'black' : 'grey')};
    vertical-align: top;
    margin-top: 2%;
    margin-left: 2%;
  }
`

export default DayWrapperSC