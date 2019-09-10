import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Row, Col } from 'reactstrap'

import MainTemplate from '../../components/MainTemplate'
import { getHomes } from '../../utils/API'

import MapView from '../../components/MapView'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      homes: [],
      clickedHome: null
    }
  }

  componentWillMount () {
    getHomes().then(res => {
      this.setState({ homes: res.data })
    }).catch(console.error)
  }

  render () {
    return (<MainTemplate>
      {this.state.clickedHome && <Redirect to={`/home/${this.state.clickedHome.mlsID}`} />}
      <Row>
        <Col>
          <MapView
            showMBTA
            width={'100%'}
            height={'calc(100vh - 70px)'}
            homes={this.state.homes}
            homeClickHandler={clickedHome => this.setState({ clickedHome })} />
        </Col>
      </Row>
    </MainTemplate>)
  }
}
