import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faHeart, faBath, faToilet, faBed } from '@fortawesome/pro-regular-svg-icons'
import { faHeart as faHeartSolid, faStar } from '@fortawesome/pro-solid-svg-icons'

import PriceButton from '../Buttons/PriceButton'

const HomesTableItem = props => {
  return (<tr>
    <td><Icon icon={props.favorited ? faHeartSolid : faHeart} className={props.favorited ? 'text-danger' : ''} /></td>
    <td><a href={`/home/${props.mlsID}`}>{props.mlsID}</a></td>
    <td>{props.status === 'NEW' && <Icon icon={faStar} className='text-info' />} {props.address}</td>
    <td>{props.neighborhood}</td>
    <td>{props.propertyDetails.beds}  <Icon icon={faBed} /></td>
    <td>{props.propertyDetails.fullBaths} <Icon icon={faBath} /> {props.propertyDetails.halfBaths} <Icon icon={faToilet} /> </td>
    <td><PriceButton size='xs' {...props} /></td>
  </tr>)
}

export default HomesTableItem
