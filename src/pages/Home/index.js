import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

import MainTemplate from '../../components/MainTemplate'
import HomesTable from '../../components/HomesTable'
import HomesGrid from '../../components/HomesGrid'
import { getHomes } from '../../utils/API'

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      homes: [],
      mode: props.match.params.viewMode || 'list'
    }
  }

  componentWillMount () {
    getHomes().then(res => {
      this.setState({ homes: res.data })
    }).catch(console.error)
  }

  componentDidUpdate (prevProps) {
    if (prevProps.match.params.viewMode !== this.props.match.params.viewMode) {
      this.setState({ mode: this.props.match.params.viewMode })
    }
  }

  renderHomes () {
    switch (this.state.mode) {
      case 'list':
        return (<HomesTable homes={this.state.homes} />)
      case 'grid':
        return (<HomesGrid homes={this.state.homes} />)
      default:
        return (<React.Fragment />)
    }
  }

  render () {
    return (<MainTemplate>
      <Row>
        <Col>
          {this.renderHomes()}
        </Col>
      </Row>
    </MainTemplate>)
  }
}
