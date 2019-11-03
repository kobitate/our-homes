import React, { Component } from 'react'
import moment from 'moment'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faHomeLg as faHomeUnknown } from '@fortawesome/pro-regular-svg-icons'
import { faHomeLg, faCity, faCalendarAlt, faStar } from '@fortawesome/pro-solid-svg-icons'

import { getImages } from '../../utils'
import PriceButton from '../Buttons/PriceButton'

import { Col, Button } from 'reactstrap'
import {
  HomeCard,
  HomeCardImg,
  HomeCardGradient,
  HomeCardText,
  HomeCardTextIcon,
  HomeCardTextInfo,
  HomeCardBadges,
  HomeNew,
  HomeNewIcon
} from './styled'

export default class HomesTableItem extends Component {
  constructor () {
    super()
    this.state = {
      images: false,
      reactSwipeRef: null
    }
  }

  componentDidMount () {
    setTimeout(() => {
      const images = getImages(this.props.mlsID, this.props.photoCount)
      this.setState({
        // images: images.map(image => <HomeCardImg src={image} />)
        images
      })
    }, 500)
  }

  render () {
    // let reactSwipeRef
    return (<Col xs={12} sm={6} md={4} xl={3}>
      <HomeCard>
        <HomeCardImg src={(this.state.images.length === 0 || this.state.images === false) ? '/img/home-loading.png' : this.state.images[0]} />
        {/* <ReactSwipe
          ref={ref => (reactSwipeRef = ref)}
          childCount={this.state.images === false ? 1 : this.state.images.length}>
          {(this.state.images.length === 0 || this.state.images === false)
            ? <HomeCardImg src={'/img/home-loading.png'} />
            : this.state.images}
        </ReactSwipe> */}
        <HomeCardBadges>
          <PriceButton {...this.props} />
          &nbsp;
          <Button size='sm' color='secondary' tag='a' title={moment(this.props.received, moment.ISO_8601).format('MMMM Do, YYYY @ h:mm a')}>
            <Icon icon={faCalendarAlt} />&nbsp;
            {moment(this.props.received, moment.ISO_8601).fromNow()}
          </Button>
        </HomeCardBadges>
        <HomeCardText noGutters className='text-light'>
          <HomeCardTextIcon>
            {this.props.status === 'NEW' &&
            <HomeNew className='bg-danger rounded-circle'><HomeNewIcon icon={faStar} inverse /></HomeNew>}
            <Icon fixedWidth icon={this.props.type === 'SF' ? faHomeLg : this.props.type === 'CC' ? faCity : faHomeUnknown} size='2x' className='mt-2' />
          </HomeCardTextIcon>
          <HomeCardTextInfo className='pl-2'>
            <h2><a href={`/home/${this.props.mlsID}`}>{this.props.address}</a></h2>
            <p>
              {this.props.propertyDetails.beds} bed {this.props.propertyDetails.fullBaths}f, {this.props.propertyDetails.halfBaths}h bath
            </p>
          </HomeCardTextInfo>
        </HomeCardText>
        <HomeCardGradient />
        {/* <HomeCardImageControls className='d-xs-none d-sm-flex'>
          <Control onClick={() => reactSwipeRef.prev()}><Icon icon={faChevronLeft} size='2x' /></Control>
          <Control onClick={() => reactSwipeRef.next()}><Icon icon={faChevronRight} size='2x' /></Control>
        </HomeCardImageControls> */}
      </HomeCard>
    </Col>)
  }
}
