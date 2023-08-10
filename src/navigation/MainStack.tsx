import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Route} from '../routes';

type MainStackParamsList = {
  [Route.Discovery]: undefined;
  [Route.Product]: {id: string};
};

const {Screen, Navigator} = createNativeStackNavigator<MainStackParamsList>();

export default function MainStack() {
  return (
    <Navigator>
      <Screen name={Route.Discovery} component={View} />
      <Screen name={Route.Product} component={View} />
    </Navigator>
  );
}
