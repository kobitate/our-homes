import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

import MainTemplate from '../../components/MainTemplate'
import { getHome } from '../../utils/API'

import JSONView from '../../utils/JSONView'
import DetailGallery from '../../components/DetailGallery'
import DetailCard from '../../components/DetailCard'
import DetailMap from '../../components/DetailMap'
// import RoomDiagram from '../../components/RoomDiagram'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      home: {}
    }
  }

  componentWillMount () {
    const { match: { params } } = this.props

    getHome(params.mlsID).then(res => {
      this.setState({ home: res.data })
    }).catch(console.error)
  }

  render () {
    return (<MainTemplate>
      <Row noGutters>
        <Col xs={12} md={6} xl={4}>
          <DetailGallery {...this.state.home} />
        </Col>
        <Col xs={12} md={6} xl={8}>
          <DetailCard {...this.state.home} />
          {this.state.home.geocode && <DetailMap {...this.state.home} />}
          {/* <Row>
            <Col xs={12} md={6}>
              <RoomDiagram {...this.state.home} />
            </Col>
          </Row> */}
        </Col>
      </Row>
      <Row>
        <Col>
          <JSONView data={this.state.home} />
        </Col>
      </Row>
    </MainTemplate>)
  }
}
