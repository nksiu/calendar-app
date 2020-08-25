import styled from 'styled-components'

const HeaderWrapperSC = styled.div`
.next-month {
  grid-area: right-arrow;
}

.prev-month {
  grid-area: left-arrow;
}

h1 {
  grid-area: text;
  text-align: center;
}

  display: grid;
  justify-content: center;
  grid-template-columns: 40px 220px 40px;
  grid-template-rows: auto;
  grid-template-areas:
    "left-arrow text right-arrow"
`

export default HeaderWrapperSC