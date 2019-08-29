import React from 'react'

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faBed } from '@fortawesome/pro-solid-svg-icons'

import { Button } from 'reactstrap'

const BedButton = props => {
  return (<Button color={props.color || 'primary'} size={props.size || 'md'}>
    <Icon icon={faBed} />&nbsp;
    {props.propertyDetails.beds}
  </Button>)
}

export default BedButton
