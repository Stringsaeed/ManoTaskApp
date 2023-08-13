import React from 'react';
import {StatusBar} from 'react-native';
import {MainStackParamsList, Route} from 'routes';
import {DiscoveryScreen, ProductScreen} from 'screens';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import ManoText from 'components/ManoText';

const {Screen, Navigator} = createNativeStackNavigator<MainStackParamsList>();

function defaultScreenListeners() {
  return {
    focus() {
      StatusBar.setBarStyle('dark-content');
    },
  };
}

function defaultScreenOptions() {
  return {
    headerBackTitleVisible: false,
    headerTransparent: true,
    headerBackButtonMenuEnabled: false,
    headerShadowVisible: false,
    headerLargeTitleShadowVisible: false,
    headerTintColor: '#e71233',
    headerTitle({children}) {
      return (
        <ManoText weight="500" size={18}>
          {children}
        </ManoText>
      );
    },
  } as NativeStackNavigationOptions;
}

export default function MainStack() {
  return (
    <Navigator
      screenListeners={defaultScreenListeners}
      screenOptions={defaultScreenOptions}>
      <Screen
        name={Route.Discovery}
        component={DiscoveryScreen}
        options={{headerBlurEffect: 'light'}}
      />
      <Screen
        name={Route.Product}
        component={ProductScreen}
        options={{headerTitle: ''}}
      />
    </Navigator>
  );
}
