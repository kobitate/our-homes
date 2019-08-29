import styled from 'styled-components'
import { Row } from 'reactstrap'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const HomeCardImg = styled.div`
  height: 25vh;
  min-height: 250px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const HomeCardText = styled(Row)`
  color: white;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 25% .5em .2em .5em;
  display: flex;
  flex-wrap: nowrap;
  background: linear-gradient(360deg, rgba(0,0,0,1) 5%, rgba(0,0,0,0.8057598039215687) 30%, rgba(0,0,0,0) 79%, rgba(0,0,0,0) 100%);
  pointer-events: none;
  touch-action: none;
  * { color: white; }
`

const HomeCardTextIcon = styled.div``

const HomeCardTextInfo = styled.div`
  overflow: hidden;
  h2 {
    font-size: 1.2em;
    margin-bottom: 0;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p:last-of-type {
    margin-bottom: .2em;
  }
`

const HomeCardBadges = styled.div`
  z-index: 101;
  position: absolute;
  top: 0;
  padding: .5em;
`

const HomeNew = styled.div`
  position: absolute;
  left: 28px;
  width: 22px;
  height: 22px;
  text-align: center;
  padding: 1px;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.7);
`

const HomeNewIcon = styled(Icon)`
  transform: translateY(-2px);
`

const HomeCardImageControls = styled.div`
  z-index: 100;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0 1em;
  align-items: center;
  justify-content: space-between;
  opacity: 0.5;
  &.d-xs-none {
    // Font Awesome doesn't like Bootstrap's display classes
    // this fixes that :/
    @media screen and (max-width: 576px) {
      display: none !important;
    }
  }
  &:hover {
    opacity: 1;
  }
`

const Control = styled.div`
  filter: drop-shadow(0px 2px 2px black);
`

export {
  HomeCardImg,
  HomeCardText,
  HomeCardTextIcon,
  HomeCardTextInfo,
  HomeCardBadges,
  HomeNew,
  HomeNewIcon,
  HomeCardImageControls,
  Control
}
