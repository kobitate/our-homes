import React, { Component } from 'react'
import Filters from '../../utils/Filters'

import { Row, Col } from 'reactstrap'

import MainTemplate from '../../components/MainTemplate'
import HomesTable from '../../components/HomesTable'
import HomesGrid from '../../components/HomesGrid'
import HomesFilter from '../../components/HomesFilter'

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      homes: [],
      mode: props.match.params.viewMode || 'list',
      availableFilters: [],
      activeFilters: {}
    }
  }

  componentWillMount () {
    Filters.get().then(([homes, availableFilters]) => {
      this.setState({ homes, availableFilters })
    }).catch(console.error)
  }

  componentDidUpdate (prevProps) {
    if (prevProps.match.params.viewMode !== this.props.match.params.viewMode) {
      this.setState({ mode: this.props.match.params.viewMode })
    }
  }

  renderHomes () {
    const { mode, homes, activeFilters } = this.state
    switch (mode) {
      case 'list':
        return (<HomesTable homes={Filters.filter(homes, activeFilters)} />)
      case 'grid':
        return (<HomesGrid homes={Filters.filter(homes, activeFilters)} />)
      default:
        return (<React.Fragment />)
    }
  }

  render () {
    return (<MainTemplate>
      <Row>
        <Col>
          <HomesFilter
            {...this.state}
            onChange={(field, details) => Filters.onFilterChange(field, details, this)} />
          {this.renderHomes()}
        </Col>
      </Row>
    </MainTemplate>)
  }
}
