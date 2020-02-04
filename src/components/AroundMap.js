import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

class NormalAroundMap extends React.Component {
  render() {
    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 122, lng: 37}}
      >
        <Marker position={{ lat: 122, lng: 37}} />
      </GoogleMap>
    );
  }
}

export const AroundMap = withScriptjs(withGoogleMap(NormalAroundMap));