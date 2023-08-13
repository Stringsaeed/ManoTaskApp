import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

import MainStack from './MainStack';

const theme: typeof DefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

export default function Navigation() {
  return (
    <NavigationContainer theme={theme}>
      <MainStack />
    </NavigationContainer>
  );
}
