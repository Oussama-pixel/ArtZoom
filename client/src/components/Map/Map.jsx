import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Google_Maps_Key = "AIzaSyDHzvRNBGx_hm7hGkRaYXMhL1Yn93_kaJg";
export class Map extends Component {
  static defaultProps = {
    center: {
      lat: 33.89483056941348,
      lng: -5.538937767095689
    },
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '68vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:Google_Maps_Key}}
          defaultCenter={this.props.center}
          defaultZoom={16}
        >
        <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text="ArtZoom"
        />

        </GoogleMapReact>
      </div>
    );
  }
}
