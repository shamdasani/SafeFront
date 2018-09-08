import React, { Component } from 'react'
import Link from 'gatsby-link'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 39.952548,
      lng: -75.193278,
    },
    zoom: 12,
  }

  render() {
    return (
      <div>
        <br />
        <div
          className="card padding"
          style={{
            height: '500px',
            width: '85%',
            margin: 'auto',
          }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyBBQV4sjwVyvKN1mOHjAOmlfuLUR4CIzMg',
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text={'Kreyser Avrora'}
            />
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}

export default SimpleMap
