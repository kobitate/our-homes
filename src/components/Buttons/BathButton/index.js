import React from 'react'

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faBath, faToilet } from '@fortawesome/pro-solid-svg-icons'

import { Button } from 'reactstrap'

const BathButton = props => {
  return (<Button color={props.color || 'primary'} size={props.size || 'md'}>
    <Icon icon={faBath} />&nbsp;
    {props.propertyDetails.fullBaths}
    <Icon icon={faToilet} className='ml-2' />&nbsp;
    {props.propertyDetails.halfBaths}
  </Button>)
}

export default BathButton
