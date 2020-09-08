import styled from 'styled-components'

const AccordionWrapperSC = styled.div`
  .root {
    width: 100%;
    background-color: ${props => (props.isEven ? 'white': 'gainsboro')}
  }

  .heading {
    font-size: 1rem;
    flex-basis: 60%;
    flex-shrink: 0;
  }

  .secondaryHeading {
    font-size: 1rem;
    color: gray;
  }
`

export default AccordionWrapperSC