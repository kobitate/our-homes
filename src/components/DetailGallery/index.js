import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faLink } from '@fortawesome/pro-regular-svg-icons'

import ReactSwipe from 'react-swipe'

import { getImages, chunkArray } from '../../utils'
import {
  Gallery,
  GalleryImg,
  GalleryControls,
  GalleryControl,
  GalleryThumbPage,
  GalleryThumb,
  GalleryImgLink } from './styled'

export default class DetailGallery extends Component {
  constructor () {
    super()
    this.state = {
      imageNum: 0,
      thumbPage: 0
    }
  }

  next (mainSwipeRef, thumbSwipeRef) {
    if (!mainSwipeRef) {
      return false
    }

    const { imageNum, thumbPage } = this.state

    const toImage = imageNum + 1
    const pageNeeded = Math.floor(toImage / 4)

    if (this.props.photoCount <= toImage) {
      return false
    }

    mainSwipeRef.next()

    if (thumbPage !== pageNeeded) {
      thumbSwipeRef.slide(pageNeeded)
      this.setState({ imageNum: toImage, thumbPage: pageNeeded })
    } else {
      this.setState({ imageNum: toImage })
    }
  }

  prev (mainSwipeRef, thumbSwipeRef) {
    if (!mainSwipeRef) {
      return false
    }

    const { imageNum, thumbPage } = this.state

    const toImage = imageNum - 1
    const pageNeeded = Math.floor(toImage / 4)

    if (toImage < 0) {
      return false
    }

    mainSwipeRef.prev()

    if (thumbPage !== pageNeeded) {
      thumbSwipeRef.slide(pageNeeded)
      this.setState({ imageNum: toImage, thumbPage: pageNeeded })
    } else {
      this.setState({ imageNum: toImage })
    }
  }

  to (toImage, mainSwipeRef, thumbSwipeRef) {
    if (!mainSwipeRef) {
      return false
    }

    mainSwipeRef.slide(toImage)

    const { thumbPage } = this.state

    const pageNeeded = Math.floor(toImage / 4)

    if (thumbPage !== pageNeeded) {
      thumbSwipeRef.slide(pageNeeded)
      this.setState({ imageNum: toImage, thumbPage: pageNeeded })
    } else {
      this.setState({ imageNum: toImage })
    }
  }

  render () {
    const images = getImages(this.props.mlsID, this.props.photoCount || 1)
    const thumbPages = chunkArray(images, 4)
    let mainSwipeRef, thumbSwipeRef

    return (<React.Fragment>
      <Row>
        <Col>
          <Gallery>
            <ReactSwipe ref={el => (mainSwipeRef = el)} swipeOptions={{ continuous: false }} childCount={this.props.photoCount}>
              {images.length === 0
                ? <GalleryImg src={'http://placekitten.com/500/400'} />
                : images.map((image, imageIndex) => <GalleryImg src={image} key={imageIndex} />)}
            </ReactSwipe>
            <GalleryControls className='d-xs-none d-sm-flex'>
              <GalleryControl onClick={() => this.prev(mainSwipeRef, thumbSwipeRef)}><Icon icon={faChevronLeft} size='2x' /></GalleryControl>
              <GalleryControl onClick={() => this.next(mainSwipeRef, thumbSwipeRef)}><Icon icon={faChevronRight} size='2x' /></GalleryControl>
              <GalleryImgLink data-clipboard-text={images[this.state.imageNum] || 'http://placekitten.com/500/400'}>
                <Icon icon={faLink} />
              </GalleryImgLink>
            </GalleryControls>
          </Gallery>
        </Col>
      </Row>
      <Row noGutters>
        <Col>
          <ReactSwipe ref={el => (thumbSwipeRef = el)} swipeOptions={{ continuous: false }} childCount={Math.floor(this.props.photoCount / 4)}>
            {thumbPages.map((page, pageIndex) =>
              <GalleryThumbPage key={pageIndex}>
                {page.map((image, thumbIndexInPage) =>
                  <GalleryThumb src={image} onClick={() => this.to(4 * pageIndex + thumbIndexInPage, mainSwipeRef, thumbSwipeRef)} key={thumbIndexInPage} />
                )}
              </GalleryThumbPage>)}
          </ReactSwipe>
        </Col>
      </Row>
    </React.Fragment>)
  }
}
