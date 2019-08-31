import React, { Component } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import polyline from '@mapbox/polyline'

// import HomeMarker from '../MapOverlays/HomeMarker'
import SubwayOverlay from '../MapOverlays/SubwayOverlay'

import mbtaData from '../../data/mbta.json'
import HomeMarker from '../MapOverlays/HomeMarker'

class DetailMap extends Component {
  constructor (props) {
    super(props)
    this.state = {
      viewport: {
        width: '100%',
        height: 350,
        latitude: (props && props.geocode) ? props.geocode.latitude : 37.7577,
        longitude: (props && props.geocode) ? props.geocode.longitude : -122.4376,
        zoom: 13
      }
    }
  }

  render () {
    const lines = mbtaData.data
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => this.setState({ viewport })}
        mapStyle='mapbox://styles/kobitate94/cjzyyiihy310k1cnz5x9svt8l'
      >
        <Marker key='marker' longitude={this.props.geocode.longitude} latitude={this.props.geocode.latitude}>
          <HomeMarker />
        </Marker>
        {lines.map(line => <SubwayOverlay points={polyline.decode(line.attributes.polyline)} line={line.relationships.route.data.id} />)}
      </ReactMapGL>
    )
  }
}

export default DetailMap
