import React from 'react'

import {
  faBed,
  faHatChef,
  faBath,
  faToilet,
  faUtensils,
  faQuestionCircle,
  faTvRetro
} from '@fortawesome/pro-solid-svg-icons'

import { RoomIcon } from './styled'

const Bedroom = () => <RoomIcon icon={faBed} />
const Kitchen = () => <RoomIcon icon={faHatChef} />
const FullBath = () => <RoomIcon icon={faBath} />
const HalfBath = () => <RoomIcon icon={faToilet} />
const DiningRoom = () => <RoomIcon icon={faUtensils} />
const LivingRoom = () => <RoomIcon icon={faTvRetro} />
const Other = () => <RoomIcon icon={faQuestionCircle} />

const RoomDiagram = props => {
  if (!props.propertyFeatures) {
    return null
  }
  const floors = {}
  props.propertyFeatures.forEach(room => {
    if (!floors[room.floorLevel]) {
      floors[room.floorLevel] = []
    }
    const thisRoom = {
      details: room
    }
  })

  return (
    <Bedroom />
  )
}

export default RoomDiagram
