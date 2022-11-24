import {View} from 'react-native';
import React from 'react';

import {PointAnnotation} from '@rnmapbox/maps';
import {MapPinIcon} from 'react-native-heroicons/solid';

export interface PinProps {
  pinId: number;
  tagName: string;
  coordinates: Array<number>;
}

const PinComponent = ({pinId, tagName, coordinates}: PinProps) => {
  // Depending of the tagName will change colors.
  let color;
  switch (tagName) {
    case 'seguridad':
      color = '#FE016B';
      break;
    case 'comunidad':
      color = '#85C32A';
      break;
    default:
      color = '#000';
  }

  return (
    <View>
      <PointAnnotation key={pinId} id={tagName} coordinate={coordinates}>
        <View>
          <MapPinIcon size={27} fill={color} />
        </View>
      </PointAnnotation>
    </View>
  );
};

export default PinComponent;
