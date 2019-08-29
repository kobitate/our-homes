import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import Navigation from '../Navigation'

const MainTemplate = props => {
  return (
    <React.Fragment>
      <Navigation {...props} />
      <Container fluid>
        <Row>
          <Col />
        </Row>
        {props.children}
      </Container>
    </React.Fragment>
  )
}

export default MainTemplate
