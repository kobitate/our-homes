import React, { Component } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import polyline from '@mapbox/polyline'

import HomeMarker from '../MapOverlays/HomeMarker'
import SubwayOverlay from '../MapOverlays/SubwayOverlay'

import mbtaData from '../../data/mbta.json'

class MapView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      viewport: {
        width: props.width || '100%',
        height: props.height || '100%',
        latitude: props.latitude || 42.26054116879618,
        longitude: props.longitude || -71.0355779101348,
        zoom: props.zoom || 11
      }
    }
  }

  parseLine (desc) {
    desc = desc.split(' - ')
    const line = desc[1].replace('Line', '')
    return line
  }

  render () {
    const lines = mbtaData.data
      .filter(line => line.relationships.route.data.id === 'Red' || line.relationships.route.data.id === 'Orange')
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => this.setState({ viewport })}
        mapStyle='mapbox://styles/kobitate94/cjzyyiihy310k1cnz5x9svt8l'
      >
        {this.props.children}
        {this.props.showMBTA && lines.map((line, i) =>
          <SubwayOverlay
            key={`line-${i}`}
            points={polyline.decode(line.attributes.polyline)}
            line={line.relationships.route.data.id} />)}
        {this.props.homes && this.props.homes.map(home =>
          <Marker
            key={`marker-${home.mlsID}`}
            longitude={home.geocode && home.geocode.longitude}
            latitude={home.geocode && home.geocode.latitude}>
            <HomeMarker onClick={
              this.props.homeClickHandler
                ? () => this.props.homeClickHandler(home)
                : () => {}} />
          </Marker>)}
      </ReactMapGL>
    )
  }
}

export default MapView
