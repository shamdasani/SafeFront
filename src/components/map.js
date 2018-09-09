import React, { Component } from 'react'
import Link from 'gatsby-link'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// <div className={this.state.isHovering ? "miniModal noDisplay" : "miniModal"}>


const AnyReactComponent = ({ text }) => (
  <div className="absPos">
    <div className="miniModal">
      {text}
    </div>
    <div className="mapPointer">
    </div>
  </div>
)

export class MapContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      isHovering: false,
    }
  }
  static defaultProps = {
    center: {
      lat: 39.952548,
      lng: -75.193278,
    },
    zoom: 12,
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.loadData(), 5000)
    this.loadData()
  }

  loadData() {
    fetch('http://localhost:5000')
      .then(response => response.json())
      .then(response => {
        this.setState({
          data: [...response],
        })
        console.log(this.state.data)
      })
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
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
          <Map google={this.props.google}
            bootstrapURLKeys={{
              key: 'AIzaSyBBQV4sjwVyvKN1mOHjAOmlfuLUR4CIzMg',
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {this.state.data
            .map((report, i) => {
              return (
                <Marker
                  name={'SOMA'}
                  position={{lat: report.lat, lng: report.lng}} />
              )
            })}
          </Map>
        </div>
      </div>
    )
  }
}

// <AnyReactComponent
//   lat={this.state.data.lat}
//   lng={this.state.data.lng}
//   text={this.state.data.location}
// />




export default GoogleApiWrapper({
  apiKey: ('AIzaSyBBQV4sjwVyvKN1mOHjAOmlfuLUR4CIzMg')
})(MapContainer)
