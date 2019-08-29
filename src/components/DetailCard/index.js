import React from 'react'

import {
  Card,
  CardBody,
  CardText
} from 'reactstrap'

import PriceButton from '../Buttons/PriceButton'
import SquareFootButton from '../Buttons/SquareFootButton'
import BedButton from '../Buttons/BedButton'
import BathButton from '../Buttons/BathButton'

import { AddressTitle, AddressSubtitle } from './styled'

const DetailCard = props => {
  return (<Card>
    <CardBody>
      <AddressTitle tag='h1'>{props.address}</AddressTitle>
      <AddressSubtitle>{props.neighborhood || props.zipCode}</AddressSubtitle>
      <hr />
      <CardText>
        {props.price && <PriceButton {...props} />}&nbsp;
        {props.squareFootage && <SquareFootButton {...props} size='sm' />}&nbsp;
        {props.propertyDetails && <BedButton {...props} size='sm' color='info' />}&nbsp;
        {props.propertyDetails && <BathButton {...props} size='sm' color='info' />}
      </CardText>
      <CardText>
        {props.description}
      </CardText>
    </CardBody>
  </Card>)
}

export default DetailCard
