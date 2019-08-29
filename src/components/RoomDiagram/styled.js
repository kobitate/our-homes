import styled from 'styled-components'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const Home = styled.div`
  display: flex;
`

const Floor = styled.div`
  justify-content: space-around;
`

const RoomIcon = styled(Icon)`
  font-size: 2em;
  height: 40px;
  margin: .3em;
`

export { RoomIcon }
