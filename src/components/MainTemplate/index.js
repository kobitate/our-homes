import React from 'react'
import { Container } from 'reactstrap'

const MainTemplate = props => {
  return (<Container>
    {props.children}
  </Container>)
}

export default MainTemplate
