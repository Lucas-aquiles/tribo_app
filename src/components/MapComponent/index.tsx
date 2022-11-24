import React, {useEffect} from 'react';

import styles from './styles.sass';
import MapboxGL from '@rnmapbox/maps';
import PinComponent, {PinProps} from '../PinComponent';
import {requestLocationPermissions} from './requestPermissions';
import {MAP_API_TOKEN as token} from '@env';

MapboxGL.setAccessToken(token);

const MapComponent = ({pinData}: {pinData: PinProps[]}) => {
  useEffect(() => {
    requestLocationPermissions();
  }, []);

  const initialCoordinates = [-103.725, 19.2433];
  return (
    <MapboxGL.MapView
      zoomEnabled={true}
      style={styles.mapContainer}
      styleURL="mapbox://styles/tonyhdez-pi/cl968ugbl000214o36y5fhbr8"
      logoEnabled={false}>
      <MapboxGL.UserLocation visible={true} animated={true} />
      <MapboxGL.Camera
        zoomLevel={13}
        centerCoordinate={initialCoordinates}
        animationMode={'flyTo'}
        animationDuration={2500}
      />

      {pinData
        ? pinData.map(({coordinates, pinId, tagName}) => (
            <PinComponent
              coordinates={coordinates}
              tagName={tagName}
              pinId={pinId}
              key={pinId}
            />
          ))
        : null}
    </MapboxGL.MapView>
  );
};

export default MapComponent;
