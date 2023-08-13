import React from 'react';
import {theme} from 'themes';
import {NavigationContainer} from '@react-navigation/native';

import MainStack from './MainStack';

export default function Navigation() {
  return (
    <NavigationContainer theme={theme.navigation}>
      <MainStack />
    </NavigationContainer>
  );
}
