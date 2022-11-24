import React from 'react';
import styles from './styles.sass';
import {
  Text,
  View,
  Pressable,
  ScrollView,
} from 'react-native';

import {
  ChevronLeftIcon,
  ShieldExclamationIcon,
  HomeIcon,
  FireIcon,
  BoltIcon,
  XMarkIcon,
  HeartIcon,
  FaceSmileIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  SunIcon,
  CheckIcon,
  BugAntIcon,
} from 'react-native-heroicons/solid';

const titles_outer = [
  [
    [0, 'Asalto', 'Robo a casa'],
    [1, 'Incendio', 'Violencia'],
    [2, 'Accidente', 'Emergencia'],
  ],
  [
    [0, 'Ayuda', 'Reunion'],
    [1, 'Servicio', 'Recreación'],
    [2, 'Votación', 'Mascotas'],
  ],
];

const PublishScreen = ({navigation}) => {
  return (
    <View style={styles.PublishScreenBody}>
      <View style={styles.PublishScreenHeader}>
        <ChevronLeftIcon color={'black'} style={styles.BackButton} />
        <Text style={styles.Title}>Publica un evento</Text>
      </View>
      <View>
        <Text style={styles.Subtitle}>Seleciona una categoría</Text>
        <ScrollView style={styles.Categories}>
          <Text style={[styles.CategoriesTitle, styles.ColorRed]}>
            Seguridad
          </Text>
          {titles_outer[0].map(function (titles_inner) {
            return (
              <View style={styles.CategoryRow} key={titles_inner[0]}>
                <Category title={titles_inner[1]}  navigation={navigation}/>
                <Category title={titles_inner[2]} navigation={navigation} />
              </View>
            );
          })}
          <Text style={[styles.CategoriesTitle, styles.ColorGreen]}>
            Comunidad
          </Text>
          {titles_outer[1].map(function (titles_inner) {
            return (
              <View style={styles.CategoryRow} key={titles_inner[0]}>
                <Category title={titles_inner[1]} navigation={navigation} />
                <Category title={titles_inner[2]}  navigation={navigation}/>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const Category = ({title, navigation}) => {
  // let title = props.title;
  let icon = getIconFromName(title);
  return (
    <Pressable
    onPress={() => navigation.navigate('PublishPhotoScreen')}
      style={styles.Category}>
      <View style={styles.CategoryIcon}>{icon}</View>
      <Text style={styles.CategoryTitle}>{title}</Text>
    </Pressable>
  );
};

const getIconFromName = iconName => {
  let color = 'white';
  switch (iconName) {
    case titles_outer[0][0][1]:
      return <ShieldExclamationIcon color={color} />;
    case titles_outer[0][0][2]:
      return <HomeIcon color={color} />;
    case titles_outer[0][1][1]:
      return <FireIcon color={color} />;
    case titles_outer[0][1][2]:
      return <BoltIcon color={color} />;
    case titles_outer[0][2][1]:
      return <XMarkIcon color={color} />;
    case titles_outer[0][2][2]:
      return <HeartIcon color={color} />;
    case titles_outer[1][0][1]:
      return <FaceSmileIcon color={color} />;
    case titles_outer[1][0][2]:
      return <UserGroupIcon color={color} />;
    case titles_outer[1][1][1]:
      return <WrenchScrewdriverIcon color={color} />;
    case titles_outer[1][1][2]:
      return <SunIcon color={color} />;
    case titles_outer[1][2][1]:
      return <CheckIcon color={color} />;
    case titles_outer[1][2][2]:
      return <BugAntIcon color={color} />;
  }
  return null;
};

export default PublishScreen;
