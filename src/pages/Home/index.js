import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

import MainTemplate from '../../components/MainTemplate'
import HomesTable from '../../components/HomesTable'
import HomesGrid from '../../components/HomesGrid'
import { getHomes } from '../../utils/API'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      homes: [],
      mode: 'TABLE'
    }
  }

  componentWillMount () {
    getHomes().then(res => {
      this.setState({ homes: res.data })
    }).catch(console.error)
  }

  toggleMode = (checked) => {
    this.setState({ mode: checked ? 'TABLE' : 'GRID' })
  }

  renderHomes () {
    switch (this.state.mode) {
      case 'TABLE':
        return (<HomesTable homes={this.state.homes} />)
      case 'GRID':
        return (<HomesGrid homes={this.state.homes} />)
      default:
        return (<React.Fragment />)
    }
  }

  render () {
    return (<MainTemplate modeToggleHandler={this.toggleMode}>
      <Row>
        <Col>
          {this.renderHomes()}
        </Col>
      </Row>
    </MainTemplate>)
  }
}
