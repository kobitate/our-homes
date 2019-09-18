import React, { Component } from 'react'
import ReactMapGL, { Marker, GeolocateControl } from 'react-map-gl'
import WebMercatorViewport from 'viewport-mercator-project'
import polyline from '@mapbox/polyline'

import HomeMarker from '../MapOverlays/HomeMarker'
import SubwayOverlay from '../MapOverlays/SubwayOverlay'

import mbtaData from '../../data/mbta.json'
import { isValidGeocode } from '../../utils/'

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

  locationViewportChange (viewport, homes) {
    if (homes.length === 1) {
      const userLoc = [viewport.longitude, viewport.latitude]
      const houseLoc = [homes[0].geocode.longitude, homes[0].geocode.latitude]
      const mapViewport = new WebMercatorViewport(this.state.viewport)
      const { longitude, latitude, zoom } = mapViewport.fitBounds([userLoc, houseLoc], {
        padding: 40
      })
      this.setState({
        viewport: {
          ...this.state.viewport,
          longitude,
          latitude,
          zoom,
          transitionDuration: 1000
        }
      })
    }
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
          isValidGeocode(home.geocode) && <Marker
            key={`marker-${home.mlsID}`}
            longitude={home.geocode.longitude}
            latitude={home.geocode.latitude}>
            <HomeMarker onClick={
              this.props.homeClickHandler
                ? () => this.props.homeClickHandler(home)
                : () => {}} />
          </Marker>)}
        <GeolocateControl
          style={{
            position: 'absolute',
            margin: '.5em'
          }}
          positionOptions={{ enableHighAccuracy: true }}
          fitBoundsOptions={{ maxZoom: 1 }}
          trackUserLocation
          onViewportChange={viewport => this.locationViewportChange(viewport, this.props.homes)}
        />
      </ReactMapGL>
    )
  }
}

export default MapView
