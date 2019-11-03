import React from 'react'
import { Row } from 'reactstrap'

import HomesGridItem from '../HomesGridItem'

const HomesGrid = props => {
  return (<Row noGutters>
    {props.homes.map(home => <HomesGridItem key={home.mlsID} {...home} />)}
  </Row>)
}

export default HomesGrid
