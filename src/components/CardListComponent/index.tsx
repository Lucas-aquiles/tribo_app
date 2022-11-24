import React from 'react';
import {FlatList, View} from 'react-native';

import CardListStyles from './styles.sass';
import {Props as PropsAlert} from '../AlertCardItem';
import AlertCardItem from '../AlertCardItem';

interface Props {
  data: Array<PropsAlert>;
  size: string;
}

const CardListComponent = ({data, size}: Props) => {
  const alertCardComponent = ({item}: {item: PropsAlert}) => (
    <AlertCardItem
      type={item.type}
      imageRoute={item.imageRoute}
      title={item.title}
      state={item.state}
      distanceKm={item.distanceKm}
      views={item.views}
      comments={item.comments}
      uploadedMin={item.uploadedMin}
      cardSize={size}
    />
  );
  return (
    <View style={CardListStyles.container}>
      <FlatList data={data} renderItem={alertCardComponent} horizontal={true} />
    </View>
  );
};

export default CardListComponent;
