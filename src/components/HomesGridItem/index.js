import React from 'react'
import moment from 'moment'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faHomeLg as faHomeUnknown } from '@fortawesome/pro-regular-svg-icons'
import { faHomeLg, faCity, faCalendarAlt, faStar, faChevronLeft, faChevronRight } from '@fortawesome/pro-solid-svg-icons'

import { getImages } from '../../utils'
import PriceButton from '../Buttons/PriceButton'

import ReactSwipe from 'react-swipe'
import { Col, Card, Button } from 'reactstrap'
import {
  HomeCardImg,
  HomeCardText,
  HomeCardTextIcon,
  HomeCardTextInfo,
  HomeCardBadges,
  HomeNew,
  HomeNewIcon,
  HomeCardImageControls,
  Control
} from './styled'

const HomesTableItem = props => {
  const images = getImages(props.mlsID, props.photoCount)
  let reactSwipeRef
  return (<Col xs={12} sm={6} md={4} xl={3}>
    <Card>
      <ReactSwipe ref={el => (reactSwipeRef = el)}>
        {images.length === 0
          ? <HomeCardImg src={'http://placekitten.com/500/400'} />
          : images.map(image => <HomeCardImg src={image} />)}
      </ReactSwipe>
      <HomeCardBadges>
        <PriceButton {...props} />
        &nbsp;
        <Button size='sm' color='secondary' tag='a' title={moment(props.received, moment.ISO_8601).format('MMMM Do, YYYY @ h:mm a')}>
          <Icon icon={faCalendarAlt} />&nbsp;
          {moment(props.received, moment.ISO_8601).fromNow()}
        </Button>
      </HomeCardBadges>
      <HomeCardText noGutters className='text-light'>
        <HomeCardTextIcon>
          {props.status === 'NEW' &&
          <HomeNew className='bg-danger rounded-circle'><HomeNewIcon icon={faStar} inverse /></HomeNew>}
          <Icon fixedWidth icon={props.type === 'SF' ? faHomeLg : props.type === 'CC' ? faCity : faHomeUnknown} size='2x' className='mt-2' />
        </HomeCardTextIcon>
        <HomeCardTextInfo className='pl-2'>
          <h2>{props.address}</h2>
          <p>
            {props.propertyDetails.beds} bed {props.propertyDetails.fullBaths}f, {props.propertyDetails.halfBaths}h bath
          </p>
        </HomeCardTextInfo>
      </HomeCardText>
      <HomeCardImageControls className='d-xs-none d-sm-flex'>
        <Control onClick={() => reactSwipeRef.prev()}><Icon icon={faChevronLeft} size='2x' /></Control>
        <Control onClick={() => reactSwipeRef.next()}><Icon icon={faChevronRight} size='2x' /></Control>
      </HomeCardImageControls>
    </Card>
  </Col>)
}

export default HomesTableItem
