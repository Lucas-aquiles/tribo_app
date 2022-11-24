import React from 'react';
import {
  PlusIcon,
  HomeIcon,
  UserGroupIcon,
  Square3Stack3DIcon,
  BellIcon,
} from 'react-native-heroicons/outline';

import {IconType} from './index';

const colorIcon = 'white';
const sizeIcon = 25;
export const icons: IconType = {
  plus: <PlusIcon color={colorIcon} size={sizeIcon} />,
  home: <HomeIcon color={colorIcon} size={sizeIcon} />,
  userGroup: <UserGroupIcon color={colorIcon} size={sizeIcon} />,
  stack: <Square3Stack3DIcon color={colorIcon} size={sizeIcon} />,
  bell: <BellIcon color={colorIcon} size={sizeIcon} />,
};
