import styled from 'styled-components'
import Clipboard from 'react-clipboard.js'

const Gallery = styled.div`
  padding: 3px;
`

const GalleryImg = styled.div`
  height: 400px;
  background-color: rgba(245, 245, 245, 0.2);
  background-image: url(${props => props.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`

const GalleryControls = styled.div`
  position: absolute;
  width: 100%;
  height: 100%; 
  z-index: 100;
  opacity: 0.5;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  padding: 2em;
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

const GalleryControl = styled.div`
  filter: drop-shadow(0px 2px 2px black);
`

const GalleryThumbPage = styled.div`
  display: flex;
`

const GalleryThumb = styled.div`
  height: 90px;
  width: 25%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.7);
  margin: 3px;
`

const GalleryImgLink = styled(Clipboard)`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  color: white;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.7);
  margin: 1em 1em 0;
  background: rgba(0,0,0,0.5);
  border-radius: 3px 0 0 3px;
`

export {
  Gallery,
  GalleryControls,
  GalleryControl,
  GalleryImg,
  GalleryThumbPage,
  GalleryThumb,
  GalleryImgLink }
