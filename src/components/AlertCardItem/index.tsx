import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import CardStyles from './styles.sass';
import {EyeIcon} from 'react-native-heroicons/outline';
import {ChatBubbleLeftIcon} from 'react-native-heroicons/solid';

export interface Props {
  type: string;
  imageRoute: string;
  title: string;
  state: string;
  distanceKm: number;
  views: number;
  comments: number;
  uploadedMin: number;
  cardSize: string;
}

const AlertCardItem = ({
  type,
  imageRoute,
  title,
  state,
  distanceKm,
  views,
  comments,
  uploadedMin,
  cardSize,
}: Props) => {
  return (
    <View style={CardStyles.container}>
      <View>
        <Text
          style={
            cardSize === 'small'
              ? CardStyles.smallImageType
              : CardStyles.bigImageType
          }>
          {' '}
          {type}
        </Text>

        <Image
          style={cardSize === 'small' ? CardStyles.image : CardStyles.bigImage}
          source={{uri: imageRoute}}
        />
      </View>

      <View
        style={
          cardSize === 'small'
            ? CardStyles.infoContainer
            : CardStyles.bigInfoContainer
        }>
        <View style={CardStyles.row}>
          <View>
            <Text style={CardStyles.alertType}>{type}</Text>
            <Text style={CardStyles.alertTitle}>{title}</Text>
          </View>

          <View>
            <View style={CardStyles.distanceContainer}>
              <Text style={CardStyles.alertDistance}>{distanceKm} Km</Text>
            </View>
            <Text style={CardStyles.state}>{state}</Text>
          </View>
        </View>

        <View style={CardStyles.rowBottom}>
          <View style={CardStyles.rowIcon}>
            <EyeIcon color="#666" size={17} />
            <Text style={CardStyles.iconText}>{views}</Text>
          </View>
          <View style={CardStyles.rowIcon}>
            <ChatBubbleLeftIcon color="#666" size={15} style={{marginTop: 2}} />
            <Text style={CardStyles.iconText}>{comments}</Text>
          </View>
          <View style={CardStyles.rowIcon}>
            <Text style={CardStyles.minText}>{uploadedMin}</Text>
            <Text style={CardStyles.iconText}>min.</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AlertCardItem;
