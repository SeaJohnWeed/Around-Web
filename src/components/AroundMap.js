import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

class NormalAroundMap extends React.Component {

  state = {
    isOpen: false,
  }

  onToggleOpen = () => {
    this.setState(({isOpen}) => ({
        isOpen: !isOpen,
      }))
  }

  render() {
    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 34.052235, lng: -118.243683 }}
      >
        <Marker
          position={{ lat: 34.052235, lng: -118.243683 }}
          onClick={this.onToggleOpen}
        >
          {
            this.state.isOpen ? (
              <InfoWindow onCloseClick={this.onToggleOpen}>
                <div>hello</div>
              </InfoWindow>
            ) :
              null
          }
        </Marker>
      </GoogleMap>
    );
  }
}

export const AroundMap = withScriptjs(withGoogleMap(NormalAroundMap));