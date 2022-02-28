import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {HiLocationMarker} from 'react-icons/hi';
import "./map.scss"

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
      <div className='map' style={{ height: '68vh', width: '100vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:Google_Maps_Key}}
          defaultCenter={this.props.center}
          defaultZoom={16}
        >
          <div className="location">
            <HiLocationMarker className='location-icon'/>
            <h1>
              Art Zoom
            </h1>
          </div>
        </GoogleMapReact>
      </div>
    );
  }
}
