import {View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import TobBarComponent from '../../components/TobBarComponent';
import styles from './styles.sass';
import {CardListComponent, MapComponent, TagList} from '../../components';
import type {RootState} from '../../redux/store';
import {tagData, pinData} from '../../components/consts';

const HomeScreen = () => {
  const data = useSelector((state: RootState) => state.event.data);

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TobBarComponent />
      </View>
      <View style={styles.cardList}>
        <TagList tagData={tagData} />
        <CardListComponent data={data} size={'small'} />
      </View>
      <MapComponent pinData={pinData} />
    </View>
  );
};

export default HomeScreen;
