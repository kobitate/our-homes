import React, { Component } from 'react'
import MapView from '../MapView'

class DetailMap extends Component {
  constructor (props) {
    super(props)
    this.state = {
      latitude: (props && props.geocode) ? props.geocode.latitude : 42.31920892775025,
      longitude: (props && props.geocode) ? props.geocode.longitude : -71.0709401537991
    }
  }

  render () {
    return (
      this.props.geocode && <MapView
        showMBTA
        longitude={this.state.longitude}
        latitude={this.state.latitude}
        homes={[
          { ...this.props }
        ]}
        height={350}
        zoom={13} />
    )
  }
}

export default DetailMap
