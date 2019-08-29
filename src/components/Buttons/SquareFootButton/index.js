import React from 'react'

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faRulerTriangle } from '@fortawesome/pro-solid-svg-icons'

import { Button } from 'reactstrap'

const SquareFootButton = props => {
  return (<Button color={props.color || 'primary'} size={props.size || 'md'}>
    <Icon icon={faRulerTriangle} />&nbsp;
    {props.squareFootage} sqft
  </Button>)
}

export default SquareFootButton
